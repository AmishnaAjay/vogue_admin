import styled from 'styled-components'

export const Main = styled.div`
    // display:grid;
    justify-content: center;
    z-index: 1;
    margin: auto;
    width: 35%;
    align-items: center;
    padding: 50px 0px 50px 0px;

    @media screen and (max-width: 500px) {
        width: 70%;
    }
    @media screen and (max-width: 400px) {
        width: 68%;
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
export const SubText = styled.div`
    color: #949CA9;
    font-family: "Poppins", sans-serif;  
    font-size: 14px; 
    text-align: center;
`

export const InputDiv = styled.div`
    margin-top: 20px;
`
export const Input = styled.input`
   
    border: 1px solid #949CA9;
    font-family: "Poppins", sans-serif;   
    padding: 10px;
    border-radius: 5px;
    color: #949CA9;
    width: 95%;
    font-size: 14px; 
`




export const AccDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`
export const AccText = styled.div`
    color: #000;
    font-family: "Poppins", sans-serif;   
    padding-inline: 5px;
`
export const Signup = styled.div`
    color: #2F93F6;
    font-family: "Poppins", sans-serif;   
    cursor: pointer; 
`