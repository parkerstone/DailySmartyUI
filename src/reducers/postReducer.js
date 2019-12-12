import {
  SET_RECENT_POSTS,
  SET_RESULTS_POST
} from '../actions/types'

const INIT_STATE = {
  recentPosts: [],
  resultsPosts: []
}

export default function(state = INIT_STATE, action) {
  switch (action.type) {
    case SET_RECENT_POSTS:
      return {...state, recentPosts: action.payload}
    case SET_RESULTS_POST:
      return {...state, resultsPosts: action.payload}
      
    default:
      return state
  }
}