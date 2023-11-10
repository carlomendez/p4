"use client";

import {useState, useEffect} from 'react';

import NewsCard from './NewsCard';

const PostCardList = ({data, handleTagClick}) => {
  return (
    <div className='mt-4 prompt_layout'>
      {data.map((post) => (
        <NewsCard 
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  )
}

const NewsFeed = () => {
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
      <PostCardList 
        data={posts}
        handleTagClick={() => {}}
      />
    </section>
  )
}

export default NewsFeed