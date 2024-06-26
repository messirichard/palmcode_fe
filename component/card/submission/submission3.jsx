'use client'
import ButtonForm from "../../button/buttonForm";
import DropZone from "@/component/addFiles/dropZone";
import {useEffect, useState} from "react";
import {postSubmissionStep3API} from "@/services/submission";

const classButtons = "rounded-none text-base px-14 py-6 bg-white hover:bg-grey-300 text-black/90 dark:text-black/90";

export default function Submission3(props) {
    const {nextStep} = props;
    const [data, setData] = useState([])
    const [files, setFiles] = useState([])
    const [disabled, setDisabled] = useState(true)

    useEffect(() => {
        setData({imageFile: files})
        files.length > 0 ? setDisabled(false) : setDisabled(true)
    }, [files]);

    const handleClick = async () => {
        await postSubmissionStep3API(data.imageFile);
        nextStep(4)
    }

    return (
       <>
        <p>Help us verify your identity by uploading a photo of your ID/KTP or Passport</p>
            <div className="form-default">
                <div className="pt-5 pb-7">
                    <DropZone setFiles={setFiles}/>
                </div>
            </div>
            <div className="block-buttons">
                <ButtonForm handleClick={() => handleClick()} isDisabled={disabled} text={"Book my visit"} className={classButtons} />
            </div>
        </>
    )
}
