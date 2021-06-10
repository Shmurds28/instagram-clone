import React, {Fragment} from 'react';
import { Link, Router } from 'react-router-dom';
import './Post.css';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import {BiHeart, BiSend } from "react-icons/bi";
import { MdBookmarkBorder } from "react-icons/md";
import {FaRegComment} from "react-icons/fa";
import {FiSmile} from "react-icons/fi";
import {BsThreeDots} from "react-icons/bs";

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
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }));

function Post({username, caption, imageUrl}) {
    const classes = useStyles();
    return (
       <Fragment>
            <div className="post">
            <div className="post_header">
                
                <Avatar
                    className="post_avatar"
                    alt="shmurds"
                    src="https://images.unsplash.com/photo-1571249104671-f5537fb3e137?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                />
                <h4><a href="#">{username}</a></h4>
                <BsThreeDots size={20} className="icon options"/>

            </div>
            <img className="post_image" src={imageUrl} />
            <div className="post-icons">
                <BiHeart size={20} className="icon"/>
                <FaRegComment size={20} className="icon"/>
                <BiSend size={20} className="icon send"/>
                <MdBookmarkBorder size={20} className="icon bookmark"/>
            </div>

            <div className="post-likes">
                <Avatar
                    className="post_avatar"
                    className = {classes.small}
                    alt="shmurds"
                    src="https://images.unsplash.com/photo-1571249104671-f5537fb3e137?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                />
                <p>Liked by <strong><a href="#">user23_</a></strong> and <strong>28 others</strong></p>
            </div>

            <p className="post_text"><strong><a href="#">{username}</a></strong> {caption}</p>

            <div className="comments">
                <p className="view-comments"><a href="#">View all 21 comments</a></p>
                <p><strong><a href="#">user123</a></strong> Oh nice <BiHeart size={10} className="icon comment-like"/></p>
                <p><strong><a href="#">lexi_</a></strong>  fire imojis <BiHeart size={10} className="icon comment-like"/></p>
            </div>

            <p className="post-time">12 hours ago</p>

            <div className="add-comment">
            <div className="add-comment-text">
                    
                    <form className="add-comment-form">
                    <div>
                        <FiSmile size={20} className="icon"/>
                    </div>
                    <div>
                    <textarea className="comment-input" type="text" placeholder="Add a comment..."/>
                    </div>
                    <div className="post-comment">
                        <button className="comment-button" type="submit">
                             Post
                        </button>
                    </div>
                </form>
            </div>
        </div>
            
        </div>
      
       </Fragment>
        
    )
}

export default Post;
