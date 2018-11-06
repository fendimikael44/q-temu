import React from 'react'
import './MeetUp.css'
import MuiButton from '../Atoms/Button'
import Avatar from '../Atoms/Avatar'
import Title from '../Atoms/Title'
import Cell from '../Atoms/Cell'
// import Text from '../Atoms/Text'
import logo from '../../logo.svg'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

// class MeetUp extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             joined: false,
//         }
//     }

//     componentWillUpdate (nextProps, nextState) {
//         console.log('componentWillUpdate', nextState)
//     }

//     componentDidUpdate() {
//         console.log('componentDidUpdate')
//     }

//     join = () => {
//         this.setState(state => ({
//             joined: !state.joined
//         }))
//     }

//     render() {
//         return(
//             <div className="meetup">
//                 <div className="meetup-image">
//                     <Avatar src={logo} />
//                 </div>
//                 <div className="meetup-content">
//                     {/* <Text size={18} weight="bold" text="Hactive8 Meetup"/> */}
//                     <Title text="Hactive8 Meetup" variant="h6" color="inherit"/>
//                     <div className="content-detail">
//                         <div className="content-detail-row">
//                             <Cell>
//                                 <Text color="#000" text="Location" />
//                             </Cell>
//                             <Cell>
//                                 <Text color="#000" text="Jakarta, Indonesia" />
//                             </Cell>
//                         </div> 
//                         <div className="content-detail-row">
//                             <Cell>
//                                 <Text color="#000" text="Members" />
//                             </Cell>
//                             <Cell>
//                                 <Text color="#000" text="1,078" />
//                             </Cell>
//                         </div>  
//                         <div className="content-detail-row">
//                             <Cell>
//                                 <Text color="#000" text="Organizers" />
//                             </Cell>
//                             <Cell>
//                                 <Text color="#000" text="Adhy Wiranata" />
//                             </Cell>
//                         </div>
//                     </div>
//                     <MuiButton text={this.state.joined ? "Joined" : "Join Us"} size="small" color={this.state.joined ? "secondary" : "primary"} onClick={() => this.join()} />
//                 </div>
//             </div>
//         )
//     }
// }

// export default MeetUp

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#9E9E9E',
    },
});

const MeetUp = ({...props}) => {
    const { classes } = props;

    return(
        <div className="meetup">
            <Paper className={classes.root} elevation={4}>
                <div className="meetup-image">
                     <Avatar src={logo} />
                </div>
                <div className="meetup-content">
                    <Title text="Hactive8 Meetup" variant="h6" color="inherit"/>
                    <div className="content-detail">
                        <div className="content-detail-row">
                             <Cell>
                                 <Typography variant="body1" color="inherit">Location</Typography>
                             </Cell>
                             <Cell>
                                 <Typography variant="body1" color="inherit">Jakarta, Indonesia</Typography>
                             </Cell>
                         </div> 
                         <div className="content-detail-row">
                             <Cell>
                                 <Typography variant="body1" color="inherit">Members</Typography>
                             </Cell>
                             <Cell>
                                 <Typography variant="body1" color="inherit">1,078</Typography>
                             </Cell>
                         </div>  
                         <div className="content-detail-row">
                             <Cell>
                                 <Typography variant="body1" color="inherit">Organizers</Typography>
                             </Cell>
                             <Cell>
                                 <Typography variant="body1" color="inherit">Adhy Wiranata</Typography>
                             </Cell>
                         </div>
                    </div>
                    <MuiButton text={"Join Us"} size="small" color={"primary"} />
                </div>
            </Paper>
        </div>
    )
}

MeetUp.propTypes = {
    classes: PropTypes.object.isRequired,
}
  
export default withStyles(styles)(MeetUp)