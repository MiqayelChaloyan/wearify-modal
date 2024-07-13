const initialState = {
    images: [],
};

const imageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_IMAGE':
            return {
                ...state,
                images: [...state.images, action.payload],
            };
        case 'REMOVE_IMAGE':
            return {
                ...state,
                images: state.images.filter((image, index) => index !== action.payload),
            };
        case 'CLEAR_IMAGES':
            return {
                ...state,
                images: [],
            };
        default:
            return state;
    }
};

export const addImage = (image) => ({
    type: 'ADD_IMAGE',
    payload: image,
});

export const removeImage = (index) => ({
    type: 'REMOVE_IMAGE',
    payload: index,
});

export const clearImages = () => ({
    type: 'CLEAR_IMAGES',
});

export default imageReducer;
