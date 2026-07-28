const { GoogleGenAI } = require("@google/genai")
const { z } = require("zod")
const { zodToJsonSchema } = require("zod-to-json-schema")

const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_GENAI_API_KEY
})

const interviewReportSchema = z.object({
    matchScore: z.number().describe("A score between 0 and 100 indicating how well the candidate's profile matches the job describe"),
    technicalQuestions: z.array(z.object({
        question: z.string().describe("The technical question can be asked in the interview"),
        intention: z.string().describe("The intention of interviewer behind asking this question"),
        answer: z.string().describe("How to answer this question, what points to cover, what approach to take etc.")
    })).describe("Technical questions that can be asked in the interview along with their intention and how to answer them"),
    behavioralQuestions: z.array(z.object({
        question: z.string().describe("The behavioral question can be asked in the interview"),
        intention: z.string().describe("The intention of interviewer behind asking this question"),
        answer: z.string().describe("How to answer this question, what points to cover, what approach to take etc.")
    })).describe("Behavioral questions that can be asked in the interview along with their intention and how to answer them"),
    skillGaps: z.array(z.object({
        skill: z.string().describe("The skill which the candidate is lacking"),
        severity: z.enum([ "low", "medium", "high" ]).describe("The severity of this skill gap, i.e. how important is this skill for the job and how much it can impact the candidate's chances")
    })).describe("List of skill gaps in the candidate's profile along with their severity"),
    preparationPlan: z.array(z.object({
        day: z.number().describe("The day number in the preparation plan, starting from 1"),
        focus: z.string().describe("The main focus of this day in the preparation plan, e.g. data structures, system design, mock interviews etc."),
        tasks: z.array(z.string()).describe("List of tasks to be done on this day to follow the preparation plan, e.g. read a specific book or article, solve a set of problems, watch a video etc.")
    })).describe("A day-wise preparation plan for the candidate to follow in order to prepare for the interview effectively")
})

async function generateInterviewReport({ resume, selfDescription, jobDescription }) {
    const prompt = `You are an experienced technical interviewer, hiring manager, and career coach.

    Analyze the candidate's resume, self-description, and the target job description.

    Generate a comprehensive interview report.

    Guidelines:

    1. Calculate a match score between 0 and 100 based on:
    - technical skills
    - projects
    - experience
    - education
    - alignment with the job description

    2. Generate realistic technical interview questions that are specifically related to:
    - the candidate's resume
    - the technologies required by the job
    - the technologies known and worked on by the candidate
    - the candidate's projects

    3. Generate behavioral interview questions that assess communication, teamwork, ownership, leadership, conflict resolution,   adaptability, and problem solving.

    4. For every interview question:
    - explain why the interviewer asks it
    - provide an ideal interview answer
    - keep answers practical and interview-ready

    5. Identify only the missing or weak skills compared to the job description.

    Severity Rules:
    - High: Core required skills missing.
    - Medium: Important but not mandatory skills missing.
    - Low: Nice-to-have skills missing.

    6. Create a practical 7-day preparation plan.
    Each day should focus on one major topic and include actionable tasks.

    Base every recommendation on the provided resume and job description.

    Candidate Resume: ${resume}
    Self Description: ${selfDescription}
    Job Description: ${jobDescription}
`
    const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseSchema: zodToJsonSchema(interviewReportSchema),
        }
    })

    return JSON.parse(response.text);
}

module.exports = {generateInterviewReport}