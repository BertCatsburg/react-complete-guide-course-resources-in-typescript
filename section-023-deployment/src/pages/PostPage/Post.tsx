import {LoaderFunctionArgs, useLoaderData} from 'react-router-dom'
import React from 'react'
import {PostItem} from '../../components'
import {PostInterface} from "../../types";

export const PostPage = () => {
  const post: PostInterface = useLoaderData() as PostInterface

  return <PostItem post={post} />;
}

export function PostLoader({ params }: LoaderFunctionArgs) {
  const postId = params.id;
  return fetch('https://jsonplaceholder.typicode.com/posts/' + postId);
}
