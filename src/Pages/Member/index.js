import React, { Component } from 'react'
import axios from 'axios'

export default class MemberDetail extends Component{
    constructor(props) {
        super(props)
        this.state = {
            id: props.match.params.id,
            member: {}
        }
    }

    async componentDidMount() {
        await axios
          .get(`https://swapi.co/api/people/${this.state.id}`)
          .then(response => response.data)
          .then(member => this.setState({
            member: member
          }))
      }

    render() {
        return(
            <div>{this.state.member.name}</div>
        )
    }
}