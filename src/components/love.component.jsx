
import yes from "../assets/yes.gif";
import no from "../assets/no.gif";
import './love.styles.scss'
import Confetti from 'react-confetti';
import { useState } from "react";

const Love = () => {
    const [confetti, setConfetti] = useState(false);
    const [answer, setAnswer] = useState("");
    const [noCount, setNoCount] = useState(0);
    const [message, setMessage] = useState("");

    const fontSize = 20;
    const images = {"yes": yes, "no": no}
    const messages = {"yes": "YESSS!!! 🎉🥳🎊😩", "no": "Are you sure?"}

    const clear = () => {
        setAnswer("");
        setMessage("");
        setNoCount(0);
    }
    const sayYes = () => {
        setAnswer("yes");
        setMessage(messages["yes"]);
        setNoCount(0);
        setConfetti(true);
    // Optionally, stop the confetti after a certain time
        setTimeout(() => setConfetti(false), 30000); // 5 seconds
    }
    const sayNo = () => {
        setAnswer("no");
        setNoCount(noCount+1);
        let really = "";
        for(var i=0; i < noCount; i++){
            really += "really ";
        }
        console.log("works");
        console.log(really);
        console.log(noCount);
        setMessage(`Are you ${really} sure?`);
    }
    return (
        <>
        <div style={{margin: "2 rem"}}>
            <h1 className="white-shadow">Will you be my Valentine? 😍</h1>
            <div>
                <button onClick={sayYes}>YES</button> 
                <button onClick={sayNo}>NO</button>
            </div>

            <div className="memoji">
            <img src={images[answer]} />
            <div className="" style={{fontSize: `${fontSize + 3*noCount}px`}}>{message}</div>
            {noCount > 0 && <div><button onClick={sayNo}>YES I'm sure</button><button onClick={clear}>I'm not sure</button></div> }
            </div>
        </div>
        {confetti && <Confetti />}
        </>
    )
};

export default Love;