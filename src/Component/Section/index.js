import React from 'react'
import Title from '../Atoms/Title'
import More from '../Atoms/More'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import './Section.css'

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        display: 'flex',
        flexDirection: 'row',
        // width: '100%',
        backgroundColor: '#E0E0E0',
        margin: '10px 35px',
    },
});

const Section = ({title, more, bodyStyle, children, ...props}) => {
    const { classes } = props
    return(
        <div className="section">
            <div className="section-title-div">
                <Title text={title} variant="h5" color="inherit"/>
                <More text={more} />
            </div>
            {/* <div 
                style={bodyStyle}
                className="section-body">
                {children}
            </div> */}
            <Paper
                elevation={4}
                style={bodyStyle}
                className={classes.root}>
                    {children}
            </Paper>
        </div>
    )
}

Section.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Section)