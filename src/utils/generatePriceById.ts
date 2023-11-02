interface PriceRange {
    maxId: number;
    price: number;
}

export const generatePriceById = (
    id: number,
    priceRanges: PriceRange[],
): number => {
    let low = 0;
    let high = priceRanges.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        if (id <= priceRanges[mid].maxId) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    if (low < priceRanges.length) {
        return priceRanges[low].price;
    }

    throw new Error('Invalid ID encountered.');
};
