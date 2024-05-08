'use client'

import ButtonUserForm from "../../button/buttonUserForm";
export default function Submission1(props) {
    const {nextStep} = props;

    return (
        // TODO buatkan card yang bagian kanan aja
        <>
         <h1>subs 1</h1>
        <ButtonUserForm handleClick={() => nextStep()} text={"Click me!1"} className={"coba"} />
        </>
    )
}
