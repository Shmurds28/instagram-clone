import React, {useState, useEffect} from 'react'
import './App.css';
import Post from './Post';
import Suggestions from './Suggestions';
import {db} from './Firebase';
import {AiFillHome} from 'react-icons/ai';
import {BiSend, BiHeart } from "react-icons/bi";
import {MdExplore} from 'react-icons/md';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
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

function App() {
  const [posts, setPosts] = useState([
    {
      caption:"Instagram clone with react...",
      imageUrl:"https://images.unsplash.com/photo-1611070674042-3957c8a7f700?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib",
      username:"shmurds"
    },
    {
      caption:"Okay, this is pretty cool!",
      imageUrl:"https://images.unsplash.com/photo-1611070674042-3957c8a7f700?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib",
      username:"shmurds"
    },
    {
      caption:"It works",
      imageUrl:"https://images.unsplash.com/photo-1611070674042-3957c8a7f700?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib",
      username:"shmurds"
    },
    {
      caption:"It works",
      imageUrl:"https://images.unsplash.com/photo-1611070674042-3957c8a7f700?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib",
      username:"shmurds"
    }
  ]);

  // useEffect(() => {
  //   db.collection('posts').onSnapshot(snapshot => {
  //     //everytime a new post is added, this code is executed and
  //   setPosts(snapshot.doc.map(doc => doc.data()));
  //   console.log("added")
  //   });
    
  // }, []);

  const classes = useStyles();

  return (
    <div className="app">
    
      <div className="app_header">
        <div>
        <img 
        className="app_headerImage"
        src="https:www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        alt="header image"
        />
        </div>

        <div className="header-icons">
          <AiFillHome size={25} className="icon"/>
          <Badge className="badge" badgeContent={3} color="error"  anchorOrigin={{vertical: 'top', horizontal: 'right',}}>
            <BiSend size={25} className="icon send"/>
          </Badge>
          <MdExplore size={25} className="icon"/>
          <BiHeart size={25} className="icon"/>
          <Avatar
              className="post_avatar icon"
              className={classes.small}
              alt="shmurds"
              src="https://images.unsplash.com/photo-1571249104671-f5537fb3e137?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
          />
        </div>
      </div>

      <div className="insta-body">
          <div className="posts">
          {/* {
            posts.map(post => {
              <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
              console.log(post);
            })
          }      */}

          {
            <Post username={posts[0].username} caption={posts[0].caption} imageUrl={posts[0].imageUrl} />
          
          }
          {
            <Post username={posts[1].username} caption={posts[1].caption} imageUrl={posts[1].imageUrl} />
          
          }
          {
            <Post username={posts[2].username} caption={posts[2].caption} imageUrl={posts[2].imageUrl} />
          
          }
          </div>

          <div className="suggestions">
             <Suggestions/>
          </div>
      </div>


      

     

    </div>
  );
}

export default App;
