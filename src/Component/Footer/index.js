import React from 'react'
import Typography from '@material-ui/core/Typography'
import './Footer.css'
import { connect } from 'react-redux'

const Footer = (props) => {
    const { app } = props
    return(
        <div className="footer">
            <Typography variant="h6" color="primary">{app.pageTitle} - {app.copyRightYear}</Typography>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      app: state.app,
    }
}

export default connect(mapStateToProps)(Footer)