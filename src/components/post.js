import React, { useState } from 'react'
import AnimateHeight from 'react-animate-height'

const Post = props => {

  const [height, setHeight] = useState(0)

  const renderTopics = () => {
    return props.associated_topics.map((topic, index) => {
      return <span className="post-topic" key={index}>{topic}</span>
    })
  }

  const getNameForPostLink = str => {
    var n = str.lastIndexOf('/');
    var link = str.substring(n + 1, str.length);

    if((n+1) == str.length) {
        link = str.slice(0, n);
        n = link.lastIndexOf('/');
        link = str.substring(n + 1, str.length - 1);
    }    

    if(link.includes('.html')) {
        link = link.substring(0, link.length - 5);
    }
    if(link.includes('.htm')) {
        link = link.substring(0, link.length - 4);
    }

    return link;
}

  const renderLinks = () => {
    return props.post_links.map((post_link, index) => {
      return index < 3 ? (
        <div className="post-link" key={index}>
          <div className="post-link-box"></div>
          <div className="post-link-link">
            <a href={post_link.link_url}>{getNameForPostLink(post_link.link_url)}</a>
          </div>
        </div>
      ) : null
    })
  }

  if (props.type === 'recent') {
    return (
      <li className='Post'>
        <div className="recent-post-topics">
          {renderTopics()}
        </div>
      </li>
    )
  } else if (props.type === 'result') {
    return (
      <li className="result-post" 
        style={{display: 'list-item'}}
        onMouseEnter={() => setHeight(70)}
        onMouseLeave={() => setHeight(0)}
      >
        <div className="recent-post-topics">
          {renderTopics()}
        </div>
        <div className="recent-post-title">
          <a href={props.url_for_post} target="_blank">{props.title}</a>
        </div>
        <AnimateHeight
          duration={500}
          height={height}
        >
          <div className="result-post-links">
            {renderLinks()}
          </div>
        </AnimateHeight>
      </li>
    )
  }

}

export default Post