import classes from "./Button.module.css";

const Button = (props) => {
  /*VARIABLES*/
  const title = props.title;
  const isScoreButton = props.scoreButton;
  const isScoreboardMenuButton =
    props.scoreboardMenuButton === "1" || props.scoreboardMenuButton === "2";

  /*HANDLERS*/
  return (
    <button
      className={`${classes.Button} ${
        isScoreButton && classes["score-button"]
      } ${isScoreboardMenuButton && classes["scoreboard-menu-button"]}`}
      onClick={props.buttonAction}
    >
      {props.scoreboardMenuButton === "1" ? (
        <span>
          Back To <br /> Main Menu
        </span>
      ) : null}

      {props.scoreboardMenuButton === "2" ? (
        <span>
          Reset <br /> Scores
        </span>
      ) : null}
      {title}
    </button>
  );
};

export default Button;
