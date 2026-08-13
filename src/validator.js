const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateUserInput(input = {}) {
  const errors = [];
  const username = input.username ? String(input.username).trim() : '';
  const email = input.email ? String(input.email).trim() : '';
  const password = input.password ? String(input.password) : '';

  if (!username || username.length < 3) {
    errors.push("Username must be at least 3 characters long.");
  }
  if (!email || !EMAIL_REGEX.test(email)) {
    errors.push("Invalid email format.");
  }
  if (!password || password.length < 8) {
    errors.push("Password must be at least 8 characters long.");
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

module.exports = { validateUserInput };
