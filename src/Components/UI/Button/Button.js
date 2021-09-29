import classes from "./Button.module.css";

const Button = (props) => {
  /*VARIABLES*/
  const title = props.title;
  const isScoreButton = props.scoreButton;

  /*HANDLERS*/
  return (
    <button
      className={`${classes.Button} ${
        isScoreButton && classes["score-button"]
      }`}
      onClick={props.buttonAction}
    >
      {title}
    </button>
  );
};

export default Button;
