'use client'
import Image from 'next/image'

import Header from '../component/layout/header';
import Submission1 from '../component/card/submission/submission1';
import Submission2 from '../component/card/submission/submission2';
import Submission3 from '../component/card/submission/submission3';
import Submission4 from '../component/card/submission/submission4';
import backgroundWrapp from '../assets/images/background-new.jpg';
import bannerImages from '../assets/images/frame-banner-left.jpg';
import {useEffect, useLayoutEffect, useState} from "react";
import {getCountryAPI} from "@/services/country";
import {getVariantAPI} from "@/services/variant";

async function getCountry() {
    const result = await getCountryAPI();
    return result
}

export default function Home() {
    const [step, setStep] = useState(1);
    const [countDown, setCountDown] = useState(10);
    const [title, setTitle] = useState("")
    const [countryData, setCountryData] = useState();
    const [variantData, setVariantData] = useState();
    const [loading, setLoading] = useState(true)
    const fetchCountry = async () => {
        const result = await getCountryAPI();
        setCountryData(result)
    }

    const fetchVariant = async () => {
        const result = await getVariantAPI();
        setVariantData(result)
    }

    useEffect(() => {
        fetchVariant()
        fetchCountry()

    },[loading])

    console.log(loading)
    useEffect(() => {
        if(countryData && variantData){
            setLoading(false)
        }
        else{
            setLoading(true)
        }
    })


    const nextStep = () => {
        setStep(step + 1);
    }

    useEffect(() => {
        if(step === 4) {
            setTimeout(() => {
                setStep(1);
            }, 10000);
        }
        if(step === 1){
            setTitle("VISITOR DETAILS")
        }
        else if (step === 2){
            setTitle("SURFING EXPERIENCES")
        }
        else if (step === 3){
            setTitle("ID VERIFICATION")
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
                        {!loading ?
                            <div className="right-box flex-auto w-7/12">
                                <div className="outer-box-form step-1">
                                    {step === 4 ? <Submission4 countDown={countDown}/>
                                        : <>
                                            <div className="text-content">
                                                <h1>Book Your Visit</h1>
                                                <h6>{step}/3: {title}</h6>
                                            </div>
                                            {step === 1 ?
                                                <Submission1 countryData={countryData} nextStep={nextStep}/> : null}
                                            {step === 2 ?
                                                <Submission2 variantData={variantData} nextStep={nextStep}/> : null}
                                            {step === 3 ? <Submission3 nextStep={nextStep}/> : null}
                                        </>
                                    }
                                </div>
                            </div>
                            :
                            <>Loading .....</>
                        }
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
