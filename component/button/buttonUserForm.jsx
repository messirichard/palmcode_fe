'use client'

import {Button} from "@material-tailwind/react";

export default function ButtonUserForm(props) {
    return (
        <>
        <h1>Button User Form</h1>
        <Button onClick={props.handleClick} className={props.className}>{props.text}</Button>
        </>
    )
}
