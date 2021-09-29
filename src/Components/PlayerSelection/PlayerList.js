import { useContext } from "react";
import AppContext from "../../Context/app-context";
import Player from "./Player";
import classes from "./PlayerList.module.css";

const PlayerList = (props) => {
  /*HANDLERS*/
  const removePlayerHandler = (id) => {
    appCtx.removePlayer(id);
  };

  /*VARIABLES*/
  const appCtx = useContext(AppContext);

  const players = appCtx.players.map((player) => (
    <Player
      key={player.id}
      id={player.id}
      name={player.name}
      onRemove={removePlayerHandler.bind(null, player.id)}
    />
  ));

  return <ul className={classes.PlayerList}>{players}</ul>;
};

export default PlayerList;
