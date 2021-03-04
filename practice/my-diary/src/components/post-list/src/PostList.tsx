import './post-list.css'

import React from 'react'

import PostListItem from '../../post-list-item'

const PostList = () => {
  return (
    <ul className="app-list list-group">
      <PostListItem label="Ich möchte einen Reise machen" />
      <PostListItem label="Heute haben wir einen Besucher" />
      <PostListItem label="Bei Ikea einkaufen gehen" />
    </ul>
  )
}

export default PostList
