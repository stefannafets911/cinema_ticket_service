import styled from 'styled-components';

export const SessionBlock = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0 50%;
    margin: 0 auto;
`;

export const Seat = styled.div`
    display: flex;
    align-self: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    line-height: 2;
    border:1px solid transparent;
    border-radius: 3px;
    background: ${props => props.isFree ? 'green' : 'red'};
    :hover{
      border-color: yellow;
    }
`;

export const Title = styled.div`
    font-size: 20px;
    text-transform: capitalize;
    margin-bottom: 10px;
`;

export const TextBlock = styled.div`
    display: flex;
    color: black;
    font-weight: 600;
    align-items: center;
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row; 
    width: 100%;
    height: 50px;
    font-family: 'Montserrat',sans-serif;
    color: white;
    background: #b3b3b300;
    justify-content: space-around;
    align-items: center;
`;

export const CinemaHall = styled.div`
    display: flex;
    flex-direction: column; 
    width: 90vw;
    max-width: 900px;
    margin: 0 auto;
    align-items: center;
`;

export const Screen = styled.div`
    display: flex;
    justify-content: center;
    height: 20px;
    background: #fabb05;
    width: 100%;
    margin-bottom: 50px;
    text-align: center;
    border-radius: 0 0 30px 30px;
`;

export const OrderForm = styled.div`
    display: flex;
    flex-direction: column; 
    max-width: 300px;
    align-items: center;
    font-family: 'Montserrat',sans-serif;
`;

export const FormTextBlock = styled.div`
    background: white;
    width: 80px;
    height: 20px;
    padding: 10px;
    font-size: 21px;
    text-align: center;
    border: unset;
    border-radius: 3px;
    box-shadow: inset 0 0 6px 4px #0000001c;
    margin-left: 15px;
`;

export const Block = styled.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    margin-bottom: 10px;
`;

export const Label = styled.label`
    font-size: 20px;
    color: white;
    display: flex;
    align-self: center;
`;

export const HeaderInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    margin-bottom: 20px;
    font-family: 'Montserrat',sans-serif;
`;

export const HeaderTextBlock = styled.div`
    font-size: 20px;
    color: white;
`;

export const HeaderMovieName = styled.div`
    font-size: 20px;
    color: white;
    text-transform: capitalize;
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

export const TicketNumber = styled.div`
    background: white;
    width: auto;
    height: auto;
    padding: 10px;
    font-size: 21px;
    text-align: center;
    border: unset;
    border-radius: 3px;
    box-shadow: inset 0 0 6px 4px #0000001c;
    margin-left: 15px;
    margin-top: 10px;
`;