const express = require('express');
const { port } = require('./config.json');

const app = express();

app.get('/', (request, response) => {
	return response.sendFile('Profile.js', { root: '.' });
});

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));