const mongoose = require("mongoose");

/**
 * @description Validate interview report generation request.
 */
const validateInterview = (req, res, next) => {

    const { jobDescription, selfDescription } = req.body;
    const resume = req.file;

    // Job Description
    if (!jobDescription?.trim()) {
        return res.status(400).json({
            success: false,
            message: "Job description is required."
        });
    }

    if (jobDescription.trim().length < 30) {
        return res.status(400).json({
            success: false,
            message: "Job description must be at least 30 characters long."
        });
    }

    // Resume OR Self Description
    if (!resume && !selfDescription?.trim()) {
        return res.status(400).json({
            success: false,
            message: "Please upload a resume or provide a self description."
        });
    }

    // Self Description
    if (selfDescription?.trim() && selfDescription.trim().length < 20) {
        return res.status(400).json({
            success: false,
            message: "Self description must be at least 20 characters long."
        });
    }

    // Resume Type
    if (resume && resume.mimetype !== "application/pdf") {
        return res.status(400).json({
            success: false,
            message: "Only PDF resumes are allowed."
        });
    }

    next();
};

/**
 * @description Validate interview report id.
 */
const validateInterviewId = (req, res, next) => {

    const { interviewId, interviewReportId } = req.params;

    const id = interviewId || interviewReportId;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
            success: false,
            message: "Invalid interview id."
        });
    }

    next();
};

module.exports = {
    validateInterview,
    validateInterviewId
};