export interface Project {
  title: string;
  techStack: string[];
  description: string;
  achievements: string[];
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
}

export interface PortfolioContent {
  personal: {
    name: string;
    email: string;
    phone: string;
    location: string;
    socials: {
      linkedin: string;
      twitter: string;
      github: string;
      portfolio: string;
    };
    summary: string;
  };
  skills: {
    languages: string[];
    smartContract: string[];
    platforms: string[];
    frameworks: string[];
    consensus: string[];
    cryptography: string[];
    other: string[];
  };
  projects: Project[];
  experience: Experience[];
  education: {
    degree: string;
    school: string;
    expected: string;
  };
  certifications: string[];
  connectus: {
    name: string;
    role: string;
    founded: string;
    description: string;
    link: string;
  };
}

export const content: PortfolioContent = {
  personal: {
    name: "MARVELLOUS OGUNODE",
    email: "Ogunodemarvellous@gmail.com",
    phone: "+234 8169358541",
    location: "Akure, Ondo State, Nigeria",
    socials: {
      linkedin: "http://www.linkedin.com/in/ogunode-marvellous-77062a306/",
      twitter: "http://www.x.com/segunm35",
      github: "http://www.github.com/teewa56",
      portfolio: "http://www.ogunodemarvellous.vercel.app/",
    },
    summary:
      "Blockchain Protocol Developer specializing in core infrastructure, zero-knowledge systems, and blockchain-AI convergence. Experienced in building production-grade Parachains, implementing novel consensus mechanisms, and conducting research in zkML and cross-chain verification systems. Strong focus on cryptographic primitives, protocol security, and scalable decentralized systems across Ethereum, Polkadot, and Solana ecosystems.",
  },
  skills: {
    languages: ["Rust", "Solidity", "JavaScript/TypeScript", "Python", "Move", "Clarity"],
    smartContract: ["Solidity", "Ink!", "Move", "Clarity", "Anchor", "Seahorse"],
    platforms: ["Ethereum", "Polkadot", "Solana", "Stacks", "Lisk", "Base", "Celo"],
    frameworks: ["Substrate", "Hardhat", "Foundry", "Anchor", "Ink!"],
    consensus: [
      "DPoS",
      "NPoS",
      "PoW",
      "Proof of Personhood",
      "Proof of Intelligence",
      "zkRollups",
      "Optimistic Rollups",
    ],
    cryptography: [
      "zkSNARKs",
      "Hash Functions",
      "Merkle Trees",
      "Verkle Trees",
      "ZK Proofs",
      "zkML",
    ],
    other: [
      "Cross-Chain Messaging",
      "Light Client Verification",
      "Ethers.js",
      "Polkadot.js",
      "wagmi",
      "The Graph",
      "Alchemy",
      "Chainlink Functions",
      "Jest",
      "Chai",
      "Docker",
      "GitHub Actions",
      "Node.js",
      "FastAPI",
      "SQL",
      "NoSQL",
    ],
  },
  projects: [
    {
      title: "Self-Sovereign Identity Parachain",
      techStack: [
        "Rust",
        "Substrate",
        "zkSNARKs",
        "WASM",
        "Swift",
        "Kotlin",
        "React",
        "PyTorch",
      ],
      description:
        "Built a full-stack decentralized identity management system on Polkadot using Substrate framework, implementing novel proof-of-personhood and biometric-based identity verification.",
      achievements: [
        "Architected and deployed custom Substrate pallets for identity management, credential verification, proof-of-personhood, and on-chain governance",
        "Implemented zkSNARK-based privacy layer for credential verification without revealing underlying biometric data",
        "Designed proof-of-personhood mechanism tied to biometric hashes to prevent Sybil attacks and duplicate identity creation",
        "Integrated AI-powered behavioral analysis for identity recovery post-catastrophe using pattern matching algorithms",
        "Engineered time-based and social recovery mechanisms for account restoration",
        "Solved critical frontend ZK proof generation performance bottleneck by implementing Rust-WASM with Swift/Kotlin bridges for native mobile performance",
        "Developed cross-platform solution spanning web, mobile (iOS/Android), and Parachain infrastructure",
        "Enables organizations to issue and verify tamper-proof credentials on-chain",
      ],
    },
    {
      title: "Blockchain Protocol Research",
      techStack: ["Research", "ZK-Native", "zkML", "Cross-Chain"],
      description:
        "Researching integration of zero-knowledge proofs, zkML, and cross-chain identity bridges.",
      achievements: [
        "Researching integration of zero-knowledge proofs directly into consensus layers for privacy-preserving protocol operations",
        "Investigating zkML (Zero-Knowledge Machine Learning) for verifiable AI computation on-chain",
        "Analyzing Ethereum's 128-bit security model and implications for long-term cryptographic assumptions",
        "Designing light client-based zk verification models for trustless cross-chain identity portability",
        "Researching cross-chain messaging protocols for seamless credential verification across heterogeneous blockchain networks",
        "Developing novel consensus mechanism for regulating AI agent-human interaction in decentralized systems",
        "Proposing benchmarking framework for safe progression toward AGI within blockchain-governed environments",
      ],
    },
    {
      title: "AI-Powered Energy Trading System",
      techStack: ["Base", "Solidity", "PyTorch"],
      description:
        "Developed decentralized energy marketplace leveraging AI for dynamic pricing and peer-to-peer energy trading with automated settlement on Base blockchain and Hedera.",
      achievements: [],
    },
    {
      title: "On-Chain Intellectual Property Platform",
      techStack: ["Ethereum", "Solidity"],
      description:
        "Built GitHub-like platform for researchers to publish, version-control, and monetize academic work on-chain with immutable timestamps and attribution tracking.",
      achievements: [],
    },
    {
      title: "Insurance-Based Prediction Market",
      techStack: ["Solidity", "Chainlink"],
      description:
        "Created crypto price prediction platform with insurance mechanisms, integrating Chainlink oracles for price feeds and automated payouts via smart contracts.",
      achievements: [],
    },
    {
      title: "API Monetization Platform",
      techStack: ["Solana", "Anchor"],
      description:
        "Designed decentralized API marketplace enabling developers to monetize and consume APIs with micro-payments and usage tracking on Solana.",
      achievements: [],
    },
  ],
  experience: [
    {
      role: "Founder",
      company: "AviraX Tech Community",
      location: "Akure, Nigeria",
      period: "January 2025 - Present",
      responsibilities: [
        "Established technology education initiative focusing on blockchain and AI development",
        "Organized technical workshops and bootcamps for emerging developers",
        "Built community of blockchain developers and fostered collaborative learning environment",
      ],
    },
    {
      role: "Blockchain Developer Intern & Backend Instructor",
      company: "Web3Nova",
      location: "Akure, Nigeria",
      period: "March 2025 - Present",
      responsibilities: [
        "Conducted advanced research into zero-knowledge proofs, sidechains, and Layer 2 scaling solutions",
        "Deployed production distributed applications on Ethereum and Polkadot mainnet",
        "Integrated blockchain infrastructure with traditional backend systems using Node.js and FastAPI",
        "Designed and implemented payment systems supporting both fiat and cryptocurrency transactions",
        "Taught backend development with focus on blockchain integration and dApp architecture",
        "Collaborated with product teams to define technical requirements for blockchain implementations",
      ],
    },
    {
      role: "Full Stack Developer Intern",
      company: "CodeAlpha",
      location: "Lucknow, India",
      period: "February 2025 - March 2025",
      responsibilities: [
        "Developed RESTful APIs for frontend-backend communication in web3 applications",
        "Implemented Git-based version control workflows for distributed team collaboration",
        "Conducted security audits and vulnerability assessments on existing codebases",
        "Documented comprehensive test plans and testing procedures for smart contract deployments",
      ],
    },
    {
      role: "Frontend Developer",
      company: "Brain Bench Technology",
      location: "Ado Ekiti, Nigeria",
      period: "October 2024 - January 2025",
      responsibilities: [
        "Built responsive user interfaces using React.js for blockchain applications",
        "Integrated Web3 frontends with smart contracts using Ethers.js and Wagmi",
        "Collaborated with backend developers to connect decentralized applications with on-chain data",
      ],
    },
  ],
  education: {
    degree: "Bachelor of Technology: Computer Science",
    school: "Federal University of Technology, Akure (FUTA)",
    expected: "Expected 2027-2028",
  },
  certifications: [
    "Blockchain Developer — Hedera",
    "Blockchain Developer — Web3Nova",
    "Full Stack Developer — CodeAlpha",
    "Frontend Developer — Brain Bench Technologies",
  ],
  connectus: {
    name: "Connectus Labs",
    role: "Founder",
    founded: "September 2025",
    description: "Research lab/community for blockchain and AI research.",
    link: "https://connectuslabs.xyz",
  },
};
