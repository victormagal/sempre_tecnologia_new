export const removeNonDigits = (string) => {
  if (typeof string !== 'string') {
    throw new TypeError('O parâmetro deve ser do tipo string');
  }

  return string.replace(/\D+/g, '');
};
