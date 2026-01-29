import React from 'react'
import PostList from './PostList'

const PostGroups = ({postGroups, deleteFunc, editFunc,createPost}) => {
  return (
    <div>
      {[...postGroups].map((postListElem)=>{
        return (<PostList title={postListElem.group_title} posts={postListElem.posts} deleteFunc={deleteFunc} editFunc={editFunc} indexGroup={postListElem.group_id} createPost={createPost}></PostList>)
      })}
    </div>
  )
}

export default PostGroups
