'use client'

import Submission1 from '../component/card/submission/submission1';
import Submission2 from '../component/card/submission/submission2';
import Submission3 from '../component/card/submission/submission3';
import Submission4 from '../component/card/submission/submission4';
import {useEffect, useState} from "react";
export default function Home() {
    const [step, setStep] = useState(1);
    const [countDown, setCountDown] = useState(10);

    const nextStep = () => {
        setStep(step + 1);
    }

    useEffect(() => {
        if(step === 4) {
            setTimeout(() => {
                setStep(1);
            }, 10000);
        }

    }, [step]);

    return (
        //TODO buatkan card yang semua kecuali kanan disini

        <>
            {step === 1 ? <Submission1 nextStep={nextStep} /> : null}
            {step === 2 ? <Submission2 nextStep={nextStep} /> : null}
            {step === 3 ? <Submission3 nextStep={nextStep} /> : null}
            {step === 4 ? <Submission4 countDown={countDown} /> : null}
        </>
    )
}
