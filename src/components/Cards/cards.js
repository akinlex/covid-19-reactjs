import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './cards.module.css';
import CountUp from 'react-countup';
// To link classnames together
import cx from 'classnames';
import LinearProgress from '@material-ui/core/LinearProgress';


export const Cards = ( {data : {confirmed, recovered, deaths, lastUpdate }}) => {

    if(!confirmed){        
        return (
            <>
                <LinearProgress width='100%'/>
            </>
        )
    }

    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify='center'>
                <Grid item component={ Card } xs= {12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Total Infected</Typography>
                        <Typography variant='h5'>
                            <CountUp
                                start={0}
                                end={confirmed.value}
                                duration={3}
                                separator=','
                            />
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body1'>No of total confirmed cases from COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={ Card } xs= {12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Total Recovered</Typography>
                        <Typography variant='h5'>
                            <CountUp
                                start={0}
                                end={recovered.value}
                                duration={3}
                                separator=','
                            />
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body1'>No of total recovered cases from COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={ Card } xs= {12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Total Deaths</Typography>
                        <Typography variant='h5'>
                            <CountUp
                                start={0}
                                end={deaths.value}
                                duration={3}
                                separator=','
                            />
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body1'>No of total deaths from COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards