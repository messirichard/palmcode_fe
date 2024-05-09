'use client'
import ButtonForm from "../../button/buttonForm";
// import SliderForm from "../../slider/sliderForm";
import InputForm from "@/component/input/inputForm";
import InputDate from "@/component/input/inputDate";
export default function Submission2(props) {
    const {nextStep} = props;
    return (
        <>
            {/*<SliderForm />*/}
            {/*slider pakai ejs*/}
            <InputDate />
            <InputForm />
            <ButtonForm handleClick={() => nextStep()} text={"Next"} className={"coba"} />
        </>
    )
}
