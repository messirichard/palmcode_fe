'use client'
import {useEffect, useState} from "react";
import {getSubmissionByTokenAPI} from "@/services/submission";
import moment from "moment";
import Loading from "@/component/loading/loading";

export default function Submission4(props) {
    const {countDown} = props;
    //create timeout
    const [secondsRemaining, setSecondsRemaining] = useState(countDown);
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true)
    const fetchData = async () => {
        const result = await getSubmissionByTokenAPI();
        setData(result.data)
    }

    console.log(data)

    useEffect(() => {

        fetchData()

        if (data) {
            setLoading(false)
        } else {
            setLoading(true)
        }

        if (data) {
            const intervalId = setInterval(() => {
                if (secondsRemaining > 0) {
                    setSecondsRemaining(secondsRemaining - 1);
                } else {
                    clearInterval(intervalId); // Stop the interval when it reaches 0
                }
            }, 1000); // Update every second
            return () => clearInterval(intervalId); // Cleanup the interval on unmount
        }
    }, [loading,secondsRemaining]);

    return (
        <>
            {loading ? <Loading/>
                :
                <>
                    <div className="text-content box-thanks-last">
                        <h1>Thank you, {data.name}</h1>
                        <h6>You're In!</h6>
                        <div className="py-1"></div>
                        <p>Your store visit is booked and you're ready to ride the shopping wave. Here’s your
                            detail:</p>
                    </div>
                    <div className="box-middle-successInfo">
                        <div className="lists">
                            <div className="items">
                                <label>Name:</label>
                                <p>{data.name}</p>
                            </div>
                            <div className="items">
                                <label>Country:</label>
                                <p><img src="https://flagsapi.com/BE/flat/64.png" alt=""/> {data.country}</p>
                            </div>
                        </div>
                        <div className="lists">
                            <div className="items">
                                <label>Email:</label>
                                <p>{data.email}</p>
                            </div>
                            <div className="items">
                                <label>Visit date:</label>
                                <p>{moment(data.date).format("DD-MM-YYYY")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-info-lastConfig">
                        <p>We look forward to seeing you at the #Swellmatch store! Your booking details already sent to
                            your
                            email and whatsapp</p>
                        <div className="py-3"></div>
                        <p><small>This form will refresh automatically in {secondsRemaining} seconds</small></p>
                    </div>
                </>
            }
        </>
    )
}
