import React, { useEffect, useState } from 'react';

import { getStorage, ref, getDownloadURL } from 'firebase/storage';

import { useDispatch, useSelector } from 'react-redux';
import { handleSwitchPopup } from 'reducer/features/ResultReducer';
import { handleNext } from 'reducer/features/Steps';

import { CgClose } from 'react-icons/cg';

import colors from 'themes/colors';

import { Box, Button, Container, Header, Image, ResultBox } from './styles';


const Result = () => {
    const dispatch = useDispatch();
    const [url, setUrl] = useState(null);
    const { images } = useSelector(state => state.imageReducer);


    console.log(url, 'url');
    
    const userId = images[0]?.id;

    const handleClose = () => {
        dispatch(handleSwitchPopup());
        dispatch(handleNext())
    };

    const storage = getStorage();
    const starsRef = ref(storage, `WEB/${userId}/res_${userId}.png`);

    useEffect(() => {
        getDownloadURL(starsRef)
            .then((url) => {
                setUrl(url)
            })
            .catch(_ => {
                console.log(_, 'error');
            })
    }, []);


    return (
        <Container>
            <Header>
                <Button type='button' onClick={handleClose}>
                    <CgClose size={20} fill={colors.darkBlue} />
                </Button>
            </Header>
            <Box>
                <ResultBox>
                    <Image src={url} />
                </ResultBox>
            </Box>
        </Container>
    )
};

export default Result;



// TODO

// import Slider from 'react-slick';
// import settings from './settings';


// const { item } = useSelector((state) => state.ItemReducer);

// const imagesResult = item?.result.map((image, index) => (
//     <img
//         key={index}
//         src={image}
//         className='result-image'
//     />
// ));

// Component
//  <Slider {...settings}>
//      {imagesResult}
// </Slider> 