const express = require('express');
const multer = require('multer');
const cors = require('cors')
const fs = require('fs');
const app = express();
const upload = multer({ dest: 'uploads/' }); // Destination folder for file uploads

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors())


// Handle file upload
app.post('/upload', upload.single('image'), (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const file = req.file;

  // Process the uploaded file and form data as needed
//   console.log('Username:', username);
//   console.log('Password:', password);
//   console.log('Uploaded File:', file);

  const obj = {
    username,
    password,
    avatar:file.path + ".jpg"
  }

  // Return a response
  res.json({
    msg:'saved',
    obj
  })
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
