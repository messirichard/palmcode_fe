import {useEffect, useState} from "react";
import {DatePicker} from "@nextui-org/react";
import {parseDate, getLocalTimeZone} from "@internationalized/date";
import {useDateFormatter} from "@react-aria/i18n";
export default function InputDate(props) {
    const {setInputDate, inputDate} = props
    const [value, setValue] = useState(parseDate("2024-04-04"))
    let formatter = useDateFormatter();

    useEffect(() => {
        setInputDate(formatter.format(value.toDate()))
    }, [value])

    return (
        <>
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                <DatePicker
                    value={value}
                    onChange={setValue}
                    label="Visit Date"
                    className="max-w-[full] bg-dark-inputs"
                />
            </div>
        </>
    )
}
