import React from 'react';
import CountUp from 'react-countup';
import { Container } from './styles';

export default function Votes ({value, previous}) {
  return (
  <Container>
  {  <CountUp
      start={previous || 0}
      end={value}
      duration={0.6}
      prefix="votes: "
      separator="."
    >
      {({ countUpRef }) => (
        <div>
          <span ref={countUpRef} />
        </div>
      )}
    </CountUp>}
  </Container>
  );
}
