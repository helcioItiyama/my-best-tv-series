/**
 * Precisamos do express para montar a API
 */
const express = require('express');

/**
 * Precisamos de cors para não termos problemas
 * de acesso à API
 */
const cors = require('cors');

/**
 * Instanciando o app com express()
 */
const app = express();

/**
 * Indicando que app utilizará o módulo de cors
 */
app.use(cors());

/**
 * Estado da aplicação
 */
let series = [];

/**
 * Intervals que serão executados
 * a cada x intervalo de tempo
 */
let intervalVotes = null;
let intervalPopularity = null;

/**
 * Valores constantes importantes
 */
const CONSTS = {
  MAX_POPULARITY: 5,
  MIN_POPULARITY: 1,
  MIN_VOTES: 1,
  MAX_VOTES: 1000,
  INTERVAL_VOTES: 100,
  INTERVAL_POPULARITY: 1000,
};

/**
 * Função para gerar números aleatórios
 */
function generateRandomNumber(from = CONSTS.MIN_VOTES, to = CONSTS.MAX_VOTES) {
  return Math.max(from, Math.ceil(Math.random() * to));
}

/**
 * Função para montar estado
 * inicial dos candidatos
 */
function fillseries() {
  series = [
    {
      id: 1,
      name: 'Mr.Robot',
      votes: 0,
      previousVotes: 0,
      percentage: 0,
      popularity: CONSTS.MIN_POPULARITY,
    },

    {
      id: 2,
      name: 'Silicon Valley',
      votes: 0,
      previousVotes: 0,
      percentage: 0,
      popularity: CONSTS.MIN_POPULARITY,
    },

    {
      id: 3,
      name: 'Black Mirror',
      votes: 0,
      previousVotes: 0,
      percentage: 0,
      popularity: CONSTS.MIN_POPULARITY,
    },
  ];
}

/**
 * Função para simular a votação
 */
function simulateVoting() {
  intervalVotes = setInterval(() => {
    series.forEach((serie) => {
      const minVotes = CONSTS.MIN_VOTES;
      const maxVotes = CONSTS.MAX_VOTES * serie.popularity;

      const votes = generateRandomNumber(minVotes, maxVotes);

      serie.previousVotes = serie.votes;
      serie.votes += votes;
    });
  }, CONSTS.INTERVAL_VOTES);
}

/**
 * Função para simular a popularidade
 */
function simulatePopularity() {
  intervalPopularity = setInterval(() => {
    series.forEach((serie) => {
      serie.popularity = generateRandomNumber(
        CONSTS.MIN_POPULARITY,
        CONSTS.MAX_POPULARITY
      );
    });

    console.log(series);
  }, CONSTS.INTERVAL_POPULARITY);
}

/**
 * Rota padrão (/)
 */
app.get('/', (_, res) => {
  res.json({
    message:
      'Bem-vindo ao módulo de votação!' +
      'Acesse /votes para visualizar a votação em tempo real.',
  });
});

/**
 * Rota /votes
 */
app.get('/votes', (_, res) => {
  /**
   * Clonando objeto de votação e
   * realizando a ordenação a partir
   * dos votos
   */
  const sortedseries = Object.assign([], series);
  sortedseries.sort((a, b) => b.votes - a.votes);

  /**
   * Obtendo o total de votos do momento
   */
  const totalVotes = sortedseries.reduce((accumulator, current) => {
    return accumulator + current.votes;
  }, 0);

  /**
   * Cálculo de percentual de votos
   */
  sortedseries.forEach((serie) => {
    serie.percentage = (serie.votes / totalVotes) * 100;
  });

  /**
   * Mostrando dados no console
   *
   */
  console.log({ series: sortedseries, totalVotes });

  /**
   * Retornando os dados
   */
  res.json({ series: sortedseries, totalVotes });
});

/**
 * Iniciando o servidor
 * na porta 8080
 */
app.listen(8080);

/**
 * Execução inicial
 */
fillseries();
simulateVoting();
simulatePopularity();
