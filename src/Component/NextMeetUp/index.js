import React, { Component } from 'react'
import './NextMeetUp.css'
// import Text from '../Atoms/Text'
import Section from '../Section'
import Typography from '@material-ui/core/Typography'
class NextMeetUp extends Component {
    render() {
        const bodyStyle = {
            backgroundColor: '#3F51B5',
            paddingTop: 15,
            paddingBottom: 15,
            paddingLeft: 15,
            paddingRight: 15,
            // fontWeight: 'bold',
            color: '#fff'
        }

        return(
            <Section title="Next Meetup" bodyStyle={bodyStyle}>
                <div className="next-meetup">
                    <Typography variant="subtitle1" color="inherit" gutterBottom>Awesome meetup and event</Typography>
                    <Typography variant="body1" color="inherit" paragraph>25 January 2019</Typography>
                    <Typography variant="body2" color="inherit" >Hello, JavaScript & Node.js Ninjas!</Typography>
                    <Typography variant="body2" color="inherit" >Get ready for our monthly meetup Jakarta.JS! This will be our fifth meetup of 2018!</Typography>
                    <Typography variant="body2" color="inherit" >The meetup format wikll contain some short stories and technical talks.</Typography>
                    <Typography variant="body2" color="inherit" paragraph>If you have a short announcements you'd like to share with the audience, you may do so during open mic announcements.</Typography>
                    <Typography variant="body2" color="inherit" paragraph>Remember to bring a photo ID to get through building security.</Typography>
                    <Typography variant="body2" color="inherit" >See you there!</Typography>
                    <Typography variant="body2" color="inherit" >Best, Hengki, Giovanni, Sofian. Riza, Agung The Jakarta.JS Organizers</Typography>
                    
                    {/* <Text text="Awesome meetup and event" paddingBottom={10}/>
                    <Text text="25 January 2019" color="#5f5b5bf5" paddingBottom={10}/>
                    <Text text="Hello, JavaScript & Node.js Ninjas!" />
                    <Text text="Get ready for our monthly meetup Jakarta.JS! This will be our fifth meetup of 2018!" />
                    <Text text="The meetup format wikll contain some short stories and technical talks." />
                    <Text text="If you have a short announcements you'd like to share with the audience, you may do so during open mic announcements." />
                    <Text paddingTop={15} paddingBottom={10} text="Remember to bring a photo ID to get through building security." />
                    <p>............</p>
                    <Text text="See you there!" paddingBottom={10}/>
                    <Text text="Best, Hengki, Giovanni, Sofian. Riza, Agung The Jakarta.JS Organizers"/> */}
                </div>
            </Section> 
        )
    }
}

export default NextMeetUp