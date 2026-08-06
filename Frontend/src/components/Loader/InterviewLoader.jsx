import { useEffect, useState } from "react";
import "./interviewLoader.scss";

const steps = [
    "Uploading your resume...",
    "Analyzing job description...",
    "Extracting your skills...",
    "Identifying skill gaps...",
    "Generating technical questions...",
    "Preparing behavioral questions...",
    "Building your roadmap...",
    "Finalizing your interview strategy..."
];

const InterviewLoader = () => {

    const [currentStep, setCurrentStep] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {
            setCurrentStep((prev) => {
                if (prev === steps.length - 1) return prev;
                return prev + 1;
            });
        }, 3000);

        return () => clearInterval(interval);

    }, []);

    return (
        <main className="interview-loader-container">

            <div className="loader-card">

                <div className="spinner"></div>

                <h1>ResumeIQ</h1>

                <h2>Generating Interview Strategy</h2>

                <p className="current-step">
                    {steps[currentStep]}
                </p>

                <p className="waiting-text">
                    This usually takes around 20–30 seconds.
                </p>

            </div>

        </main>
    );
};

export default InterviewLoader;