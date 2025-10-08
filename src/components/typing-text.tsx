import { useState, useEffect } from "react"

interface TypingTextProps {
    text: string
    speed?: number
    onComplete?: () => void
}

export default function TypingText({ text, speed = 10, onComplete }: TypingTextProps) {
    const [displayedText, setDisplayedText] = useState("")
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
            setDisplayedText((prev) => prev + text[currentIndex])
            setCurrentIndex((prev) => prev + 1)
        }, speed)

        return () => clearTimeout(timeout)
        } else if (onComplete) {
        onComplete()
        }
    }, [currentIndex, text, speed, onComplete])

    useEffect(() => {
        setDisplayedText("")
        setCurrentIndex(0)
    }, [text])

    return <span className="whitespace-pre-wrap">{displayedText}</span>
}