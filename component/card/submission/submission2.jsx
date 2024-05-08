'use client'
import ButtonForm from "../../button/buttonForm";

export default function Submission2(props) {
    const {nextStep} = props;
    return (
        <>
            <h1>subs 2</h1>
            <ButtonForm handleClick={() => nextStep()} text={"Click me!2"} className={"coba"} />
        </>
    )
}
