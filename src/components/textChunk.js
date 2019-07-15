import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  > h1 {
    color: #FFF;
    font-family: ${props => props.theme.fontFamilySerif};
    margin-bottom: 0;
  }
  > h2 {
    color: ${props => props.theme.primaryColor};
    font-family: ${props => props.theme.fontFamilySans};
    text-transform: uppercase;
    letter-spacing: 0.3em;
    font-size: 18px;
    margin-bottom: 30px;
  }
  > p {
    color: #FFF;
    font-family: ${props => props.theme.fontFamilySans};
    font-size: 12px;
    margin-bottom: 50px;

  }
`
function TextChunk(props) {
  return (
    <StyledDiv>
          <h1>{props.h1}</h1>
          <h2>{props.h2}</h2>
          <p>{props.p}</p>
    </StyledDiv>
  )
}

export default TextChunk
