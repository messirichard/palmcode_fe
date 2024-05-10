import {Button} from "@nextui-org/react";

export default function ButtonForm(props) {
    const {isDisabled} = props;
    return (
        <>
            <Button
                isDisabled={isDisabled}
                onClick={props.handleClick}
                className={props.className}
                color="primary"
            >
            {props.text}
            </Button>
        </>
    )
}
