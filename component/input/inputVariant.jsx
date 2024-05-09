import {Select, SelectItem} from "@nextui-org/react";

export default function InputVariant() {
    return(
        <Select
            label="Select an animal"
            className="max-w-xs"
        >

            <SelectItem key={1} value={1}>
                1
            </SelectItem>
        </Select>
    )
}
