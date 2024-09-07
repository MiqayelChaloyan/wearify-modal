// VIDEO RECORDING TEST API
import sneakersGlb from 'assets/models/Pregomesh_bows-GLB-textured.glb';

const COMBINED_MODELS = {
    sneakers: [
        {
            id: '8211035390105',
            name: 'sneakers',
            link: 'https://wearifyai.github.io/ARTryOn/?effect=bows',
            imgPath: 'https://drive.google.com/thumbnail?id=1rHnMmArBGamBFGZc2BWnWVGt0grheE_3',
            glbPath: 'https://cdn.shopify.com/3d/models/o/2ab2b12bf3cf4cb2/pregomesh.glb' // sneakersGlb,
        },
    ],
    sportWearing: [
        {
            id: '8211036766361',
            name: 'Clothes',
            link: 'https://style.clo-set.com/fitting/VHFF%2FhHOfsKxdmNtRHgRGw%3D%3D?ui_colorway=0&ui_size=0&ui_capture=0&ui_shopping_bag=0&ui_like=0&ui_logo=none',
            imgPath: 'https://drive.google.com/thumbnail?id=1yFi63gbSqE6_xVIpiooL0Y4bl3nn7e1N',
            glbPath: 'https://style.clo-set.com/fitting/VHFF%2FhHOfsKxdmNtRHgRGw%3D%3D?ui_colorway=0&ui_size=0&ui_capture=0&ui_shopping_bag=0&ui_like=0&ui_logo=none',
            result: [
                'https://drive.google.com/thumbnail?id=1XXN0I5vHzEGMVXQMYKUxbaQFKpTA3FUY',
                'https://drive.google.com/thumbnail?id=1vb225jy9V4vrZb2PGYHkVH-90NgpS1GP',
                'https://drive.google.com/thumbnail?id=18yQQmvNCf76K5Pl80168dKcuc9jIfbtJ'
            ]
        },
        {
            id: '8211137200281',
            name: 'AZAT MARD',
            link: 'https://style.clo-set.com/fitting/VHFF%2FhHOfsJJDtlwD7hvZg%3D%3D?ui_colorway=0&ui_size=0&ui_capture=0&ui_shopping_bag=0&ui_like=0&ui_logo=none',
            imgPath: 'https://drive.google.com/thumbnail?id=1KFk3ZMIi9Pzot26xXSiNbSdQVzvoa7mW',
            glbPath: 'https://style.clo-set.com/fitting/VHFF%2FhHOfsJJDtlwD7hvZg%3D%3D?ui_colorway=0&ui_size=0&ui_capture=0&ui_shopping_bag=0&ui_like=0&ui_logo=none',
            result: [
                'https://drive.google.com/thumbnail?id=1XXN0I5vHzEGMVXQMYKUxbaQFKpTA3FUY',
                'https://drive.google.com/thumbnail?id=1vb225jy9V4vrZb2PGYHkVH-90NgpS1GP',
                'https://drive.google.com/thumbnail?id=18yQQmvNCf76K5Pl80168dKcuc9jIfbtJ'
            ]
        },
    ]
};

export default COMBINED_MODELS;



// Example
// glbPath: 'https://cdn.shopify.com/3d/models/o/58d9e69190bab792/black.glb' twinz