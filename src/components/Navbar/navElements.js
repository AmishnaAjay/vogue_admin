import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom';
// import myImage from '../../images/logo.png';

export const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    
    list-style-type: none;
    justify-content: space-between;
    height: 4rem;
    padding-inline: 50px;
    align-items: center;
   
    background: #000;

    @media screen and (max-width: 500px) {
        padding-inline: 0px;
    }

    // @media screen and (max-width: 780px) {
    //     display: none;
    // }
`;

export const NavbarContainer = styled.input`
    display: flex;
    justify-content: space-between;
    height: 2.5rem;
    z-index: 1;
    border-radius: 15px;
    width: 30%;
    align-items: center;
    background-color: #F2F2F2;
    padding-inline: 20px;
    font-size: 14px;

    @media screen and (max-width: 500px) {
        width: 60%
    }
    `;

    

export const NavMenu = styled.div`
        display: flex;        
        font-family: "Poppins", sans-serif;   
        color: #fff;   
        align-items: center;
        padding-inline: 10px;
        cursor: pointer;
`;

export const NavItem = styled.li`
        height: 80px;
`;

// export const HeaderImg = styled.div`
//         background-image: url(${myImage});
//         width: 50px;
//         height: 50px;
// `;

export const Logo = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 20px;
`;

export const LogoAd = styled.img`
    width: 100px;
    height: 40px;
    border-radius: 20px;
`;

export const Arr = styled.img`
    width: 15px;
    height: 10px;
        margin-block: 20%;
    padding-inline: 5px;
`;

export const Drop = styled.div`
    // text-align: center;
    border: 1px solid #949CA9;
    font-family: "Poppins", sans-serif;   
    padding: 10px;
    border-radius: 4px;
    color: #949CA9;
    // width: 95%;
    font-size: 14px; 
    background-color: #fff;
    position: absolute;
    // top: 70%;
    right: 0;
`
export const PhnText = styled.div`
    color: #000;
    font-family: "Poppins", sans-serif; 
    font-size: 14px;  
    padding: 10px 0px 10px 0px;
    cursor: pointer;
`
export const NavLinks = styled.div`
        color: #fff;
        display: flex;
        align-items: center;
        text-decoration: none;
        padding: 0 1rem;
        height: 100%;
        cursor: pointer;
        

`;

export const NavBtn = styled.nav`
        display: flex;
        height: 30px;
        width: 30px;
        border-radius: 20px;
            padding-top: 15px;
`;

export const NavBtnLink = styled.div`
display: flex;
flex-direction: row;
`;

export const Input = styled.input`
    // text-align: center;
    border: 1px solid #F9F9F9;
    font-family: "Poppins", sans-serif;   
    padding-inline: 30px;
    border-radius: 20px;
    color: black;
    width: 100%;
    font-size: 14px; 
    margin: 10px;
    background-color: #F9F9F9;
`