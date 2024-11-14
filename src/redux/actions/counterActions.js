export const Increment = () => ({
  type: "INCREMENT",
});

export const Decrement = () => ({
  type: "DECREMENT",
});

export const SetCount= (value) => ({
    type: "SETCOUNT",
    payload: Number(value),
})