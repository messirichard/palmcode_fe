'use client';
import { Input } from "@nextui-org/react";


export default function InputForm(props) {
    return (
        <>
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                <Input
                    type={props.type}
                    label={props.label}
                    // color="default"
                    // className={props.className}
                    classNames={{
                    label: "text-white", 
                    base: "bg-red-400",
                    //behind the input
                    inputWrapper: "bg-purple-500",
                    // 
                    innerWrapper: "bg-blue-200",
                    // innerWrapper inside inputWrapper
                    input: [
                        "bg-green-500",
                        "text-green-100",
                        "placeholder:text-yellow-500",
                    ],
                    // input tag inside innerWrapper
                    }}
                    onChange={props.onChange}
                    radius="none" />
            </div>
        </>
    );
}
