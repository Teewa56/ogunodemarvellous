import { useState, useRef, useEffect } from "react";
import Editor from "@monaco-editor/react";
import { ArrowLeft, Play, Terminal as TerminalIcon } from "lucide-react";
import { content } from "../data/content";
import { generateCode, type SupportedLanguage } from "../lib/codeGenerators";

interface TechieModeProps {
    onBack: () => void;
}

type TerminalLine = {
    type: 'input' | 'output' | 'error' | 'success';
    content: string;
};

export default function TechieMode({ onBack }: TechieModeProps) {
    const [language, setLanguage] = useState<SupportedLanguage>("rust");
    const [terminalLines, setTerminalLines] = useState<TerminalLine[]>([
        { type: 'output', content: 'Welcome to the interactive portfolio terminal.' },
        { type: 'output', content: 'Type "help" to see available commands.' }
    ]);
    const [input, setInput] = useState("");
    const bottomRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const languages: { id: SupportedLanguage; label: string; icon: string; runCmd: string; file: string }[] = [
        { id: "rust", label: "Rust", icon: "🦀", runCmd: "cargo run --release", file: "src/main.rs" },
        { id: "solidity", label: "Solidity", icon: "💎", runCmd: "forge test -vv", file: "contracts/Portfolio.sol" },
        { id: "javascript", label: "JavaScript", icon: "💛", runCmd: "node portfolio.js", file: "portfolio.js" },
        { id: "python", label: "Python", icon: "🐍", runCmd: "python3 portfolio.py", file: "portfolio.py" },
        { id: "c", label: "C", icon: "Ⓒ", runCmd: "./portfolio", file: "portfolio.c" },
    ];

    const currentLang = languages.find(l => l.id === language)!;
    const code = generateCode(content, language);

    useEffect(() => {
        if (bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [terminalLines]);

    const handleCommand = (cmd: string) => {
        const trimmedCmd = cmd.trim();
        const newLines: TerminalLine[] = [...terminalLines, { type: 'input', content: trimmedCmd }];

        if (!trimmedCmd) {
            setTerminalLines(newLines);
            return;
        }

        const args = trimmedCmd.split(' ');
        const mainCmd = args[0].toLowerCase();

        switch (mainCmd) {
            case 'help':
                newLines.push({ type: 'output', content: 'Available commands:' });
                newLines.push({ type: 'output', content: '  ls              List files' });
                newLines.push({ type: 'output', content: '  cat [file]      View file content' });
                newLines.push({ type: 'output', content: `  ${currentLang.runCmd.split(' ')[0]} ...      Run portfolio code` });
                newLines.push({ type: 'output', content: '  ./download-cv.sh Download CV PDF' });
                newLines.push({ type: 'output', content: '  clear           Clear terminal' });
                newLines.push({ type: 'output', content: '  exit            Return to main menu' });
                break;
            case 'ls':
                newLines.push({ type: 'output', content: `download-cv.sh  README.md  ${currentLang.file}` });
                break;
            case 'clear':
                setTerminalLines([]);
                return;
            case 'exit':
                onBack();
                return;
            case './download-cv.sh':
            case 'bash':
            case 'sh':
                if (mainCmd !== './download-cv.sh' && args[1] !== 'download-cv.sh') {
                    newLines.push({ type: 'error', content: `Unknown script: ${args[1]}` });
                    break;
                }
                newLines.push({ type: 'output', content: 'Initiating secure transfer...' });
                setTimeout(() => {
                    const link = document.createElement('a');
                    link.href = '/MARVELLOUS OGUNODE-CV.pdf';
                    link.download = 'Marvellous_Ogunode_CV.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    setTerminalLines(prev => [...prev, { type: 'success', content: 'CV successfully downloaded to local machine.' }]);
                }, 800);
                break;
            case 'cargo':
            case 'node':
            case 'python3':
            case 'python':
            case 'gcc':
            case './portfolio':
            case 'forge':
                 // Partial simulation: check if command matches current language
                 const isRun = trimmedCmd.startsWith(currentLang.runCmd.split(' ')[0]);
                 if(isRun) {
                     newLines.push({ type: 'output', content: 'Compiling...' });
                     newLines.push({ type: 'output', content: 'Running build...' });
                     newLines.push({ type: 'success', content: `Portfolio v1.0.0 built successfully!` });
                     newLines.push({ type: 'output', content: `Owner: ${content.personal.name}` });
                     newLines.push({ type: 'output', content: `Role: Blockchain Protocol Engineer` });
                     // Limit output to keep it clean
                     newLines.push({ type: 'output', content: `[System] Skills loaded: ${content.skills.languages.length} languages, ${content.skills.smartContract.length} smart contract frameworks...` });
                 } else {
                     newLines.push({ type: 'error', content: `Command not found: ${mainCmd}` });
                 }
                 break;
            default:
                newLines.push({ type: 'error', content: `command not found: ${mainCmd}` });
        }

        setTerminalLines(newLines);
    };

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleCommand(input);
            setInput('');
        }
    };

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
                            onClick={() => {
                                setLanguage(lang.id);
                                setTerminalLines(prev => [...prev, { type: 'output', content: `Switched environment to ${lang.label}.` }]);
                            }}
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
                        onClick={() => handleCommand(currentLang.runCmd)}
                        className="flex items-center gap-2 px-3 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors text-sm font-medium whitespace-nowrap"
                    >
                        <Play size={16} fill="currentColor" />
                        <span className="hidden sm:inline">Run Build</span>
                    </button>
                </div>
            </div>

            {/* Split View: Editor & Terminal */}
            <div className="flex-1 flex flex-col min-h-0">
                <div className="flex-1 relative border-b border-[#333]">
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
                            padding: { top: 20, bottom: 20 },
                            lineNumbers: "on",
                            renderLineHighlight: "all",
                            scrollBeyondLastLine: false,
                        }}
                    />
                </div>

                {/* Interactive Terminal */}
                <div 
                    className="h-1/3 bg-[#1e1e1e] flex flex-col font-mono text-sm min-h-[150px]"
                    onClick={() => inputRef.current?.focus()}
                >
                    <div className="flex items-center gap-4 px-4 py-2 border-b border-[#333] bg-[#252526] text-gray-400 text-xs uppercase tracking-wider select-none">
                        <div className="flex items-center gap-2 text-white border-b border-orange-500 pb-2 -mb-2.5">
                            <TerminalIcon size={12} />
                            Terminal
                        </div>
                        <span>Output</span>
                        <span>Debug Console</span>
                    </div>
                    
                    <div className="flex-1 p-4 overflow-y-auto cursor-text text-gray-300">
                        {terminalLines.map((line, i) => (
                            <div key={i} className="mb-1 break-words">
                                {line.type === 'input' && (
                                    <span>
                                        <span className="text-green-500">➜</span> <span className="text-blue-400">~/portfolio</span> <span className="text-gray-500">git:(main)</span> {line.content}
                                    </span>
                                )}
                                {line.type === 'output' && <span className="text-gray-300">{line.content}</span>}
                                {line.type === 'error' && <span className="text-red-400">{line.content}</span>}
                                {line.type === 'success' && <span className="text-green-400">{line.content}</span>}
                            </div>
                        ))}
                        
                        <div className="flex items-center gap-2">
                             <span className="text-green-500">➜</span> <span className="text-blue-400">~/portfolio</span> <span className="text-gray-500">git:(main)</span>
                             <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={onKeyDown}
                                className="bg-transparent border-none outline-none text-white flex-1 font-mono"
                                autoFocus
                                spellCheck={false}
                                autoComplete="off"
                             />
                        </div>
                        <div ref={bottomRef} />
                    </div>
                </div>
            </div>
        </div>
    );
}
