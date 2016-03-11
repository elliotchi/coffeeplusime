var app = require('./server-config');

var PORT = process.env.PORT || 3000;
app.listen(PORT);
console.log('server listening on ', PORT);