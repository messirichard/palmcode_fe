'use client'

import ButtonForm from "../../button/buttonForm";
import InputForm from "@/component/textField/InputForm";

export default function Submission1(props) {
    const {nextStep} = props;
    const classInputs = "hover:bg-gray-900 bg- border-none rounded-none bg-gray-900 text-white/90 dark:text-white/90 placeholder:text-default-700/50 dark:placeholder:text-white/60";
    const classButtons = "rounded-none text-base px-14 py-6 bg-white hover:bg-grey-300 text-black/90 dark:text-black/90";

    return (
        <>
        <div className="outer-box-form step-1">
            <div className="text-content">
                <h1>Book Your Visit</h1>
                <h6>1/3: VISITOR DETAILS</h6>
            </div>
            <div className="form-default">
                <div className="flex gap-7">
                    <div className="form-group flex-auto">
                        <InputForm label={"Name"} className={classInputs} type={"text"} onChange={() => {}} />
                    </div>
                    <div className="form-group flex-auto">
                        <InputForm label={"Country"} className={classInputs} type={"text"}  onChange={() => {}} />
                    </div>
                </div>
                <div className="flex gap-7">
                    <div className="form-group flex-auto">
                        <InputForm label={"Email"} className={classInputs} type={"email"} onChange={() => {}} />
                    </div>
                    <div className="form-group flex-auto">
                        <InputForm label={"Whatsapp Number"} className={classInputs} type={"text"} onChange={() => {}} />
                    </div>
                </div>
            </div>
            <div className="block-buttons">
                <ButtonForm handleClick={() => nextStep()} text={"Next"} className={classButtons} />
            </div>
        </div>
        </>
    )
}
