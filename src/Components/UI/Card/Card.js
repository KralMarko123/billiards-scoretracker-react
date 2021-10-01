import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div
      className={`${classes.Card} ${
        props.gameStarted ? classes.gameCard : null
      } `}
    >
      {props.children}
    </div>
  );
};

export default Card;
