'use client'

import ButtonForm from "../../button/buttonForm";
import InputForm from "@/component/input/inputForm";
import InputCountryForm from "@/component/input/inputCountryForm";

export default function Submission1(props) {
    const {nextStep} = props;

    return (
        <>
            <div className="form-default">
                <div className="flex gap-7">
                    <div className="form-group flex-auto">
                        <InputForm label={"Name"} type={"text"} onChange={() => {}} />
                    </div>
                    <div className="form-group flex-auto">
                        {/*<InputForm label={"Country"} type={"text"}  onChange={() => {}} />*/}
                        <InputCountryForm />
                    </div>
                </div>
                <div className="flex gap-7">
                    <div className="form-group flex-auto">
                        <InputForm label={"Email"} type={"email"} onChange={() => {}} />
                    </div>
                    <div className="form-group flex-auto">
                        <InputForm label={"Whatsapp Number"} type={"text"} onChange={() => {}} />
                    </div>
                </div>
            </div>
            <div className="block-buttons">
                <ButtonForm handleClick={() => nextStep()} text={"Next"} className={classButtons} />
            </div>
        </>
)
}
const classButtons = "rounded-none text-base px-14 py-6 bg-white hover:bg-grey-300 text-black/90 dark:text-black/90";
