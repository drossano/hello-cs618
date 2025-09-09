import { useQuery } from "@tanstack/react-query"
import { CreatePost } from "./components/CreatePost.jsx"
import { PostFilter } from "./components/PostFilter.jsx"
import { PostList } from "./components/PostList.jsx"
import { PostSorting } from "./components/PostSorting.jsx"
import { getPosts } from "./api/posts.js"

const posts = [
{
title: 'Full-Stack React Projects',
contents: "Let's become full-stack developers!",
author: 'Daniel Bugl',
},
{ title: 'Hello React!' },
]

export function Blog() {


  const postsQuery = useQuery({
    queryKey: ['posts'],
    queryFn: () => getPosts(),
  })

  const posts = postsQuery.data ?? []
  return (
    <div style={{ padding: 8 }}>
      <CreatePost />
      <br />
      <hr />
      Filter by:
      <PostFilter field="author" />
      <br />
      <PostSorting fields={['createdAt','updatedAt']} />
      <hr />
      <PostList posts={posts} />
    </div>
  )
}