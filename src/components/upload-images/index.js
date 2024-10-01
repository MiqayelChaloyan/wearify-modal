import React, { useRef, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addImage, clearImages, removeImage } from 'reducer/features/ImagesState';

import { v4 as uuidv4 } from 'uuid';

import UploadImage from 'icons/upload';

import RemovePopup from './remove';

import { OptionsTexts } from 'constants';

import { Box, Column, Image, Item, ItemButton, Text, UploadButton } from './styles';


const ImageUpload = () => {
    const dispatch = useDispatch();

    const { images: data } = useSelector((state) => state.imageReducer);

    const [images, setImages] = useState([]);
    const [imageURLs, setImageURLs] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    // const [removeId, setRemoveId] = useState(null)
    const fileInputRef = useRef(null);

    const fileSelectedHandler = (e) => {
        const selectedFiles = Array.from(e.target.files);

        // if (images.length + selectedFiles.length > 10) {
        //     return;
        // }

        const newImages = [...images, ...selectedFiles];
        setImages(newImages);

        const newImageURLs = selectedFiles.map(file => ({
            id: uuidv4(),
            source: URL.createObjectURL(file)
        }));

        // const updatedImageURLs = [...imageURLs, ...newImageURLs];
        const updatedImageURLs = [...newImageURLs];
        setImageURLs(updatedImageURLs);

        newImageURLs.forEach(newImage => {
            dispatch(addImage(newImage));
        });
    };

    const handleUploadClick = () => {
        fileInputRef.current.click();
    };

    const handleYesClick = (id) => {
        setIsModalOpen(false);
        // handleRemoveClick(removeId);
        handleClearImages();
    };

    // const handleRemoveClick = (id) => {
    //     setImageURLs(imageURLs.filter(image => image.id !== id));
    //     setImages(images.filter((_, index) => imageURLs[index].id !== id));
    //     dispatch(removeImage(id));
    // };

    const handleClearImages = () => {
        setImageURLs([]);
        setImages([]);
        dispatch(clearImages());
    }

    const handleNoClick = () => {
        setIsModalOpen(false);
    };

    // const imageURLsSlide = imageURLs?.map((item) => (
    //     <Item
    //         key={item.id}
    //         onClick={() => {
    //             setIsModalOpen(true);
    //             setRemoveId(item.id)
    //         }}
    //     >
    //         <ItemButton>
    //             <Image src={item.source} alt={item.id} />
    //         </ItemButton>
    //     </Item>
    // ));

    return (
        <>
            <input
                type='file'
                // multiple
                ref={fileInputRef}
                onChange={fileSelectedHandler}
                style={{ display: 'none' }}
            />
            <div>
                {!data.length ?
                    (<Column>
                        <UploadButton
                            $disabled={images.length < 1}
                            onClick={handleUploadClick} disabled={images.length === 1}
                        >
                            <div>
                                <UploadImage />
                            </div>
                            <Text>
                                {OptionsTexts.upload}
                            </Text>
                        </UploadButton>
                    </Column>
                    ) :
                    <Box>
                        <div>
                            <UploadButton
                                $disabled={images.length < 1}
                                onClick={handleUploadClick} disabled={images.length === 1}
                            >
                                <div>
                                    <UploadImage />
                                </div>
                                <Text>
                                    {OptionsTexts.upload}
                                </Text>
                            </UploadButton>
                        </div>
                        {/* {imageURLsSlide} */}
                        <Item
                            onClick={() => {
                                setIsModalOpen(true);
                                // setRemoveId(imageURLs[0].id)
                            }}
                        >
                            <ItemButton>
                                <Image src={data[0].source} alt={data[0].id} />
                            </ItemButton>
                        </Item>
                    </Box>
                }
            </div>
            {
                isModalOpen && (
                    <RemovePopup
                        handleYesClick={handleYesClick}
                        handleNoClick={handleNoClick}
                    />)
            }
        </>
    );
};

export default React.memo(ImageUpload);