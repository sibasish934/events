import React from 'react'
import "./home.css";
// import rappel from "../../images/rappel.jpeg";
import reminder from "../../images/reminder.jpeg";
const Home = () => {
    return (
        <>
            <div className="content">
                <div className="text">
                    <h1 style="color: white;">Be Cool, On Time, <br /> <span>Use Rappel</span></h1>
                    <p>Rappel is an event management website by Team WARRIOR<br />and introduced as reminder, it was renamed as Rappel(in French it means reminder)<br />
                    </p>
                    <button className="btn3">Use Now</button>
                </div>
                <div className="rappel">
                    <img src={reminder} alt="" style="border-radius: 10px;" />
                </div>
            </div>
        </>
    )
}

export default Home