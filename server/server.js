const app = require('./express');
const port = process.env.PORT || 8080; // used to create, sign, and verify tokens
// =======================
// start the server ======
// =======================
app.listen(port);
console.log('Magic happens at http://localhost:' + port);
console.log(process.env);
