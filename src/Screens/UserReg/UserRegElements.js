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
export const SubText = styled.div`
    color: #949CA9;
    font-family: "Poppins", sans-serif;  
    font-size: 14px; 
    text-align: center;
`
export const Req = styled.div`
    color: red;
    font-family: "Poppins", sans-serif;  
    font-size: 12px; 
    padding-top: 5px;
`

export const PhnText = styled.div`
    color: #000;
    font-family: "Poppins", sans-serif; 
    font-size: 14px;  
    padding: 10px 0px 10px 0px;
    
`
export const Div = styled.div`
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

export const PassDiv = styled.div`
display: flex;
flex-direction: row;
// justify-content: center;
`
export const BtnMain = styled.div`
    display: flex;
    justify-content: center;
    height: 3rem;
    z-index: 1;
    border-radius: 5px;
    // width: 30%;
    align-items: center;
    border: 1px solid #949CA9;
    margin: 20px 0px 20px 0px;
`;

export const BtnText = styled.div`
    color: #000;
    font-family: "Poppins", sans-serif;   
   
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
export const SignUp = styled.div`
    color: #2F93F6;
    font-family: "Poppins", sans-serif;    
    cursor: pointer;
`
export const PDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    @media screen and (max-width: 500px) {
        flex-direction: column;
    } 
`

export const Sp = styled.div`
    padding-left: 5px;
`
export const Divp = styled.div`
    width: 100%;
    padding-right: 10px;
`
export const Divc = styled.div`
    width: 100%;
    padding-left: 10px;

    @media screen and (max-width: 500px) {
        padding-left: 0px;    } 
`

export const Logo = styled.img`
    padding: 20px;
`;

export const Drop = styled.div`
    // text-align: center;
    border: 1px solid #949CA9;
    font-family: "Poppins", sans-serif;   
    padding: 10px;
    border-radius: 5px;
    color: #949CA9;
    width: 95%;
    font-size: 14px; 
`