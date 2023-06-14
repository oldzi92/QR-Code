import kodeQR from "../images/image-qr-code.png"
import classes from "../App.module.css"


export const Assets = () => {
  
    return (
    <div className = {classes.QRarticle}>
        <img className = {classes.kodeqr} src={kodeQR}/>

    </div>
    )
}