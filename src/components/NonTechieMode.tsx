import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowDown, ExternalLink, Mail, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { content } from "../data/content";

interface NonTechieModeProps {
    onBack: () => void;
}

export default function NonTechieMode({ onBack }: NonTechieModeProps) {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            {/* Navigation */}
            <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <button
                        onClick={onBack}
                        className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
                    >
                        <ArrowLeft size={20} />
                        <span className="font-medium">Back to Selection</span>
                    </button>
                    <div className="font-bold text-xl tracking-tight">MO.</div>
                </div>
            </nav>

            <main className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">

                {/* Header / Bio */}
                <section className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-6">
                            {content.personal.name}
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed mb-8">
                            {content.personal.summary}
                        </p>

                        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                                <MapPin size={16} />
                                {content.personal.location}
                            </div>
                            <div className="flex items-center gap-1">
                                <Mail size={16} />
                                {content.personal.email}
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 mt-6">
                            <a 
                                href="/MARVELLOUS OGUNODE-CV.pdf" 
                                download="Marvellous_Ogunode_CV.pdf"
                                className="px-6 py-2.5 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors flex items-center gap-2"
                            >
                                <ArrowLeft className="rotate-[-90deg]" size={18} />
                                Download CV
                            </a>
                            <div className="flex items-center gap-2">
                                <a href="http://www.linkedin.com/in/ogunode-marvellous-77062a306/" className="p-2.5 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"><Linkedin size={20} /></a>
                                <a href="http://www.x.com/segunm35" className="p-2.5 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"><Twitter size={20} /></a>
                                <a href="http://www.github.com/teewa56" className="p-2.5 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"><Github size={20} /></a>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Connectus Labs Spotlight */}
                <section className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-black text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-50 translate-x-1/3 -translate-y-1/3"></div>

                        <div className="relative z-10">
                            <div className="inline-block px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-xs font-bold mb-4 tracking-wide uppercase">
                                Research Lab and Community
                            </div>
                            <h2 className="text-3xl font-bold mb-4">Founder, {content.connectus.name}</h2>
                            <p className="text-gray-300 text-lg mb-8 max-w-2xl">
                                {content.connectus.description} Founded in {content.connectus.founded}.
                                Bridging the gap between blockchain protocols and artificial intelligence.
                            </p>
                            <a
                                href={content.connectus.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors"
                            >
                                Visit Lab <ExternalLink size={18} />
                            </a>
                        </div>
                    </motion.div>
                </section>

                {/* Experience */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold mb-8 border-b border-gray-200 pb-4">Professional Experience</h2>
                    <div className="space-y-12">
                        {content.experience.map((exp, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="grid sm:grid-cols-[1fr,3fr] gap-4 sm:gap-8"
                            >
                                <div className="text-gray-500 text-sm font-medium pt-1">
                                    {exp.period}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                                    <div className="text-blue-600 font-medium mb-2">{exp.company}</div>
                                    <ul className="list-disc list-outside ml-4 space-y-2 text-gray-600">
                                        {exp.responsibilities.map((resp, rIdx) => (
                                            <li key={rIdx}>{resp}</li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Projects */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold mb-8 border-b border-gray-200 pb-4">Selected Projects</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {content.projects.map((project, idx) => (
                            <ProjectCard key={idx} project={project} index={idx} />
                        ))}
                    </div>
                </section>

                {/* Footer Grid */}
                <section className="grid sm:grid-cols-2 gap-8 mb-20">
                    <div>
                        <h3 className="font-bold text-lg mb-4">Skills</h3>
                        <div className="flex flex-wrap gap-2">
                            {content.skills.languages.concat(content.skills.smartContract).slice(0, 10).map((skill, i) => (
                                <span key={i} className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-700">{skill}</span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-4">Education</h3>
                        <div>
                            <h4 className="font-medium">{content.education.degree}</h4>
                            <p className="text-gray-500 text-sm">{content.education.school}</p>
                            <p className="text-gray-400 text-xs mt-1">{content.education.expected}</p>
                        </div>
                    </div>
                </section>

                <section className="text-center py-20 bg-gray-900 text-white rounded-3xl">
                    <h2 className="text-3xl font-bold mb-4">Interested in working together?</h2>
                    <p className="text-gray-400 max-w-xl mx-auto mb-8">
                        Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                    <a href={`mailto:${content.personal.email}`} className="px-8 py-3 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-colors">
                        Say Hello
                    </a>
                </section>
            </main>
        </div>
    );
}

function ProjectCard({ project, index }: { project: typeof content.projects[0]; index: number }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onClick={() => setIsExpanded(!isExpanded)}
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => setIsExpanded(false)}
            className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-500/30 cursor-pointer overflow-hidden"
        >
            <motion.h3 layout="position" className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {project.title}
            </motion.h3>
            {project.achievements && project.achievements.length > 0 && ( 
    <motion.p layout="position" className="text-xs text-blue-400 float-right">
        <ArrowDown size={20} />
    </motion.p>
)}
            <motion.p layout="position" className="text-gray-600 text-sm mb-4">
                {project.description}
            </motion.p>
            <AnimatePresence>
                {isExpanded && project.achievements && project.achievements.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mb-4"
                    >
                        <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2">Key Achievements</h4>
                        <ul className="list-disc list-outside ml-4 space-y-1">
                            {project.achievements.map((achievement, i) => (
                                <li key={i} className="text-xs text-gray-500 leading-relaxed">
                                    {achievement}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div layout="position" className="flex flex-wrap gap-2 mt-auto">
                {project.techStack.map((tech, tIdx) => (
                    <span key={tIdx} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-medium">
                        {tech}
                    </span>
                ))}
            </motion.div>
        </motion.div>
    );
}
