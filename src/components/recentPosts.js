import React, { useState, useEffect } from 'react'

const RecentPosts = props => {
  

  return (
    <div className='RecentPosts'>
      <div className="recent-posts-heading">
        Recent Posts
      </div>
      <ul className="recent-posts-posts">
        <li>Recent Post 0</li>
        <li>Recent Post 1</li>
        <li>Recent Post 2</li>
      </ul>
    </div>
  )
}

export default RecentPosts