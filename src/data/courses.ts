/**
 * Courses & certifications. Job simulations are completed via Forage.
 */

export interface Course {
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  credentialUrl?: string;
  skills?: string[];
  viaForage?: boolean;
}

export const courses: Course[] = [
  {
    title: "Microsoft Security Essentials: Concepts, Solutions, and AI-Powered Protection",
    issuer: "LinkedIn",
    issueDate: "Mar 2026",
    credentialUrl: "https://www.linkedin.com/learning/",
    skills: ["Cybersecurity", "AI"],
  },
  {
    title: "GenAI Basics - How LLMs Work",
    issuer: "Duke University",
    issueDate: "Sep 2025",
    credentialId: "3MS9D398EBMT",
    credentialUrl: "https://www.coursera.org/",
    skills: ["Artificial Intelligence (AI)"],
  },
  {
    title: "Mastercard - Cybersecurity Job Simulation",
    issuer: "Mastercard",
    issueDate: "Mar 2025",
    credentialId: "ygqtPqdn6kxDEq5Hb",
    credentialUrl: "https://www.theforage.com/",
    skills: ["Cybersecurity"],
    viaForage: true,
  },
  {
    title: "Practical GitHub Actions",
    issuer: "LinkedIn",
    issueDate: "Sep 2025",
    credentialUrl: "https://www.linkedin.com/learning/",
    skills: ["GitHub"],
  },
  {
    title: "Introduction to Career Skills in Data Analytics",
    issuer: "LinkedIn",
    issueDate: "Sep 2025",
    credentialUrl: "https://www.linkedin.com/learning/",
    skills: ["Tech Career Skills", "Data Analytics"],
  },
  {
    title: "behavioral finance",
    issuer: "Duke University",
    issueDate: "Feb 2023",
    credentialUrl: "https://www.coursera.org/",
    skills: ["Financial Analysis"],
  },
  {
    title: "AI materials",
    issuer: "Korea Advanced Institute of Science and Technology (KAIST)",
    issueDate: "Jan 2023",
    skills: ["Artificial Intelligence (AI)"],
  },
];
