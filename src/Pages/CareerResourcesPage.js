import React from 'react'
// import React, { useEffect, useState } from 'react'
import '../CSS/CareerResources.css'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import PostLists from '../Components/PostLists'

// import Footer from '../Components/Footer'
// import Search  from '../Components/Search'

function CareerResourcesPage() {

  // const [posts,setPosts] = useState([]);
  // const [userRole] = useState('student'); 
  // const [showPostModal, setShowPostModal] = useState(false);  
  // const [newPost, setNewPost] = useState({ title: '', content: '' }); 
  // const [sortType, setSortType] = useState('top');

  // useEffect(()=>{
  //   fetch('/posts-data.json')
  //   .then(response => response.json())
  //   .then(data => setPosts(data));
  // }, []);

  // const handlePostSubmit = () => {
  //   const updatedPosts = [...posts, {...newPost, author: 'You', date: new Date() }]
  //   setPosts(updatedPosts);
  //   setNewPost({title:'', content:''});
  //   setShowPostModal(false);
  // }

  return (
    <div>
      <Header />
      {/* <Search /> */}
      <section>
        {/* <section>
          <div className='sort-container'>
          <label>Sort By:</label>
          <select value={sortType} onChange={(e) => setSortType(e.target.value)}>
            <option value="top">Top</option>
            <option value="latest">Latest</option>
          </select>
          </div>

        {userRole === 'alumni' || userRole === 'university' ? (
          <button className="post-button" onClick={() => setShowPostModal(true)}>+ POST</button>
        ) : null}

        {showPostModal && (
          <div className="modal">
            <div className="modal-content">
              <h3>Create a Post</h3>
              <input 
                type="text" 
                placeholder="Title" 
                value={newPost.title} 
                onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
              />
              <textarea 
                placeholder="Write your content here..." 
                value={newPost.content} 
                onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
              ></textarea>
              <button onClick={handlePostSubmit}>Submit</button>
              <button onClick={() => setShowPostModal(false)}>Close</button>
            </div>
          </div>
        )}

        </section> */}
        <PostLists />
      </section>
      <Footer />
    </div>
  )
}

export default CareerResourcesPage