require("dotenv").config();

const { GoogleGenAI } = require("@google/genai");

const { interviewReportJsonSchema } = require("./interviewReport.jsonSchema");
const { resume, selfDescription, jobDescription } = require("./dummyData");

const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_GENAI_API_KEY
});

async function main() {
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

        console.log("========== RAW TEXT ==========\n");

        console.log(response.text);

        console.log("\n========== PARSED ==========\n");

        console.log(JSON.parse(response.text));

    } catch (error) {
        console.error("ERROR:");
        console.error(error);
    }
}

main();