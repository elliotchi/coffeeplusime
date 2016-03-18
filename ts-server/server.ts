import app from './server-config';
require('dotenv').config();

const PORT = process.env.PORT || 3000;
app.listen(PORT);
console.log('server listening on ', PORT);