export default function ModelViewer({ uriGlb }) {
    return (
        <div className='viewer'>
            <model-viewer
                src={uriGlb}
                // ios-src={'/model/main.usdc'}
                seamless-poster
                environment-image='neutral'
                shadow-intensity='1'
                autoplay
                ar
                ar-modes='webxr scene-viewer quick-look'
                camera-controls
                touch-action='pan-y'
                auto-rotate
                i
                nteraction-prompt-threshold='1500'
                enable-pan
                min-field-of-view='1deg'
                width='1800px'
                disable-zoom
                loading='eager'
            // poster="https://test-aorist-bucket.s3.amazonaws.com/images/artwork/900x600/187.1.jpg"

            >
            </model-viewer>
        </div>
    )
};