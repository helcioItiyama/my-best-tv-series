import React from 'react';
import { Photo } from './styles';

export default function Image({imageSource, description}) {
  return (
    <Photo>
      <img src={imageSource} alt={description} title={description}/>
    </Photo>
  )
}
