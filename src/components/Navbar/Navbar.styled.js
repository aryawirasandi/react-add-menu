import styled from 'styled-components';

const Navbar = styled.nav `
  padding: 25px;
  background: blue;
`

const List = styled.ul `
  margin: 0;
  padding: 0;
  text-align: right;
`

const ListItem = styled.li`
    list-style: none;
    display: inline;
    padding: 10px;
    background: white;
    border-radius: 21px;
    box-shadow: 10px 10px 12px -9px rgba(0,0,0,0.56);
`

export {Navbar, List, ListItem};