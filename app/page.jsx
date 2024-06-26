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
import {getCountryAPI} from "@/services/country";
import {getVariantAPI} from "@/services/variant";
import Loading from "@/component/loading/loading";

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

    useEffect(() => {
        if(countryData && variantData){
            setLoading(false)
        }
        else{
            setLoading(true)
        }
    })

    const nextStep = (data) => {
        setStep(data);
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
                                    className=''
                                />
                        </div>
                        </div>

                            <div className="right-box flex-auto w-7/12">
                                {!loading ?
                                <div className="outer-box-form">
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
                                    :
                                    <>
                                    <div className="outer-box-form justify-center">
                                        <Loading />
                                    </div>
                                    </>
                                }
                            </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
