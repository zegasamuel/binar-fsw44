const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '..', 'image'))
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

const upload = multer({ storage: storage })

const fileUploadMiddleware = (req, res, next) => {
    const uploadHandler = upload.single('profile_picture')
    uploadHandler(req, res, (err) => {
        if (err) {
            return res.status(500).json({ error: err.message })
        }
        if (req.file) {
            req.fileUrl = path.join('image', req.file.filename)
        }
        next()
    })
}

module.exports = fileUploadMiddleware
