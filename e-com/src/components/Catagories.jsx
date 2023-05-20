import React from 'react'
import { categories } from '../data'
import styled from 'styled-components'
import CatagoryItem from './CatagoryItem'

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;

`

export default function Catagories() {
  return (
    <Container>
        {categories.map(items=>(
            <CatagoryItem item={items} key={items.id}/>
        ))}
    </Container>
  )
}
