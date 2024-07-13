// import { useEffect, useRef, useState } from 'react';

// import UploadImage from 'icons/upload';
// import { IoMdImages } from 'react-icons/io';

// import Close from './close';

// import { ErrorMessege, OptionsTexts } from 'constants';

// import './styles.css';


// const ImageUpload = () => {
//     const [images, setImages] = useState([]);
//     const [imageURLs, setImageURLs] = useState([]);
//     const [isView, setIsView] = useState(false);
//     const [removeIndices, setRemoveIndices] = useState([]);
//     const [errorMessage, setErrorMessage] = useState("");
//     const fileInputRef = useRef(null);

//     const fileSelectedHandler = (e) => {
//         const selectedFiles = Array.from(e.target.files);
//         if (images.length + selectedFiles.length > 10) {
//             setErrorMessage(ErrorMessege.messege);
//         } else {
//             setErrorMessage("");
//             setImages([...images, ...selectedFiles]);
//         }
//     };

//     const handleUploadClick = () => {
//         fileInputRef.current.click();
//     };

//     useEffect(() => {
//         if (images.length < 1) return;
//         const newImageUrls = images.map((image) => URL.createObjectURL(image));
//         setImageURLs(newImageUrls);
//     }, [images]);

//     const handleOpenImages = () => {
//         setIsView(!isView);
//     };

//     const handleImageClick = (index) => {
//         if (removeIndices.includes(index)) {
//             setRemoveIndices(removeIndices.filter(i => i !== index));
//         } else {
//             setRemoveIndices([...removeIndices, index]);
//         }
//     };

//     const handleRemoveImages = () => {
//         const newImages = images.filter((_, index) => !removeIndices.includes(index));
//         setImages(newImages);
//         setRemoveIndices([]);
//         setIsView(newImages.length > 0);
//     };

//     return (
//         <>
//             <input
//                 type='file'
//                 multiple
//                 ref={fileInputRef}
//                 onChange={fileSelectedHandler}
//                 style={{ display: 'none' }}
//             />
//             <div className='uploades-buttons'>
//                 <button className={`${images.length >= 10 ? 'disabled' : 'upload-button'}`} onClick={handleUploadClick} disabled={images.length >= 10}>
//                     <div>
//                         <UploadImage />
//                     </div>
//                     <p>{OptionsTexts.upload}</p>
//                 </button>
//                 <button className={`${images.length === 0 ? 'disabled' : 'upload-button'}`} onClick={handleOpenImages} disabled={images.length === 0}>
//                     <div>
//                         <IoMdImages size={30} color='#ACACAC' />
//                     </div>
//                     <p>{OptionsTexts.images}</p>
//                 </button>
//             </div>
//             {errorMessage && <p className="error-message">{errorMessage}</p>}

//             {isView && (
//                 <div className='images-view'>
//                     <div className='images-popup'>
//                         <div className='images-header'>
//                             <Close className='close-modal' onClose={handleOpenImages} />
//                         </div>
//                         <div className='images'>
//                             {imageURLs.map((imageSrc, index) => (
//                                 <div key={index} className={`image-container ${removeIndices.includes(index) ? 'remove-elem' : ''}`}>
//                                     <img src={imageSrc} alt="not found" className='upload-image' onClick={() => handleImageClick(index)} />
//                                 </div>
//                             ))}
//                         </div>

//                         <div className='remove'>
//                             <button className='remove-button' onClick={handleRemoveImages} disabled={removeIndices.length === 0}>
//                                 Remove
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// };

// export default ImageUpload;
// <-- before







// after -->
import { v4 as uuidv4 } from 'uuid';

import { useEffect, useRef, useState } from 'react';

import UploadImage from 'icons/upload';
import { IoMdImages } from 'react-icons/io';

import Close from './close';

import { ErrorMessege, OptionsTexts } from 'constants';
import cn from 'classnames';

import './styles.css';
import SlickSlider from 'ui/slickSlider';


const ImageUpload = () => {
    const [images, setImages] = useState([]);
    const [imageURLs, setImageURLs] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    const fileInputRef = useRef(null);

    const fileSelectedHandler = (e) => {
        const selectedFiles = Array.from(e.target.files);
        if (images.length + selectedFiles.length > 10) {
            setErrorMessage(ErrorMessege.messege);
        } else {
            setErrorMessage("");
            setImages([...images, ...selectedFiles]);
            const newImageURLs = selectedFiles?.map(file => ({
                id: uuidv4(),
                source: URL.createObjectURL(file)
            }));
            setImageURLs([...imageURLs, ...newImageURLs]);
        }
    };

    const handleUploadClick = () => {
        fileInputRef.current.click();
    };

    const handleRemoveClick = (id) => {
        setImageURLs(imageURLs.filter(image => image.id !== id));
        setImages(images.filter((_, index) => imageURLs[index].id !== id));
    };

    const imageURLsSlide = imageURLs?.map((item) => (
        <div
            key={item.id}
            className='slide-container-item'
            onClick={() => handleRemoveClick(item.id)}
        >
            <button className='slide-button'>
                <img
                    src={item.source}
                    alt={item.id}
                    className='slide-image'
                />
            </button>
            {/* <div
                className='remove-button-container'
                onClick={() => handleRemoveClick(item.id)}
            /> */}
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
        </>
    );
};

export default ImageUpload;