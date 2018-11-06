import React, { Component } from 'react'
import './Members.css'
import Text from '../Atoms/Text'
import Section from '../Section'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import { fetchMembers } from '../../Actions/member.js'

class Members extends Component {
    componentDidMount() {
        this.props.getMemberList()
    }

    render() {
        const { member } = this.props

        return(
            <Section title="Members" more="see all">
                <List>
                {member.length <= 0 ? 
                    <Text text="Loading..." /> 
                    :
                    member.map((row, index) => 
                        <Link to={`/member/${index + 1}`} key={index + 1}>
                            <ListItem key={row.id} dense button>
                                {/* <Avatar alt="Remy Sharp" src={logo} /> */}
                                <Avatar>{row.name.charAt(0)}</Avatar>
                                <ListItemText primary={row.name} secondary={`${row.mass} others`} />
                            </ListItem>
                        </Link>
                    )
                }   
                </List>
            </Section>   
            
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMemberList: () => dispatch(fetchMembers())
    }
}

const mapStateToProps = (state) => {
    return {
      member: state.members.userData
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Members)