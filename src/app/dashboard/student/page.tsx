import StudentDashboard from "@/components/student/StudentDashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Student Dashboard | Divexa",
};

export default function Page() {
    return <StudentDashboard />;
}
