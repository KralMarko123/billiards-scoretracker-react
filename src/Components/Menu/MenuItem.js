import { useContext } from "react";
import AppContext from "../../Context/app-context";
import classes from "./MenuItem.module.css";

const MenuItem = (props) => {
  const disciplineNumber = props.disciplineNumber;
  const appCtx = useContext(AppContext);

  const selectedModeHandler = (mode) => {
    appCtx.selectMode(mode);
  };

  return (
    <div
      className={classes.menuItem}
      onClick={selectedModeHandler.bind(null, disciplineNumber)}
    >
      <span>{disciplineNumber}</span>
      <span>Ball</span>
    </div>
  );
};

export default MenuItem;
