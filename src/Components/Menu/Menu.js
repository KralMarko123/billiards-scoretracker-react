import MenuItem from "./MenuItem";
import classes from "./Menu.module.css";


const Menu = () => {

  return (
    <div className={classes.Menu}>
      <MenuItem disciplineNumber="8" />
      <MenuItem disciplineNumber="9" />
      <MenuItem disciplineNumber="10" />
    </div>
  );
};

export default Menu;
