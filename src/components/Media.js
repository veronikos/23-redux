import { PageHeader } from "./media-page/Page-header"
import React from "react";
import Post from "./media-page/Post";
import { useSelector } from "react-redux";

function Media() {
  const postInfo = useSelector((state) => state.posts);
  return (
    <>
    <PageHeader></PageHeader>
    {postInfo.map(post => (
      <Post
      author={{ ...post.author }}
      comment={post.comment}
      image={post.image}
    />
    ))}
    </>
  );
}

export default Media;