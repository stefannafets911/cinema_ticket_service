import styled from 'styled-components';

export const MoviesWrapper = styled.div`
    width: 100%;
    height: auto;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const SearchButton = styled.button`
    background: #466A98;
    font-size: 20px;
    border-radius: 3px;
    border: unset;
    margin-top: 25px;
    color: white;
    height: 40px;
    transition: .3s;
    margin-bottom: 5px;
    :hover{
      background: #5585c1;
    }
`;

export const MoviesContainer = styled.div`
    display:flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    height: auto;
    margin-top: 20px;
`;

export const Header = styled.div`
    display:flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    @media (max-width: 768px) {
      flex-direction: column;
      max-width: 300px;
    }
`;

export const HeaderBlock = styled.div`
    display:flex;
    flex-direction: column;
`;

export const Input = styled.input`
  height: 25px;
  padding: 8px 13px;
  font-size: 16px;
  border: unset;
  margin-bottom: 5px;
  border-radius: 3px;
  box-shadow: inset 0 1px 1px black;
`;