export const passwordValidation = {
  rule: {
    type: 'password',
    minLength: 8,
    uppercase: 1,
    numbers: 1,
    matchesOneOf: ['@', '_', '-', '.', '!'],
  },
  message:
    'Your password needs to be at least 8 chars, include 1 Uppercase, 1 Number and one special character',
};

export const usernameValidation = {
  rule: {
    type: 'string',
    notEmpty: true,
  },
  message: 'Please enter a username',
};
