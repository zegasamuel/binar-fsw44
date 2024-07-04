const express = require('express');
const multer = require('multer');
const path = require('path');
const bucket = require('../config/firebase.confg');

const app = express();
const port = 3000;

// Set up Multer storage
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const fileUploadMiddleware = (req, res, next) => {
    const uploadHandler = upload.single('profile_picture');
    uploadHandler(req, res, (err) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        if (req.file) {
            const blob = bucket.file(Date.now() + '-' + req.file.originalname);
            const blobStream = blob.createWriteStream({
                metadata: {
                    contentType: req.file.mimetype
                }
            });

            blobStream.on('error', (error) => {
                return res.status(500).json({ error: error.message });
            });

            blobStream.on('finish', async () => {
                // Make the file public (optional)
                await blob.makePublic();

                // Construct the public URL
                req.fileUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;

                next();
            });

            blobStream.end(req.file.buffer);
        } else {
            next();
        }
    });
};

app.post('/upload', fileUploadMiddleware, (req, res) => {
    res.send({ fileUrl: req.fileUrl });
});

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
