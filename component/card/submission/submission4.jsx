'use client'
import {useEffect, useState} from "react";

export default function Submission4(props) {
    const {countDown} = props;
    //create timeout
    const [secondsRemaining, setSecondsRemaining] = useState(countDown);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (secondsRemaining > 0) {
                setSecondsRemaining(secondsRemaining - 1);
            } else {
                clearInterval(intervalId); // Stop the interval when it reaches 0
            }
        }, 1000); // Update every second

        return () => clearInterval(intervalId); // Cleanup the interval on unmount
    }, [secondsRemaining]);

    return (
        // TODO buatkan card yang bagian kanan aja
        <>
            <h1>subs 4</h1>
            <p>{secondsRemaining}</p>
        </>
    )
}
