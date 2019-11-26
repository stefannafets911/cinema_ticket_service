import styled from 'styled-components';


export const MovieBlock = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid #d0d0d0;
    font-family: 'Montserrat', sans-serif;
    color: #ececec;
    font-size: 14px;
    border-radius: 3px;
    height: 420px;
    margin: 0 0 10px 20px;
    flex: 0 calc(50% - 30px);
    @media (max-width: 1024px) {
      flex: 0 100%;
      margin: 10px 15px;
    }
    @media (max-width: 425px) {
      height: auto;
    }
`;

export const Id = styled.div`
    display: none;
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

export const Description = styled.div`
  font-size: 16px;
  padding-left: 20px;
  overflow: hidden;
  position: relative; 
  line-height: 1.3;
  max-height: 300px; 
  text-align: justify;  
  margin-right: -1em;
  padding-right: 1em;
  :before{
      content: '...';
      position: absolute;
      right: 6px;
      bottom: 0;
  }
  :after {
    content: '';
    position: absolute;
    right: 3px;
    width: 1em;
    height: 1em;
    background: #011631;
}
`;

export const MovieInfo = styled.div`
    padding: 0 15px;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    height: 300px;
    @media (max-width: 425px) {
      height: auto;
      flex-wrap: wrap;
    }
`;

export const AdditionalInfo = styled.div`
    margin: 15px 0;
`;

export const TextBlock = styled.div`
    font-size: 16px;
`;
