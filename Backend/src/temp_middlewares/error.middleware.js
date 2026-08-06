const multer = require("multer");

const errorHandler = (err, req, res, next) => {

    console.error(err);

    // Multer errors
    if (err instanceof multer.MulterError) {

        if (err.code === "LIMIT_FILE_SIZE") {
            return res.status(400).json({
                success: false,
                message: "Resume size cannot exceed 5 MB."
            });
        }

        return res.status(400).json({
            success: false,
            message: err.message
        });
    }

    // Invalid JSON
    if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
        return res.status(400).json({
            success: false,
            message: "Invalid JSON format."
        });
    }

    // Custom errors
    return res.status(err.statusCode || 500).json({
        success: false,
        message: err.message || "Internal Server Error."
    });

}

module.exports = errorHandler;