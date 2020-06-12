import React from 'react';
import CardContainer from "./Card.styled";


function Card (props) {
    return (
        <CardContainer>
            {props.children}
        </CardContainer>
    )
}

export default Card;