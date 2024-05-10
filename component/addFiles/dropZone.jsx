import {useDropzone} from 'react-dropzone';
import {useCallback, useEffect, useState} from "react";
import Image from 'next/image'

import iconFiles from "../../assets/images/File.png"
import deleteIcons from "../../assets/images/Icon-delete.png"

export default function DropZone(props) {
    const {setFiles} = props
    const [uploaded, setUploaded] = useState(false)
    const maxSize = 2000000;

    const {acceptedFiles, getRootProps, getInputProps, isDragReject, fileRejections } = useDropzone({
        accept: {
            'image/jpeg': [],
            'image/png': [],
            'image/jpg': []
        },
        maxSize,
    });

    // const isFileTooLarge = fileRejections.length === 0 && fileRejections[0].file.size > maxSize;
    // console.log(isFileTooLarge)
    const onChanges = () => {
        setUploaded(!uploaded)
    }

    const onRemove = () => {
        setUploaded(false)
        setFiles([])
    }

    useEffect(() => {
        if (acceptedFiles.length > 0) {
            setFiles(acceptedFiles)
            onChanges()
        }
    }, [acceptedFiles])

    const sectionUpload = () => {
        return (
            <>
                <div className='outerListNames'>
                    <div className="items">
                        <div className='w-1/12'>
                            <Image src={iconFiles} alt="iconFiles" width={24} height={24}/>
                        </div>
                        <div className='w-10/12 descriptionFiles'>
                            <p className='m-0'>{acceptedFiles[0].path}</p>
                            <small>{parseFloat((acceptedFiles[0].size) / 1024).toFixed(2)}KB</small>
                        </div>
                        <div>
                            <button
                                className="del-items"
                                onClick={() => onRemove()}
                            >
                                <Image src={deleteIcons} alt="iconFiles" width={20} height={19}/>
                            </button>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    const fileRejectionItems = fileRejections.map(({ file, errors }) => (
        <li key={file.path}>
            <ul>
                {errors.map(e => (
                    <li key={e.code}>{e.message}</li>
                ))}
            </ul>
        </li>
    ));

    return (
        <>
            {uploaded ?
                sectionUpload()
                :
                <>
                    <section className="outer-drop-zone"
                    >
                        <div {...getRootProps({className: 'dropzone'})}>
                            <input {...getInputProps()} />
                            <h4>Drag & Drop</h4>
                            <p>or select files from device max. 2MB</p>
                            <h6>Upload</h6>
                        </div>
                    </section>
                    <ul>{fileRejectionItems}</ul>
                </>
            }
        </>
    );
}
