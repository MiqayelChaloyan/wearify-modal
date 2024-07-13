// VIDEO RECORDING TEST API
import sneakersGlb from 'assets/models/sneakers.glb';

const COMBINED_MODELS = {
    sneakers: [
        {
            id: 1,
            name: 'sneakers',
            link: '',
            imgPath: 'https://drive.google.com/thumbnail?id=1UFvOIgy9Tr3Y9XE4sP4KX-SJRX-j_VgS',
            glbPath: sneakersGlb,
        },
        {
            id: 2,
            name: 'sneakers',
            link: '',
            imgPath: 'https://drive.google.com/thumbnail?id=1nHwJLuJD8pMaKenekqnN-BQdvlCJ-BOo',
            glbPath: sneakersGlb,
        },
        {
            id: 3,
            name: 'sneakers',
            link: '',
            imgPath: 'https://drive.google.com/thumbnail?id=1FNTltYiW4YeeW1zjGe7WMQhf1dbRs-Lw',
            glbPath: sneakersGlb,
        },
        {
            id: 4,
            name: 'sneakers',
            link: '',
            imgPath: 'https://drive.google.com/thumbnail?id=1WsB6OW4sOrHpxHFNSEtBTP6WfWSa2HbN',
            glbPath: sneakersGlb,
        }
    ],
    sportWearing: [
        {
            id: 1,
            name: 'sport wearing',
            link: 'https://style.clo-set.com/fitting/IR5k8MMQlGf3QPkI80wHZw%3D%3D?ui_colorway=0&ui_size=0&ui_capture=0&ui_shopping_bag=0&ui_like=0&ui_logo=none',
            imgPath: 'https://drive.google.com/thumbnail?id=185R0E69OO_gtMLDLE9TjAbqkF_aRSKKS',
            glbPath: 'https://style.clo-set.com/fitting/IR5k8MMQlGf3QPkI80wHZw%3D%3D?ui_colorway=0&ui_size=0&ui_capture=0&ui_shopping_bag=0&ui_like=0&ui_logo=none',
            result: [
                'https://drive.google.com/thumbnail?id=1XXN0I5vHzEGMVXQMYKUxbaQFKpTA3FUY',
                'https://drive.google.com/thumbnail?id=1rLml0Php91nelUaNcAy9_cNgKWUl11jZ',
                'https://drive.google.com/thumbnail?id=1rLml0Php91nelUaNcAy9_cNgKWUl11jZ'
            ]
        },
        {
            id: 2,
            name: 'sport wearing',
            link: 'https://style.clo-set.com/fitting/IR5k8MMQlGf3QPkI80wHZw%3D%3D?ui_colorway=0&ui_size=0&ui_capture=0&ui_shopping_bag=0&ui_like=0&ui_logo=none',
            imgPath: 'https://drive.google.com/thumbnail?id=1yFi63gbSqE6_xVIpiooL0Y4bl3nn7e1N',
            glbPath: 'https://style.clo-set.com/fitting/IR5k8MMQlGf3QPkI80wHZw%3D%3D?ui_colorway=0&ui_size=0&ui_capture=0&ui_shopping_bag=0&ui_like=0&ui_logo=none',
            result: [
                'https://drive.google.com/thumbnail?id=1XXN0I5vHzEGMVXQMYKUxbaQFKpTA3FUY',
                'https://drive.google.com/thumbnail?id=1rLml0Php91nelUaNcAy9_cNgKWUl11jZ',
                'https://drive.google.com/thumbnail?id=1rLml0Php91nelUaNcAy9_cNgKWUl11jZ'
            ]
        },
    ]
};

export default COMBINED_MODELS;



// Example
// glbPath: 'https://cdn.shopify.com/3d/models/o/58d9e69190bab792/black.glb' twinz