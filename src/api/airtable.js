const router = require('express').Router();
var Airtable = require('airtable');
const sgMail = require('@sendgrid/mail');
// const homeAPI = process.env.homeAPI;
// const careerAPI = process.env.careerAPI;
// const homeBase = process.env.homeBase;
// const openingBase = process.env.openingBase;
// const applicationBase = process.env.applicationBase;
//sgMail.setApiKey(process.env.sgMailApi);

const homeAPI = 'keyX8tJDj5uJ8jnE2';
const careerAPI = 'keyCwv4IauNCHeKor';
const homeBase = 'appvz852AbwfjfnLt';
const openingBase = 'app8M0GZ2nBY5HUs9';
const galleryBase = 'app7wMsarA1tUHbfF';
const applicationBase = 'appCAjLMcjxpSwPgu';
const careerBase = 'app27ibjc251l39Tr';
sgMail.setApiKey('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');
var base = new Airtable({apiKey: homeAPI}).base(homeBase);
var openingsList = new Airtable({apiKey: careerAPI}).base(openingBase);
var galleryList = new Airtable({apiKey: homeAPI}).base(galleryBase);
var careerList = new Airtable({apiKey: homeAPI}).base(careerBase);
var applications = new Airtable({apiKey: careerAPI}).base(applicationBase);
let AboutData=[],offlineServices=[],onlineServices=[],privilegeCard=[],openingsData=[],FieldData=[],UrlData=[],galleryData=[],storyData=[],descriptionData=[];

router.get('/loadBase',(req,res)=>{

   base('About').select({
     maxRecords: 1,
  }).eachPage(function page(records, fetchNextPage) {
      records.forEach(function(record) {
        AboutData = AboutData.concat(record.fields)
      });
      base('offlineServices').select({
      }).eachPage(function page(records, fetchNextPage) {
          records.forEach(function(record) {
            offlineServices = offlineServices.concat(record.fields)
          });
          base('onlineServices').select({
          }).eachPage(function page(records, fetchNextPage) {
            records.forEach(function(record) {
              onlineServices = onlineServices.concat(record.fields)
            });
          }, function done(err) {
            if (err) { console.error(err); return; }
          });
          base('privilegeCard').select({
          }).eachPage(function page(records, fetchNextPage) {
            records.forEach(function(record) {
              privilegeCard = privilegeCard.concat(record.fields)
            });
            res.json({"AboutData":AboutData ,"offlineServices": offlineServices,"onlineServices": onlineServices,"privilegeCard":privilegeCard })
          }, function done(err) {
            if (err) { console.error(err); return; }
          });
      }, function done(err) {
          if (err) { console.error(err); return; }
      });
  }, function done(err) {
      if (err) { console.error(err); return; }
  });
    AboutData=[];
    offlineServices=[];
    onlineServices=[];
    privilegeCard=[];
  })

  router.get('/loadGallery',(req,res)=>{
    galleryList('Gallery').select({
      view: "Gallery"
  }).eachPage(function page(records, fetchNextPage) {
      records.forEach(function(record) {
          galleryData = galleryData.concat(record.fields)
      });
      res.json(galleryData)
  }, function done(err) {
      if (err) { console.error(err); return; }
  });
  galleryData = [];
  })

  router.get('/loadStories',(req,res)=>{
    careerList('Stories').select({
      view: "Grid view"
  }).eachPage(function page(records, fetchNextPage) {
      records.forEach(function(record) {
        storyData = storyData.concat(record.fields)
      });
      res.json(storyData)
  }, function done(err) {
      if (err) { console.error(err); return; }
  });
  storyData = [];
  })

  router.get('/loadDescription',(req,res)=>{
    careerList('JoinUs').select({
      view: "Grid view"
  }).eachPage(function page(records, fetchNextPage) {
      records.forEach(function(record) {
        descriptionData = descriptionData.concat(record.fields)
      });
      res.json(descriptionData)
  }, function done(err) {
      if (err) { console.error(err); return; }
  });
  descriptionData = [];
  })


router.get('/loadCareer',(req,res)=>{
  openingsList('Openings').select({
    view: "Grid view",
    fields: ["opening","jobType", "location","description","responsibilities","link","NB","VideoLink"]
}).eachPage(function page(records, fetchNextPage) {
    records.forEach(function(record) {
        openingsData = openingsData.concat(record.fields)
    });
    res.json(openingsData)
}, function done(err) {
    if (err) { console.error(err); return; }
});
openingsData = [];
})

router.post('/loadApplicationDetails',(req,res)=>{
  openingsList('Openings').select({
    view: "Grid view",
    filterByFormula: `{link} = '${req.body.url}'`,
    fields: ["opening","Fields","mailContent"]
}).eachPage(function page(records, fetchNextPage) {
    records.forEach(function(record) {
      FieldData = FieldData.concat(record.fields)
    });
    res.json(FieldData)
});
FieldData = [];
})

router.post('/loadFieldDetails',(req,res)=>{
  req.body.values.map((id,index)=>{
    openingsList('FieldType').select({
      filterByFormula : `RECORD_ID() = '${id}'`,
      fields: ["Order","Name","label","MultiLine","Required"]
}).eachPage(function page(records, fetchNextPage) {
    records.forEach(function(record) {
      UrlData = UrlData.concat(record.fields)
    });
    if(UrlData.length===req.body.values.length){
      UrlData = UrlData.sort(function(a, b){return a.Order-b.Order})
      res.json(UrlData)
    }
});
  })
 
UrlData = [];
})


router.post('/applyForJob',(req,res)=>{
  const data = req.body;
  applications('Applications').create([
    {
      "fields": {
        "Name":data.Name,
          "Email":data.Email,
          "PhoneNo":data.PhoneNo,
          "Resume": [
            {
              "url": data.url
            }
          ],
          "appliedFor":data.opening,
          "custom1": data.custom1,
          "custom2": data.custom2,
          "custom3": data.custom3,
          "custom4": data.custom4,
          "custom5": data.custom5,
          "custom6": data.custom6,
          "custom7": data.custom7,
          "custom8": data.custom8
      }
    }
  ], function(err, records) {
    if (err) {
      res.error(err)
      return;
    }
    const msg = {
      to: `${data.Email}`,
      from: 'hr@larkcs.com',
      subject: `Job application for ${data.opening}`,
      text: `${data.mailContent}`,
      html: `<p>Hello ${data.Name},</p><p>Thank you for taking your time to apply for ${data.opening} at Larkcs Life Link</p>${data.mailContent}<p>Thanks &amp; Regards,<br/>

      HR Manager<br/>
      
      Larkcs Life Link</p>`,
    };
    sgMail.send(msg).then((res) => {console.log(res)}, console.error);;
    res.send("success")
  });
})
module.exports = router;