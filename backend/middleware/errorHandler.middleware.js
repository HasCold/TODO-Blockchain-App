const errorHandler = async (res, statusCode = 500, message = "Internal server error") => {
    return res.status(statusCode).json({
        success: false,
        message
    });
}

const asyncErrorHandler = (passedFunc) => async (req, res, next) => {
    return Promise.resolve(passedFunc(req, res, next)).catch((error) => {
        return errorHandler(res, 500, error.message);
    });
}

const apiResponse = (res, statusCode, success, data) => {
    return res.status(statusCode).json({    
        success,
        data
    })
}

module.exports = {errorHandler, asyncErrorHandler, apiResponse}