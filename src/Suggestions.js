import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import './App.css';
import { makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    xsmall: {
        width: theme.spacing(2),
        height: theme.spacing(2),
    },
    small: {
      width: theme.spacing(4),
      height: theme.spacing(4),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }));

export const Suggestions = () => {
    const classes = useStyles();
    return (
        <div>
             <div className="profile">
                <div className="avatar">
                <Avatar
                    className="profile_avatar"
                    className={classes.large}
                    alt="shmurds"
                    src="https://images.unsplash.com/photo-1571249104671-f5537fb3e137?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                />
                </div>
                <div className="user">
                    <h4><a href="#">shmurds_</a></h4>
                    <p>Simamkele Ngcasane</p>
                </div>
                <div className="switch-button"><h4>Switch</h4></div>    

            </div>

            <div className="suggested-header">
                <h4>Suggested For You</h4>
                <p><a href="#">See All</a></p>
            </div>

            <div className="suggested-accounts">
                <div className="account">
                    <div className="avatar">
                        <Avatar
                            className="profile_avatar"
                            className={classes.small}
                            alt="shmurds"
                            src="https://images.unsplash.com/photo-1509587961360-de7aff9a662a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                        />
                    </div>
                    <div className="user">
                        <h4><a href="#">shmurds_</a></h4>
                        <p>New To Instagram</p>
                    </div>
                    <div className="switch-button"><h4>Follow</h4></div> 
                </div>

                <div className="account">
                    <div className="avatar">
                        <Avatar
                            className="profile_avatar"
                            className={classes.small}
                            alt="shmurds"
                            src="https://images.unsplash.com/photo-1571249104671-f5537fb3e137?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                        />
                    </div>
                    <div className="user">
                        <h4><a href="#">shmurds_</a></h4>
                        <p>Followed by john_smith + 3 others</p>
                    </div>
                    <div className="switch-button"><h4>Follow</h4></div> 
                </div>

                <div className="account">
                    <div className="avatar">
                        <Avatar
                            className="profile_avatar"
                            className={classes.small}
                            alt="shmurds"
                            src="https://images.unsplash.com/photo-1549820610-ec7475b33969?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGF2YXRhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                        />
                    </div>
                    <div className="user">
                        <h4><a href="#">shmurds_</a></h4>
                        <p>Followed by john_smith + 3 others</p>
                    </div>
                    <div className="switch-button"><h4>Follow</h4></div> 
                </div>

                <div className="account">
                    <div className="avatar">
                        <Avatar
                            className="profile_avatar"
                            className={classes.small}
                            alt="shmurds"
                            src="https://images.unsplash.com/photo-1571249104671-f5537fb3e137?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                        />
                    </div>
                    <div className="user">
                        <h4><a href="#">shmurds_</a></h4>
                        <p>Follows you</p>
                    </div>
                    <div className="switch-button"><h4>Follow</h4></div> 
                </div>

                <div className="account">
                    <div className="avatar">
                        <Avatar
                            className="profile_avatar"
                            className={classes.small}
                            alt="shmurds"
                            src="https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGF2YXRhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                        />
                    </div>
                    <div className="user">
                        <h4><a href="#">shmurds_</a></h4>
                        <p>Followed by john_smith + 3 others</p>
                    </div>
                    <div className="switch-button"><h4>Follow</h4></div> 
                </div>
                
            

            </div>
        </div>         

            
    )
}

export default Suggestions;
