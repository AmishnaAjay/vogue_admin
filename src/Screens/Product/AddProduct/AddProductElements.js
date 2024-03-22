import styled from 'styled-components'

export const Main = styled.div`
    // display:grid;
    justify-content: center;
    z-index: 1;
    margin: auto;
    width: 35%;
    align-items: center;
    padding: 50px 0px 50px 0px;

    @media screen and (max-width: 800px) {
        width: 70%;
    }
    @media screen and (max-width: 500px) {
        width: 85%;
    }  
        
`;

export const Text = styled.div`
    text-align: center;
    color: #000;
    font-family: "Poppins", sans-serif;   
    font-weight: bold;
    font-size: 24px;
    padding: 10px;
`



export const PhnText = styled.div`
    color: #000;
    font-family: "Poppins", sans-serif; 
    font-size: 14px;  
    padding: 10px 0px 10px 0px;
`
export const Div = styled.div`
// display: grid;
// alignItems: center;
// justifyContent: center;
    padding-top: 30px;
`
export const Input = styled.input`
    // text-align: center;
    border: 1px solid #949CA9;
    font-family: "Poppins", sans-serif;   
    padding: 10px;
    border-radius: 5px;
    color: #949CA9;
    width: 95%;
    font-size: 14px; 
`
export const Img = styled.img`
    width: 150px; 
    height: 150px;
    border: none;
`
