import type { PortfolioContent } from "../data/content";

export type SupportedLanguage = "rust" | "python" | "javascript" | "c" | "solidity";

export const generateCode = (content: PortfolioContent, language: SupportedLanguage): string => {
    switch (language) {
        case "rust":
            return generateRust(content);
        case "python":
            return generatePython(content);
        case "javascript":
            return generateJavascript(content);
        case "c":
            return generateC(content);
        case "solidity":
            return generateSolidity(content);
        default:
            return "// Language not supported";
    }
};

const generateRust = (c: PortfolioContent): string => {
    return `// Marvellous Ogunode - Blockchain Protocol Engineer
// Run with: cargo run --release

struct Portfolio {
    owner: String,
    role: String,
    connectus_labs: ResearchLab,
    skills: Vec<String>,
}

struct ResearchLab {
    name: String,
    mission: String,
    link: String,
}

impl Portfolio {
    fn new() -> Self {
        Portfolio {
            owner: "${c.personal.name}".to_string(),
            role: "Blockchain Protocol Engineer".to_string(),
            connectus_labs: ResearchLab {
                name: "${c.connectus.name}".to_string(),
                mission: "${c.connectus.description}".to_string(),
                link: "${c.connectus.link}".to_string(),
            },
            skills: vec![
                ${c.skills.languages.map(s => `"${s}"`).join(", ")}
            ],
        }
    }

    fn print_bio(&self) {
        println!("Summary: {}", "${c.personal.summary}");
    }
}

fn main() {
    let my_portfolio = Portfolio::new();
    my_portfolio.print_bio();
    
    // Recent Projects
    ${c.projects.map(p => `
    // Project: ${p.title}
    // Stack: ${p.techStack.join(", ")}
    // ${p.description}`).join("\n")}
}
`;
};

const generatePython = (c: PortfolioContent): string => {
    return `# Marvellous Ogunode - Blockchain Protocol Engineer
# Run with: python portfolio.py

class Portfolio:
    def __init__(self):
        self.owner = "${c.personal.name}"
        self.role = "Blockchain Protocol Engineer"
        self.connectus_labs = {
            "name": "${c.connectus.name}",
            "mission": "${c.connectus.description}",
            "link": "${c.connectus.link}"
        }
        self.skills = [
            ${c.skills.languages.map(s => `"${s}"`).join(", ")}
        ]

    def bio(self):
        print(f"Summary: {self.summary}")

if __name__ == "__main__":
    me = Portfolio()
    print(f"Hi, I'm {me.owner}")
    
    # Experience
    ${c.experience.map(e => `
    # ${e.role} at ${e.company}
    # ${e.period}
    # ${e.responsibilities[0]}`).join("\n")}
`;
};

const generateJavascript = (c: PortfolioContent): string => {
    return `/**
 * Marvellous Ogunode - Blockchain Protocol Engineer
 * Run with: node portfolio.js
 */

const portfolio = {
  owner: "${c.personal.name}",
  role: "Blockchain Protocol Engineer",
  connectusLabs: {
    name: "${c.connectus.name}",
    mission: "${c.connectus.description}",
    link: "${c.connectus.link}"
  },
  skills: [
    ${c.skills.languages.map(s => `"${s}"`).join(", ")}
  ],
  
  displayBio() {
    console.log("${c.personal.summary}");
  }
};

// Projects
const projects = [
  ${c.projects.map(p => `{
    title: "${p.title}",
    stack: [${p.techStack.map(t => `"${t}"`).join(", ")}],
    desc: "${p.description}"
  }`).join(",\n  ")}
];

console.log(portfolio);
`;
};

const generateC = (c: PortfolioContent): string => {
    return `/* 
 * Marvellous Ogunode - Blockchain Protocol Engineer
 * Compile: gcc portfolio.c -o portfolio
 */

#include <stdio.h>

struct ConnectusLabs {
    char* name;
    char* mission;
    char* link;
};

struct Portfolio {
    char* owner;
    char* role;
    struct ConnectusLabs lab;
};

int main() {
    struct Portfolio me;
    me.owner = "${c.personal.name}";
    me.role = "Blockchain Protocol Engineer";
    
    me.lab.name = "${c.connectus.name}";
    me.lab.mission = "${c.connectus.description}";
    me.lab.link = "${c.connectus.link}";

    printf("Owner: %s\\n", me.owner);
    printf("Research Lab: %s\\n", me.lab.name);

    // Skills
    // ${c.skills.languages.join(", ")}

    return 0;
}
`;
};

const generateSolidity = (c: PortfolioContent): string => {
    return `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
 * @title Portfolio
 * @author ${c.personal.name}
 * @notice Blockchain Protocol Engineer
 */
contract Portfolio {
    string public constant OWNER = "${c.personal.name}";
    string public role = "Blockchain Protocol Engineer";
    
    struct ResearchLab {
        string name;
        string mission;
        string link;
    }
    
    ResearchLab public connectusLabs;
    
    constructor() {
        connectusLabs = ResearchLab(
            "${c.connectus.name}",
            "${c.connectus.description}",
            "${c.connectus.link}"
        );
    }
    
    function getBio() public pure returns (string memory) {
        return "${c.personal.summary}";
    }
    
    /* 
     * Recent Projects:
     ${c.projects.map(p => `* ${p.title} (${p.techStack.join(", ")})`).join("\n     ")}
     */
}
`;
};
