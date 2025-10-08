import type React from "react"
import TypingText from "./typing-text"

import { useState, useRef, useEffect } from "react"
import { getCommandResponse, type CommandOutput } from "../lib/commands"

interface HistoryEntry {
  command: string
  output: CommandOutput
  isTyping?: boolean
}

export default function Terminal() {
  const [input, setInput] = useState("")
  const [history, setHistory] = useState<HistoryEntry[]>([])
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Show welcome message on mount
    const welcomeOutput = getCommandResponse("welcome")
    setHistory([{ command: "", output: welcomeOutput, isTyping: true }])
  }, [])

  useEffect(() => {
    // Auto-scroll to bottom
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  useEffect(() => {
    // Focus input on mount and when clicking anywhere
    inputRef.current?.focus()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isTyping) return

    const trimmedInput = input.trim()
    const output = getCommandResponse(trimmedInput)

    if (output.type === "clear") {
      setHistory([])
      setInput("")
      setCommandHistory([...commandHistory, trimmedInput])
      setHistoryIndex(-1)
      setSuggestions([])
      return
    }

    setIsTyping(true)
    setHistory([...history, { command: trimmedInput, output, isTyping: true }])
    setCommandHistory([...commandHistory, trimmedInput])
    setInput("")
    setHistoryIndex(-1)
    setSuggestions([])
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault()
      if (commandHistory.length > 0) {
        const newIndex = historyIndex < commandHistory.length - 1 ? historyIndex + 1 : historyIndex
        setHistoryIndex(newIndex)
        setInput(commandHistory[commandHistory.length - 1 - newIndex])
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        setInput(commandHistory[commandHistory.length - 1 - newIndex])
      } else if (historyIndex === 0) {
        setHistoryIndex(-1)
        setInput("")
      }
    } else if (e.key === "Tab") {
      e.preventDefault()
      if (suggestions.length > 0) {
        setInput(suggestions[0])
        setSuggestions([])
      }
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInput(value)

    // Auto-complete suggestions
    if (value.trim()) {
      const commands = ["help", "about", "projects", "skills", "experience", "contact", "clear", "mp install cv"]
      const matches = commands.filter((cmd) => cmd.startsWith(value.toLowerCase()))
      setSuggestions(matches)
    } else {
      setSuggestions([])
    }
  }

  return (
    <div
      className="w-full bg-card/80 backdrop-blur-sm border-2 border-gray-400 text-green-900 font-semibold rounded-lg shadow-2xl overflow-hidden"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Terminal Header */}
      <div className="bg-secondary/50 border-b border-border px-4 py-2 flex items-center gap-2">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="text-sm text-muted-foreground ml-2">marvellousogunode@portfolio:~</span>
      </div>

      {/* Terminal Content */}
      <div
        ref={terminalRef}
        className="p-6 h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent"
      >
        {/* History */}
        {history.map((entry, index) => (
          <div key={index} className="mb-4">
            {entry.command && (
              <div className="flex gap-2 mb-2">
                <span className="terminal-prompt">guest@portfolio:~$</span>
                <span className="terminal-command">{entry.command}</span>
              </div>
            )}
            <div className="text-foreground">
              {entry.isTyping ? (
                <TypingText
                  text={entry.output.content}
                  speed={5}
                  onComplete={() => {
                    setIsTyping(false)
                    setHistory((prev) => prev.map((h, i) => (i === index ? { ...h, isTyping: false } : h)))
                  }}
                />
              ) : (
                <span className="whitespace-pre-wrap">{entry.output.content}</span>
              )}
            </div>
          </div>
        ))}

        {/* Current Input Line */}
        <form onSubmit={handleSubmit} className="flex gap-2">
          <span className="terminal-prompt">guest@portfolio:~$</span>
          <div className="flex-1 relative">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              className="bg-transparent border-none outline-none text-terminal-command w-full font-mono"
              autoComplete="off"
              spellCheck="false"
              disabled={isTyping}
            />
          </div>
        </form>

        {/* Suggestions */}
        {suggestions.length > 0 && (
          <div className="mt-2 text-muted-foreground text-sm">
            <span>Suggestions: </span>
            {suggestions.map((suggestion, index) => (
              <span key={index} className="terminal-accent mr-3">
                {suggestion}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}