import classes from "../App.module.css";
import { Assets } from "../Assets/Assets";

export const OutConteiner = () => {
  return (
    <article className ={classes.OutConteiner}>
        <Assets/>
      <p className = {classes.FirstParagraf}>Improve your front-end skills by building projects</p>
      <p className ={classes.SecondParagraf}>
        Scan the QR code to visits Fontend Mentor and tahe your coding skills to
        the next level
      </p>
      </article>
  
  );
};
