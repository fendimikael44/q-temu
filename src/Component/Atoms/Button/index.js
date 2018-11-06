import React from 'react'
import './Button.css'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
    //   margin: theme.spacing.unit,
    margin: 0,
    },
});

const MuiButton = ({text, size, color, classes, ...props}) => {
    return(
        <Button size={size} variant="contained" color={color} className={classes.button} {...props} >
            {text}
        </Button>
    )
}
    
MuiButton.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(MuiButton);
