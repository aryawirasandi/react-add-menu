import styled from 'styled-components';
import device  from '../../Style/Breakpoint';

const CardContainer = styled.div`
  display: block;
  box-shadow: 10px 10px 12px -9px rgba(236,236,236,0.56);
  height: 100vh;
  background: #f8f8f8;
  margin: 0 auto;
  @media ${device.mobileSmall}{
        margin: 0 auto;
        width : 90vw;
  }
  @media ${device.laptop}{
        width : 30vw;
        margin : 0 auto;
        box-shadow: 10px 10px 12px -9px rgba(0,0,0,0.56);
  }

`

export default CardContainer;