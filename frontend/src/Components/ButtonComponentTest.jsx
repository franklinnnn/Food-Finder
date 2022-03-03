import React from "react"
import styled from "@emotion/styled"

const Button = styled.span`
    background-color: red;
    color: #fff;
    padding: 10px;
    border-radius: 30px;
`;

const ButtonComponentTest = () => {
    return(
        <>
        <h1>Button Styled Component</h1>
        <Button>Value</Button>
        </>
    )
}

export default ButtonComponentTest