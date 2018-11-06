import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { changePageTitle } from '../../Actions/app.js'

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  navLink: {
    textDecoration: 'none',
    color: '#fff',
  }
};



let ButtonAppBar = (props) => {
  const { classes, app } = props;

  const onChange = (newTitle) => {
    return props.changeTitle(app.pageTitle !== "QTemu" ? newTitle : "QTemuan")
  }
  
  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            <NavLink className={classes.navLink} to="/">{app.pageTitle}</NavLink>
          </Typography>
          <Button color="inherit" onClick={ () => onChange("QTemu") }>Change Title</Button>
          <Button color="inherit">Create Meetup</Button>
          <Button color="inherit">Explore</Button>
          <Button color="inherit">Login</Button>
          <Button color="inherit"><NavLink className={classes.navLink} to="/about">About</NavLink></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeTitle: (newTitle) => dispatch(changePageTitle(newTitle))
  }
}

const mapStateToProps = (state) => {
  return {
    app: state.app,
  }
}

const NavBar = connect(mapStateToProps, mapDispatchToProps)(ButtonAppBar)

export default withStyles(styles)(NavBar)