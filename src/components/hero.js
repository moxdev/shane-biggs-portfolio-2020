import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from '@emotion/styled'
import BackgroundImage from 'gatsby-background-image'

const ImageBackground = styled(BackgroundImage)`
  background-image: url('/images/nathan-da-silva.jpg');
  background-position: top 50% center;
  background-size: cover;
  width: 100%;
  height: 50vh;
  margin-top: 0;
`

const TextBox = styled('div')`
  background-image: linear-gradient(to top, #233144dd 2rem, #23314400);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  padding: 0 calc((100vw - 960px) / 2);
  margin-top: 0;

  h1 {
    color: #fff;
    text-shadow: 2px 2px 3px #33333366;
    font-size: 2.25rem;
  }
  p {
    color: #fff;
    margin-top: 0;
  }
  a {
    color: #fff;
    margin-top: 0.5rem;
  }
`

const Hero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "nathan-da-silva.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <ImageBackground Tag="section" fluid={image.sharp.fluid} fadeIn="soft">
      <TextBox>
        <h1>Look At Me!</h1>
        <p>
          Hello look at me <Link to={'/about'}>here</Link>!
        </p>
      </TextBox>
    </ImageBackground>
  )
}

export default Hero
