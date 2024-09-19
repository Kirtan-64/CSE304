const express = require('express');
const fs = require('fs');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {

    const file = 'text.txt'

    // Read the file content
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        res.send(`<h1>The following are the file contents</h1>
            <p>${data}</p>`);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Visit http://localhost:${PORT}`);
    console.log('Press Ctrl+C to stop the server');
  }   );
  