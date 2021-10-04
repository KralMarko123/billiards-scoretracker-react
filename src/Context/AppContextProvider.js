import { useReducer } from "react";
import AppContext from "./app-context";

/*DEFAULT APP STATE*/
const defaulAppState = {
  players: [],
  gameMode: "",
  menuVisible: true,
  playerSelectionVisible: false,
  gameVisible: false,
};

/*REDUCER LOGIC*/
const appReducer = (state, action) => {
  /*SELECTED MODE LOGIC*/
  if (action.type === "MODE_SELECTED") {
    return {
      ...state,
      gameMode: action.selectedMode,
      menuVisible: false,
      playerSelectionVisible: true,
    };
  }

  /*ADDED PLAYER LOGIC*/
  if (action.type === "ADDED_PLAYER") {
    let newPlayerName = action.playerName;
    let updatedPlayers;

    let newPlayer = {
      id: newPlayerName + Math.random.toString(),
      name: newPlayerName,
      score: 0,
    };

    updatedPlayers = state.players.concat(newPlayer);
    return { ...state, players: updatedPlayers };
  }

  /*REMOVED PLAYER LOGIC*/
  if (action.type === "REMOVED_PLAYER") {
    let idToRemove = action.idToRemove;
    let updatedPlayers;

    updatedPlayers = state.players.filter((player) => player.id !== idToRemove);
    return { ...state, players: updatedPlayers };
  }

  /*BACK TO MAIN MENU LOGIC*/
  if (action.type === "BACK_TO_MAIN_MENU") {
    return {
      players: [],
      gameMode: "",
      menuVisible: true,
      playerSelectionVisible: false,
      gameVisible: false,
    };
  }

  /*STARTED GAME LOGIC*/
  if (action.type === "STARTED_GAME") {
    return {
      ...state,
      menuVisible: false,
      playerSelectionVisible: false,
      gameVisible: true,
    };
  }

  /*RESET SCORES LOGIC*/
  if (action.type === "RESET_SCORES") {
    state.players.forEach((player) => {
      player.score = 0;
    });

    return {
      ...state,
    };
  }

  /*DECREASE SCORE LOGIC*/
  if (action.type === "DECREASED_SCORE") {
    let idToDecrease = action.idToDecrease;

    let playerIndex = state.players.findIndex(
      (player) => player.id === idToDecrease
    );
    let playerToUpdate = state.players[playerIndex];
    let updatedPlayers = state.players;

    if (playerToUpdate.score > 0) {
      playerToUpdate.score--;
    }
    updatedPlayers[playerIndex] = playerToUpdate;

    return {
      ...state,
      players: updatedPlayers,
    };
  }

  /*INCREASE SCORE LOGIC*/
  if (action.type === "INCREASED_SCORE") {
    let idToIncrease = action.idToIncrease;
    let playerIndex = state.players.findIndex(
      (player) => player.id === idToIncrease
    );

    let playerToUpdate = state.players[playerIndex];
    playerToUpdate.score++;
    let updatedPlayers = state.players;
    updatedPlayers[playerIndex] = playerToUpdate;

    return {
      ...state,
      players: updatedPlayers,
    };
  }

  return defaulAppState;
};

const AppContextProvider = (props) => {
  /*HANDLERS*/
  const selectedModeHandler = (mode) => {
    dispatchAction({
      type: "MODE_SELECTED",
      selectedMode: mode,
    });
  };

  const addedPlayerHandler = (name) => {
    dispatchAction({
      type: "ADDED_PLAYER",
      playerName: name,
    });
  };

  const removedPlayerHandler = (id) => {
    dispatchAction({
      type: "REMOVED_PLAYER",
      idToRemove: id,
    });
  };

  const backToMainMenuHandler = () => {
    dispatchAction({
      type: "BACK_TO_MAIN_MENU",
    });
  };

  const startGameHandler = () => {
    dispatchAction({
      type: "STARTED_GAME",
    });
  };

  const resetScoresHandler = () => {
    dispatchAction({
      type: "RESET_SCORES",
    });
  };

  const decreaseScoreHandler = (id) => {
    dispatchAction({
      type: "DECREASED_SCORE",
      idToDecrease: id,
    });
  };

  const increaseScoreHandler = (id) => {
    dispatchAction({
      type: "INCREASED_SCORE",
      idToIncrease: id,
    });
  };

  /*VARIABLES*/
  const [appState, dispatchAction] = useReducer(appReducer, defaulAppState);

  const appContext = {
    players: appState.players,
    gameMode: appState.gameMode,
    menuVisible: appState.menuVisible,
    playerSelectionVisible: appState.playerSelectionVisible,
    gameVisible: appState.gameVisible,
    selectMode: selectedModeHandler,
    addPlayer: addedPlayerHandler,
    removePlayer: removedPlayerHandler,
    backToMainMenu: backToMainMenuHandler,
    startGame: startGameHandler,
    resetScores: resetScoresHandler,
    decreaseScore: decreaseScoreHandler,
    increaseScore: increaseScoreHandler,
  };

  return (
    <AppContext.Provider value={appContext}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
