const team = {
  _players: [
    {firstName: 'Rules', lastName: 'Robert', age: 32},
    {firstName: 'Wormy', lastName: 'William', age: 2},
    {firstName: 'Hackerman', lastName: 'Hanson', age: 28},
  ],

  _games: [
    {opponent: 'Jared', teamPoints: 3, opponentPoints: 2,},
    {opponent: 'Barry', teamPoints: 6, opponentPoints: 5,},
    {opponent: 'Sandy', teamPoints: 1, opponentPoints: 4,},
  ],

  get players() {
    return this._players;
  },

  get games() {
    return this._games;
  },

  addPlayer(newFirstName, newLastName, newAge){
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    };
    this.players.push(player);
  },

  addGame(newOpponent, newTeamPoints, newOpponentPoints){
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    };
    this.games.push(game);
  }
};




team.addPlayer('Bugs', 'Bunny', 76);
console.log(team.players);

team.addGame('Titans', 100, 98);
console.log(team.games);

