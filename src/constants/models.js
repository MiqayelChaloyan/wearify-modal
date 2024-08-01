// VIDEO RECORDING TEST API
import sneakersGlb from 'assets/models/sneakers.glb';

const COMBINED_MODELS = {
    sneakers: [
        {
            id: 1,
            name: 'sneakers',
            link: 'https://wearifyai.github.io/ARTryOn/?effect=bows',
            imgPath: 'https://drive.google.com/thumbnail?id=1rHnMmArBGamBFGZc2BWnWVGt0grheE_3',
            glbPath: 'https://cdn.shopify.com/3d/models/o/2ab2b12bf3cf4cb2/pregomesh.glb' //sneakersGlb,
        },
        // {
        //     id: 2,
        //     name: 'sneakers',
        //     link: '',
        //     imgPath: 'https://drive.google.com/thumbnail?id=1A6b7nYJwCEaXFnqVMIS9015DV7IZMwJI',
        //     glbPath: 'https://cdn.shopify.com/3d/models/o/58d9e69190bab792/black.glb' //sneakersGlb,
        // },
        // {
        //     id: 3,
        //     name: 'sneakers',
        //     link: '',
        //     imgPath: 'https://drive.google.com/thumbnail?id=1A6b7nYJwCEaXFnqVMIS9015DV7IZMwJI',
        //     glbPath: 'https://cdn.shopify.com/3d/models/o/58d9e69190bab792/black.glb' //sneakersGlb,
        // },
        // {
        //     id: 4,
        //     name: 'sneakers',
        //     link: '',
        //     imgPath: 'https://drive.google.com/thumbnail?id=1WsB6OW4sOrHpxHFNSEtBTP6WfWSa2HbN',
        //     glbPath: sneakersGlb,
        // }
    ],
    sportWearing: [
        {
            id: 1,
            name: 'sport wearing',
            link: 'https://style.clo-set.com/fitting/IR5k8MMQlGf3QPkI80wHZw%3D%3D?ui_colorway=0&ui_size=0&ui_capture=0&ui_shopping_bag=0&ui_like=0&ui_logo=none',
            imgPath: 'https://drive.google.com/thumbnail?id=1pMoIjswfAStn68kPKIh3IyTYnLUq1HdZ',
            glbPath: 'https://style.clo-set.com/fitting/dxHpcm6cq08oKNptygCT%2Bg%3D%3D?ui_colorway=0&ui_size=0&ui_capture=0&ui_shopping_bag=0&ui_like=0&ui_logo=none',
            result: [
                'https://drive.google.com/thumbnail?id=1XXN0I5vHzEGMVXQMYKUxbaQFKpTA3FUY',
                'https://drive.google.com/thumbnail?id=1vb225jy9V4vrZb2PGYHkVH-90NgpS1GP',
                'https://drive.google.com/thumbnail?id=18yQQmvNCf76K5Pl80168dKcuc9jIfbtJ'
            ]
        },
        {
            id: 2,
            name: 'sport wearing',
            link: 'https://style.clo-set.com/fitting/IR5k8MMQlGf3QPkI80wHZw%3D%3D?ui_colorway=0&ui_size=0&ui_capture=0&ui_shopping_bag=0&ui_like=0&ui_logo=none',
            imgPath: 'https://drive.google.com/thumbnail?id=1qjDh9JG_riWPHG8W1PMf46quQIc6Gnbm',
            glbPath: 'https://style.clo-set.com/fitting/dxHpcm6cq08oKNptygCT%2Bg%3D%3D?ui_colorway=0&ui_size=0&ui_capture=0&ui_shopping_bag=0&ui_like=0&ui_logo=none',
            result: [
                'https://drive.google.com/thumbnail?id=1XXN0I5vHzEGMVXQMYKUxbaQFKpTA3FUY',
                'https://drive.google.com/thumbnail?id=1vb225jy9V4vrZb2PGYHkVH-90NgpS1GP',
                'https://drive.google.com/thumbnail?id=18yQQmvNCf76K5Pl80168dKcuc9jIfbtJ'
            ]
        },
        // {
        //     id: 3,
        //     name: 'sport wearing',
        //     link: 'https://style.clo-set.com/fitting/IR5k8MMQlGf3QPkI80wHZw%3D%3D?ui_colorway=0&ui_size=0&ui_capture=0&ui_shopping_bag=0&ui_like=0&ui_logo=none',
        //     imgPath: 'https://drive.google.com/thumbnail?id=1gu_VIpuyI5Vyd-IqSNE2t2gNEXt3kREN',
        //     glbPath: 'https://style.clo-set.com/fitting/IR5k8MMQlGf3QPkI80wHZw%3D%3D?ui_colorway=0&ui_size=0&ui_capture=0&ui_shopping_bag=0&ui_like=0&ui_logo=none',
        //     result: [
        //         'https://drive.google.com/thumbnail?id=1XXN0I5vHzEGMVXQMYKUxbaQFKpTA3FUY',
        //         'https://drive.google.com/thumbnail?id=1vb225jy9V4vrZb2PGYHkVH-90NgpS1GP',
        //         'https://drive.google.com/thumbnail?id=18yQQmvNCf76K5Pl80168dKcuc9jIfbtJ'
        //     ]
        // },
        // {
        //     id: 4,
        //     name: 'sport wearing',
        //     link: 'https://style.clo-set.com/fitting/IR5k8MMQlGf3QPkI80wHZw%3D%3D?ui_colorway=0&ui_size=0&ui_capture=0&ui_shopping_bag=0&ui_like=0&ui_logo=none',
        //     imgPath: 'https://drive.google.com/thumbnail?id=1v5H18ELXfBzGMTlqmehgwWxqok9VJ6cw',
        //     glbPath: 'https://style.clo-set.com/fitting/IR5k8MMQlGf3QPkI80wHZw%3D%3D?ui_colorway=0&ui_size=0&ui_capture=0&ui_shopping_bag=0&ui_like=0&ui_logo=none',
        //     result: [
        //         'https://drive.google.com/thumbnail?id=1XXN0I5vHzEGMVXQMYKUxbaQFKpTA3FUY',
        //         'https://drive.google.com/thumbnail?id=1vb225jy9V4vrZb2PGYHkVH-90NgpS1GP',
        //         'https://drive.google.com/thumbnail?id=18yQQmvNCf76K5Pl80168dKcuc9jIfbtJ'
        //     ]
        // },
    ]
};

export default COMBINED_MODELS;



// Example
// glbPath: 'https://cdn.shopify.com/3d/models/o/58d9e69190bab792/black.glb' twinz