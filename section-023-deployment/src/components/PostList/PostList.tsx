import { Link } from 'react-router-dom';
import React from 'react'
import classes from './PostList.module.css';
import {PostInterface} from "../../types";

interface PostListInterface {
  posts: PostInterface[]
}
export const  PostList = ({ posts }: PostListInterface) => {
  return (
    <ul className={classes.list}>
      {posts.map((post: PostInterface) => (
        <li key={post.id}>
          <Link to={post.id.toString()}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}

