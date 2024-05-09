import {Autocomplete, AutocompleteItem, Avatar} from "@nextui-org/react";
import {useState} from "react";

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
                {countryData.data.map((country, index) => (
                    <div key={index}>
                        <label className="text-black">{country.name}</label>
                    </div>
                ))}
            </>
        )
    }

    return (
        <>
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                {/*buatkan box disini*/}
                <div onClick={clickBox}>coba box</div>

                {box ?
                    <>
                        <input type="text" placeholder="search country" className="bg-gray-800 text-white" />
                        <div className="bg-gray-50 overflow-y-auto">
                            {countryList()}
                        </div>
                    </>


                    :
                    null
                }


            </div>
        </>
    );
}
