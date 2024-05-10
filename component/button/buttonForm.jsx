import {Button} from "@nextui-org/react";

export default function ButtonForm(props) {
    const {isDisabled, handleClick} = props;
    return (
        <>
            <Button
                isDisabled={isDisabled}
                onClick={handleClick}
                className={props.className}
                color="primary"
            >
            {props.text}
            </Button>
        </>
    )
}
