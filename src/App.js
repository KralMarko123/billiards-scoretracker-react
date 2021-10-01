import React from "react";
import classes from "./App.module.css";
import Menu from "./Components/Menu/Menu";
import PlayerSelection from "./Components/PlayerSelection/PlayerSelection";
import Scoreboard from "./Components/Scoreboard/Scoreboard";
import Card from "./Components/UI/Card/Card";
import AppContext from "./Context/app-context";

const App = () => {
  /*VARIABLES*/
  const appCtx = React.useContext(AppContext);
  const menuVisible = appCtx.menuVisible;
  const playerSelectionVisible = appCtx.playerSelectionVisible;
  const gameVisible = appCtx.gameVisible;

  return (
    <div className={classes.App}>
      {menuVisible ? <h1>Choose A Discipline.</h1> : null}
      {playerSelectionVisible ? <h1>Choose Players.</h1> : null}
      {gameVisible ? <h1>Scoreboard.</h1> : null}
      <Card>
        {menuVisible ? <Menu /> : null}
        {playerSelectionVisible ? <PlayerSelection /> : null}
        {gameVisible ? <Scoreboard /> : null}
      </Card>
    </div>
  );
};

export default App;
