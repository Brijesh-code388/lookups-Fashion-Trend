import React from "react";
import Pin from "./Pin";


function Mainboard(props) {
    let { pins } = props;

    return (
        <div className="mainboard">
            <div className="mainboard__container">
                {pins.map((pin) => {
                    let { _id, images } = pin;
                    return <Pin key={_id} id={_id} url={images.url} />;
                })}


            </div>
        </div>
    );
}

export default Mainboard;



