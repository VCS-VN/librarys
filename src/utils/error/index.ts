export const extractError = (error: any) => {
  return {
    message: error.message,
    stack: error.stack,
    response: error.response,
  };
};
