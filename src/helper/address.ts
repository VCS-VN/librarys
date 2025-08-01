export const extractAddressComponent = (
  addressComponents: any[],
  type: string,
  field = 'long_name',
) => {
  const comp = addressComponents.find((c) => c.types.includes(type));
  return comp ? comp[field] : null;
};
