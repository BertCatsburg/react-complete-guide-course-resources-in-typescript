import {useLoaderData} from 'react-router-dom'
import React from 'react'
import {PostList} from '../../components'
import {PostInterface} from "../../types"

export const BlogPage = () => {
  const posts: PostInterface[] = useLoaderData() as PostInterface[]
  return <PostList posts={posts}/>;
}

export function loader() {
  return fetch('https://jsonplaceholder.typicode.com/posts');
}
