'use client'

import {Button} from "@nextui-org/react";

export default function ButtonForm(props) {
    return (
        <>
            <Button 
            onClick={props.handleClick}
            className={props.className}
            color="primary"
            >
            {props.text}
            </Button>
        </>
    )
}
