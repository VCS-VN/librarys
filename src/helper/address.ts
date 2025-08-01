export const extractAddressComponent = (
  addressComponents: any[],
  type: string,
) => {
  const comp = addressComponents.find((c) => c.types.includes(type));
  return comp ? comp.long_name : null;
};
