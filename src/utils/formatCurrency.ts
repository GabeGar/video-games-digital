export const formatCurrency = (number: number): string => {
    const currencyFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    return currencyFormatter.format(number);
};
