import React from 'react';
import { useState, useEffect } from "react"

function Design(props) {
    const go = props.t
    const [text, setText] = useState("")
    const [fullText, setFullText] = useState(
        go
    )
    const [index, setIndex] = useState(0)

    useEffect(() => {
        if (index < fullText.length) {
            setTimeout(() => {
                setText(text + fullText[index])
                setIndex(index + 1)
            }, 100)
        }

    }, [index])
    return <div>
        <h2>{text}</h2>
    </div>;
}

export default Design;
