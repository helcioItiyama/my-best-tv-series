import React, { Component } from 'react';
import Header from '../components/Header';
import Series from '../components/Series';
import { Screen } from './styles';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      series: [],
      previousVotes: [],
      previousPercentage: [],
    };

    this.interval = null;
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      fetch('http://localhost:8080/votes')
      .then(res => res.json())
      .then(json => {
          const previousVotes = this.state.series.map(({id, votes}) =>{
            return { id, votes};
          })  
            
          const previousPercentage = this.state.series.map(({id, percentage}) =>{
            return { id, percentage};
          }) 

          this.setState({
            series: json.series,
            previousVotes,
            previousPercentage
          })
      })
    }, 1000);
  }

  render() {
    const { series, previousVotes, previousPercentage } = this.state;
    
    if (series.length === 0) {
      return <span>Carregando...</span>
    }
    
    return (
      <Screen>
        <Header>Choose the best tv series for Helcio</Header>
        <Series 
          series={series} 
          previousVotes={previousVotes} 
          previousPercentage={previousPercentage}
        />
      </Screen>
    )
  }
}
