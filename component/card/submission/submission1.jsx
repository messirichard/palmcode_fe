import ButtonForm from "../../button/buttonForm";
import InputForm from "@/component/input/inputForm";
import InputCountryForm from "@/component/input/inputCountryForm";

import {useEffect, useState} from "react";
import {postSubmissionStep1API} from "@/services/submission";
import {isNull} from "@/util/util";

const classButtons = "rounded-none text-base px-14 py-6 bg-white hover:bg-grey-300 text-black/90 dark:text-black/90";

export default function Submission1(props) {
    const {nextStep, countryData} = props;
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [idCountry, setIdCountry] = useState("")
    const [data, setData] = useState({})
    const [fieldRequiredName, setFieldRequiredName] = useState(false)
    const [fieldRequiredEmail, setFieldRequiredEmail] = useState(false)
    const [fieldRequiredWhatsapp, setFieldRequiredWhatsapp] = useState(false)
    const [fieldRequiredCountry, setFieldRequiredCountry] = useState(false)

    useEffect(() => {
        setData({name, email, whatsapp_number:whatsapp, id_country: idCountry})
    }, [name, email, whatsapp, idCountry]);

    const handleClick = async () => {

        setFieldRequiredName(!name ? true : false)
        setFieldRequiredEmail(!email ? true : false)
        setFieldRequiredWhatsapp(!whatsapp ? true : false)
        setFieldRequiredCountry(!idCountry ? true : false)

        if (name && email && whatsapp && idCountry) {
            const result = await postSubmissionStep1API(data);
            localStorage.setItem("token", result.data.token)

            if (result.data.message === "User Already Exists") {
                nextStep(4)
            } else {
                nextStep(2)
            }
        }
    }

    const textErrorRequired = () => {
        return (
            <p className="text-red-500 text-sm">*Required Fields</p>
        )
    }

    return (
        <>
            <div className="form-default">
                <div className="flex gap-7">
                    <div className="form-group flex-auto w-2/4">
                        <InputForm label={"Name"} type={"text"} value={name} onChange={setName} />
                        {fieldRequiredName && textErrorRequired()}
                    </div>
                    <div className="form-group flex-auto w-2/4">
                        <InputCountryForm setIdCountry={setIdCountry} value={idCountry} countryData={countryData}/>
                        {fieldRequiredCountry && textErrorRequired()}
                    </div>
                </div>
                <div className="flex gap-7">
                    <div className="form-group flex-auto">
                        <InputForm label={"Email"} type={"email"} value={email} onChange={setEmail} />
                        {fieldRequiredEmail && textErrorRequired()}
                    </div>
                    <div className="form-group flex-auto">
                        <InputForm label={"Whatsapp Number"} type={"text"} value={whatsapp} onChange={setWhatsapp} />
                        {fieldRequiredWhatsapp && textErrorRequired()}
                    </div>
                </div>
            </div>
            <div className="block-buttons">
                <ButtonForm handleClick={() => handleClick()} text={"Next"} className={classButtons} />
            </div>
        </>
    )
}
