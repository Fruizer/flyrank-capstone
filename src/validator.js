const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter Username: ', (username) => {
  rl.question('Enter Email: ', (email) => {
    rl.question('Enter Password: ', (password) => {
      if (username && email && password) {
        console.log("Success! User registered:", { username, email });
      } else {
        console.log("Error: All fields are required.");
      }
      rl.close();
    });
  });
});
