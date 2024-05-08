import { Input } from "@nextui-org/react";

export default function InputForm(props) {
    const {type, label, onChange} = props;
    let descriptionWarning = "";
    if (type === "email") {
        descriptionWarning = "Please include valid email"
    }
    return (
        <>
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                <Input
                    isClearable
                    type={type}
                    label={label}
                    classNames={{
                    label: "text-white",
                    base: "bg-gray-800",
                    inputWrapper: ["backdrop-blur-xl", "shadow-xl","bg-black-800 ", "backdrop-saturate-900", "hover:bg-gray-800", "group-data-[focused=true]:bg-gray-800"],
                    innerWrapper: "bg-gray-800",
                    input: [
                        "bg-gray-800",
                        "text-white",
                    ],
                    }}
                    onChange={onChange}
                    radius="none"
                    errorMessage={descriptionWarning}
                />
            </div>
        </>
    );
}
