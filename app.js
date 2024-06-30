const team = {
  _players: [ {
    firstName: 'Mark',
    lastName: 'Dalton',
    age: 25,
    }, {
    firstName: 'Tom',
    lastName: 'Derek',
    age: 27,
    }, {
    firstName: 'Alina',
    lastName: 'Shaw',
    age: 24,
    }
  ],
  _games: [ {
    opponent: 'Sam',
    teamPoints: 30,
    opponentPoints: 25,
    }, {
    opponent: 'Laura',
    teamPoints: 40,
    opponentPoints: 45,
    }, {
    opponent: 'Alicia',
    teamPoints: 35,
    opponentPoints: 35,
    }
  ],

  get players() {
    return this._players
  },

  get games() {
    return this._games
  },

  addPlayer(newFirstName, newLastName, newAge) {
  const player = {
    firstName: newFirstName,
    lastName: newLastName,
    age: newAge
   }

  this._players.push(player);
  },

  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    const games = {
      opponent: newOpponent, 
      teamPoints: newTeamPoints, 
      opponentPoints: newOpponentPoints
    }

    this._games.push(games);
  }
}


team.addPlayer('Jack', 'Ma', 32)
team.addGame('Alex', 50, 45)

console.log(team.players);
console.log(team.games);
