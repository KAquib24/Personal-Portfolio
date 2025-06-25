
import React from "react";

const RESUME_PDF_URL = "/lovable-uploads/resume.pdf"; // Replace this with your actual PDF filename on upload

const ResumeViewer = () => (
  <section className="w-full flex flex-col gap-7 items-center py-14" id="resume">
    <h2 className="font-display text-3xl md:text-4xl font-bold mb-3 text-primary text-center">
      Resume
    </h2>
    <div className="w-full max-w-2xl z-10 rounded-lg overflow-hidden border shadow-lg bg-card flex flex-col items-center">
      <iframe
        src={RESUME_PDF_URL}
        className="w-full min-h-[420px] h-[66vw] max-h-[900px] rounded-lg"
        title="Resume PDF"
        loading="lazy"
      ></iframe>
    </div>
    <a
      href={RESUME_PDF_URL}
      download="Aquib-Khan-Resume.pdf"
      className="mt-4 bg-primary text-primary-foreground px-7 py-3 rounded-lg text-lg font-semibold shadow hover:scale-105 transition"
    >
      Download Resume (PDF)
    </a>
  </section>
);

export default ResumeViewer;
