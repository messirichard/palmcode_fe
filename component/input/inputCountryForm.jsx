import {Autocomplete, AutocompleteItem, Avatar} from "@nextui-org/react";
import {useState} from "react";

import Image from 'next/image'
import iconBottoms from '../../assets/images/Icon_Chevron.png'

export default function InputCountryForm(props) {
    const {countryData} = props
    const [box, setBox] = useState(false)
    const [searchCountry, setSearchCountry] = useState("");
    const clickBox = () => {
        setBox(!box)
    }
    const onCloseBox = () => {
        setBox(false)
    }

    const countryList = () => {
        return (
            <>
                {/* {countryData.data.map((country, index) => ( */}
                    <div key='1' className="items-data">
                        <label className="text-white flex justify-start items-center gap-2"><img src="https://flagsapi.com/BE/flat/64.png" alt="" /> Germany</label>
                    </div>
                    <div key='1' className="items-data">
                        <label className="text-white flex justify-start items-center gap-2"><img src="https://flagsapi.com/BE/flat/64.png" alt="" /> Germany</label>
                    </div>
                    <div key='1' className="items-data">
                        <label className="text-white flex justify-start items-center gap-2"><img src="https://flagsapi.com/BE/flat/64.png" alt="" /> Germany</label>
                    </div>
                    <div key='1' className="items-data">
                        <label className="text-white flex justify-start items-center gap-2"><img src="https://flagsapi.com/BE/flat/64.png" alt="" /> Germany</label>
                    </div>
                    <div key='1' className="items-data">
                        <label className="text-white flex justify-start items-center gap-2"><img src="https://flagsapi.com/BE/flat/64.png" alt="" /> Germany</label>
                    </div>
                    <div key='1' className="items-data">
                        <label className="text-white flex justify-start items-center gap-2"><img src="https://flagsapi.com/BE/flat/64.png" alt="" /> Germany</label>
                    </div>
                    <div key='1' className="items-data">
                        <label className="text-white flex justify-start items-center gap-2"><img src="https://flagsapi.com/BE/flat/64.png" alt="" /> Germany</label>
                    </div>
                    <div key='1' className="items-data">
                        <label className="text-white flex justify-start items-center gap-2"><img src="https://flagsapi.com/BE/flat/64.png" alt="" /> Germany</label>
                    </div>
                    <div key='1' className="items-data">
                        <label className="text-white flex justify-start items-center gap-2"><img src="https://flagsapi.com/BE/flat/64.png" alt="" /> Germany</label>
                    </div>
                    <div key='1' className="items-data">
                        <label className="text-white flex justify-start items-center gap-2"><img src="https://flagsapi.com/BE/flat/64.png" alt="" /> Germany</label>
                    </div>
                {/* ))} */}
            </>
        )
    }

    return (
        <>
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4 custom-dropdown-form">
                {/*buatkan box disini*/}
                <div className="w-full bg-dark-inputs p-4 w-100" onClick={clickBox}>Country <span className="right-icons">
                    <Image
                        src={iconBottoms}
                        alt="Picture"
                        width={22}
                        height={22}
                        className=''
                    />
                    </span></div>
                {box ?
                    <>
                        <div className="in-dropdown mt-3">
                            <input type="text" placeholder="Label" className="bg-gray-800 text-white custom-searchs focus-visible:outline-0 focus:outline-0" />
                            <div className="bg-gray-50 overflow-y-auto list-data-hold">
                                {countryList()}
                            </div>
                        </div>
                    </>
                    :
                    null
                }


            </div>
        </>
    );
}
