import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from '@emotion/styled'

const ImageBackground = styled.div`
  background-image: url('/images/nathan-da-silva.jpg');
  background-position: top 50% center;
  background-size: cover;
  width: 100%;
  height: 50vh;
  margin-top: 0;

  /* override the default margin for sibling elements  */
  + * {
    margin-top: 0;
  }
`

const TextBox = styled('div')`
  background-image: linear-gradient(to top, #233144dd 2rem, #23314400);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  padding: 0 calc((100vw - 960px) / 2) 2rem;

  h1 {
    color: #fff;
    text-shadow: 1px 1px 3px #33333366;
    font-size: 2.25rem;
  }
  p,
  a {
    color: #fff;
    margin-top: 0;
  }
  a {
    margin-top: 0.5rem;
  }
`

const Hero = () => {
  return (
    <ImageBackground>
      <TextBox>
        <div className="wrapper">
          <h1>Look At Me!</h1>
          <p>
            Hello look at me <Link to={'/about'}>here</Link>!
          </p>
        </div>
      </TextBox>
    </ImageBackground>
  )
}

export default Hero
