import React, { useState, useEffect } from 'react'

const Post = props => {
  
  const renderTopics = () => {
    return props.associated_topics.map((topic, index) => {
      return <span className="post-topic" key={index}>{topic}</span>
    })
  }

  return (
    <li className='Post'>
      <div className="recent-post-title">
        {props.title}
      </div>
      <div className="recent-post-topics">
        {renderTopics()}
      </div>
    </li>
  )
}

export default Post