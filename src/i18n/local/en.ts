// src/i18n/locales/en.ts
export const en = {
  title: "Cybersecurity Engineer",
  navigation: {
    home: "Home",
    projects: "Projects",
    contact: "Contact"
  },
  about: {
    title: "About",
    text: "Currently a MSc Pro student at Epitech Technology in Nice, specializing in Cybersecurity. DevSecOps at Orange, with skills in pipeline management, CI/CD, Docker and Gitlab CI. Continuous training in web3 security, smart contract audit and review"
  },
  experience: {
    title: "Professional Experience",
    orange: {
      company: "Orange",
      location: "Sophia Antipolis, France",
      role: "DevSecOps Engineer",
      present: "October 2023 - Present",
      tasks: [
        "Security integration in CI/CD pipelines",
        "Implementation of automated SAST and DAST tests",
        "Docker and Kubernetes container orchestration",
        "Implementation of Nuclei vulnerability scans",
        "Automated penetration testing with Katana and SQLMap",
        "Deployment process security",
        "Management and optimization of Gitlab CI workflows"
      ]
    },
    amadeus: {
      company: "Amadeus",
      location: "Villeneuve-Loubet, France",
      role: "Automated Footprint Assessment",
      present: "April 2023 - August 2023",
      tasks: [
        "Development of automated vulnerability detection tool",
        "Implementation of vulnerability storage system",
        "Asset analysis and classification",
        "Scan process automation"
      ]
    },
    alithya: {
      company: "Alithya",
      location: "Sophia Antipolis, France",
      role: "Cybersecurity Developer",
      present: "October 2022 - March 2023",
      tasks: [
        "Fraud detection software development",
        "Implementation for French Shooting Federation",
        "Real-time data processing",
        "Fraudulent behavior detection and analysis",
        "Distributed architecture implementation"
      ]
    }
  },
  education: {
    title: "Formation",
    epitech: {
      period: "2020 - 2023",
      bachelor: "Bachelor - Information Technology Expert",
      school: "EPITECH TECHNOLOGY",
      program: "PGE",
      gpa: "GPA: 2.36/4.0"
    },
    msc: {
        period: "2023 - 2025",
        degree: "Master - Network and Systems Engineering Architect",
        school: "EPITECH TECHNOLOGY",
        program: "MSC"
    }
  },
  activities: {
    title: "Personal Activities",
    categories: {
      sports: "Sports",
      freelance: "Freelance"
    },
    items: {
      boxing: {
        title: "Boxing",
        description: "Regular practice",
        period: "2018 - Present"
      },
      weightlifting: {
        title: "Weightlifting",
        description: "Regular practice",
        period: "2021 - Present"
      },
      videoEditing: {
        title: "Video Editor",
        description: "Specialized in editing and post-production",
        period: "February 2024 - Present",
        details: "Proficient in Adobe Premiere Pro, After Effects, Audacity and Davinci Resolve"
      }
    }
  },
  languages: {
    title: "Languages",
    french: "French",
    english: "English",
    german: "German",
    native: "Native",
    professional: "Professional (B2)",
    intermediate: "Intermediate (A2)"
  },
  contact: {
    title: "Contact",
    intro: "Feel free to contact me to discuss projects or opportunities"
  },
  skills: {
    title: "Skills",
    categories: {
      development: "Development",
      security: "Security",
      blockchain: "Blockchain",
      operations: "Operations",
      tools: "Tools",
      os: "Operating Systems",
      legacy: "Legacy",
      soft: "Soft Skills"
    },
    items: {
      burpsuite: "Burp Suite",
      nuclei: "Nuclei",
      katana: "Katana",
      sqlmap: "SQLMap",
      xsstrike: "XSStrike",
      dastardly: "Dastardly",
      react: "React",
      typescript: "TypeScript",
      nodejs: "Node.js",
      css: "CSS/SASS",
      oop: "Object-Oriented Development",
      web3_dev: "Web3 Development",
      web3_security: "Web3 Security",
      devops: "DevOps",
      devsecops: "DevSecOps",
      github: "GitHub",
      gitlab: "GitLab",
      azure_devops: "Azure DevOps",
      vscode: "Visual Studio Code",
      cursor: "Cursor",
      copilot: "GitHub Copilot",
      unix: "Unix",
      macos: "macOS",
      windows: "Windows",
      leadership: "Leadership",
      management: "Management"
    }
  },
  certifications: {
    title: "Certifications",
    verify: "Verify",
    items: {
            coursera: {
                title: "Blockchain Basics",
                issuer: "Coursera",
                period: "January 2023",
                id: "U4ZMK4ZGSNWU",
                link: "https://www.coursera.org/account/accomplishments/verify/U4ZMK4ZGSNWU"
            },
            cisco: {
                title: "Introduction to Cybersecurity",
                issuer: "Cisco Networking Academy",
                period: "July 2023",
                link: "https://www.credly.com/badges/7360efc8-f6c9-4ffb-be33-874e1121006d/public_url"
            }
        }
    },
    projects: {
      title: "My Projects",
      portfolio: {
        title: "Portfolio",
        description: "Personal portfolio developed with React and Express",
        technologies: ["React", "TypeScript", "Express", "Framer Motion"],
        github: "https://github.com/Sauron-sol"
      },
      s0p0wn3d: {
        title: "s0P0wn3d",
        description: "Educational cybersecurity project demonstrating advanced red teaming techniques. Features include file transfer, system persistence, information extraction, tunnel management, file encryption, keylogging, and log analysis. Developed to raise awareness about phishing techniques.",
        technologies: ["Python", "PyInstaller"],
        github: "https://github.com/Sauron-sol/s0P0wn3d",
      },
        lottery: {
          title: "Smart Contract Lottery",
          description: "Lottery project using Solidity and Foundry, enabling a secure and decentralized implementation of a blockchain lottery system.",
          technologies: ["Solidity", "Foundry", "Smart Contracts", "Ethereum"],
          github: "https://github.com/Sauron-sol/foundry-smart-contract-lottery",
        },
        security: {
          title: "Security Review Portfolio",
          description: "Portfolio of smart contract security audits, demonstrating expertise in Web3 security and Solidity.",
          technologies: ["Solidity", "Web3 Security", "Smart Contracts", "Audit"],
          github: "https://github.com/Sauron-sol/Security_Review_Portfolio",
        },
        nft: {
          title: "Foundry NFT Project",
          description: "Collection of Solidity smart contracts for creating and managing NFTs on the Ethereum blockchain.",
          technologies: ["Solidity", "NFT", "Ethereum", "Foundry", "Smart Contracts"],
          github: "https://github.com/Sauron-sol/Foundry-NFT-f23",
        },
        cia: {
          title: "Consolidate Investigate Administrate",
          description: "Pentest on deprecated web application",
          technologies: ["BurpSuite", "Docker", "Gitlab", "Semgrep", "Zap"],
          github: "https://github.com/Sauron-sol/Consolidate-Investigate-Administrate",
        },
        cybertoolbox: {
          title: "CyberToolBox",
          description: "A collection of cybersecurity-oriented tools and projects for educational purposes.",
          technologies: ["Python", "HTML"],
          github: "https://github.com/Sauron-sol/CyberToolBox",
        },
        ohlerat: {
          title: "OhLeRat",
          description: "Innovative travel booking web application offering surprise destinations at low prices. Developed with React, TypeScript and Vite, using Tailwind CSS and Shadcn/ui for the interface, Supabase for the backend and Stripe for payments.",
          technologies: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Stripe"],
          github: "https://github.com/Sauron-sol/OhLeRat",
        }
      }
}