import {createBrowserRouter, LoaderFunctionArgs, RouterProvider} from 'react-router-dom';
import React, {lazy, Suspense} from 'react'
import {
  HomePage,
  RootLayout
} from '../../pages'

const BlogPage =
  lazy(() => import('../../pages/BlogPage/Blog')
    .then(
      ({BlogPage}) => ({default: BlogPage})
    )
  )

const PostPage =
  lazy(() => import('../../pages/PostPage/Post')
    .then(
      ({PostPage}) => ({default: PostPage}))
  )

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    children: [
      {
        index: true,
        element: <HomePage/>,
      },
      {
        path: 'posts',
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <BlogPage/>
              </Suspense>
            ),
            loader: () => import('../../pages/BlogPage/Blog').then(module => module.loader())
          },
          {
            path: ':id',
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <PostPage/>
              </Suspense>
            ),
            loader: (allLoaderArgs: LoaderFunctionArgs<any>) => import('../../pages/PostPage/Post')
              .then(module => module.PostLoader(allLoaderArgs))
          },
        ],
      },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router}/>;
}

