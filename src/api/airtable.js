const router = require('express').Router();
var Airtable = require('airtable');
const sgMail = require('@sendgrid/mail');

require('dotenv').config();

// const homeAPI = process.env.homeAPI;
// const careerAPI = process.env.careerAPI;

// const homeBase = process.env.homeBase;
// const aboutBase = process.env.aboutBase;
// const teamBase = process.env.teamBase;
// const servicesBase = process.env.servicesBase;
// const openingBase = process.env.openingBase;
// const galleryBase = process.env.galleryBase;
// const applicationBase = process.env.applicationBase;
// const careerBase = process.env.careerBase;
// const subscriptionBase = process.env.subscriptionBase;

// const sendGridApi = process.env.sendGridApi;

const homeAPI = 'keyX8tJDj5uJ8jnE2';
const careerAPI = 'keyzqU1HQoV2mUbPl';
const airTableBookingApiKey = process.env.airTableBookingApiKey;

const configBase = 'app0feo8lyM5xAcMH';
const homeBase = 'appSxnWsj5GUElptt';
const aboutBase = 'appr90qZW6oMB3bm1';
const teamBase = 'appSu2zFtt89LQ9G3';
const servicesBase = 'apppQaYmRYbFPvCB7';
const openingBase = 'app8M0GZ2nBY5HUs9';
const galleryBase = 'app7wMsarA1tUHbfF';
const applicationBase = 'appCAjLMcjxpSwPgu';   
const careerBase = 'app27ibjc251l39Tr';
const subscriptionBase = 'appR7l5019NaU8wRU';
const termBase = 'appNY7VCbpn1STZlH';
const supportBase = 'app7rS7md1t16whb7';
const airTableBookingBaseId = process.env.airTableBookingBaseId

console.log('airTableBookingApiKey ',airTableBookingApiKey);
console.log('airTableBookingBaseId ',airTableBookingBaseId);

var configList = new Airtable({ apiKey: homeAPI }).base(configBase)
var homeList = new Airtable({ apiKey: homeAPI }).base(homeBase)
var aboutList = new Airtable({ apiKey: homeAPI }).base(aboutBase)
var teamList = new Airtable({ apiKey: homeAPI }).base(teamBase)
var servicesList = new Airtable({ apiKey: homeAPI }).base(servicesBase)
var openingsList = new Airtable({ apiKey: careerAPI }).base(openingBase);
var galleryList = new Airtable({ apiKey: homeAPI }).base(galleryBase);
var careerList = new Airtable({ apiKey: homeAPI }).base(careerBase);
var termsList = new Airtable({ apiKey: homeAPI }).base(termBase);
var applications = new Airtable({ apiKey: careerAPI }).base(applicationBase);
var Subscriptions = new Airtable({ apiKey: homeAPI }).base(subscriptionBase);
var supportList = new Airtable({ apiKey: homeAPI }).base(supportBase)
var airTableBookings = new Airtable({apiKey : airTableBookingApiKey}).base(airTableBookingBaseId)

const sendGridApi = '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'
sgMail.setApiKey(sendGridApi);

router.get('/loadConfig', (req, res) => {
  configList('Hide').select({
    view: "Grid view"
  }).eachPage(function page(records, fetchNextPage) {
    records.forEach(function (record) {
      ConfigData = ConfigData.concat(record.fields)
    });
    res.json(ConfigData)
  }, function done(err) {
    if (err) { console.error(err); return; }
  });
  ConfigData = [];
})

router.get('/loadHeaders', (req, res) => {
  homeList('Headers').select({
    view: "Grid view"
  }).eachPage(function page(records, fetchNextPage) {
    records.forEach(function (record) {
      HeadersData = HeadersData.concat(record.fields)
    });
    res.json(HeadersData)
  }, function done(err) {
    if (err) { console.error(err); return; }
  });
  HeadersData = [];
})

router.get('/loadAbout', (req, res) => {
  homeList('About').select({
    view: "Grid view"
  }).eachPage(function page(records, fetchNextPage) {
    records.forEach(function (record) {
      AboutData = AboutData.concat(record.fields)
    });
    res.json(AboutData)
  }, function done(err) {
    if (err) { console.error(err); return; }
  });
  AboutData = [];
})

router.get('/loadAbout', (req, res) => {
  homeList('About').select({
    view: "Grid view",
    fields: ["BookingNo"]
  }).eachPage(function page(records, fetchNextPage) {
    records.forEach(function (record) {
      PhnData = PhnData.concat(record.fields)
    });
    res.json(PhnData)
  }, function done(err) {
    if (err) { console.error(err); return; }
  });
  PhnData = [];
})

router.get('/loadServices', (req, res) => {
  homeList('Services').select({
    view: "Grid view"
  }).eachPage(function page(records, fetchNextPage) {
    records.forEach(function (record) {
      ServicesData = ServicesData.concat(record.fields)
    });
    res.json(ServicesData)
  }, function done(err) {
    if (err) { console.error(err); return; }
  });
  ServicesData = [];
})
router.get('/loadServicesDetail', (req, res) => {
  servicesList('Services').select({
    view: "Grid view"
  }).eachPage(function page(records, fetchNextPage) {
    records.forEach(function (record) {
      ServicesDetail = ServicesDetail.concat(record.fields)
    });
    res.json(ServicesDetail)
  }, function done(err) {
    if (err) { console.error(err); return; }
  });
  ServicesDetail = [];
})
router.get('/loadStatistics', (req, res) => {
  homeList('Statistics').select({
    view: "Grid view"
  }).eachPage(function page(records, fetchNextPage) {
    records.forEach(function (record) {
      StatisticsData = StatisticsData.concat(record.fields)
    });
    res.json(StatisticsData)
  }, function done(err) {
    if (err) { console.error(err); return; }
  });
  StatisticsData = [];
})

router.get('/loadTestimonials', (req, res) => {
  homeList('Testimonials').select({
    view: "Grid view"
  }).eachPage(function page(records, fetchNextPage) {
    records.forEach(function (record) {
      TestimonialsData = TestimonialsData.concat(record.fields)
    });
    res.json(TestimonialsData)
  }, function done(err) {
    if (err) { console.error(err); return; }
  });
  TestimonialsData = [];
})

router.get('/loadMediaLinks', (req, res) => {
  homeList('MediaLinks').select({
    view: "Grid view"
  }).eachPage(function page(records, fetchNextPage) {
    records.forEach(function (record) {
      MediaData = MediaData.concat(record.fields)
    });
    res.json(MediaData)
  }, function done(err) {
    if (err) { console.error(err); return; }
  });
  MediaData = [];
})

router.get('/loadBlog', (req, res) => {
  homeList('Blog').select({
    view: "Grid view"
  }).eachPage(function page(records, fetchNextPage) {
    records.forEach(function (record) {
      BlogData = BlogData.concat(record.fields)
    });
    res.json(BlogData)
  }, function done(err) {
    if (err) { console.error(err); return; }
  });
  BlogData = [];
})

router.get('/loadFooter', (req, res) => {
  homeList('Footer').select({
    view: "Grid view"
  }).eachPage(function page(records, fetchNextPage) {
    records.forEach(function (record) {
      FooterData = FooterData.concat(record.fields)
    });
    res.json(FooterData)
  }, function done(err) {
    if (err) { console.error(err); return; }
  });
  FooterData = [];
})


router.get('/loadImages', (req, res) => {
  galleryList('Gallery').select({
    view: "Gallery",
    filterByFormula: "({ShowInHome} = 1)",
    maxRecords: 3
  }).eachPage(function page(records, fetchNextPage) {
    records.forEach(function (record) {
      imageData = imageData.concat(record.fields)
    });
    res.json(imageData)
  }, function done(err) {
    if (err) { console.error(err); return; }
  });
  imageData = [];
})
router.get('/loadForm', (req, res) => {
  homeList('Contact').select({
    view: "Grid view"
  }).eachPage(function page(records, fetchNextPage) {
    records.forEach(function (record) {
      ContactData = ContactData.concat(record.fields)
    });
    res.json(ContactData)
  }, function done(err) {
    if (err) { console.error(err); return; }
  });
  ContactData = [];
})
router.get('/loadSupport', (req, res) => {
  supportList('Support').select({
    view: "Grid view"
  }).eachPage(function page(records, fetchNextPage) {
    records.forEach(function (record) {
      SupportData = SupportData.concat(record.fields)
    });
    res.json(SupportData)
  }, function done(err) {
    if (err) { console.error(err); return; }
  });
  SupportData = [];
})
router.get('/loadGallery', (req, res) => {
  galleryList('Gallery').select({
    view: "Gallery"
  }).eachPage(function page(records, fetchNextPage) {
    records.forEach(function (record) {
      galleryData = galleryData.concat(record.fields)
    });
    res.json(galleryData)
  }, function done(err) {
    if (err) { console.error(err); return; }
  });
  galleryData = [];
})

router.get('/loadStories', (req, res) => {
  careerList('Stories').select({
    view: "Grid view"
  }).eachPage(function page(records, fetchNextPage) {
    records.forEach(function (record) {
      storyData = storyData.concat(record.fields)
    });
    res.json(storyData)
  }, function done(err) {
    if (err) { console.error(err); return; }
  });
  storyData = [];
})

router.get('/loadDescription', (req, res) => {
  careerList('JoinUs').select({
    view: "Grid view"
  }).eachPage(function page(records, fetchNextPage) {
    records.forEach(function (record) {
      descriptionData = descriptionData.concat(record.fields)
    });
    res.json(descriptionData)
  }, function done(err) {
    if (err) { console.error(err); return; }
  });
  descriptionData = [];
})

router.get('/loadAboutDetail', (req, res) => {
  aboutList('About').select({
    view: "Grid view",
  }).eachPage(function page(records, fetchNextPage) {
    records.forEach(function (record) {
      AboutDetail = AboutDetail.concat(record.fields)
    });
    res.json(AboutDetail)
  }, function done(err) {
    if (err) { console.error(err); return; }
  });
  AboutDetail = [];
})

router.get('/loadTeam', (req, res) => {
  teamList('Team').select({
    view: "Grid view",
  }).eachPage(function page(records, fetchNextPage) {
    records.forEach(function (record) {
      TeamData = TeamData.concat(record.fields)
    });
    res.json(TeamData)
  }, function done(err) {
    if (err) { console.error(err); return; }
  });
  TeamData = [];
})


router.get('/loadCareer', (req, res) => {
  openingsList('Openings').select({
    view: "Grid view",
    fields: ["opening", "jobType", "location", "description", "responsibilities", "link", "NB", "VideoLink"]
  }).eachPage(function page(records, fetchNextPage) {
    records.forEach(function (record) {
      openingsData = openingsData.concat(record.fields)
    });
    res.json(openingsData)
  }, function done(err) {
    if (err) { console.error(err); return; }
  });
  openingsData = [];
})

router.post('/loadApplicationDetails', (req, res) => {
  openingsList('Openings').select({
    view: "Grid view",
    filterByFormula: `{link} = '${req.body.url}'`,
    fields: ["opening", "Fields", "mailContent"]
  }).eachPage(function page(records, fetchNextPage) {
    records.forEach(function (record) {
      FieldData = FieldData.concat(record.fields)
    });
    res.json(FieldData)
  });
  FieldData = [];
})

router.get('/loadTerms', (req, res) => {
  termsList('Terms').select({
    view: "Grid view",
  }).eachPage(function page(records, fetchNextPage) {
    records.forEach(function (record) {
      TermData = TermData.concat(record.fields)
    });
    res.json(TermData)
  });
  TermData = [];
})

router.post('/loadFieldDetails', (req, res) => {
  req.body.values.map((id, index) => {
    openingsList('FieldType').select({
      filterByFormula: `RECORD_ID() = '${id}'`,
      fields: ["Order", "Name", "label", "MultiLine", "Required"]
    }).eachPage(function page(records, fetchNextPage) {
      records.forEach(function (record) {
        UrlData = UrlData.concat(record.fields)
      });
      if (UrlData.length === req.body.values.length) {
        UrlData = UrlData.sort(function (a, b) { return a.Order - b.Order })
        res.json(UrlData)
      }
    });
  })

  UrlData = [];
})


router.post('/applyForJob', (req, res) => {
  const data = req.body;
  applications('Applications').create([
    {
      "fields": {
        "Name": data.Name,
        "Email": data.Email,
        "PhoneNo": data.PhoneNo,
        "Resume": [
          {
            "url": data.url
          }
        ],
        "appliedFor": data.opening,
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
  ], function (err, records) {
    if (err) {
      res.error(err)
      return;
    }
    const msg = {
      to: `${data.Email}`,
      from: 'careers@larkcs.com',
      subject: `Job application for ${data.opening}`,
      text: `${data.mailContent}`,
      html: `<p>Hello ${data.Name},</p><p>Thank you for taking your time to apply for ${data.opening} at Larkcs Life Link</p>${data.mailContent}<p>Thanks &amp; Regards,<br/>
      HR Manager<br/>
      
      Larkcs Life Link</p>`,
    };
    sgMail.send(msg).then((res) => { console.log(res) }, console.error);;
    res.send("success")
  });
})

router.post('/subscribe', (req, res) => {
  const data = req.body;
  Subscriptions('Subscriptions').create([
    {
      "fields": {
        "Email": data.Email,
      }
    }
  ], function (err, records) {
    if (err) {
      res.error(err)
      return;
    }
    res.send("success")
  });
})

router.post('/feedback', (req, res) => {
  const data = req.body;
  Subscriptions('Feedback').create([
    {
      "fields": {
        "Email": data.Email,
        "Name": data.Name,
        "Feedback": data.Feedback,
      }
    }
  ], function (err, records) {
    if (err) {
      res.error(err)
      return;
    }
    res.send("success")
  });
})

router.post('/supportTickets', (req, res) => {
	
	console.log('Request Body : ', req.body);
	
	const data = req.body;
	supportList('Responses').create([
	{
		"fields": {
		
			"Email": data.Email,
			"Name": data.Name,
			"Issue": data.Issue,
		}
		
    }], function (err, records) {
		
		if (err) {	
		
			res.error(err)
			return;
		}
		
		res.send("success")
  });
})

{/*router.get('/loadBookings', (req, res) => {
	
	BookingsData = [];
	
	airTableBookings('Address Book').select({
		
		view: "Grid view"
	
	}).eachPage(function page(records, fetchNextPage) {
		
		records.forEach(function (record) {
			
			BookingsData = BookingsData.concat(record.fields)
		});
    
		res.json(BookingsData)
	
	}, function done(err) {
		
		if (err) { 
			
			console.error(err); 
			return; 
		}
	});
})*/}

router.post('/createBooking', (req, res) => {
	
	console.log('Request Body : ', req.body);
	
	const data = req.body;
	
	airTableBookings('Bookings').create([		
	{
		"fields": {
			
			"applicantIsEmployee" : data.applicantIsEmployee,
			"applicantEmployeeId" : data.applicantEmployeeId,
			"applicantName" : data.applicantName,
			"applicantAddress" : data.applicantAddress,
			"applicantPhone" : data.applicantPhone,
			"applicantEmailId" : data.applicantEmailId,
			"patientEmployeeId" : data.patientEmployeeId,
			"patientName" : data.patientName,
			"patientHospital" : data.patientHospital,
			"patientAge" : data.patientAge,
			"patientGender" : data.patientGender,
			"patientEmailId": data.patientEmailId,
			"service": data.service,
		}
		
    }], function (err, records) {
		
		if (err) {	
		
			console.log('Req. Error : ', err);
			res.send(err)
			return;
		}
		
		res.send("success")
  });
})

module.exports = router;