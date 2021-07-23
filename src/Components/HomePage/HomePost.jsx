import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import PostForm from "./PostForm"
import Posts from "./Posts"
import bearerKey from "../../bearerKey"

const HomePost = (props) => {
  const [getPosts, setGetPosts] = useState([])

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          headers: {
            Authorization: bearerKey,
          },
        }
      )

      if (response.ok) {
        const posts = await response.json()
        setGetPosts(posts)
      } else {
        console.log("there was an error")
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <>
      <PostForm meProfile={props.meProfile} fetchPosts={fetchPosts} />
      {getPosts
        .reverse()
        .slice(0, 30)
        .map((post) => {
          return <Posts post={post} key={post._id} postId={post._id} />
        })}
    </>
  )
}

export default HomePost
