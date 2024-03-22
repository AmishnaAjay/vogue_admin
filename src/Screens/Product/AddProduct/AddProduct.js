import React, { useEffect, useState } from "react";
import { Main, Text, PhnText, Div, Input } from "./AddProductElements";
import Button from "../../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const AddProduct = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [material, setMaterial] = useState('');
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');
  const [price, setPrice] = useState('');
  // const [image, setImage] = useState('');
  const [brand, setBrand] = useState('');
  const [rating, setRating] = useState('');
  const [availability, setAvailability] = useState('');
  const [categories, setCategories] = useState('');

  const navigate = useNavigate();

  
  const handleAdd = async () => {
    try {
      const response = await axios.post('http://localhost:3000/root/addProduct', {
        title: title,
        desc: desc,
        material: material,
        size: size,
        price: price,
        color: color,
        brand: brand,
        rating: rating,
        availability: availability,
        categories: categories,
        // image: image
      });
  
      // Registration successful
      navigate("/Product");
      console.log('Added successfully:', response.data);
    } catch (error) {
      // Registration failed
      console.error('Failed to add:', error.response.data);
    }
  };
  

  return (
    <>
      <Main>
        <Text>Create Product</Text>
        <Div>
          <PhnText>Title</PhnText>
          <Input
            placeholder="Enter product title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></Input>

          <PhnText>Description</PhnText>
          <Input
            placeholder="Description..."
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></Input>

          <PhnText>Material</PhnText>
          <Input
            placeholder="Material"
            value={material}
            onChange={(e) => setMaterial(e.target.value)}
          ></Input>

          <PhnText>Categories</PhnText>
          <Input
            placeholder="Categories"
            value={categories}
            onChange={(e) => setCategories(e.target.value)}
          ></Input>

          <PhnText>Size</PhnText>
          <Input
            placeholder="Size"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          ></Input>

          <PhnText>Color</PhnText>
          <Input
            placeholder="Color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          ></Input>

          <PhnText>Price</PhnText>
          <Input
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          ></Input>

          {/* <PhnText>Image</PhnText>
          <Input type="file" onChange={(e) => setImage(e.target.files[0])} /> */}

          <PhnText>Brand</PhnText>
          <Input
            placeholder="Brand...."
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          ></Input>

          <PhnText>Rating</PhnText>
          <Input
            placeholder="Rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          ></Input>

          <PhnText>Availabilty</PhnText>
          <Input
            placeholder="Availability"
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
          ></Input>
        </Div>
        <Button title="+ Add Product" onClick={handleAdd} />
      </Main>
    </>
  );
};

export default AddProduct;
