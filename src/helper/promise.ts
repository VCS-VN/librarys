export const safePromise = async <T>(p: Promise<T>) => {
  try {
    const value = await p;
    return { ok: true, value };
  } catch (error) {
    return {
      ok: false,
      error,
    };
  }
};
