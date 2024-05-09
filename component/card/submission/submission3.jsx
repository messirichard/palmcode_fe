'use client'
import ButtonForm from "../../button/buttonForm";
// import SliderForm from "../../slider/sliderForm";
import InputDate from "@/component/input/inputDate";
import InputVariant from "@/component/input/inputVariant";
import DropZone from "@/component/addFiles/dropZone";

import {useState} from "react";

const classButtons = "rounded-none text-base px-14 py-6 bg-white hover:bg-grey-300 text-black/90 dark:text-black/90";

export default function Submission3(props) {
    const {nextStep} = props;
    
    return (
       <>
        <p>Help us verify your identity by uploading a photo of your ID/KTP or Passport</p>
            <div className="form-default">
                <div className="pt-5 pb-7">
                    <DropZone />
                </div>
            </div>
            <div className="block-buttons">
                <ButtonForm handleClick={() => nextStep()} text={"Next"} className={classButtons} />
            </div>
        </>
    )
}
