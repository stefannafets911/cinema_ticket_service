import styled from 'styled-components';

export const Wrapper = styled.div.attrs({
    id: 'MainWrapper'
})`
    width: 100%;
    height: auto;
    min-height: 100vh;
    display:flex;
    justify-content: center;
    align-items: center;
    background: #011631;
    @import url('https://fonts.googleapis.com/css?family=Montserrat');
`;

export const WrapperContent = styled.div`
    display: block;
    width: 100%;
    min-height: inherit;
`;

export const ModalButton = styled.button`
    width: 100%;
    background: #466A98;
    font-size: 20px;
    border-radius: 3px;
    border: unset;
    margin-bottom: 25px;
    color: white;
    height: 40px;
    transition: .3s;
    :hover{
      background: #5585c1;
    }
`;

export const MainBars = styled.i.attrs({
    className: 'fas fa-bars',
})`
  color: #ffffff;
  cursor: pointer;
  font-size: 30px;
  transition: .5s;
  top: 20px;
  right: 15px;
  position: absolute;
  display: ${props => props.isModalOpen ? 'none !important' : 'block'};
`;