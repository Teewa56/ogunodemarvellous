import { motion } from "framer-motion";
import { Terminal, User, Sparkles, Code2 } from "lucide-react";
import BlockchainBackground from "./BlockchainBackground";

interface LandingProps {
    onSelectMode: (mode: "techie" | "non-techie") => void;
}

export default function Landing({ onSelectMode }: LandingProps) {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 overflow-hidden relative">
            {/* Background Ambience */}
            <BlockchainBackground />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="z-10 text-center mb-10"
            >
                <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-6">
                    Choose Your Experience
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Welcome to my digital space. Select how you'd like to explore my work.
                </p>
            </motion.div>

            <div className="flex flex-col md:flex-row gap-8 z-10 w-full max-w-4xl">
                {/* Techie Card */}
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onSelectMode("techie")}
                    className="flex-1 group relative p-8 rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-xl hover:border-purple-500/50 transition-all duration-300 text-left"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                    <div className="relative z-10">
                        <div className="w-16 h-16 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6 text-purple-400 group-hover:bg-purple-500/20 transition-colors">
                            <Terminal size={32} />
                        </div>
                        <h2 className="text-3xl font-bold mb-3 flex items-center gap-2">
                            Techie <Code2 size={24} className="opacity-50" />
                        </h2>
                        <p className="text-gray-400">
                            Interactive development environment. Explore the codebase, check the syntax, and verify the logic.
                        </p>
                        <div className="mt-8 flex gap-2">
                            <span className="text-xs px-2 py-1 rounded bg-gray-800 text-gray-300 font-mono">rust</span>
                            <span className="text-xs px-2 py-1 rounded bg-gray-800 text-gray-300 font-mono">solidity</span>
                            <span className="text-xs px-2 py-1 rounded bg-gray-800 text-gray-300 font-mono">python</span>
                        </div>
                    </div>
                </motion.button>

                {/* Non-Techie Card */}
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onSelectMode("non-techie")}
                    className="flex-1 group relative p-8 rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-xl hover:border-blue-500/50 transition-all duration-300 text-left"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                    <div className="relative z-10">
                        <div className="w-16 h-16 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                            <User size={32} />
                        </div>
                        <h2 className="text-3xl font-bold mb-3 flex items-center gap-2">
                            Non-Techie <Sparkles size={24} className="opacity-50" />
                        </h2>
                        <p className="text-gray-400">
                            A guided visual tour. Discover my story, achievements, and impact in a simple, elegant flow.
                        </p>
                        <div className="mt-8 flex gap-2">
                            <span className="text-xs px-2 py-1 rounded bg-gray-800 text-gray-300">Visual</span>
                            <span className="text-xs px-2 py-1 rounded bg-gray-800 text-gray-300">Simple</span>
                            <span className="text-xs px-2 py-1 rounded bg-gray-800 text-gray-300">Guided</span>
                        </div>
                    </div>
                </motion.button>
            </div>
        </div>
    );
}
