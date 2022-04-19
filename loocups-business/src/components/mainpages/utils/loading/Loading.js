import React from 'react'
import './loading.scss'

function Loading() {
    return (
        <div className="load-page">

            {/* <div class="loading">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div class="donut"></div>
                <div class="donut multi"></div>
                <div class="ripple"></div> */}
            {/* <div className="multi-ripple">
                <div></div>
                <div></div>
            </div> */}
            <div className="fancy-spinner">
                <div className="ring"></div>
                <div className="ring"></div>
                <div className="dot"></div>
            </div>
        </div>
    );
}

export default Loading
