const report = {
  "matchScore": 82,
  "technicalQuestions": [
    {
      "question": "In your ResumeIQ project, how did you handle the integration with the Gemini AI API and manage the asynchronous nature of the requests?",
      "intention": "To assess the candidate's ability to integrate third-party APIs and handle asynchronous operations in Node.js.",
      "answer": "Discuss the use of the Google Generative AI SDK, using async/await syntax to handle API latency, implementing try-catch blocks for error handling, and providing feedback to the user while the AI processes the data. Avoid forgetting to mention how API keys were secured using environment variables."
    },
    {
      "question": "Can you explain the difference between controlled and uncontrolled components in React, and which one did you use for the Expense Tracker application?",
      "intention": "To test fundamental React state management knowledge.",
      "answer": "Explain that controlled components have their state managed by React (useState), while uncontrolled components rely on the DOM (useRef). For the Expense Tracker, controlled components are usually preferred for form validation. Highlight the importance of the single source of truth."
    },
    {
      "question": "How did you implement JWT authentication in your MERN stack applications? Walk through the flow from login to accessing a protected route.",
      "intention": "To verify the candidate's understanding of security and authentication, which is a key requirement in the JD.",
      "answer": "Describe the flow: User sends credentials -> Server validates -> Server generates JWT with a secret key -> Client stores token (localStorage/Cookies) -> Client sends token in Authorization header for subsequent requests -> Middleware on server verifies token. Mention using 'jsonwebtoken' and 'bcryptjs' for hashing passwords."
    },
    {
      "question": "What is the role of Middleware in Express.js, and can you provide an example of a custom middleware you might write?",
      "intention": "To evaluate the candidate's understanding of the Express.js request-response lifecycle.",
      "answer": "Explain that middleware are functions that have access to the req, res, and next objects. Examples include logging, authentication checks, or body parsing. Describe a simple custom logger or an auth-checker middleware that calls next() if the user is authorized."
    },
    {
      "question": "In MongoDB, what is the difference between an embedded document and a reference? When would you use one over the other?",
      "intention": "To check database design skills and optimization knowledge mentioned in the JD.",
      "answer": "Embedded documents (denormalization) are good for 'one-to-few' relationships and read performance. References (normalization) are better for 'one-to-many' or 'many-to-many' to avoid data duplication. Discuss the 16MB document limit in MongoDB as a constraint for embedding."
    },
    {
      "question": "Given an array of transaction amounts in your Expense Tracker, how would you use JavaScript's reduce method to calculate the total balance?",
      "intention": "To test practical ES6+ JavaScript skills and their application to the candidate's specific projects.",
      "answer": "Show an understanding of the accumulator and current value parameters. The approach should involve initializing the accumulator to 0 and adding each transaction's amount. Mention handling positive (income) and negative (expense) values appropriately."
    },
    {
      "question": "How do you optimize the performance of a React application that displays a large list of items, like an E-commerce product catalog?",
      "intention": "To evaluate performance optimization skills as requested in the Job Description.",
      "answer": "Discuss techniques like React.memo, useMemo, and useCallback to prevent unnecessary re-renders. Also, mention 'windowing' or 'virtualization' using libraries like react-window, and the importance of using unique keys for list items."
    },
    {
      "question": "Explain the Node.js Event Loop. Why is it important not to 'block' it?",
      "intention": "To test core architectural knowledge of the backend stack.",
      "answer": "Explain that the event loop allows Node.js to perform non-blocking I/O operations despite being single-threaded. Mention the phases (timers, poll, check). Explain that blocking the loop with heavy CPU-intensive tasks stops the server from handling other requests."
    }
  ],
  "behavioralQuestions": [
    {
      "question": "Describe a time when you encountered a production bug as an Associate Software Engineer. How did you identify and resolve it?",
      "intention": "To assess problem-solving skills and the ability to work under pressure in a professional setting.",
      "answer": "The candidate should use the STAR method (Situation, Task, Action, Result). Focus on the debugging tools used (e.g., Chrome DevTools, logs), the communication with the team, and the final fix. Avoid blaming others for the bug."
    },
    {
      "question": "In your ResumeIQ project, you integrated AI. Tell me about a technical challenge you faced during this and how you overcame it.",
      "intention": "To evaluate the candidate's ability to learn and implement new, complex technologies independently.",
      "answer": "The candidate should talk about a specific hurdle, such as parsing complex PDF structures or refining AI prompts for better accuracy. Focus on the research process (documentation, forums) and the iterative testing phase."
    },
    {
      "question": "How do you handle a situation where a backend developer provides an API that doesn't meet the frontend requirements you need?",
      "intention": "To test collaboration and communication skills within a cross-functional team.",
      "answer": "Emphasize proactive communication. Describe a scenario where you would propose a specific JSON structure change or discuss performance trade-offs. The goal is to show a collaborative spirit rather than a demanding one."
    },
    {
      "question": "The JD mentions writing clean, maintainable code. Can you share an example of how you've applied this in your projects?",
      "intention": "To evaluate the candidate's commitment to code quality and best practices.",
      "answer": "Mention specific actions like breaking down large React components into smaller reusable ones, using descriptive naming conventions, or implementing a consistent folder structure in the MERN stack. Mentioning code reviews is a plus."
    },
    {
      "question": "How do you prioritize tasks when you have multiple deadlines, such as finishing a project feature while fixing a bug?",
      "intention": "To assess time management and ownership.",
      "answer": "Explain the use of tools (Trello, Jira) or techniques (Eisenhower Matrix). Focus on assessing the impact of the bug vs. the importance of the new feature. Mention the importance of keeping stakeholders informed about progress."
    }
  ],
  "skillGaps": [
    {
      "skill": "Unit Testing (Jest/React Testing Library)",
      "severity": "high"
    },
    {
      "skill": "Advanced MongoDB (Aggregation Framework, Indexing)",
      "severity": "medium"
    },
    {
      "skill": "TypeScript",
      "severity": "medium"
    },
    {
      "skill": "System Design Fundamentals",
      "severity": "low"
    },
    {
      "skill": "CI/CD and Docker implementation",
      "severity": "low"
    }
  ],
  "preparationPlan": [
    {
      "day": 1,
      "focus": "JavaScript & React Mastery",
      "tasks": [
        "Review ES6+ features: Destructuring, Spread/Rest, Promises, and Async/Await.",
        "Deep dive into React Hooks: useEffect dependency arrays, useRef, and custom hooks.",
        "Practice building a small component using React Router and complex state management."
      ]
    },
    {
      "day": 2,
      "focus": "Node.js & Express.js Backend",
      "tasks": [
        "Build a RESTful API with Express including GET, POST, PUT, DELETE routes.",
        "Implement custom middleware for request logging and error handling.",
        "Practice using Postman for API testing and documentation."
      ]
    },
    {
      "day": 3,
      "focus": "MongoDB & Authentication",
      "tasks": [
        "Study MongoDB Mongoose schemas, validation, and basic Aggregation (match, group).",
        "Implement a complete JWT-based auth flow: Signup, Login, and Protected Routes.",
        "Practice password hashing using the bcrypt library."
      ]
    },
    {
      "day": 4,
      "focus": "Data Structures & Unit Testing",
      "tasks": [
        "Solve 5 LeetCode/HackerRank problems focused on Arrays and Strings (common for MERN roles).",
        "Learn basic Jest and React Testing Library syntax.",
        "Write unit tests for one existing component in the Expense Tracker project."
      ]
    },
    {
      "day": 5,
      "focus": "Project Deep-Dive & Performance",
      "tasks": [
        "Prepare a 2-minute walkthrough for the ResumeIQ project focusing on technical hurdles.",
        "Research React performance optimization: memoization and lazy loading.",
        "Review Git workflow: branching, merging, and resolving conflicts."
      ]
    },
    {
      "day": 6,
      "focus": "Advanced Topics & Behavioral Prep",
      "tasks": [
        "Read about TypeScript basics (interfaces, types) as it's a preferred skill in the JD.",
        "Prepare STAR method answers for common behavioral questions (conflict, failure, achievement).",
        "Review basic System Design concepts: Load Balancing, Caching, and Scalability."
      ]
    },
    {
      "day": 7,
      "focus": "Mock Interview & Final Review",
      "tasks": [
        "Conduct a mock technical interview with a peer or using an AI tool.",
        "Review all key concepts from the previous 6 days.",
        "Prepare 3 insightful questions to ask the interviewer about their engineering culture."
      ]
    }
  ]
}