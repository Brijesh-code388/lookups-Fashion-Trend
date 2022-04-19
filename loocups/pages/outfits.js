import { Container, useColorModeValue } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Header from '../component/Header'
import Mainboard from '../component/Mainboard';
import Searchheader from '../component/Search'
import Footer from '../component/Footer'
import photo from '../component/api'
import axios from 'axios';
import { useContext } from 'react';
import { useAppContext } from '../component/State/State'

function Outfits() {
    // const [pins, setNewPins] = useState([]);

    const state = useAppContext()
    const [products, setProducts] = state.productsAPI.products
    // console.log(products)

    // useEffect(() => {
    //     const getImages = async () => {
    //         try {

    //             // const img = await photo.get("https://api.unsplash.com/search/photos", {
    //             //     params: { query: "indian" }
    //             // });


    //             // console.log(img.data)
    //             // setNewPins(img.data.results)

    //         } catch (err) {
    //             console.log(err)
    //         }
    //     };;
    //     getImages();
    // }, []);


    return (
        <Container maxW={'full'} bg={useColorModeValue('white', 'gray.800')} >
            <Header />
            <Searchheader />
            {/* <Mainboard pins={pins} /> */}
            <Mainboard pins={products} />
            <Footer />
        </Container>
    )
}

export default Outfits;
