import { useContext, useState, useEffect } from "react";
import AppContext from "../../Context/app-context";
import Confetti from "../Features/Confetti/Confetti";
import Button from "../UI/Button/Button";
import classes from "./Scoreboard.module.css";
const Scoreboard = () => {
  /*VARIABLES*/
  const appCtx = useContext(AppContext);
  const gameMode = appCtx.gameMode;
  const [teodorScored, setTeodorScored] = useState(false);

  /*HANDLERS*/
  const backToMenuHandler = () => {
    appCtx.backToMainMenu();
  };

  const resetScoresHandler = () => {
    appCtx.resetScores();
  };

  const decreaseScore = (id) => {
    appCtx.decreaseScore(id);
  };
  const increaseScore = (id) => {
    let playerName = appCtx.players.find((player) => player.id === id).name;

    if (playerName.toLowerCase() === "teodor") {
      setTeodorScored(true);
      console.log("teodor Scored");
    }

    appCtx.increaseScore(id);
  };

  useEffect(() => {
    if (teodorScored === false) {
      return;
    }
    setTeodorScored(true);

    const timer = setTimeout(() => {
      setTeodorScored(false);
    }, 3000);

    return () => {
      /*CLEAN UP FUNCTION*/
      clearTimeout(timer);
    };
  }, [teodorScored]);

  return (
    <>
      <div className={classes.Scoreboard}>
        <div className={classes.left}>
          <div className={classes.gameMode}>
            <span>{gameMode}</span>
            <span>Ball</span>
          </div>
          <Button
            title=""
            buttonAction={backToMenuHandler}
            scoreboardMenuButton="1"
          />
          <Button
            title=""
            buttonAction={resetScoresHandler}
            scoreboardMenuButton="2"
          />
        </div>
        <div className={classes.right}>
          <table className={classes["scoreboard-table"]}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {appCtx.players.map((player) => (
                <tr key={player.id}>
                  <td>{player.name}</td>
                  <td className={classes["score-cell"]}>
                    <Button
                      title="-"
                      buttonAction={decreaseScore.bind(null, player.id)}
                      scoreButton={true}
                    />
                    <span className={classes.score}>{player.score}</span>
                    <Button
                      title="+"
                      buttonAction={increaseScore.bind(null, player.id)}
                      scoreButton={true}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Confetti teodorScored={teodorScored} />
    </>
  );
};

export default Scoreboard;
