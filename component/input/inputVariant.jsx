import {Select, SelectItem} from "@nextui-org/react";
import {useEffect, useState} from "react";

export default function InputVariant(props) {
    const {variantData, setIdVariant} = props;
    const [value, setValue] = useState(new Set([]));

    useEffect(() => {
        setIdVariant(parseInt(value.values().next().value))
    }, [value]);

    return(
        <Select
            label="Your Desired Board"
            className="max-w-xs"
            selectedKeys={value}
            onSelectionChange={setValue}
        >

            {variantData.data.map((variant, index) => (
                <SelectItem key={variant.id}>
                    {variant.name}
                </SelectItem>
            ))}
        </Select>
    )
}
