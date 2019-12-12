import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Post from './post'

const ResultsPosts = props => {
  
  const renderPosts = () => {
    return props.posts.map((post, index) => {
      return <Post key={index} {...post} />
    })
  }

  return (
    <div className="ResultsPosts">
      <div className="results-posts-wrapper">
        <ul className="results-posts-posts">
          {renderPosts()}
        </ul>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    posts: state.posts.resultsPosts
  }
}

export default connect(mapStateToProps)(ResultsPosts)