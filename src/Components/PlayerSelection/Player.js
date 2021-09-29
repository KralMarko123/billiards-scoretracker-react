import Button from "../UI/Button/Button";
import classes from "./Player.module.css";

const Player = (props) => {
  return (
    <li className={classes.Player}>
      <p>{props.name}</p>
      <Button title={"X"} buttonAction={props.onRemove} />
    </li>
  );
};

export default Player;
