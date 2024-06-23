// import { Container } from 'postcss'
import React, { useContext } from 'react'
import Container from '../Container/Container'
import { ChosenContext } from '../Context/ChosenContext'
// After clicking the submit button we have to throw this one
const Disease = () => {
  //  console.log( useContext(ChosenContext)); 
   const { chosen } = useContext(ChosenContext)

  console.log(chosen);
  return (

    <Container>

  <div>
      sdv
    </div>

    </Container>
    
  )
}

export default Disease
