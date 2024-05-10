import {Autocomplete, AutocompleteItem, Avatar} from "@nextui-org/react";
import {useState} from "react";

import Image from 'next/image'
import iconBottoms from '../../assets/images/Icon_Chevron.png'
import countryList from "@/component/box/boxCountry";
import CountryList from "@/component/box/boxCountry";
import BoxCountry from "@/component/box/boxCountry";

export default function InputCountryForm(props) {
    const {countryData, setIdCountry} = props
    const [box, setBox] = useState(false);
    const [valSearch, setValSearch] = useState("");
    const [idClicked, setIdClicked] = useState(0);
    const [labelChange, setLabelChange] = useState("")
    const [codeCountry, setCodeCountry] = useState("")

    const clickBox = () => {
        setBox(!box)
    }
    const onCloseBox = () => {
        setBox(false)
    }

    return (
        <>
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4 custom-dropdown-form">
                <div className="w-full bg-dark-inputs p-4 w-100" onClick={clickBox}>
                    {!labelChange ?
                        <>
                            Country
                        </>
                    :
                        <>
                            <span className="span-country">
                                Country
                            </span>
                            <div className="span-label-change">
                                <img className="input-parent" src={`https://flagsapi.com/${codeCountry.toUpperCase()}/flat/64.png`} alt=""/>
                                <span className="left-country">
                                    {labelChange}
                                </span>
                            </div>
                        </>
                    }
                    <span className="right-icons">
                    <Image
                        src={iconBottoms}
                        alt="Picture"
                        width={22}
                        height={22}
                        className=''
                    />
                    </span>
                </div>
                {box ?
                    <>
                        <div className="in-dropdown mt-3">
                            <input value={valSearch} onChange={() => setValSearch(event.target.value)} type="text" placeholder="Label" className="bg-gray-800 text-white custom-searchs focus-visible:outline-0 focus:outline-0" />
                            <div className="bg-gray-50 overflow-y-auto list-data-hold">
                                <BoxCountry setIdCountry={setIdCountry} setCodeCountry={setCodeCountry} setLabelChange={setLabelChange} setBox={setBox} value={valSearch} setIdClicked={setIdClicked} countryData={countryData} />
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
