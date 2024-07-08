import { useEffect, useRef, useState } from "react";
import UploadImage from 'icons/upload';
import { IoMdImages } from "react-icons/io";

import Close from "./close";

import './styles.css';


const ImageUpload = () => {
    const [images, setImages] = useState([]);
    const [imageURLs, setImageURLs] = useState([]);
    const [isView, setIsView] = useState(false);
    const [removeIndices, setRemoveIndices] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    const fileInputRef = useRef(null);

    const fileSelectedHandler = (e) => {
        const selectedFiles = Array.from(e.target.files);
        if (images.length + selectedFiles.length > 10) {
            setErrorMessage("You can upload a maximum of 10 images.");
        } else {
            setErrorMessage("");
            setImages([...images, ...selectedFiles]);
        }
    };

    const handleUploadClick = () => {
        fileInputRef.current.click();
    };

    useEffect(() => {
        if (images.length < 1) return;
        const newImageUrls = images.map((image) => URL.createObjectURL(image));
        setImageURLs(newImageUrls);
    }, [images]);

    const handleOpenImages = () => {
        setIsView(!isView);
    };

    const handleImageClick = (index) => {
        if (removeIndices.includes(index)) {
            setRemoveIndices(removeIndices.filter(i => i !== index));
        } else {
            setRemoveIndices([...removeIndices, index]);
        }
    };

    const handleRemoveImages = () => {
        const newImages = images.filter((_, index) => !removeIndices.includes(index));
        setImages(newImages);
        setRemoveIndices([]);
        setIsView(newImages.length > 0);
    };

    return (
        <>
            <input
                type="file"
                multiple
                ref={fileInputRef}
                onChange={fileSelectedHandler}
                style={{ display: 'none' }}
            />
            <div className='uploades-buttons'>
                <button className={`${images.length >= 10 ? 'disabled' : 'upload-button'}`} onClick={handleUploadClick} disabled={images.length >= 10}>
                    <div>
                        <UploadImage />
                    </div>
                    <p>Upload</p>
                </button>
                <button className={`${images.length === 0 ? 'disabled' : 'upload-button'}`} onClick={handleOpenImages} disabled={images.length === 0}>
                    <div>
                        <IoMdImages size={30} color='#ACACAC' />
                    </div>
                    <p>Images</p>
                </button>
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}

            {isView && (
                <div className='images-view'>
                    <div className='images-popup'>
                        <div className='images-header'>
                            <Close className='close-modal' onClose={handleOpenImages} />
                        </div>
                        <div className='images'>
                            {imageURLs.map((imageSrc, index) => (
                                <div key={index} className={`image-container ${removeIndices.includes(index) ? 'remove-elem' : ''}`}>
                                    <img src={imageSrc} alt="not found" className='upload-image' onClick={() => handleImageClick(index)} />
                                </div>
                            ))}
                        </div>

                        <div className='remove'>
                            <button className='remove-button' onClick={handleRemoveImages} disabled={removeIndices.length === 0}>
                                Remove
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ImageUpload;
