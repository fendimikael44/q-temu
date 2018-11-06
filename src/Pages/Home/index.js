import React, { Component } from 'react';
import Meetup from '../../Component/MeetUp';
import NextMeetup from '../../Component/NextMeetUp';
import AboutMeetUp from '../../Component/AboutMeetUp';
import Members from '../../Component/Members';
import PastMeetUp from '../../Component/PastMeetUp';
import './Home.css';

class Home extends Component {
  render() {
    // const { memberData, pastMeetUpData } = this.props
    // const { pastMeetUpData } = this.props
    
    return (
        <div className="container">
          <Meetup />
          <NextMeetup />
          <AboutMeetUp />
          <Members />
          <PastMeetUp />
        </div>
    );
  }
}

export default Home;
