import React from 'react';
import {Navbar, ListItem, List} from "./Navbar.styled";

function NavbarComponent (props) {
    return (
        <Navbar>
            <List>
                <ListItem>
                    Cart Data
                </ListItem>
            </List>
        </Navbar>
    )
}

export default NavbarComponent;

