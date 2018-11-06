import React, { Component } from 'react'
import './PastMeetUp.css'
// import Title from '../Atoms/Title'
import Text from '../Atoms/Text'
import Panel from '../Panel'
import Section from '../Section'
import { connect } from 'react-redux'
import { fetchEvents } from '../../Actions/event.js'


class PastMeetUp extends Component { 
    componentDidMount() {
        this.props.getEventList()
    }

    render() {
        const { event } = this.props
        const bodyStyle = {
            display: 'flex',
            flexdirection: 'row',
            justifyContent: 'space-between',
        }

        return(
            <Section title="Past Meetup" more="see all" bodyStyle={bodyStyle}>
                {event.length <= 0 ? 
                    <Text text="Loading..." /> 
                    :
                    event.map(
                        (row, index) => <Panel key={index} {...row} /> 
                    )}
            </Section>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getEventList: () => dispatch(fetchEvents())
    }
}

const mapStateToProps = (state) => {
    return {
      event: state.events.eventList
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PastMeetUp)

// export default PastMeetUp