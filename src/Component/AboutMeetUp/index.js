import React, { Component } from 'react'
import './AboutMeetUp.css'
import Section from '../Section'
import Typography from '@material-ui/core/Typography';

class AboutMeetUp extends Component {
    render() {
        const bodyStyle = {
            fontWeight: 600,
            display: 'flex',
            flexDirection: 'column',
        }

        return(
            <Section title="About Meetup" bodyStyle={bodyStyle} >
                {/* <div className="about-meetup"> */}
                    <Typography variant="body1" color="inherit" paragraph>
                        Come and meet other developers interested in the JavaScrit and it's library in the Greater Jakarta area.
                    </Typography>
                    <Typography variant="body1" color="inherit">
                        Twitter: @Jakarta.JS and we use the hashtag #jakartajs
                    </Typography>
                {/* </div> */}
            </Section>           
        )
    }
}

export default AboutMeetUp