export const generateRandomPrice = (): number => {
    const pricePoints = [
        4.99, 9.99, 14.99, 19.99, 24.99, 29.99, 34.99, 39.99, 44.99, 49.99,
        54.99, 59.99, 64.99, 69.99,
    ];
    const randomIndex = Math.floor(Math.random() * pricePoints.length);
    return pricePoints[randomIndex];
};
