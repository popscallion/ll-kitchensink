import React, {useCallback} from 'react'
import styled from 'styled-components'
import {useDropzone} from 'react-dropzone'

const StyledDiv = styled.div`
  background: ${props => props.theme.primaryColor}
  border-radius: 1px;
  padding: 30px;
  outline: 1px solid white;
  outline-offset: -8px;
  >p{
    font-family: ${props => props.theme.fontFamily};
    font-size: 12px;
    letter-spacing: 0.2em;
    text-transform:uppercase;
  }
  transition: 0.3s;
  &:hover {
    background: ${props => props.theme.secondaryColor};
    outline: 2px dotted ${props => props.theme.secondaryColor};
    outline-offset: 8px;
  }
`
function DropZone() {
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <StyledDiv {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>drop to upload</p> :
          <p>drag files here // click to browse</p>
      }
    </StyledDiv>
  )
}
// const TestComponent = styled.button`
//   background: transparent;
//   border-radius: 3px;
//   border: 2px solid palevioletred;
//   color: palevioletred;
//   margin: 0 1em;
//   padding: 0.25em 1em;
//   &:hover {
//     background: #555;
//   }
//   `

export default DropZone
