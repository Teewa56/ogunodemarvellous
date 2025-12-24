import { useState } from "react";
import Editor from "@monaco-editor/react";
import { ArrowLeft, Play } from "lucide-react";
import { content } from "../data/content";
import { generateCode, type SupportedLanguage } from "../lib/codeGenerators";

interface TechieModeProps {
    onBack: () => void;
}

export default function TechieMode({ onBack }: TechieModeProps) {
    const [language, setLanguage] = useState<SupportedLanguage>("rust");

    const languages: { id: SupportedLanguage; label: string; icon: string }[] = [
        { id: "rust", label: "Rust", icon: "🦀" },
        { id: "solidity", label: "Solidity", icon: "💎" },
        { id: "javascript", label: "JavaScript", icon: "💛" },
        { id: "python", label: "Python", icon: "🐍" },
        { id: "c", label: "C", icon: "Ⓒ" },
    ];

    const code = generateCode(content, language);

    return (
        <div className="h-screen bg-[#1e1e1e] flex flex-col text-white overflow-hidden">
            {/* Header */}
            <div className="h-16 border-b border-[#333] flex items-center px-4 justify-between bg-[#252526] overflow-x-auto scrollbar-thin">
                <div className="flex items-center gap-4 shrink-0">
                    <button
                        onClick={onBack}
                        className="p-2 hover:bg-[#333] rounded-lg transition-colors text-gray-400 hover:text-white"
                        title="Back"
                    >
                        <ArrowLeft size={20} />
                    </button>
                    <div className="hidden md:flex items-center gap-2">
                        <span className="font-mono text-sm text-blue-400">portfolio.{language === 'javascript' ? 'js' : language === 'python' ? 'py' : language === 'rust' ? 'rs' : language === 'solidity' ? 'sol' : 'c'}</span>
                    </div>
                </div>

                <div className="flex items-center gap-2 bg-[#1e1e1e] p-1 rounded-lg border border-[#333] shrink-0 mx-2">
                    {languages.map((lang) => (
                        <button
                            key={lang.id}
                            onClick={() => setLanguage(lang.id)}
                            className={`
                px-2 py-1.5 md:px-3 rounded-md text-sm font-medium transition-all flex items-center gap-2
                ${language === lang.id
                                    ? "bg-blue-600 text-white shadow-lg"
                                    : "text-gray-400 hover:text-white hover:bg-[#333]"}
              `}
                            title={lang.label}
                        >
                            <span>{lang.icon}</span>
                            <span className="hidden lg:inline">{lang.label}</span>
                        </button>
                    ))}
                </div>

                <div className="flex items-center gap-4 shrink-0">
                    <button
                        onClick={() => alert("Try reading the code to hire me!")}
                        className="flex items-center gap-2 px-3 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors text-sm font-medium whitespace-nowrap"
                    >
                        <Play size={16} fill="currentColor" />
                        <span className="hidden sm:inline">Run Build</span>
                    </button>
                </div>
            </div>

            {/* Editor Area */}
            <div className="flex-1 relative">
                <Editor
                    height="100%"
                    language={language}
                    theme="vs-dark"
                    value={code}
                    options={{
                        readOnly: true,
                        minimap: { enabled: true },
                        fontSize: 14,
                        fontFamily: "'JetBrains Mono', 'Fira Code', Consolas, monospace",
                        scrollBeyondLastLine: false,
                        padding: { top: 20, bottom: 20 },
                        lineNumbers: "on",
                        renderLineHighlight: "all",
                        smoothScrolling: true,
                        cursorBlinking: "smooth",
                    }}
                />
            </div>

            {/* Status Bar */}
            <div className="h-6 bg-[#007acc] text-white text-xs flex items-center px-4 gap-4">
                <span>main*</span>
                <span>Ln 1, Col 1</span>
                <span>UTF-8</span>
                <span>{language.toUpperCase()}</span>
                <div className="flex-1" />
                <span>Prettier</span>
            </div>
        </div>
    );
}
