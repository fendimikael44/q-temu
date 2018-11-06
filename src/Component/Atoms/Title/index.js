import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        width: '100%',
        maxWidth: 500,
    },
    text: {
        fontWeight: 'bold',
    }
};

const Title = ({ text, color, variant, ...props }) => {
    const { classes } = props;
    
    return(
        <Typography variant={variant} color={color} className={classes.text}>
            {text}
        </Typography>
    )
}

Title.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(Title);

