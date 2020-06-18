import React from 'react';
import Card from '../Card';
import Serie from '../Serie';
import FlipMove from 'react-flip-move';

export default function Series({series, previousVotes, previousPercentage}) {
  return (
    <div>
      <FlipMove>
        {series.map((serie, index) => {
          const { id } = serie;
          const previousVoteObj = previousVotes.find(item => item.id === id);
          const previousVote = !!previousVoteObj ? previousVoteObj.votes : 0;
          const previousPercentageObj = previousPercentage.find(item => item.id === id);
          const previousPct = !!previousPercentageObj ? previousPercentageObj.percentage : 0;
          return (
            <div key={id}>
              <Card>
                <Serie 
                  previousVote={previousVote} 
                  previousPct={previousPct}
                  serie={serie} 
                  position={index + 1} />
              </Card>
            </div>
            )
          })
        }
      </FlipMove>
    </div>
  )
}
