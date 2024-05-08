'use client'
import ButtonForm from "../../button/buttonForm";

export default function Submission2(props) {
    const {nextStep} = props;
    return (
        <>
            <ButtonForm handleClick={() => nextStep()} text={"Next"} className={"coba"} />
        </>
    )
}
