import React, { useEffect, useState } from 'react'
// import {useNavigate} from 'react-router-dom'
import '../CSS/CareerResources.css'
import ImageAvatar from '../Assets/Img/avatar.jpg'
import { FaShareAlt, FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

function PostLists() {

  const [posts,setPosts] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState(4);
  const [loading, setLoading] = useState(false);
  const [likedPosts, setLikedPosts] = useState([]);

  const [filter, setFilter] = useState('all');

  // const navigate = useNavigate();

  const [showNewPostForm, setShowNewPostForm] = useState(false);
  
  // Assume userRole is 'student', 'alumni', or 'admin'
  // const [userRole, setUserRole] = useState('alumni'); 
  // const [userRole] = useState('alumni'); 
   const [userRole, setUserRole] = useState('');

  useEffect(()=>{
    fetch('/posts-data.json')
    .then((response) => response.json())
    .then((data) => setPosts(data));
  }, []);

  const loadMorePosts = () => {
    setLoading(true);
    setTimeout(()=>{
        setVisiblePosts(visiblePosts + 4);
        setLoading(false);
    },1000);
  };

  const toggleLike = (postId) => {
    if (likedPosts.includes(postId)) {
      setLikedPosts(likedPosts.filter(id => id!== postId));
    }else{
      setLikedPosts([...likedPosts,postId]);
    }
  };

  const handleShare = (postId) => {
    const postUrl = `${window.location.href}post/${postId}`;

    navigator.clipboard.writeText(postUrl)
    .then(()=>{
      alert('Post link copied to clipboard!');
    })
    .catch((err)=>{
      console.error('Failed to copy:',err);
    });
  };

  const handleNewPost = (newPost)=> {
    setPosts([newPost, ...posts]);
    setShowNewPostForm(false);
  };

  const handleNewPostClick = () => {

    if (!userRole) {
      const role = window.prompt("Please enter your role (student, alumni, admin):").toLowerCase();
      setUserRole(role);
  
      if (role === "student") {
        alert("You are not authorized to post. Only alumni or admins can create posts.");
        return; 
      } else if (role === "alumni" || role === "admin") {
        alert(`Welcome, ${role}! You can create a post.`);
        setShowNewPostForm(true); 
      } else {
        alert("Invalid role entered. Please try again.");
        return; 
      }
    } 
    // else {
  
    //   // if (userRole === "student") {
    //   //   alert("You are not authorized to post.");
    //   // } else {
    //   //   setShowNewPostForm(true); 
    //   // }
    // }
  };
  
  // const handleClick = () => {
  //   navigate.
  // }

  // filter posts based on options
  const filteredPosts = [...posts].sort((a, b) => {
    if (filter === 'latest') {
      return new Date(b.date) - new Date(a.date); 
    }
    return posts; 
  });

  return (
    <div>   
    {/* Filter */}
    <div className='topbar'>
    <div className='sorting'>
    <label> Sort By:- </label>
      <select value={filter} onChange={(e)=>setFilter(e.target.value)}>
      <option value= "latest">Latest Posts</option>                                                                                                                      
      <option value="all">All Posts</option>
      </select>
    </div>

    <div className='newPost'>
            <button onClick={handleNewPostClick}>+ NEW POST</button>
      </div>

      {showNewPostForm && (
  <div className="new-post-form">
    <h2>Create New Post</h2>
    <form onSubmit={(e) => {
      e.preventDefault();
      const newPost = {
        id: Date.now(),
        title: e.target.title.value,
        content: e.target.content.value,
        author: `${userRole}`, 
        date: new Date().toISOString(),
      };
      handleNewPost(newPost);
    }}>
      <label>Title</label>
      <input type="text" name="title" required />
      <label>Content</label>
      <textarea name="content" required></textarea>
      <button type="submit">Post</button>
      <button type="button" onClick={() => setShowNewPostForm(false)}>Cancel</button>
    </form>
  </div>
)}



    </div>

        <section className='posts-list'>

        {posts.length === 0 ? (
          <p>No more posts</p>
        ) : (
          filteredPosts.slice(0, visiblePosts).map((post, index) => (
              <div key={index} className='post-card'>
              <div className="post-header">
                <div className="profile-section">
                  {/* <img src={post.authorAvatar || {ImageAvatar}} alt="avatar" /> */}
                  <img src={ImageAvatar} alt="avatar" />
                  <div>
                  {post.eventName && <h4>{post.eventName}</h4>}
                    {post.author && <h4>{post.author}</h4>}
                    {post.profession && <p>{post.profession}</p>}
                    <span>{new Date(post.date).toLocaleString('en-us', {
                        year:'numeric',
                        month:'short',
                        day:'numeric',
                        hour:'2-digit',
                        minute:'2-digit'
                    })}</span>
                    {post.location && <p><strong>Location:</strong> {post.location}</p>}
                  </div>
                </div>
              </div>
              <div className="post-body">

                {post.title && <h4>{post.title}</h4>}
                {post.content && <p>{post.content}</p>}
        
                {post.description && <p>{post.description}</p>}
                {post.eventLinks && post.eventLinks.length > 0 && (
                  <div>
                    <strong>Related Links:</strong>
                    <ul>
                      {post.eventLinks.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <a href={link.url} target="_blank" rel="noopener noreferrer">{link.title}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className='cb'>
                  {/* <button className="connect-button">Connect</button> */}
                  {/* <div className='cb1'>
                  <button> Share </button>
                  <button>Liked</button>
                  </div> */}
                  <div className="cb1">
                <button onClick={() => handleShare(post.id)}>
                  <FaShareAlt /> 
                </button>
                <button onClick={()=>toggleLike(post.id)}>
                  {/* <FaThumbsUp /> */}
                  {likedPosts.includes(post.id) ? <FaThumbsDown /> : <FaThumbsUp />}
                  {likedPosts.includes(post.id) ? ' Unlike' : ' Like'}

                </button>
              </div>
              </div>
            </div>
            ))
            )}
        
          </section>
          <div className='ld'>
          {loading && <div className='loader'>Loading...</div>}

          {visiblePosts < posts.length && !loading && (
            <button onClick={loadMorePosts} className='sl'> See All
            </button>
          )}
          </div>
    </div>
  );
}

export default PostLists;