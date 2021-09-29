import { useContext, useEffect, useRef, useState } from "react";
import AppContext from "../../Context/app-context";
import Button from "../UI/Button/Button";
import PlayerList from "./PlayerList";
import classes from "./PlayerSelection.module.css";

const PlayerSelection = (props) => {
  /*VARIABLES*/
  const playerInputRef = useRef();
  const appCtx = useContext(AppContext);
  const [errorMessage, setErrorMessage] = useState("No Players Yet.");

  useEffect(() => {
    if (appCtx.players.length === 0) {
      setErrorMessage("No Players Yet.");
    }
  }, [appCtx.players]);

  /*HANDLERS*/
  const addedNewPlayerHandler = (event) => {
    event.preventDefault();

    const newPlayerName = playerInputRef.current.value.trim();

    if (
      newPlayerName === "" ||
      appCtx.players.some((player) => player.name === newPlayerName)
    ) {
      return;
    } else if (newPlayerName.length > 12) {
      playerInputRef.current.value = "";
      playerInputRef.current.placeholder = "Please enter a valid name.";
    } else {
      playerInputRef.current.value = "";
      playerInputRef.current.placeholder = "Name Here...";
      appCtx.addPlayer(newPlayerName);
      setErrorMessage("");
    }
  };

  const startGameHandler = (event) => {
    event.preventDefault();

    if (appCtx.players.length > 0) {
      appCtx.startGame();
    } else {
      setErrorMessage("Can't start a game with no players.");
    }
  };

  const backToMenuHandler = (event) => {
    event.preventDefault();
    appCtx.backToMainMenu();
    playerInputRef.current.placeholder = "Name Here...";
  };

  return (
    <div className={classes.PlayerSelection}>
      <form className={classes.left}>
        <input type="text" placeholder="Name Here..." ref={playerInputRef} />
        <Button title="Add Player" buttonAction={addedNewPlayerHandler} />
        <Button title="Start Game" buttonAction={startGameHandler} />
        <Button title="Back To Main Menu" buttonAction={backToMenuHandler} />
      </form>
      <div className={classes.right}>
        {appCtx.players.length > 0 ? <PlayerList /> : <h1>{errorMessage}</h1>}
      </div>
    </div>
  );
};

export default PlayerSelection;
