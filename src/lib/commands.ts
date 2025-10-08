export interface CommandOutput {
  type: "text" | "error" | "clear" | "download"
  content: string
}

const projects = [
  {
    name: "Starel AI",
    description: "A RAG AI model for Nigerian universities",
    tech: ["Python", "PyTorch", "HuggingFace", "NLP"],
  },
  {
    name: "TrustFlow",
    description: "A website that allows users to monitor the state of transactions in real-time",
    tech: ["React", "Node.js", "WebSocket", "MongoDB"],
  },
  {
    name: "SolarSync",
    description:
      "A P2P energy trading app that allows users to easily trade energy and predicts energy output for producers",
    tech: ["Next.js", "Machine Learning", "PostgreSQL", "Blockchain"],
  },
  {
    name: "Onchain_IP",
    description:
      "A GitHub-like platform for researchers to gain full ownership and proof of their research work on the blockchain",
    tech: ["Solidity", "React", "IPFS", "Ethereum"],
  },
  {
    name: "HairHelpAI",
    description: "A computer vision AI model that allows females to easily predict hair loss earlier",
    tech: ["Python", "Computer Vision", "TensorFlow", "scikit-learn"],
  },
  {
    name: "UrbanPulse",
    description:
      "An AI-powered GIS developed for Nasarawa state that allows users to commute easily. Uses ML to predict accidents in real-time based on data from cars and buses",
    tech: ["Python", "Machine Learning", "GIS", "Real-time Analytics"],
  },
]

const skills = {
  Frontend: ["ReactJS", "NextJS", "CSS", "Tailwind CSS"],
  Backend: ["NodeJS", "ExpressJS", "Python"],
  Database: ["MongoDB", "PostgreSQL"],
  Blockchain: ["Solidity", "Move", "Clarity"],
  "AI/ML": ["PyTorch", "TensorFlow", "scikit-learn", "Statistics"],
  DevOps: ["Docker", "Vercel", "AWS"],
  Languages: ["JavaScript", "Python", "TypeScript"],
}

const experience = [
  {
    role: "Founder",
    company: "Avira_X Tech Academy, Nigeria",
    period: "01/2025 - Present",
    description:
      "Developed and maintained community vision, built strong relationships with community members, organized bootcamps and workshops",
  },
  {
    role: "Blockchain Developer Intern",
    company: "Web3Nova, Akure, Nigeria",
    period: "03/2025 - 08/2025",
    description:
      "Conducted research into new blockchain technologies, performed security audits, deployed distributed applications on mainnet networks",
  },
  {
    role: "Full Stack Developer Intern",
    company: "CodeAlpha, Lucknow, India",
    period: "02/2025 - 08/2025",
    description:
      "Implemented RESTful APIs, collaborated with teams to design and deploy applications, analyzed user needs",
  },
  {
    role: "Frontend Developer Intern",
    company: "BrainBench Technology, Ekiti state, Nigeria",
    period: "10/2024 - 01/2025",
    description: "Developed and maintained user-facing websites using HTML, CSS, JavaScript, and React",
  },
]

export function getCommandResponse(command: string): CommandOutput {
  const cmd = command.toLowerCase().trim()

  if (cmd === "welcome" || cmd === "") {
    return {
      type: "text",
      content: `
══════════════════════════════════════════════════
Welcome to Marvellous Ogunode's Portfolio Terminal

Full-Stack Developer | Blockchain Engineer | AI/ML Engineer
══════════════════════════════════════════════════

Type 'help' to see available commands.
`,
    }
  }

  if (cmd === "help") {
    return {
      type: "text",
      content: `
Available Commands:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  about              Display information about me
  projects           View my project portfolio
  skills             List my technical skills
  experience         Show my work experience
  contact            Get my contact information
  mp install cv      Download my CV/Resume
  clear              Clear the terminal screen
  help               Show this help message

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Tip: Use Tab for auto-complete, ↑/↓ for command history
`,
    }
  }

  if (cmd === "about") {
    return {
      type: "text",
      content: `
═════════
ABOUT ME
═════════

Name:        Marvellous Ogunode
Role:        Software Engineer
Location:    Nigeria
Education:   Federal University of Technology, Akure
             Bachelor of Science - Computer Science (Expected 2027)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY:

Software Engineer passionate about building scalable, intelligent 
systems across web, mobile, and blockchain. I build scalable, 
user-focused systems that blend technical precision with inventive 
problem-solving. I use modern frameworks to turn complex ideas into 
intuitive products.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

EXPERIENCE HIGHLIGHTS:

• 3 years of development experience
• 1.5 years of professional experience
• Active community builder and hackathon participant
• Expertise in full-stack, blockchain, and AI/ML development

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`,
    }
  }

  if (cmd === "projects") {
    let output = `
══════════════════
PROJECT PORTFOLIO 
══════════════════

`
    projects.forEach((project, index) => {
      output += `
${index + 1}. ${project.name}
   ${project.description}
   
   Tech Stack: ${project.tech.join(", ")}
   
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`
    })

    return { type: "text", content: output }
  }

  if (cmd === "skills") {
    let output = `
═════════════════
TECHNICAL SKILLS 
═════════════════

`
    Object.entries(skills).forEach(([category, skillList]) => {
      output += `
${category}:
  ${skillList.join(" • ")}

`
    })

    output += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Additional Competencies:
• Database Management
• Version Control Systems
• Community Development
• Team Leadership
• Project Collaboration

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`

    return { type: "text", content: output }
  }

  if (cmd === "experience") {
    let output = `
═══════════════
WORK EXPERIENCE
═══════════════

`
    experience.forEach((exp) => {
      output += `
${exp.role}
${exp.company} | ${exp.period}

${exp.description}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`
    })

    return { type: "text", content: output }
  }

  if (cmd === "contact") {
    return {
      type: "text",
      content: `
════════════════════
CONTACT INFORMATION
════════════════════

Email:       ogunodemarvellous@gmail.com
Phone:       +234 8169358541, +234 8037453956
Location:    Akure, Nigeria

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SOCIAL LINKS:

LinkedIn:  https://www.linkedin.com/in/ogunode-marvellous-77062a306/
GitHub:    https://www.github.com/teewa56
Portfolio: https://www.ogunodemarvellous.vercel.app
Twitter:   https://www.twitter.com/segunm35

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Feel free to reach out for collaborations, opportunities, or just 
to connect!
`,
    }
  }

  if (cmd === "mp install cv" || cmd === "download cv") {
    if (typeof window !== "undefined") {
      const a = document.createElement("a")
      a.href = "/cv.pdf" 
      a.download = "Marvellous_Ogunode_CV.pdf"
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
    }

    return {
      type: "download",
      content: `
      ═════════════════
      DOWNLOADING CV...
      ═════════════════

      [█████████████████████████] 100%

      ✓ CV downloaded successfully!
        File: Marvellous_Ogunode_CV.txt

      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      `,
    }
  }

  if (cmd === "clear") {
    return {
      type: "clear",
      content: "",
    }
  }

  // Unknown command
  return {
    type: "error",
    content: `
Command not found: ${command}

Type 'help' to see available commands.
`,
  }
}