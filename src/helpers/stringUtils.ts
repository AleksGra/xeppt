export const formatNumber = (number?: number) => {
    if (Number.isInteger(number)) {
        return `$${number}.00`;
    } else {
        return `$${number?.toFixed(2)}`;
    }
};

export const hideCardNumbers = (cardNumber?: string) => {
    if (!cardNumber) return null
    if (cardNumber.length < 16) {
        console.error('Invalid card number length');
        return cardNumber;
    }
    const firstFour = cardNumber.slice(0, 4);
    const lastFour = cardNumber.slice(-4);
    const middleNumbers = cardNumber.slice(4, 12).replace(/\d/g, '•');
    const formattedMiddleNumbers = middleNumbers.replace(/(.{4})/g, '$1 ').trim();
    return `${firstFour} ${formattedMiddleNumbers} ${lastFour}`;
};

export const getInitials = (firstName: string, lastName: string): string => {
    const firstInitial = firstName.charAt(0).toUpperCase();
    const lastInitial = lastName.charAt(0).toUpperCase();
    return `${firstInitial}${lastInitial}`;
}


