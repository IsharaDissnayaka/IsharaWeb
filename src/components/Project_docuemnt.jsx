import React from "react";
import { motion } from "framer-motion";
import { FileText } from "lucide-react"; // Modern SVG icon set

// PDF imports
import CV from "../assets/pdf/D.M.M.I.T.Dissanayaka.pdf";
import CoverLetter from "../assets/pdf/Cover Letter.pdf";
import CProjectReport from "../assets/pdf/Project Report.pdf";

const docs = [
  {
    title: "Curriculum Vitae (CV)",
    desc: "Academic background, experience, and skills.",
    pdf: CV,
  },
  {
    title: "Cover Letter",
    desc: "Personalized introduction for job applications.",
    pdf: CoverLetter,
  },
  {
    title: "Project Report",
    desc: "Project details and case studies.",
    pdf: CProjectReport,
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 40 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, type: "spring" },
  }),
};

function Documents() {
  return (
    <div className="py-16 min-h-screen ">
      <h2 className="text-4xl font-bold text-center mb-12 text-white"> Journey in One Place </h2>
      <br />
      <br />
       <br />
      <br />
       <br />
      <br />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 max-w-7xl mx-auto">
        {docs.map((doc, idx) => (
          <motion.div
            key={idx}
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl shadow-xl p-8 flex flex-col items-center text-center transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl group"
          >
            <FileText className="w-16 h-16 text-green-700 mb-4 group-hover:text-green-800 transition-colors" />
            <h3 className="font-bold text-2xl mb-2 text-white">{doc.title}</h3>
            <p className="mb-6 text-gray-300">{doc.desc}</p>
            <a
              href={doc.pdf}
              download
              className="px-5 py-2 bg-green-700 text-white rounded-full font-semibold shadow hover:bg-green-800 transition"
            >
              Download PDF
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Documents;
