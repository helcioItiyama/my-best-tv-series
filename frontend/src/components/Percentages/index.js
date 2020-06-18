import React from 'react';
import CountUp from 'react-countup';
import { Container } from './styles';

export default function Percentages({percentage, previousPct}) {
  return (
  <Container>
  {  <CountUp
      start={previousPct || 0}
      end={percentage}
      duration={0.8}
      prefix="pct: "
      suffix="%"
      decimals={2}
      decimal=","
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
