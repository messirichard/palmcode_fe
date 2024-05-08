'use client'
import ButtonUserForm from "../../button/buttonUserForm";
export default function Submission3(props) {
    const {nextStep} = props;
    return (
        // TODO buatkan card yang bagian kanan aja
        <>
            <h1>subs 3</h1>
            <ButtonUserForm handleClick={() => nextStep()} text={"Click me!3"} className={"coba"} />
        </>
    )
}
