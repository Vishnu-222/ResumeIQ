const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * @description Validate user registration request.
 */
const validateRegister = (req, res, next) => {

    const { username, email, password } = req.body;

    if (!username?.trim()) {
        return res.status(400).json({
            success: false,
            message: "Username is required."
        });
    }

    if (!email?.trim()) {
        return res.status(400).json({
            success: false,
            message: "Email is required."
        });
    }

    if (!emailRegex.test(email.trim())) {
        return res.status(400).json({
            success: false,
            message: "Please enter a valid email address."
        });
    }

    if (!password?.trim()) {
        return res.status(400).json({
            success: false,
            message: "Password is required."
        });
    }

    if (password.trim().length < 8) {
        return res.status(400).json({
            success: false,
            message: "Password must be at least 8 characters long."
        });
    }

    next();
};

/**
 * @description Validate user login request.
 */
const validateLogin = (req, res, next) => {

    const { email, password } = req.body;

    if (!email?.trim()) {
        return res.status(400).json({
            success: false,
            message: "Email is required."
        });
    }

    if (!emailRegex.test(email.trim())) {
        return res.status(400).json({
            success: false,
            message: "Please enter a valid email address."
        });
    }

    if (!password?.trim()) {
        return res.status(400).json({
            success: false,
            message: "Password is required."
        });
    }

    next();
};

module.exports = {
    validateRegister,
    validateLogin
};