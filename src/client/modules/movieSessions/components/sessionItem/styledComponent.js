import styled from 'styled-components';

export const SessionBlock = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid #d0d0d0;
    font-family: 'Montserrat', sans-serif;
    color: #ececec;
    font-size: 14px;
    border-radius: 3px;
    height: 400px;
    margin: 0 0 10px 20px;
    flex: 0 calc(50% - 30px);
    @media (max-width: 1280px) {
        min-height: 500px;
    }
    @media (max-width: 1024px) {
        flex: 0 100%;
        margin: 10px 15px;
    }
    @media (max-width: 765px) {
        height: auto;
    }
`;

export const Title = styled.div`
    font-size: 20px;
    text-transform: capitalize;
    margin-bottom: 10px;
`;

export const Image = styled.img`
    height: auto;
    max-width: 200px;
    max-height: 300px;
`;

export const SessionInfo = styled.div`
    padding: 0 15px;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    height: 300px;
    @media (max-width: 1280px) {
        flex-direction: column;
        height: auto;
    }
    @media (max-width: 768px) {
        height: auto;
        margin-bottom: 15px;
    }
`;

export const AdditionalInfo = styled.div`
    padding: 0 15px;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const BuyButton = styled.button`
    background: #26987B;
    font-size: 20px;
    border-radius: 3px;
    border: unset;
    margin-top: 25px;
    color: white;
    height: 40px;
    transition: .3s;
    width: 180px;
    :hover{
      background: #449883;
    }
`;

export const TextBlock = styled.div`
    display: block;
    font-size: 16px;
    margin-bottom: 10px;
`;

export const Block = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;