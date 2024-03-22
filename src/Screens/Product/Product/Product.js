import React, { useState, useEffect } from 'react';
import { PhnText, Image, Main, Img, ProfileDiv, Text, Div, AccDiv, DivRow, Row, SubDiv, DivSlot, ActionDiv } from './ProductElement';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import axios from 'axios';
import NavBar from '../../../components/Navbar/navbar';
import dashboard from '../../../images/dashboard.png';
import productsImg from '../../../images/products.png'; // Rename products to productsImg to avoid naming conflicts
import order from '../../../images/order.png';
import customers from '../../../images/customers.png';
import seller from '../../../images/seller.png';
import offers from '../../../images/offers.png';
import { useNavigate } from 'react-router-dom';

function Product() {
      const [products, setProducts] = useState([]);
      const navigate = useNavigate();

      const handleDivClick = () => {
        navigate('/AddProduct');
      };
    
  
      const getAllProducts = async () => {
            const res = await axios.get('http://localhost:3000/api/getAllProducts');
            if (res?.data?.success == 1) {
              setProducts(res?.data?.data);
            }
      }
          
      useEffect(() => {
      getAllProducts()
      
      }, [])

    return (
        <>
            <NavBar />
            <DivRow>
                <ProfileDiv>
                    <Div>
                        <SubDiv>
                            <Image src={dashboard} />
                            <PhnText>Dashboard</PhnText>
                        </SubDiv>
                        <SubDiv>
                            <Image src={productsImg} /> {/* Use productsImg instead of products */}
                            <PhnText onClick={handleDivClick}>Add Products</PhnText>
                        </SubDiv>
                        <SubDiv>
                            <Image src={order} />
                            <PhnText>Orders</PhnText>
                        </SubDiv>
                        <SubDiv>
                            <Image src={customers} />
                            <PhnText>Customers</PhnText>
                        </SubDiv>
                        <SubDiv>
                            <Image src={seller} />
                            <PhnText>Sellers</PhnText>
                        </SubDiv>
                        <SubDiv>
                            <Image src={offers} />
                            <PhnText>Hot Offers</PhnText>
                        </SubDiv>
                    </Div>
                </ProfileDiv>

                <Main>  
                {products?.map((item, i) => (
                        <DivSlot  key={item?._id}>
                            <Img src={item?.image } alt={ item?.title} />
                            <AccDiv>
                                <DivRow>
                                    <Text>{item?.title}</Text> {/* Render product title */}
                                </DivRow>
                                <DivRow>
                                    <Text style={{fontWeight: "bold"}}>£ {item?.price}</Text> {/* Render product price */}
                                </DivRow>
                                <ActionDiv>
                                    <Row><EditOutlined /> Edit</Row>
                                    <Row style={{borderColor: "#b51d18" , color: "#b51d18"}}><DeleteOutlined />Delete</Row>
                                </ActionDiv>   
                            </AccDiv>
                            {/* <About>{item?.desc}</About> Render product description */}
                        </DivSlot>
                    ))}
                </Main>
            </DivRow>
        </>
    );
}

export default Product;
