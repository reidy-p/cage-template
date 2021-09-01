// valide a phone number using an external library

const { phone: validatePhone } = require('phone');

exports.handler = async ({ phone }) => {
  const { isValid, countryIso2: country } = validatePhone(phone);
  return {
    isValid, 
    country
  };
};
