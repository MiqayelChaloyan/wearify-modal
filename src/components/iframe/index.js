import './styles.css';

const Iframe = ({ src }) => {
    return (
        <iframe
            src={src}
            title="DeepAR Try On"
            allow="camera *; microphone *"
            frameborder="0"
            scrolling="no"
            className='iframe'
        />
    )
};

export default Iframe;