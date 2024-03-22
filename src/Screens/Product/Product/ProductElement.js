import styled from 'styled-components'

export const Main = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 30px;
    grid-column-gap: 30px;
    padding: 50px 50px 50px 50px;
//    width: 100%;
    @media screen and (max-width: 1400px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 500px) {
        grid-template-columns: repeat(1, 1fr);
    }
    
`;


export const Img = styled.img`
    width: 160px;
    height: 130px; 
   
@media screen and (max-width: 1400px) {
        width: 250px;
    }
    @media screen and (max-width: 800px) {
        width: 200px;
    }
`;


export const Image = styled.img`
    border-radius: 100px;
    width: 40px;
    height: 40px;
    // position: absolute;
    // top: 15%;
    // left: 10%;
`;

export const SubImg = styled.img`
display: flex;
width: 30px;
height: 30px;
padding-top: 5px;
padding-right: 5px;
`;

export const Text = styled.div`
    color: #000;
    font-family: "Poppins", sans-serif;   
    // font-weight: bold;
    padding-block: 7px;
    cursor: pointer;
`

export const Div = styled.div`
    display: flex;
    flex-direction: column;
`


export const DivSlot = styled.div`
    display: flex;
    flex-direction: column;
    border: 2px solid #ccc; 
    border-radius: 10px;
    padding-inline: 10px;
`

export const SubDiv = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`

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

export const PhnText = styled.div`
    color: #000;
    font-family: "Poppins", sans-serif; 
    // font-size: 14px;  
    padding: 20px 0px 10px 0px;
    cursor: pointer;
`

export const ProfileDiv = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 10px 0 5px -2px #888;
    width: 15%;
   padding-inline-end: 40px;
    align-items: center;
    margin-top: 20px;
    @media screen and (max-width: 500px) {
        width: 50%;
    }
`
export const DivRow = styled.div`
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 500px) {
        flex-direction: column;
        align-items: center;
    }
`

export const ActionDiv = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5px;
    justify-content: center;

    @media screen and (max-width: 500px) {
        flex-direction: column;
        align-items: center;
    }
`

export const DivRows = styled.div`
    display: flex;
    flex-direction: row;
    padding-right: 50px;
`
export const Row = styled.div`
    padding: 6px;
    border: 2px solid #ccc; 
    border-radius: 5px;
    margin-bottom:10px;
    font-size: 14px;
`
export const AccDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
   
`

export const Rows = styled.div`
    padding-Block: 6px;
    padding-right: 6px;
`
