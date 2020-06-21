import React from "react";
import styled from 'styled-components';

const FooterText = styled.p `
  font-size: 12px;
  color: white;
  text-align: center;
`

const FooterContainer = styled.footer `
  width: 100%;
  position: absolute;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  background: blue;
`

const Footer = (props) => {
    return (
        <FooterContainer>
            <FooterText>
                {props.title}
            </FooterText>
        </FooterContainer>
    )
}

export default Footer;