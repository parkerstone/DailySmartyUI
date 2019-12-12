import axios from 'axios'

import {
  SET_RECENT_POSTS,
  SET_RESULTS_POST
} from './types'

export function fetchRecentPosts() {
  return function(dispatch) {
    axios.get('https://api.dailysmarty.com/posts')
      .then(res => {
        console.log(res.data.posts)
        dispatch({
          type: SET_RECENT_POSTS,
          payload: res.data.posts
        })
      })
  }
}


export function fetchPostsWithQuery(query, callback) {
  return function(dispatch) {
    axios.get('https://api.dailysmarty.com/search?q=' + query)
      .then(res => {
        console.log(res.data.posts)
        dispatch({
          type: SET_RESULTS_POST,
          payload: res.data.posts
        })
        callback ? callback() : null
      })
  }
}