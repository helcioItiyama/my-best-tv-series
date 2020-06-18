import React from 'react';
import { Container } from './styles';

const stars = {
  empty: '☆',
  full: '★'
}

const maxStars = 5;

export default function Popularity({value}) {
  const fullStars = stars.full.repeat(value);
  const emptyStars = stars.empty.repeat(maxStars - value);
  return (
    <Container style={{color: "#f39c12"}}>
      <span>rate: </span>
      {fullStars}
      {emptyStars}
    </Container>
  )
}
