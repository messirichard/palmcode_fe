import {useState} from "react";
import {DatePicker} from "@nextui-org/react";

export default function InputDate() {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <>
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                <DatePicker
                    label="Visit Date"
                    className="max-w-[full] bg-dark-inputs"
                />
            </div>
        </>
    )
}
