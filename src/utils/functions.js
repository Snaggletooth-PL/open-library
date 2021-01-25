export const isValid = (value) =>
{
    return Boolean(value);
};

export const isNumber = (value) =>
{
    return isValid(value) && isFinite(String(value));
};

export const isUnsignedNumber = (value) =>
{
    return isNumber(value) && value >= 0;
};

export const isBoolean = (value) =>
{
    return typeof value === 'boolean';
}