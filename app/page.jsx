'use client'
import Image from 'next/image'

import Header from '../component/layout/header';
import Submission1 from '../component/card/submission/submission1';
import Submission2 from '../component/card/submission/submission2';
import Submission3 from '../component/card/submission/submission3';
import Submission4 from '../component/card/submission/submission4';

import backgroundWrapp from '../assets/images/background-new.jpg';
import bannerImages from '../assets/images/frame-banner-left.jpg';


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
        <>
        <div className="wrapper py-12" style={
            {
                backgroundImage: 'url(' + backgroundWrapp.src + ')',
            }
        }>
            <Header />
            <div className="main-content py-20">
                <div className="max-w-screen-xl mx-auto">
                    <div className="widget-box flex mx-auto">
                        <div className="left-box flex-auto w-5/12">
                            <div className="banner">
                                <Image
                                src={bannerImages}
                                    alt="Picture"
                                    // width={529}
                                    // height={581}
                                    className=''
                                />
                        </div>
                        </div>
                        <div className="right-box flex-auto w-7/12">
                            {step === 1 ? <Submission1 nextStep={nextStep} /> : null}
                            {step === 2 ? <Submission2 nextStep={nextStep} /> : null}
                            {step === 3 ? <Submission3 nextStep={nextStep} /> : null}
                            {step === 4 ? <Submission4 countDown={countDown} /> : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
