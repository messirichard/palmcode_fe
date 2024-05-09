'use client'

import ButtonForm from "../../button/buttonForm";
import InputForm from "@/component/input/inputForm";
import InputCountryForm from "@/component/input/inputCountryForm";

import {useEffect, useState} from "react";

const classButtons = "rounded-none text-base px-14 py-6 bg-white hover:bg-grey-300 text-black/90 dark:text-black/90";

export default function Submission1(props) {
    const {nextStep, countryData} = props;
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [idCountry, setIdCountry] = useState("")
    const [data, setData] = useState({})

    useEffect(() => {
        setData({name, email, whatsapp, id_country: idCountry})
    }, [name, email, whatsapp, idCountry]);

    return (
        <>
            <div className="form-default">
                <div className="flex gap-7">
                    <div className="form-group flex-auto w-2/4">
                        <InputForm label={"Name"} type={"text"} value={name} onChange={setName} />
                    </div>
                    <div className="form-group flex-auto w-2/4">
                        <InputCountryForm setIdCountry={setIdCountry} value={idCountry} countryData={countryData}/>
                    </div>
                </div>
                <div className="flex gap-7">
                    <div className="form-group flex-auto">
                        <InputForm label={"Email"} type={"email"} value={email} onChange={setEmail} />
                    </div>
                    <div className="form-group flex-auto">
                        <InputForm label={"Whatsapp Number"} type={"text"} value={whatsapp} onChange={setWhatsapp} />
                    </div>
                </div>
            </div>
            <div className="block-buttons">
                <ButtonForm handleClick={() => nextStep()} text={"Next"} className={classButtons} />
            </div>
        </>
)
}
