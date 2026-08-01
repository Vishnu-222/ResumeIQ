const resumePdfJsonSchema = {
    type: "object",
    description:
        "AI generated ATS-friendly resume in HTML format tailored for the provided job description.",

    properties: {
        html: {
            type: "string",
            description:
                "A complete HTML document representing a professional ATS-friendly resume. The HTML must include inline CSS and be ready for direct conversion to PDF using Puppeteer."
        }
    },

    required: ["html"]
};

module.exports = {
    resumePdfJsonSchema
};