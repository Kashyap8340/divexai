import MentorDashboard from "@/components/mentor/MentorDashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Mentor Dashboard | Divexa",
};

export default function Page() {
    return <MentorDashboard />;
}
