import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import * as actions from '../actions'

import Post from './post'

const RecentPosts = props => {
  useEffect(() => props.fetchRecentPosts(), [])

  const renderPosts = () => {
    return props.recentPosts.map((post, index) => {
      return index < 3 ? <Post key={index} type='recent' {...post} /> : null
    })
  }

  return (
    <div className='RecentPosts'>
      <div className="recent-posts-heading">
        Recent Posts
      </div>
      <ul className="recent-posts-posts">
        {renderPosts()}
      </ul>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    recentPosts: state.posts.recentPosts
  }
}

export default connect(mapStateToProps, actions)(RecentPosts)