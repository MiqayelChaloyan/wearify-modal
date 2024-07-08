import Header from "components/popup2/header";

import './styles.css';
import ImagesUploadTest from "components/upload-images";


const Step3 = () => {
    return (
        <div>
            <Header title={'BE YOUR OWN MODEL'} />
            <div className='options'>
                <p className='information'>
                    Please upload 1 to 10 clear individual photos of the
                    same model, ensuring that the model's facial features 
                    are fully visible in the pictures.
                </p>
                <ImagesUploadTest/>
            </div>
        </div>
    )
}

export default Step3;