import React, { useState, useEffect } from "react";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
}

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    getAllPosts();
  }, []);

  const getAllPosts = async () => {
    const resp = await axios.get("https://jsonplaceholder.typicode.com/posts");
    if (resp?.data) {
      setPosts(resp?.data);
    }
  };
  
  return (
    <>
      Posts
      {posts?.map((post) => (
        <>
          <h3>{post.id}</h3>
          <h3>{post.title}</h3>
          <h3>{post.body}</h3>
        </>
      ))}
    </>
  );
};

export default Posts;
