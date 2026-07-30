const interviewReportJsonSchema = {
    type: "object",
    description: "AI generated interview report for a candidate based on resume, self description, and job description.",

    properties: {
        matchScore: {
            type: "number",
            description: "A score between 0 and 100 indicating how well the candidate's profile matches the job description."
        },

        technicalQuestions: {
            type: "array",
            description: "Technical questions that can be asked in the interview along with their intention and how to answer them. The no. of questions must be 7 to 10.",
            minItems: 7,
            maxItems: 10,
            items: {
                type: "object",
                properties: {
                    question: {
                        type: "string",
                        description: "The technical question that can be asked in the interview."
                    },
                    intention: {
                        type: "string",
                        description: "The intention of the interviewer behind asking this question."
                    },
                    answer: {
                        type: "string",
                        description: "How to answer this question, what points to cover, what approach to take, etc."
                    }
                },
                required: [
                    "question",
                    "intention",
                    "answer"
                ]
            }
        },

        behavioralQuestions: {
            type: "array",
            description: "Behavioral questions that can be asked in the interview along with their intention and how to answer them. The no. of questions must be 5 to 7.",
            minItems: 5,
            maxItems: 7,
            items: {
                type: "object",
                properties: {
                    question: {
                        type: "string",
                        description: "The behavioral question that can be asked in the interview."
                    },
                    intention: {
                        type: "string",
                        description: "The intention of the interviewer behind asking this question."
                    },
                    answer: {
                        type: "string",
                        description: "How to answer this question, what points to cover, what approach to take, etc."
                    }
                },
                required: [
                    "question",
                    "intention",
                    "answer"
                ]
            }
        },

        skillGaps: {
            type: "array",
            description: "List of skill gaps in the candidate's profile along with their severity. The no. of skill gaps must be upto 5.",
            items: {
                type: "object",
                properties: {
                    skill: {
                        type: "string",
                        description: "The skill which the candidate is lacking."
                    },
                    severity: {
                        type: "string",
                        enum: ["low", "medium", "high"],
                        description: "The severity of this skill gap, i.e. how important this skill is for the job and how much it can impact the candidate's chances."
                    }
                },
                required: [
                    "skill",
                    "severity"
                ]
            }
        },

        preparationPlan: {
            type: "array",
            description: "A day-wise preparation plan for the candidate to follow in order to prepare for the interview effectively. The no. of days must be 5 to 7.",
            minItems: 5,
            maxItems: 7,
            items: {
                type: "object",
                properties: {
                    day: {
                        type: "integer",
                        description: "The day number in the preparation plan, starting from 1."
                    },
                    focus: {
                        type: "string",
                        description: "The main focus of this day in the preparation plan, e.g. data structures, system design, mock interviews, etc."
                    },
                    tasks: {
                        type: "array",
                        description: "List of tasks to be done on this day to follow the preparation plan, e.g. read a specific book or article, solve a set of problems, watch a video, etc.",
                        items: {
                            type: "string"
                        }
                    }
                },
                required: [
                    "day",
                    "focus",
                    "tasks"
                ]
            }
        }
    },

    required: [
        "matchScore",
        "technicalQuestions",
        "behavioralQuestions",
        "skillGaps",
        "preparationPlan"
    ]
};

module.exports = {
    interviewReportJsonSchema
};
