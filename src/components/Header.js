import React from "react"
import Img from "gatsby-image"

import styled, { css, keyframes } from "styled-components"

export default ({
  header: {
    heroImage: {
      childImageSharp: { fluid },
    },
    heading1,
    heading2,
  },
}) => (
  <Header>
    <HeroImage fluid={fluid} />
    <Heading1>{heading1}</Heading1>
    <Heading2>{heading2}</Heading2>
  </Header>
)

const Header = styled.header`
  position: relative;
  height: 100vh;
  overflow: hidden;
`

const zoomOut = keyframes`
    0% {
        transform: scale(1.1);
    }


    100% {
        transform: scale(1);
    }
`

const zoomOutRule = css`
  ${zoomOut} 5s ease-out;
`

const HeroImage = styled(Img)`
  animation: ${zoomOutRule};
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: -1;

  ::after {
    content: "";
    display: block;
    width: inherit;
    background-color: rgba(0, 0, 0, 0.2);
    height: inherit;
    position: absolute;
    left: 0;
    top: 0;
  }
`
const moveInLeft = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-5rem) scale(0.1);
    }

    30% {
        opacity: 1;
        transform: translateY(-5rem) scale(1);  
    }
    100% {
        opacity: 1;
        transform: translateY(0) scale(1);  
    }

`

const moveInLeftRule = css`
  ${moveInLeft} 5s ease-out;
`

const Heading1 = styled.h1`
  backface-visibility: hidden;
  font-size: 6rem;
  font-weight: 300;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 2px;
  animation: ${moveInLeftRule};
  position: absolute;
  top: 25%;
  right: 5%;
`

const moveInBottom = keyframes`
    0% {
        opacity: 0;
        transform: translateY(5rem);
    }

    100% {
        opacity: 1;
        transform: translateY(0);  
    }

`

const moveInBottomRule = css`
  ${moveInBottom} 3s ease-out 3s;
  animation-fill-mode: backwards;
`

const Heading2 = styled.h1`
  backface-visibility: hidden;
  font-size: 6rem;
  font-weight: 300;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 2px;
  animation: ${moveInBottomRule};
  position: absolute;
  top: 40%;
  right: 5%;
`
