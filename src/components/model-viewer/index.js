// import src from 'assets/models/arev.glb'
export default function ModelViewer({ uriGlb }) {
    return (
        <div className='viewer'>
            <model-viewer
                src={uriGlb}
                // src={src}
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

            >
            </model-viewer>
        </div>
    )
};