import React, { Component } from 'react'
import './Panel.css'
import Button from '../Atoms/Button'
import Text from '../Atoms/Text'

class Panel extends Component {
    render() {
        const {title, content, went} = this.props
        return(
            <div className="panel-box">
                <div className="panel-header">
                    <Text text={title} size={15} paddingBottom={10}/>
                </div>
                <div className="panel-body">
                    <Text text={content} />
                    {/* <Text text={went} /> <Text text="went" />                     */}
                    <p>{went} <span className="went">went</span></p>
                </div>
                <Button text={"View"} size="small" color={"secondary"} />
            </div>
        )
    }
}

export default Panel