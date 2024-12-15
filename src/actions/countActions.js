export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const increment = (product) => ({
    type: INCREMENT,
    payload: product,
});

export const decrement = (product) => ({
    type: DECREMENT,
    payload: product,
});
