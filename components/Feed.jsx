"use client";

import {useState, useEffect} from 'react';

import PostCard from './PostCard';

const PostCardList = ({data, handleTagClick}) => {
  return (
    <div className='mt-16 prompt_layout'>
      {data.map((post) => (
        <PostCard 
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  )
}

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [searchText, setSearchText] = useState('');
  const handleSearchChange = (e) => {

  }

  const fetchPosts = async () => {
    const response = await fetch("api/post");
    const data = await response.json();
    setPosts(data);
  }
  useEffect(() => {

    fetchPosts();
  }, []);
  console.log(JSON.stringify(posts));

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input type="text" placeholder='Search for a tag or user' value={searchText} onChange={handleSearchChange} required className='search_input peer'/>
      </form>
      <PostCardList 
        data={posts}
        handleTagClick={() => {}}
      />
    </section>
  )
}

export default Feed