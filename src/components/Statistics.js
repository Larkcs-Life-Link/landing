import React from 'react';
import { Typography } from '@material-ui/core';
import GridContainer from './Grid/GridContainer';
import GridItem from './Grid/GridItem';
import CountUp from 'react-countup';

const Statistics = (props) => {
    if (props.data.length > 0) {
        return (<GridContainer style={{ margin: 24, padding: 24 }}>
            {
                props.data.map((instance, index) => {
                    return (
                        <div key={index} style={{ margin: "14px auto", textAlign: "center" }}>
                            <GridItem>
                                {instance.Icon ? <img width={54} height={54} src={instance.Icon[0].url} alt="" /> : null}<br />
                                {instance.Title ? <Typography style={{ fontSize: 16 }} variant="h6">{instance.Title}</Typography> : null}<br />
                                {instance.Data ? <Typography style={{ fontSize: 18, fontWeight: 700 }} variant="h6"><CountUp delay={4} duration={2} end={instance.Data} />
                                </Typography> : null}

                            </GridItem>

                        </div>
                    );
                })
            } </GridContainer>)

    } else {
        return (<div></div>)
    }
};

export default Statistics;