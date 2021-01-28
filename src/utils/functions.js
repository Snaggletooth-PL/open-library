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
};

export const isString = (value) =>
{
    return typeof value === 'string' || value instanceof String;
};

export const isObject = (value) =>
{
    return typeof value === 'object' || value instanceof Object;
};

export const toProperCase = (value) =>
{
    if (isString(value))
    {
        let subStrings = value.split(' ');

        for (let i = 0; i < subStrings.length; ++i)
        {
            subStrings[i] = subStrings[i].charAt(0).toUpperCase() + subStrings[i].slice(1).toLowerCase();
        }

        return subStrings.join(' ');
    }

    return undefined;
};