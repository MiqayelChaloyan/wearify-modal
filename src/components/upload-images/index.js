// import React, { useRef, useState } from 'react';

// import { useDispatch, useSelector } from 'react-redux';
// import { handleAddImage, handleUpdateData } from 'reducer/features/State';

// import { v4 as uuidv4 } from 'uuid';

// import SlickSlider from 'ui/slickSlider';

// import UploadImage from 'icons/upload';

// import { ErrorMessege, OptionsTexts } from 'constants';

// import cn from 'classnames';

// import './styles.css';


// const ImageUpload = React.memo(() => {
//     const { uploadImages } = useSelector((state) => state.data);
//     const dispatch = useDispatch();

//     const [images, setImages] = useState([]);
//     const [imageURLs, setImageURLs] = useState([]);
//     const [errorMessage, setErrorMessage] = useState("");
//     const fileInputRef = useRef(null);

//     const fileSelectedHandler = (e) => {
//         const selectedFiles = Array.from(e.target.files);
//         if (images.length + selectedFiles.length > 10) {
//             setErrorMessage(ErrorMessege.messege);
//         } else {
//             setErrorMessage("");
//             setImages([...images, ...selectedFiles]);
//             const newImageURLs = selectedFiles?.map(file => ({
//                 id: uuidv4(),
//                 source: URL.createObjectURL(file)
//             }));
//             setImageURLs([...imageURLs, ...newImageURLs]);

//             // if (imageURLs.length) {
//             console.log(newImageURLs)
//             // dispatch(handleAddImage({ uploadImages: [...imageURLs] }));
//             // }
//         }
//     };

//     const handleUploadClick = () => {
//         fileInputRef.current.click();
//     };

//     const handleRemoveClick = (id) => {
//         setImageURLs(imageURLs.filter(image => image.id !== id));
//         setImages(images.filter((_, index) => imageURLs[index].id !== id));
//     };

//     const imageURLsSlide = imageURLs?.map((item) => (
//         <div
//             key={item.id}
//             className='slide-container-item'
//             onClick={() => handleRemoveClick(item.id)}
//         >
//             <button className='slide-button'>
//                 <img
//                     src={item.source}
//                     alt={item.id}
//                     className='slide-image'
//                 />
//             </button>
//         </div>
//     ));

//     return (
//         <>
//             <input
//                 type='file'
//                 multiple
//                 ref={fileInputRef}
//                 onChange={fileSelectedHandler}
//                 style={{ display: 'none' }}
//             />
//             {errorMessage && <p className="error-message">{errorMessage}</p>}
//             <div>
//                 {!imageURLs.length ?
//                     (<div className='uploades-buttons'>
//                         <button
//                             className={`${images.length >= 10 ? 'disabled' : 'upload-button'}`}
//                             onClick={handleUploadClick} disabled={images.length >= 10}
//                         >
//                             <div>
//                                 <UploadImage />
//                             </div>
//                             <p>{OptionsTexts.upload}</p>
//                         </button>
//                     </div>
//                     ) : (imageURLsSlide.length >= 3 ? (
//                         <div className='images-url-slide'>
//                             <SlickSlider>
//                                 <button
//                                     className={`${images.length >= 10 ? 'disabled' : 'upload-button'}`}
//                                     onClick={handleUploadClick} disabled={images.length >= 10}
//                                 >
//                                     <div>
//                                         <UploadImage />
//                                     </div>
//                                     <p>{OptionsTexts.upload}</p>
//                                 </button>
//                                 {imageURLsSlide}
//                             </SlickSlider>
//                         </div>
//                     ) : (
//                         <div className='images-bg'>
//                             <div>
//                                 <button
//                                     className={`${images.length >= 10 ? 'disabled' : 'upload-button'}`}
//                                     onClick={handleUploadClick} disabled={images.length >= 10}
//                                 >
//                                     <div>
//                                         <UploadImage />
//                                     </div>
//                                     <p>{OptionsTexts.upload}</p>
//                                 </button>
//                             </div>
//                             {imageURLsSlide}
//                         </div>
//                     )
//                     )
//                 }
//             </div>
//         </>
//     );
// });

// export default ImageUpload;





















import React, { useRef, useState } from 'react';

import { useDispatch } from 'react-redux';
import { addImage, removeImage } from 'reducer/features/ImagesState';

import { v4 as uuidv4 } from 'uuid';

import SlickSlider from 'ui/slickSlider';

import UploadImage from 'icons/upload';

import { ErrorMessege, OptionsTexts } from 'constants';

import cn from 'classnames';

import './styles.css';
import RemovePopup from './remove';


const ImageUpload = React.memo(() => {
    const dispatch = useDispatch();

    const [images, setImages] = useState([]);
    const [imageURLs, setImageURLs] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const fileInputRef = useRef(null);

    const fileSelectedHandler = (e) => {
        const selectedFiles = Array.from(e.target.files);

        if (images.length + selectedFiles.length > 10) {
            setErrorMessage(ErrorMessege.messege);
            return;
        }

        setErrorMessage("");

        const newImages = [...images, ...selectedFiles];
        setImages(newImages);

        const newImageURLs = selectedFiles.map(file => ({
            id: uuidv4(),
            source: URL.createObjectURL(file)
        }));

        const updatedImageURLs = [...imageURLs, ...newImageURLs];
        setImageURLs(updatedImageURLs);

        newImageURLs.forEach(newImage => {
            dispatch(addImage(newImage));
        });
    };

    const handleUploadClick = () => {
        fileInputRef.current.click();
    };


    const [removeId, setRemoveId] = useState(null)

    const handleYesClick = (id) => {
        setIsModalOpen(false);
        handleRemoveClick(removeId);
    };

    const handleRemoveClick = (id) => {
        setImageURLs(imageURLs.filter(image => image.id !== id));
        setImages(images.filter((_, index) => imageURLs[index].id !== id));
        dispatch(removeImage(id));
    };

    const handleNoClick = () => {
        setIsModalOpen(false);
    };

    const imageURLsSlide = imageURLs?.map((item) => (
        <div
            key={item.id}
            className='slide-container-item'
            onClick={() => {
                setIsModalOpen(true);
                setRemoveId(item.id)
            }}
        >
            <button className='slide-button'>
                <img
                    src={item.source}
                    alt={item.id}
                    className='slide-image'
                />
            </button>
        </div>
    ));

    return (
        <>
            <input
                type='file'
                multiple
                ref={fileInputRef}
                onChange={fileSelectedHandler}
                style={{ display: 'none' }}
            />
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <div>
                {!imageURLs.length ?
                    (<div className='uploades-buttons'>
                        <button
                            className={`${images.length >= 10 ? 'disabled' : 'upload-button'}`}
                            onClick={handleUploadClick} disabled={images.length >= 10}
                        >
                            <div>
                                <UploadImage />
                            </div>
                            <p>{OptionsTexts.upload}</p>
                        </button>
                    </div>
                    ) : (imageURLsSlide.length >= 3 ? (
                        <div className='images-url-slide'>
                            <SlickSlider>
                                <button
                                    className={`${images.length >= 10 ? 'disabled' : 'upload-button'}`}
                                    onClick={handleUploadClick} disabled={images.length >= 10}
                                >
                                    <div>
                                        <UploadImage />
                                    </div>
                                    <p>{OptionsTexts.upload}</p>
                                </button>
                                {imageURLsSlide}
                            </SlickSlider>
                        </div>
                    ) : (
                        <div className='images-bg'>
                            <div>
                                <button
                                    className={`${images.length >= 10 ? 'disabled' : 'upload-button'}`}
                                    onClick={handleUploadClick} disabled={images.length >= 10}
                                >
                                    <div>
                                        <UploadImage />
                                    </div>
                                    <p>{OptionsTexts.upload}</p>
                                </button>
                            </div>
                            {imageURLsSlide}
                        </div>
                    )
                    )
                }
            </div>

            {isModalOpen &&
                <RemovePopup
                    handleYesClick={handleYesClick}
                    handleNoClick={handleNoClick}
                />}
        </>
    );
});

export default ImageUpload;