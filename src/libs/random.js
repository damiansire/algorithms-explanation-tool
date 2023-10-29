export const generateRandomNumber = () => {
    return Math.floor(Math.random() * 100);
};

export const generateRandomArray = (length) => {
    const array = [];

    for (let i = 0; i < length; i++) {
        const randomElement = generateRandomNumber();
        array.push(randomElement);
    }

    return array;
};
