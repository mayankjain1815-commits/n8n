export const smartDecimal = (value: number, decimals = 2): number => {
	// Check if integer
	if (Number.isInteger(value)) {
		return value;
	}

	return Number(value.toFixed(decimals));
};
