import React from "react";
import data from '../../Data/cart-data';
import ItemComponent from "../Item/ItemComponent";
function ListItemComponent (){
    const items = data;
    return (
        items.map(item => (
            <ItemComponent
                id={item.id}
                url={item.url}
                propName={item.propName}
                name={item.name}
            />
        ))
    )
}
export default ListItemComponent