import React from "react";

const AppContext = React.createContext({
  players: [],
  gameMode: "",
  menuVisible: undefined,
  playerSelectionVisible: undefined,
  gameVisible: undefined,
  selectMode: (mode) => {},
  addPlayer: (name) => {},
  removePlayer: (id) => {},
  backToMainMenu: () => {},
  startGame: () => {},
  resetScores: () => {},
  decreaseScore: (id) => {},
  increaseScore: (id) => {},
});

export default AppContext;
