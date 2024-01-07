import classes from './PostItem.module.css'
import React from 'react'
import {PostInterface} from "../../types";

interface PostItemInterface {
  post: PostInterface
}

export const  PostItem = ({ post }: PostItemInterface) => {
  return (
    <article className={classes.item}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </article>
  );
}
