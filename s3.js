const config = require("./config")
const multer = require("multer")
const multerS3 = require("multer-s3")
const AWS = require("aws-sdk")
AWS.config.update(config.s3.keys)
let s3 = new AWS.S3()
const app = {
	file_upload:
		({ folder, field }) =>
		(req, res, next) => {
			next()
		},
	// multer({
	// 	storage: multerS3({
	// 		s3: s3,
	// 		bucket: config.s3.bucket_name,
	// 		acl: "public-read",
	// 		key: (req, file, cb) => {
	// 			console.log(file)
	// 			cb(
	// 				null,
	// 				`${folder}/` + Math.random() + "." + file.mimetype.split("/")[1]
	// 			)
	// 		},
	// 	}),
	// }).single(field),
}
module.exports = app
