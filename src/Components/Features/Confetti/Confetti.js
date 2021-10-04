import "./Confetti.css";

const Confetti = (props) => {
  /*VARIABLES*/
  const hasTeodorScored = props.teodorScored;

  const leftConfettiClasses = `confetti ${
    hasTeodorScored ? "" : "animateLeft"
  }`;
  const rightConfettiClasses = `confetti ${
    hasTeodorScored ? "" : "animateRight"
  }`;

  /*HANDLERS*/

  return (
    <>
      <ul className="left">
        {Array.from({ length: 150 }, (el, i) => i).map((el, idx) => (
          <i key={idx} className={leftConfettiClasses} />
        ))}
      </ul>
      <ul className="right">
        {Array.from({ length: 150 }, (el, i) => i).map((el, idx) => (
          <i key={idx} className={rightConfettiClasses} />
        ))}
      </ul>
    </>
  );
};

export default Confetti;
