import React from 'react';
import Position from '../Position';
import Image from '../Image'
import Info from '../Info';
import Names from '../Names';
import Votes from '../Votes';
import Percentages from '../Percentages';
import Popularity from '../Popularity';

import {Container} from './styles';

export default function Serie({serie, position, previousVote, previousPct}) {
  const { id, name, votes, percentage, popularity } = serie;
  const imageSource = `${id}.jpeg`
  return (
    <Container>
      <Position>{position}</Position>
      <Image imageSource={imageSource} description={name}/>
      <Info>
        <Names name={name}/>
        <Votes value={votes} previous={previousVote}/>
        <Percentages percentage={percentage} previousPct={previousPct}/>
        <Popularity value={popularity}/>
      </Info>
    </Container>
  )
}
