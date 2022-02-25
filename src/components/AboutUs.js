import React from 'react';
import { Grid, makeStyles, useTheme, useMediaQuery, Typography, Avatar,Hidden} from '@material-ui/core';
import CallToAction from './ui/CallToAction';

import history from '../assets/history.svg';
import profile from '../assets/founder.jpg';
import yearbook from '../assets/yearbook.svg';
import puppy from '../assets/puppy.svg';

const useStyles = makeStyles((theme)=> ({
    avatar:{
        height: '25em',
        width: '25em',
        [theme.breakpoints.down('sm')]:{
            height: '20em',
            width: '20em',
            maxWidth: 300,
            maxHeight: 300
        }
    },
    missionStatement:{
        fontStyle: 'italic',
        fontWeight: 300,
        fontSize: '1.5rem',
        maxWidth: '50em',
        lineHeight: 1.4
    },
    rowContainer: {
        paddingLeft: "5em",
        paddingRight: "5em",
        [theme.breakpoints.down("sm")]: {
          paddingLeft: "1.5em",
          paddingRight: "1.5em",
        },
      },
}))

const AboutUs = (props) => {

    const classes = useStyles();
    const theme = useTheme();
    const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

    return ( 
        <Grid container direction='column'>
            {/*SECTION Main About Us*/}
            <Grid item className={classes.rowContainer} align={matchesMD ? 'center' : undefined} style={{marginTop: matchesMD ? '1em' : '2em'}}>
                <Typography variant='h2'>About Us</Typography>
            </Grid>
            <Grid item container justify='center' style={{marginTop: '3em', height:'10em'}} className={classes.rowContainer}>
                <Typography variant='h4' align='center' style={{color: theme.palette.common.blue}} className={classes.missionStatement}>
                    Whether it be person to person, business to consumer, or an individual to their interests, technology is meant to bring us closer to what we care about in the best way possible. Arc Development will use that principle to provide fast, modern, inexpensive, and aesthetic software to the Midwest and beyond.
                </Typography>
            </Grid>
            {/*SECTION History*/}
            <Grid item container className={classes.rowContainer} direction={matchesMD ? 'column' : 'row'} alignItems={matchesMD ? 'center' : undefined} justify='space-around' style={{marginTop: '10em', marginBottom:'10em'}}>
                <Grid item>
                    <Grid item container direction='column' lg style={{maxWidth: '35em'}}>
                        <Grid item>
                            <Typography variant='h4' gutterBottom align={matchesMD ? 'center' : undefined}>
                                History
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='body1' paragraph style={{fontWeight: 700, fontStyle: 'italic'}} align={matchesMD ? 'center' : undefined}>
                                We’re the new kid on the block.
                            </Typography>
                            <Typography variant='body1' paragraph align={matchesMD ? 'center' : undefined}>
                                Founded in 2019, we’re ready to get our hands on the world’s business problems.
                            </Typography>
                            <Typography variant='body1' paragraph align={matchesMD ? 'center' : undefined}>
                                It all started with one question: Why aren’t all businesses using available technology?
                                There are many different answers to that question: economic barriers, social barriers, educational barriers, and sometimes institutional barriers.
                            </Typography>
                            <Typography variant='body1' paragraph align={matchesMD ? 'center' : undefined}>
                                We aim to be a powerful force in overcoming these obstacles. Recent developments in software engineering and computing power, compounded by the proliferation of smart phones, has opened up infinite worlds of possibility. Things that have always been done by hand can now be done digitally and automatically, and completely new methods of interaction are created daily. Taking full advantage of these advancements is the name of the game.
                            </Typography>
                            <Typography variant='body1' paragraph align={matchesMD ? 'center' : undefined}>
                                All this change can be a lot to keep up with, and that’s where we come in.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid item container justify='center' lg>
                        <img src={history} alt='quill pen sitting on top of book' style={{maxHeight: matchesMD ? 200 : '22em'}} />
                    </Grid>
                </Grid>
            </Grid>
            {/*SECTION Team*/}
            <Grid item container direction='column' alignItems='center' className={classes.rowContainer} style={{marginBottom:'10em'}}>
                <Grid item>
                    <Typography variant='h4' align='center' gutterBottom>
                        Team
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant='body1' align='center'>
                        Zachary Reece, Founder
                    </Typography>
                    <Typography variant='body1' align='center' paragraph>
                        I started coding when i was 9 years old.
                    </Typography>
                </Grid>
                <Grid item >
                    <Avatar alt='zachary reece photo' src={profile} className={classes.avatar}/>
                </Grid>
                {/*ITEM Pictures and text*/}
                <Grid item container justify={matchesMD ? 'center' : undefined} style={{marginTop: '5em', marginBottom: '5em'}}>
                    <Hidden mdDown>
                        <Grid item container direction='column' lg alignItems={matchesMD ? 'center' : undefined}>
                            <Grid item>
                                <img alt='yearbook' src={yearbook} style={{width: 200, height:'20em'}} />
                            </Grid>
                            <Grid item>
                                <Typography variant='caption'>
                                    a page from my Sophomore yearbook
                                </Typography>
                            </Grid>
                        </Grid>
                    </Hidden>
                    <Grid item container direction='column' lg style={{maxWidth: '45em', padding: '1.25em'}}>
                        <Grid item>
                            <Typography variant='body1' align='center'>
                                I taught myself basic coding from a library book in third grade, and ever since then my passion has solely been set on learning — learning about computers, learning mathematics and philosophy, studying design, always just learning.
                            </Typography>
                            <Typography variant='body1' align='center'>
                                Now I’m ready to apply everything I’ve learned, and to help others with the intuition I have developed.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Hidden lgUp>
                        <Grid item container direction='column' lg alignItems={matchesMD ? 'center' : undefined} style={{marginBottom: matchesMD ? '2.5em' : 0}}>
                            <Grid item>
                                <img alt='yearbook' src={yearbook} style={{width: matchesXS ? 250 : '20em', height: matchesXS ? 250 : '20em'}} />
                            </Grid>
                            <Grid item>
                                <Typography variant='caption'>
                                    a page from my Sophomore yearbook
                                </Typography>
                            </Grid>
                        </Grid>
                    </Hidden>
                    <Grid item container direction='column' lg alignItems={matchesMD ? 'center' : 'flex-end'}>
                        <Grid item>
                            <img alt='puppy' src={puppy} style={{width: matchesXS ? 250 : '20em', height: matchesXS ? 250 : '20em'}} />
                        </Grid>
                        <Grid item>
                            <Typography variant='caption'>
                                my miniature dapple dachshund, Sterling
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            {/*-----Call to Action Block-----*/}
            <Grid item>
                <CallToAction setValue={props.setValue} />
            </Grid>
        </Grid>
     );
}
 
export default AboutUs;