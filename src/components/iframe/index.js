import './styles.css';

const Iframe = ({ src }) => {
    return (
        <iframe
            src={src}
            title="DeepAR Try On"
            allow="camera *; microphone *"
            frameBorder="0"
            scrolling="no"
            className='iframe'
            id='my-iframe'
        />
    )
};

export default Iframe;