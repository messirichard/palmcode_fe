'use client'
import ButtonForm from "../../button/buttonForm";
export default function Submission3(props) {
    const {nextStep} = props;
    return (
        // TODO buatkan card yang bagian kanan aja
        <>
            <h1>subs 3</h1>
            {/*pakai react dropzone*/}
            <ButtonForm handleClick={() => nextStep()} text={"Click me!3"} className={"coba"} />
        </>
    )
}
