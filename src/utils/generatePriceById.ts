interface PriceTier {
    tier: number;
    price: number;
}

const priceTiers: PriceTier[] = [
    { tier: 1, price: 9.99 },
    { tier: 2, price: 19.99 },
    { tier: 3, price: 29.99 },
    { tier: 4, price: 39.99 },
    { tier: 5, price: 49.99 },
    { tier: 6, price: 59.99 },
    { tier: 7, price: 69.99 },
];

// Define the maximum ID ranges for each pricing tier
const idRanges: number[] = [
    100000, 200000, 300000, 400000, 500000, 600000, 700000, 800000, 900000,
    1000000,
];

export const getPriceById = (id: number): number => {
    for (const maxIdRange of idRanges) {
        if (id <= maxIdRange) {
            // Calculate the width of each pricing tier range
            const priceTierRange = maxIdRange / priceTiers.length;

            // Determine the position of the ID within the current pricing tier range
            const priceTierPosition = id / priceTierRange;

            // Round down to get the pricing tier index
            let tierIndex = Math.floor(priceTierPosition);

            // Ensure the pricing tier index is within the valid range
            tierIndex = Math.min(tierIndex, priceTiers.length - 1);

            // Return the price based on the determined pricing tier
            return priceTiers[tierIndex].price;
        }
    }

    // If the ID is not within any pricing tier range, throw an error
    throw new Error('Invalid ID encountered.');
};
