'use client'
import ButtonForm from "../../button/buttonForm";
// import SliderForm from "../../slider/sliderForm";
import InputDate from "@/component/input/inputDate";
import InputVariant from "@/component/input/inputVariant";
import SliderForm from "@/component/slider/sliderForm";

import {useState} from "react";

const classButtons = "rounded-none text-base px-14 py-6 bg-white hover:bg-grey-300 text-black/90 dark:text-black/90";

export default function Submission2(props) {
    const {nextStep} = props;
    return (
       <>
            <div className="form-default">
                <div className="pt-5 pb-7">
                    <SliderForm />
                </div>
                <div className="flex gap-7">
                    <div className="form-group flex-auto w-2/4">
                        <InputDate />
                    </div>
                    <div className="form-group flex-auto w-2/4">
                        <InputVariant />
                    </div>
                </div>
            </div>
            <div className="block-buttons">
                <ButtonForm handleClick={() => nextStep()} text={"Next"} className={classButtons} />
            </div>
        </>
    )
}
