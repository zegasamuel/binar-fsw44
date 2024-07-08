const multerS3 = require('multer-s3')
const multer = require('multer')
const { S3Client } = require('@aws-sdk/client-s3')
const { Upload } = require('@aws-sdk/lib-storage')
const path = require('path')

const s3 = new S3Client({
    endpoint: 'http://localhost:9000', // MinIO server URL
    region: 'us-east-1', // region is required but can be any string
    credentials: {
        accessKeyId: 'minioadmin', // MinIO access key
        secretAccessKey: 'minioadmin', // MinIO secret key
    },
    forcePathStyle: true, // needed with MinIO
})


const storage = multerS3({
    s3: s3,
    bucket: 'cobain',
    acl: 'public-read',
    key: function (req, file, cb) {
        const extension = path.extname(file.originalname)
        const filename = Date.now() + '-' + path.basename(file.originalname, extension) + extension
        cb(null, filename)
    }
})

const upload = multer({ storage: storage })

const fileUploadMiddleware = (req, res, next) => {
    const uploadHandler = upload.single('profile_picture')
    uploadHandler(req, res, (err) => {
        if (err) {
            console.log(err);
            console.log(err.message);
            return res.status(500).json({ error: err.message })
        }
        if (req.file) {
            req.fileUrl = req.file.location
        }
        next()
    })
}

module.exports = fileUploadMiddleware
