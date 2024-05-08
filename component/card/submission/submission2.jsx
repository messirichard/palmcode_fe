'use client'
import ButtonUserForm from "../../button/buttonUserForm";

export default function Submission2(props) {
    const {nextStep} = props;
    return (
        // TODO buatkan card yang bagian kanan aja
        <>
            <h1>subs 2</h1>
            <ButtonUserForm handleClick={() => nextStep()} text={"Click me!2"} className={"coba"} />
        </>
    )
}
