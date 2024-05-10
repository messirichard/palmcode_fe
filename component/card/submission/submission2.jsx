'use client'
import ButtonForm from "../../button/buttonForm";
// import SliderForm from "../../slider/sliderForm";
import InputDate from "@/component/input/inputDate";
import InputVariant from "@/component/input/inputVariant";
import SliderForm from "@/component/slider/sliderForm";

import {useEffect, useState} from "react";
import {postSubmissionStep2API} from "@/services/submission";

const classButtons = "rounded-none text-base px-14 py-6 bg-white hover:bg-grey-300 text-black/90 dark:text-black/90";

export default function Submission2(props) {
    const {nextStep, variantData} = props;
    const [idVariant, setIdVariant] = useState(0)
    const [valueSlider, setValueSlider] = useState(0)
    const [inputDate, setInputDate] = useState("")
    const [data, setData] = useState([])

    useEffect(() => {
        setData({surfing_experience: valueSlider, date: inputDate, id_variant: idVariant})
    }, [valueSlider, inputDate, idVariant]);

    const handleClick = async () => {
        const result = await postSubmissionStep2API(data);
        console.log(result)
        // nextStep(3)
    }
    return (
       <>
            <div className="form-default">
                <div className="pt-5 pb-7">
                    <SliderForm setValueSlider={setValueSlider}/>
                </div>
                <div className="flex gap-7">
                    <div className="form-group flex-auto w-2/4">
                        <InputDate inputDate={inputDate} setInputDate={setInputDate}/>
                    </div>
                    <div className="form-group flex-auto w-2/4">
                        <InputVariant variantData={variantData} setIdVariant={setIdVariant}/>
                    </div>
                </div>
            </div>
            <div className="block-buttons">
                <ButtonForm handleClick={() => handleClick()} text={"Next"} className={classButtons} />
            </div>
        </>
    )
}
