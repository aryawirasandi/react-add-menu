import React from 'react';
import Card from "./components/CardContainer/Card";
import './index.css';
import NavbarComponent from "./components/Navbar/NavbarComponent.js"
import ListItemComponent from "./components/ListItem/ListItemComponent.js";
import Footer from './components/FooterComponent/FooterComponent.js';
function App() {
  return (
        <React.Fragment>
            <Card>
                <NavbarComponent/>
                <ListItemComponent/>
            </Card>
            <Footer title="Add To Cart"/>
        </React.Fragment>
  );
}

export default App;
