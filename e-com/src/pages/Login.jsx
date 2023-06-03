import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/1127000/pexels-photo-1127000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
        center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;

`
const Wrapper = styled.div`
    width: 30%;
    padding: 20px;
    background-color: white;
    display: flex;

    flex-direction: column;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;

`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
    
`

const Button = styled.button`
    margin-top: 15px;
    width: 100%;
    border: none;
    padding: 15px 20px ;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 20px;
    transition: all 0.3s ease;
    &:hover{
      background-color: rgb(10, 87, 87);
    }
`

const Link = styled.a`
  margin: 5px 0px;
  font-size: 15px;
  cursor: pointer;
  &:hover{
    text-decoration: underline;
  }
`
export default function Login() {
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="Username"/>
                <Input placeholder="Password"/>
            </Form>
            <Button>LOGIN</Button>
            <Link>Forgotten password?</Link>
            <Link>Create a new account</Link>
        </Wrapper>
    </Container>
  )
}
