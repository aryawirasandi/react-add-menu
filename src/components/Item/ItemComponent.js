import React from "react";
import Images from '../Item/ItemComponent.styled';
import styled from 'styled-components/';

const Flex =  styled.div `
  display: flex;
  justify-content: space-between;
  margin: auto 16px;
`
const AddCartButton = styled.button`
   list-style: none;
    display: inline;
    padding: 10px;
    background: salmon;
    color: white;
    border: none;
    border-radius: 21px;
    box-shadow: 10px 10px 12px -9px rgba(0,0,0,0.56);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
`
const ButtonFlexWrapper = styled.div`
  align-self: center;
`
function ItemComponent(props){
    return (
        <div key={props.id}>
            <Images src={props.url} alt={props.propName}/>
            <h3>{props.name}</h3>
            <Flex>
                <div>
                    <p>Rp 15000</p>
                    <p>Category: </p>
                </div>
                <ButtonFlexWrapper>
                    <AddCartButton>Add To Cart</AddCartButton>
                </ButtonFlexWrapper>
            </Flex>
        </div>
    )
}

export default ItemComponent;