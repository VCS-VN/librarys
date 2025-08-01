export const extractAddressComponent = (
  addressComponents: any[],
  type: string,
  field = 'short_name',
) => {
  const comp = addressComponents.find((c) => c.types.includes(type));

  if (!comp) {
    return null;
  }

  if (!comp?.[field]) {
    return comp?.['long_name'];
  }

  return comp?.[field];
};
