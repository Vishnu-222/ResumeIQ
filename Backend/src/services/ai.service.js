const { GoogleGenAI } = require("@google/genai")
const {interviewReportJsonSchema} = require("../schemas/interviewReport.jsonSchema")
const {resumePdfJsonSchema} = require("../schemas/resumePdf.jsonSchema")
const puppeteer = require("puppeteer")

const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_GENAI_API_KEY
})



async function generateInterviewReport({ resume, selfDescription, jobDescription }) {
    try {

        const prompt = `
You are an experienced Senior Technical Recruiter, Software Engineering Interviewer, and Career Coach.

Your responsibility is to evaluate a candidate for the given job role by carefully analyzing the candidate's Resume, Self Description, and Job Description.

Your goal is to produce a realistic, professional, and unbiased interview preparation report that helps the candidate understand their current readiness and prepare effectively.

=========================
EVALUATION GUIDELINES
=========================

Carefully compare the Resume and Self Description against the Job Description.

While evaluating, consider all of the following:

• Technical skills
• Relevant work experience
• Project quality and complexity
• Practical implementation experience
• Problem-solving ability
• Software engineering fundamentals
• Technologies required by the Job Description
• Missing skills
• Overall suitability for the role

Never assume experience or skills that are not explicitly mentioned.

Do not invent certifications, achievements, projects, or work experience.

Base every conclusion only on the information provided.

=========================
MATCH SCORE
=========================

Generate a matchScore between 0 and 100.

The score should realistically represent how well the candidate matches the Job Description.

Consider:

- Required technologies
- Relevant experience
- Projects
- Practical implementation
- Skill gaps
- Overall readiness

Do not inflate the score.

=========================
TECHNICAL QUESTIONS
=========================

Generate practical technical interview questions that are specifically tailored to this candidate.

The questions should primarily come from:

- Resume
- Projects
- Work Experience
- Technologies mentioned in the Job Description

Avoid generic textbook questions unless they are highly relevant.

Include a balanced mix of:

- Fundamental concepts
- Practical implementation
- Debugging
- Real-world scenarios
- Best practices

Arrange the questions from easier to more challenging.

For every question provide:

• question
• intention
• answer

The answer should NOT be a memorized paragraph.

Instead provide:

- key concepts to discuss
- expected approach
- important implementation details
- common mistakes to avoid

The answer should prepare the candidate for the interview rather than simply giving a scripted response.

=========================
BEHAVIORAL QUESTIONS
=========================

Generate realistic behavioral interview questions based on the candidate's profile.

Focus on areas such as:

- teamwork
- communication
- ownership
- debugging difficult problems
- handling deadlines
- learning new technologies
- adapting to change
- collaboration

Avoid generic HR questions that could apply to anyone.

Every behavioral question should relate to the candidate's actual background whenever possible.

For every behavioral question provide:

• question
• intention
• answer

The answer should explain:

- what the interviewer wants to evaluate
- how the candidate should structure the response
- important talking points
- mistakes to avoid

=========================
SKILL GAPS
=========================

Identify only meaningful skill gaps.

Do NOT list every technology missing from the resume.

Only include skills that would significantly improve the candidate's chances for this particular role.

Assign one of the following severity levels:

low
medium
high

Severity should represent both:

- importance for the job
- impact on interview performance

=========================
PREPARATION PLAN
=========================

Create a practical preparation plan.

The plan should:

- be sequential
- prioritize the most important topics first
- focus on interview preparation
- contain realistic tasks

Every day should contain:

- one clear focus area
- multiple actionable tasks

Tasks should be practical such as:

- solving coding problems
- revising concepts
- building small implementations
- practicing interview questions
- reading documentation
- reviewing projects

Avoid vague tasks like:

"Learn JavaScript"

Instead prefer:

"Practice closures, promises, async/await, and event loop interview questions."

=========================
IMPORTANT
=========================

Your report must:

- be realistic
- be professional
- be concise
- be actionable
- be personalized
- remain completely factual

Never fabricate information.

Only use information present in the Resume, Self Description, and Job Description.

=========================
CANDIDATE INFORMATION
=========================

Resume:
${resume}

=========================

Self Description:
${selfDescription}

=========================

Job Description:
${jobDescription}
`;

        const response = await ai.models.generateContent({
            model: "gemini-3-flash-preview",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseJsonSchema: interviewReportJsonSchema
            }
        });

        return JSON.parse(response.text)

    } catch (error) {
        console.error("Gemini Error:", error);
        throw error;
    }
}

async function generatePdfFromHtml(htmlContent) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage();
    await page.setContent(htmlContent, { waitUntil: "networkidle0" })

    const pdfBuffer = await page.pdf({
        format: "A4", margin: {
            top: "20mm",
            bottom: "20mm",
            left: "15mm",
            right: "15mm"
        }
    })

    await browser.close()

    return pdfBuffer
}

async function generateResumePdf({ resume, selfDescription, jobDescription }) {

   try {

    const prompt = `
You are an expert Resume Writer, Senior Technical Recruiter, ATS Specialist, and Hiring Manager.

Your task is to rewrite and optimize the candidate's resume specifically for the given Job Description.

=========================
OBJECTIVE
=========================

Create a professional, ATS-friendly resume that maximizes the candidate's chances of getting shortlisted.

Improve wording, formatting, readability, and presentation while remaining completely truthful.

Do NOT invent any:

- work experience
- projects
- companies
- technologies
- certifications
- achievements
- education
- skills

Only use the information available in the Resume and Self Description.

=========================
TAILORING
=========================

Carefully compare the Resume with the Job Description.

Highlight:

- relevant skills
- relevant experience
- matching projects
- keywords from the job description
- measurable achievements whenever possible

If something is not mentioned by the candidate, do NOT add it.

=========================
RESUME STRUCTURE
=========================

Generate a complete professional resume containing appropriate sections such as:

- Header
- Summary
- Skills
- Experience
- Projects
- Education
- Certifications (only if provided)
- Achievements (only if provided)

Only include sections that have information.

=========================
DESIGN
=========================

Return a COMPLETE HTML document.

Requirements:

- HTML5
- Inline CSS only
- No JavaScript
- No external CSS
- No CDN
- No Tailwind
- No Bootstrap

The resume should look modern, clean and professional.

Use:

- proper spacing
- readable typography
- subtle colors
- section headings
- bullet points
- balanced white space

The resume should print properly on A4 paper.

=========================
ATS REQUIREMENTS
=========================

The resume must:

- be ATS friendly
- use simple structure
- avoid unnecessary graphics
- avoid icons
- avoid tables for important information
- preserve keyword readability

=========================
IMPORTANT
=========================

The HTML should be complete.

Include:

<!DOCTYPE html>
<html>
<head>
...
</head>
<body>
...
</body>
</html>

The generated HTML should be directly usable with Puppeteer to generate a PDF.

=========================
CANDIDATE INFORMATION
=========================

Resume:
${resume}

=========================

Self Description:
${selfDescription}

=========================

Job Description:
${jobDescription}
`;

    const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",

        contents: prompt,

        config: {
            responseMimeType: "application/json",
            responseJsonSchema: resumePdfJsonSchema
        }
    });

    const jsonContent = JSON.parse(response.text);

    const pdfBuffer = await generatePdfFromHtml(jsonContent.html);

    return pdfBuffer;
}
catch (error) {
        console.error("Gemini Error:", error);
        throw error;
    }
}

module.exports = { generateInterviewReport, generateResumePdf }