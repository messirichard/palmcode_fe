import {Autocomplete, AutocompleteItem, Avatar} from "@nextui-org/react";
import {useState} from "react";

export default function InputCountryForm(props) {
    const [box, setBox] = useState(false)
    const clickBox = () => {
        setBox(!box)
    }
    const onCloseBox = () => {
        setBox(false)
    }

    return (
        <>
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                {/*buatkan box disini*/}
                <div onClick={clickBox}>coba box</div>

                {box ?
                    <input type="text" placeholder="search country" className="bg-gray-800 text-white" />
                    // kotak berisikan data list


                    :
                    null
                }


            </div>
        </>
    );
}
