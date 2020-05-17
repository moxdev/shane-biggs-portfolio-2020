import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import PropTypes from 'prop-types'

import Img from 'gatsby-image'

const TwitterCardContent = styled.div`
  display: inline-block;
  font-family: 'Helvetica Neue', Roboto, 'Segoe UI', Calibri, sans-serif;
  font-size: 12px;
  font-weight: bold;
  line-height: 16px;
  border-color: #eee #ddd #bbb;
  border-radius: 5px;
  border-style: solid;
  border-width: 1px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
  margin: 10px 5px;
  padding: 1rem;
  max-width: 468px;

  p {
    font-size: 16px;
    font-weight: normal;
    line-height: 20px;
  }

  a {
    color: inherit;
    font-weight: normal;
    text-decoration: none;
    outline: 0 none;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }

  .tweet-header {
    display: flex;
    align-items: center;
    margin-top: 0;

    > * {
      margin-top: 0;
    }
  }

  .tweet-author-avatar {
    img {
      border-radius: 50%;
      margin-right: 0.5rem;
    }
  }

  .tweet-author {
    display: flex;
    flex-direction: column;
    line-height: 1.2;
    align-items: flex-start;

    > * {
      margin-top: 0;
    }

    .tweet-author-decoratedName {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: inherit;
      font-size: 16px;
    }

    .tweet-author-screenName {
      font-size: 14px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: #697882;
    }
  }

  .body {
    max-width: 100%;
  }
`

const TwitterCard = ({ tweet }) => {
  function Media() {
    if (!tweet.mediaUrl) return null
    const url = tweet.mediaUrl[0].media_url_https
    const parts = url.split('.')
    const base = parts.slice(0, parts.length - 1).join('.')
    const imgSrc = `${base}?name=small&format=jpg`
    return <img src={imgSrc} alt={tweet.text} className="media" />
  }
  // let mediaURL = ''

  // if (tweet.mediaUrl !== null) {
  //   mediaURL = tweet.mediaUrl[0].media_url_https
  //   console.log(mediaURL)
  // }

  return (
    <TwitterCardContent>
      <div className="tweet-header">
        <a className="tweet-author-avatar" href={tweet.profilePic}>
          <img src={tweet.profilePic} alt="" />
        </a>
        <div className="tweet-author">
          <span className="tweet-author-decoratedName">{tweet.name}</span>
          <span className="tweet-author-screenName">{`@${tweet.screenName}`}</span>
        </div>
      </div>
      <span className="body">
        <p>{tweet.text}</p>
        <Media />
      </span>
    </TwitterCardContent>
  )
}
export default TwitterCard
