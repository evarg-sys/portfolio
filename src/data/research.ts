/**
 * Research entries: papers, abstracts, PDFs, and code.
 * - pdfUrl: link to the paper PDF (e.g. arXiv, your site, or direct URL).
 * - codeUrl: link to GitHub repo or code (optional).
 */

export interface ResearchEntry {
  title: string;
  abstract: string;
  pdfUrl?: string;
  codeUrl?: string;
}

export const research: ResearchEntry[] = [
  {
    title: "Project Trishul",
    abstract:
      "Emergency response routing and resource allocation using reinforcement learning and spatial analytics.",
    pdfUrl: "/projects/disaster-response-ai",
    codeUrl: "https://github.com/evarg-sys/Project-Trishul",
  },
  {
    title: "Quant Regime Strategy",
    abstract:
      "Independent study in quantitative research: stylized facts, HMM regimes, GARCH forecasting, and regime-filtered momentum.",
    pdfUrl: "/projects/quant-regime-strategy",
    codeUrl: "https://github.com/evarg-sys",
  },
];
