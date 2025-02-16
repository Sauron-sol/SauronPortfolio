// src/i18n/locales/fr.ts
export const fr = {
  title: "Ingénieur Cybersécurité",
  navigation: {
    home: "Accueil",
    projects: "Projets",
    contact: "Contact",
    cv: "CV"
  },
  about: {
    title: "À propos",
    text: "Actuellement étudiant à Epitech Technology à Nice en MSc Pro, spécialité Cybersécurité. DevSecOps chez Orange, j'ai des compétences en gestion de pipeline, CI/CD, Docker et Gitlab CI. Formation continue en sécurité web 3, audit et review smart contract"
  },
  experience: {
    title: "Expérience Professionnelle",
    orange: {
      company: "Orange",
      location: "Sophia Antipolis, France",
      role: "Ingénieur DevSecOps",
      present: "Octobre 2023 - En cours",
      tasks: [
        "Intégration de la sécurité dans les pipelines CI/CD",
        "Mise en place de tests SAST et DAST automatisés",
        "Orchestration de conteneurs Docker et Kubernetes",
        "Implémentation de scans de vulnérabilités Nuclei",
        "Tests de pénétration automatisés avec Katana et SQLMap",
        "Sécurisation des processus de déploiement",
        "Gestion et optimisation des workflows Gitlab CI"
      ]
    },
    amadeus: {
      company: "Amadeus",
      location: "Villeneuve-Loubet, France",
      role: "Évaluation Automatisée de l'Empreinte",
      present: "Avril 2023 - Août 2023",
      tasks: [
        "Développement d'un outil de détection automatique de vulnérabilités",
        "Mise en place d'un système de stockage des vulnérabilités",
        "Analyse et classification des actifs",
        "Automatisation des processus de scan"
      ]
    },
    alithya: {
      company: "Alithya",
      location: "Sophia Antipolis, France",
      role: "Développeur Cybersécurité",
      present: "Octobre 2022 - Mars 2023",
      tasks: [
        "Développement d'un logiciel de détection des fraudes",
        "Implémentation pour la Fédération Française de Tir",
        "Traitement de données en temps réel",
        "Analyse et détection de comportements frauduleux",
        "Mise en place d'une architecture distribuée"
      ]
    }
  },
  education: {
    title: "Formation",
    epitech: {
      period: "2020 - 2023",
      bachelor: "Bachelor - Expert en Technologies de l'Information",
      school: "EPITECH TECHNOLOGY",
      program: "PGE",
      gpa: "GPA: 2.36/4.0"
    },
    msc: {
        period: "2023 - 2025",
        degree: "Master - Architecte en ingénierie des systèmes et des réseaux",
        school: "EPITECH TECHNOLOGY",
        program: "MSC"
    }
  },
  activities: {
    title: "Activités Personnelles",
    categories: {
      sports: "Sports",
      freelance: "Freelance"
    },
    items: {
      boxing: {
        title: "Boxe",
        description: "Pratique régulière",
        period: "2018 - En cours"
      },
      weightlifting: {
        title: "Musculation",
        description: "Pratique régulière",
        period: "2021 - En cours"
      },
      videoEditing: {
        title: "Monteur Vidéo",
        description: "Spécialisé dans le montage et la post-production",
        period: "2024 - En cours",
        details: "Maîtrise d'Adobe Premiere Pro, After Effects, Audacity et Davinci Resolve"
      }
    }
  },
  languages: {
    title: "Langues",
    french: "Français",
    english: "Anglais",
    german: "Allemand",
    native: "Langue maternelle",
    professional: "Professionnel (B2)",
    intermediate: "Intermédiaire (A2)"
  },
  contact: {
    title: "Contact",
    intro: "N'hésitez pas à me contacter pour discuter de projets ou d'opportunités"
  },
  skills: {
    title: "Compétences",
    categories: {
      security: "Sécurité",
      development: "Développement",
      blockchain: "Blockchain",
      operations: "Opérations",
      tools: "Outils",
      os: "Systèmes d'Exploitation",
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
      oop: "Développement Orienté Objet",
      web3_dev: "Développement Web3",
      web3_security: "Sécurité Web3",
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
    verify: "Vérifier",
    items: {
            coursera: {
                title: "Blockchain Basics",
                issuer: "Coursera",
                period: "Janvier 2023",
                id: "U4ZMK4ZGSNWU",
                link: "https://www.coursera.org/account/accomplishments/verify/U4ZMK4ZGSNWU"
            },
            cisco: {
                title: "Introduction to Cybersecurity",
                issuer: "Cisco Networking Academy",
                period: "Juillet 2023",
                link: "https://www.credly.com/badges/7360efc8-f6c9-4ffb-be33-874e1121006d/public_url"
            }
        }
    },
    projects: {
        title: "Mes Projets",
        portfolio: {
          title: "Portfolio",
          description: "Portfolio personnel développé avec React et Express",
          technologies: ["React", "TypeScript", "Express", "Framer Motion"],
          github: "https://github.com/Sauron-sol"
        },
        s0p0wn3d: {
          title: "s0P0wn3d",
          description: "Projet éducatif de cybersécurité démontrant des techniques avancées de red teaming. Comprend des fonctionnalités de transfert de fichiers, persistance système, extraction d'informations, gestion de tunnels, chiffrement de fichiers, keylogging et analyse de logs. Développé pour sensibiliser aux techniques de phishing.",
          technologies: ["Python", "PyInstaller"],
          github: "https://github.com/Sauron-sol/s0P0wn3d",
        },
        lottery: {
          title: "Smart Contract Lottery",
          description: "Projet de loterie utilisant Solidity et Foundry, permettant une implémentation sécurisée et décentralisée d'un système de loterie sur la blockchain.",
          technologies: ["Solidity", "Foundry", "Smart Contracts", "Ethereum"],
          github: "https://github.com/Sauron-sol/foundry-smart-contract-lottery",
        },
        security: {
          title: "Security Review Portfolio",
          description: "Portfolio d'audits de sécurité de smart contracts, démontrant l'expertise en sécurité Web3 et Solidity.",
          technologies: ["Solidity", "Web3 Security", "Smart Contracts", "Audit"],
          github: "https://github.com/Sauron-sol/Security_Review_Portfolio",
        },
        nft: {
          title: "Foundry NFT Project",
          description: "Collection de smart contracts Solidity pour la création et la gestion de NFTs sur la blockchain Ethereum.",
          technologies: ["Solidity", "NFT", "Ethereum", "Foundry", "Smart Contracts"],
          github: "https://github.com/Sauron-sol/Foundry-NFT-f23",
        },
        cia: {
          title: "Consolidate Investigate Administrate",
          description: "Pentest sur une application dépréciée",
          technologies: ["BurpSuite", "Docker", "Gitlab", "Semgrep", "Zap"],
          github: "https://github.com/Sauron-sol/Consolidate-Investigate-Administrate",
        },
        cybertoolbox: {
          title: "CyberToolBox",
          description: "Une collection d'outils et de projets orientés cybersécurité à des fins éducatives.",
          technologies: ["Python", "HTML", "CSS"],
          github: "https://github.com/Sauron-sol/CyberToolBox",
        },
        ohlerat: {
          title: "OhLeRat",
          description: "Application web innovante de réservation de voyages proposant des destinations surprises à petit prix. Développée avec React, TypeScript et Vite, utilisant Tailwind CSS et Shadcn/ui pour l'interface, Supabase pour le backend et Stripe pour les paiements.",
          technologies: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Stripe"],
          github: "https://github.com/Sauron-sol/OhLeRat",
        }
      }
};