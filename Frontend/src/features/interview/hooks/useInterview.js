import { generateInterviewReport, getInterviewReportById , getAllInterviewReports , generateResumePdf } from "../services/interview.api"
import { useContext } from "react"
import { InterviewContext } from "../interview.context"
import { toast } from "react-toastify";

export const useInterview = () => {

    const context = useContext(InterviewContext)
    

    if (!context) {
        throw new Error("useInterview must be used within an InterviewProvider")
    }

    const { loading, setLoading, downloadingResume, setDownloadingResume, report, setReport, reports, setReports } = context

    const generateReport = async ({ jobDescription, selfDescription, resumeFile }) => {
        setLoading(true)
        let response = null
        try {
            response = await generateInterviewReport({ jobDescription, selfDescription, resumeFile })
            setReport(response.interviewReport)
            toast.success(response.message);
            return response.interviewReport
        } catch (err) {
            toast.error(err.response?.data?.message || "Something went wrong.");
            return null;
        } finally {
            setLoading(false)
        }

    }

    const getReportById = async (interviewId) => {
        setLoading(true)
        let response = null
        try {
            response = await getInterviewReportById(interviewId)
            setReport(response.interviewReport)
            return response.interviewReport
        } catch (err) {
            toast.error(err.response?.data?.message || "Something went wrong.");
            setReport(null)
            return null;
        } finally {
            setLoading(false)
        }

    }

    const getReports = async () => {
        setLoading(true)
        let response = null
        try {
            response = await getAllInterviewReports()
            setReports(response.interviewReports)
            return response.interviewReports
        } catch (err) {
            toast.error(err.response?.data?.message || "Something went wrong.");
            return [];
        } finally {
            setLoading(false)
        }

    }

    const getResumePdf = async (interviewReportId) => {
        setDownloadingResume(true)
        let response = null
        try {
            response = await generateResumePdf({ interviewReportId })
            const url = window.URL.createObjectURL(new Blob([ response ], { type: "application/pdf" }))
            const link = document.createElement("a")
            link.href = url
            link.setAttribute("download", `resume_${interviewReportId}.pdf`)
            document.body.appendChild(link)
            link.click()
            toast.success("Resume downloaded successfully.");
            return true;
        }
        catch (err) {
            toast.error(err.response?.data?.message || "Failed to download resume.");
            return false;
        } finally {
            setDownloadingResume(false)
        }
    }

    return { loading, downloadingResume, report, reports, generateReport, getReportById, getReports , getResumePdf }

}