import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import PostForm from "./PostForm";
import Posts from "./Posts";

const HomePost = () => {
  const [getPosts, setGetPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGY2ODcxYjM0NTViYTAwMTUyMjdkZjciLCJpYXQiOjE2MjY3NjkxODAsImV4cCI6MTYyNzk3ODc4MH0.V4nubxjI1arEROLfw4Xf_rjLxNCsDBT1P3WY5Gnh8zY",
          },
        }
      );

      if (response.ok) {
        const posts = await response.json();
        setGetPosts(posts);
      } else {
        console.log("there was an error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <PostForm />
      {getPosts.slice(0, 30).map((post) => {
        return <Posts post={post} key={post._id} postId={post._id} />;
      })}
    </>
  );
};

export default HomePost;
