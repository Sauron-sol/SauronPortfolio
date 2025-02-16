// src/i18n/locales/de.ts
export const de = {
  title: "Cybersicherheitsingenieur",
  navigation: {
    home: "Startseite",
    projects: "Projekte",
    contact: "Kontakt"
  },
  about: {
    title: "Über mich",
    text: "Derzeit MSc Pro-Student an der Epitech Technology in Nizza, spezialisiert auf Cybersicherheit. DevSecOps bei Orange, mit Fähigkeiten in Pipeline-Management, CI/CD, Docker und Gitlab CI. Kontinuierliche Weiterbildung in Web3-Sicherheit, Smart Contract Audit und Review"
  },
  experience: {
    title: "Berufserfahrung",
    orange: {
      company: "Orange",
      location: "Sophia Antipolis, Frankreich",
      role: "DevSecOps-Ingenieur",
      present: "Oktober 2023 - Aktuell",
      tasks: [
        "Integration von Sicherheit in CI/CD-Pipelines",
        "Implementierung automatisierter SAST- und DAST-Tests",
        "Orchestrierung von Docker- und Kubernetes-Containern",
        "Implementierung von Nuclei-Schwachstellenscans",
        "Automatisierte Penetrationstests mit Katana und SQLMap",
        "Sicherung von Bereitstellungsprozessen",
        "Verwaltung und Optimierung von Gitlab CI-Workflows"
      ]
    },
    amadeus: {
      company: "Amadeus",
      location: "Sophia Antipolis, Frankreich",
      role: "Automatisierte Fußabdruckbewertung",
      present: "April 2023 - August 2023",
      tasks: [
        "Entwicklung eines automatisierten Schwachstellenerkennungstools",
        "Implementierung eines Schwachstellenspeichersystems",
        "Analyse und Klassifizierung von Assets",
        "Automatisierung von Scan-Prozessen"
      ]
    },
    alithya: {
      company: "Alithya",
      location: "Sophia Antipolis, Frankreich",
      role: "Cybersicherheitsentwickler",
      present: "Oktober 2022 - März 2023",
      tasks: [
        "Entwicklung einer Betrugserkennung-Software",
        "Implementierung für den Französischen Schießsportverband",
        "Echtzeit-Datenverarbeitung",
        "Analyse und Erkennung betrügerischen Verhaltens",
        "Aufbau einer verteilten Architektur"
      ]
    }
  },
  education: {
    title: "Ausbildung",
    epitech: {
      period: "2020 - 2023",
      bachelor: "Bachelor - Experte für Informationstechnologie",
      school: "EPITECH TECHNOLOGY",
      program: "PGE",
      gpa: "GPA: 2.36/4.0"
    },
    msc: {
      period: "2023 - 2025",
      degree: "Master - Architekt für Netzwerk- und Systemtechnik",
      school: "EPITECH TECHNOLOGY",
      program: "MSC"
    }
  },
  activities: {
    title: "Persönliche Aktivitäten",
    categories: {
      sports: "Sport",
      freelance: "Freiberuflich"
    },
    items: {
      boxing: {
        title: "Boxen",
        description: "Regelmäßiges Training",
        period: "2018 - Aktuell"
      },
      weightlifting: {
        title: "Krafttraining",
        description: "Regelmäßiges Training",
        period: "2021 - Aktuell"
      },
      videoEditing: {
        title: "Videobearbeitung",
        description: "Spezialisiert auf Schnitt und Postproduktion",
        period: "Februar 2024 - Aktuell",
        details: "Erfahrung mit Adobe Premiere Pro, After Effects, Audacity und Davinci Resolve"
      }
    }
  },
  languages: {
    title: "Sprachen",
    french: "Französisch",
    english: "Englisch",
    german: "Deutsch",
    native: "Muttersprache",
    professional: "Professionell (B2)",
    intermediate: "Mittelstufe (A2)"
  },
  contact: {
    title: "Kontakt",
    intro: "Zögern Sie nicht, mich zu kontaktieren, um Projekte oder Möglichkeiten zu besprechen"
  },
  skills: {
    title: "Fähigkeiten",
    categories: {
      security: "Sicherheit",
      development: "Entwicklung",
      blockchain: "Blockchain",
      operations: "Betrieb",
      tools: "Werkzeuge",
      os: "Betriebssysteme",
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
      oop: "Objektorientierte Entwicklung",
      web3_dev: "Web3-Entwicklung",
      web3_security: "Web3-Sicherheit",
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
      leadership: "Führung",
      management: "Management"
    }
  },
  certifications: {
    title: "Zertifizierungen",
    verify: "Überprüfen",
    items: {
      coursera: {
        title: "Blockchain-Technologien",
        issuer: "Coursera",
        period: "Januar 2023",
        link: "https://www.coursera.org/account/accomplishments/verify/U4ZMK4ZGSNWU"
      },
      cisco: {
        title: "Einführung in die Cybersicherheit",
        issuer: "Cisco Networking Academy",
        period: "Juli 2023",
        link: "https://www.credly.com/badges/7360efc8-f6c9-4ffb-be33-874e1121006d/public_url"
      }
    }
  },
  projects: {
    title: "Meine Projekte",
    portfolio: {
      title: "Portfolio",
      description: "Persönliches Portfolio entwickelt mit React und Express",
      technologies: ["React", "TypeScript", "Express", "Framer Motion"],
      github: "https://github.com/Sauron-sol"
    },
    s0p0wn3d: {
      title: "s0P0wn3d",
      description: "Pädagogisches Cybersicherheitsprojekt, das fortgeschrittene Red-Teaming-Techniken demonstriert. Funktionen umfassen Dateitransfer, Systempersistenz, Informationsextraktion, Tunnel-Management, Dateiverschlüsselung, Keylogging und Log-Analyse. Entwickelt zur Sensibilisierung für Phishing-Techniken.",
      technologies: ["Python", "PyInstaller"],
      github: "https://github.com/Sauron-sol/s0P0wn3d",
    },
    lottery: {
      title: "Smart Contract Lottery",
      description: "Lotterie-Projekt mit Solidity und Foundry, das eine sichere und dezentrale Implementierung eines Blockchain-Lotterie-Systems ermöglicht.",
      technologies: ["Solidity", "Foundry", "Smart Contracts", "Ethereum"],
      github: "https://github.com/Sauron-sol/foundry-smart-contract-lottery",
    },
    security: {
      title: "Security Review Portfolio",
      description: "Portfolio von Smart-Contract-Sicherheitsaudits, das Expertise in Web3-Sicherheit und Solidity demonstriert.",
      technologies: ["Solidity", "Web3 Security", "Smart Contracts", "Audit"],
      github: "https://github.com/Sauron-sol/Security_Review_Portfolio",
    },
    nft: {
      title: "Foundry NFT Project",
      description: "Sammlung von Solidity Smart Contracts für die Erstellung und Verwaltung von NFTs auf der Ethereum-Blockchain.",
      technologies: ["Solidity", "NFT", "Ethereum", "Foundry", "Smart Contracts"],
      github: "https://github.com/Sauron-sol/Foundry-NFT-f23",
    },
    cia: {
      title: "Consolidate Investigate Administrate",
      description: "Pentest auf einer veralteten Webanwendung",
      technologies: ["BurpSuite", "Docker", "Gitlab", "Semgrep", "Zap"],
      github: "https://github.com/Sauron-sol/Consolidate-Investigate-Administrate",
    },
    cybertoolbox: {
      title: "CyberToolBox",
      description: "Eine Sammlung von Cybersicherheits-orientierten Tools und Projekten für Bildungszwecke.",
      technologies: ["Python", "HTML"],
      github: "https://github.com/Sauron-sol/CyberToolBox",
    },
    ohlerat: {
      title: "OhLeRat",
      description: "Innovative Reisebuchungs-Webanwendung, die Überraschungsziele zu günstigen Preisen anbietet. Entwickelt mit React, TypeScript und Vite, unter Verwendung von Tailwind CSS und Shadcn/ui für die Benutzeroberfläche, Supabase für das Backend und Stripe für Zahlungen.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Stripe"],
      github: "https://github.com/Sauron-sol/OhLeRat",
    }
  }
};