import {useDropzone} from 'react-dropzone';
import {useState} from "react";
import {useEffect} from "react";
import Image from 'next/image'

import iconFiles from "../../assets/images/File.png"
import deleteIcons from "../../assets/images/Icon-delete.png"

export default function DropZone(props) {
  const [uploaded, setUploaded] = useState(false)
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  
  const onChanges = () => {
    setUploaded(!uploaded)
  }
  
  const sectionUpload = () => {
    return (
      <>
        <div className='outerListNames'>
            <div className="items">
                <div className='w-1/12'>
                <Image src={iconFiles} alt="iconFiles" width={24} height={24} />
                </div>
                <div className='w-10/12 descriptionFiles'>
                    <p className='m-0'>{acceptedFiles[0].path}</p>
                    <small>{parseFloat((acceptedFiles[0].size) / 1024).toFixed(2)}KB</small>
                </div>
                <div>
                    <button
                     className="del-items"
                     onClick={() => onChanges()}
                     >
                        <Image src={deleteIcons} alt="iconFiles" width={20} height={19} />
                        </button>
                </div>
            </div>
        </div>
      </>
    )
  }

  useEffect(() => {
    if(acceptedFiles.length > 0){
      onChanges()
    }
  },[acceptedFiles])

  console.log(acceptedFiles);
  
  const files = acceptedFiles.map(file => (
      <li key={file.path}>
      {file.path} - {file.size} bytes
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
    </>
    }
    </>
  );
}