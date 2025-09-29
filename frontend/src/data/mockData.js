export const mockData = {
  personal: {
    name: "Shubham Halvadia",
    title: "Full-Stack Software Engineer & Cloud DevOps Specialist",
    location: "Greater Chicago Area",
    phone: "2096307736",
    email: "shubhamhalvadia@gmail.com",
    linkedin: "linkedin.com/in/shubhamhalvadia",
    summary: `Software Engineer with 2+ years of experience building scalable, cloud-native applications and microservices using Spring Boot, Node.js, and AWS. Proven ability to design and deploy RESTful APIs, optimize backend performance, and implement secure, high-availability systems with Docker and Kubernetes. Strong foundation in CI/CD practices (GitHub Actions, Jenkins), Agile methodologies, and full-stack development with React. Passionate about delivering reliable, user-centered solutions that drive efficiency and support enterprise-scale platforms.`,
    education: [
      {
        degree: "Master's degree, Computer Science",
        school: "Indiana University Bloomington",
        period: "August 2023 - May 2025",
        status: "Current"
      },
      {
        degree: "Bachelor of Technology - BTech, Computer Engineering",
        school: "CHAROTAR UNIVERSITY OF SCIENCE AND TECHNOLOGY",
        period: "Graduated"
      }
    ]
  },
  
  experience: [
    {
      id: 1,
      title: "Software Developer (Founding Engineer)",
      company: "Talyroo",
      location: "Orlando, Florida, United States",
      period: "June 2025 - Present (4 months)",
      type: "Full-time",
      highlights: [
        "Building secure, AI-powered Electronic Health Record (EHR) system for modern telemedicine platforms",
        "Leading full-stack development with FastAPI backend and React frontend for clinical workflows",
        "Implementing HIPAA-compliant backend services with role-based access control",
        "Integrating AI-driven capabilities like automated triage and documentation assistance",
        "Containerized platform for portable development and deployment",
        "Defining encrypted data models with auditable access logs"
      ],
      technologies: ["FastAPI", "React", "AI/ML", "HIPAA Compliance", "Docker", "Authentication"]
    },
    {
      id: 2,
      title: "Associate Instructor",
      company: "Indiana University Bloomington",
      location: "Bloomington, Indiana, United States",
      period: "August 2024 - May 2025 (10 months)",
      type: "Academic",
      highlights: [
        "Delivered hands-on sessions for 200+ student Computer Networks course",
        "Improved lab performance by 20% year-over-year through real-world case studies",
        "Introduced GitHub Classroom, reducing manual grading time by 60%",
        "Conducted network debugging workshops (Wireshark, Netstat)",
        "Achieved 15% improvement in final project quality"
      ],
      technologies: ["Computer Networks", "GitHub Classroom", "Wireshark", "Netstat", "Teaching"]
    },
    {
      id: 3,
      title: "Technical Operations Associate",
      company: "Indiana University Bloomington",
      location: "Bloomington, Indiana, United States",
      period: "May 2023 - July 2024 (1 year 3 months)",
      type: "Operations",
      highlights: [
        "Optimized inventory workflows reducing stock costs by 20%",
        "Improved delivery times by 15% through data-driven process improvements",
        "Conducted sales and customer data analysis using CRM tools",
        "Improved customer satisfaction by 25% through process enhancements",
        "Managed team training and operational documentation"
      ],
      technologies: ["Excel", "CRM Tools", "Data Analysis", "Process Optimization"]
    },
    {
      id: 4,
      title: "Software Developer I",
      company: "SSM InfoTech Solutions Pvt. Ltd.",
      location: "Surat, Gujarat, India",
      period: "July 2022 - July 2023 (1 year 1 month)",
      type: "Full-time",
      highlights: [
        "Developed backend components for digital logbook system for industrial operations",
        "Enhanced alert retrieval workflows in alarm information management system",
        "Built data visualization layers for energy monitoring dashboards",
        "Implemented CI/CD practices accelerating code integration",
        "Authored structured documentation for APIs and development standards"
      ],
      technologies: ["Backend Development", "Database Optimization", "Data Visualization", "CI/CD"]
    },
    {
      id: 5,
      title: "Software Engineer Intern",
      company: "SSM InfoTech Solutions Pvt. Ltd.",
      location: "Surat, Gujarat, India",
      period: "May 2022 - June 2022 (2 months)",
      type: "Internship",
      highlights: [
        "Implemented UI elements for operational dashboards",
        "Automated data export routines for routine logs",
        "Participated in system performance testing",
        "Contributed to predictive maintenance solutions feasibility assessment"
      ],
      technologies: ["UI Development", "Automation", "Performance Testing", "Analytics"]
    }
  ],

  skills: {
    technical: {
      "Programming Languages": ["Java", "JavaScript", "Python", "Node.js", "TypeScript"],
      "Frontend": ["React", "HTML5", "CSS3", "Responsive Design", "UI/UX"],
      "Backend": ["Spring Boot", "FastAPI", "RESTful APIs", "Microservices"],
      "Databases": ["MongoDB", "PostgreSQL", "MySQL", "Database Design"],
      "Cloud & DevOps": ["AWS", "Docker", "Kubernetes", "CI/CD", "Jenkins", "GitHub Actions"],
      "Tools & Others": ["Git", "Agile", "Wireshark", "CRM Tools", "Excel"]
    },
    certifications: [
      "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
      "Oracle Cloud Infrastructure 2025 Certified Developer Professional", 
      "Oracle Cloud Infrastructure 2025 Certified DevOps Professional"
    ],
    topSkills: ["CI/CD", "DevOps", "Kubernetes"]
  },

  projects: [
    {
      id: 1,
      title: "AI-Powered EHR System",
      description: "Secure, HIPAA-compliant Electronic Health Record system with AI-driven triage and documentation assistance for telemedicine platforms.",
      technologies: ["FastAPI", "React", "AI/ML", "Docker", "HIPAA Compliance"],
      highlights: [
        "Role-based access control with encrypted data storage",
        "Automated clinical triage using AI algorithms",
        "Real-time documentation assistance for clinicians",
        "Containerized architecture for scalable deployment"
      ],
      status: "In Development",
      category: "Healthcare Technology"
    },
    {
      id: 2,
      title: "Industrial Digital Logbook System",
      description: "Modular backend system for industrial operations with enhanced user access control and audit traceability.",
      technologies: ["Backend APIs", "Database Design", "Industrial Analytics"],
      highlights: [
        "Faster log submissions through optimized workflows",
        "Improved audit traceability for compliance",
        "Modular design for scalability",
        "Real-time monitoring capabilities"
      ],
      status: "Completed",
      category: "Industrial Software"
    },
    {
      id: 3,
      title: "Energy Monitoring Dashboard",
      description: "Data visualization platform for utility datasets with anomaly detection and consumption trend analysis.",
      technologies: ["Data Visualization", "Analytics", "Dashboard Design"],
      highlights: [
        "Real-time energy consumption monitoring",
        "Anomaly detection algorithms",
        "Trend analysis across multiple client sites",
        "Interactive visualization components"
      ],
      status: "Completed",
      category: "Data Analytics"
    },
    {
      id: 4,
      title: "Computer Networks Lab Platform",
      description: "GitHub Classroom integration platform for computer networks course with automated grading and debugging tools.",
      technologies: ["GitHub Classroom", "Educational Technology", "Network Tools"],
      highlights: [
        "60% reduction in manual grading time",
        "Integrated network debugging workshops",
        "Improved student performance tracking",
        "Streamlined assignment submission process"
      ],
      status: "Completed",
      category: "Educational Technology"
    },
    {
      id: 5,
      title: "Healthcare CRM Interface",
      description: "Patient-facing healthcare CRM with dynamic input flows and responsive design for U.S.-based client MVP.",
      technologies: ["React", "UI/UX Design", "Healthcare Systems"],
      highlights: [
        "Dynamic input flows for patient data",
        "Responsive design for mobile compatibility",
        "RESTful API integration",
        "Client feedback integration cycles"
      ],
      status: "Completed",
      category: "Healthcare Technology"
    }
  ],

  contact: {
    phone: "2096307736",
    email: "shubhamhalvadia@gmail.com",
    linkedin: "linkedin.com/in/shubhamhalvadia",
    location: "Greater Chicago Area",
    availability: "Actively looking for Full Time Opportunities 2025"
  }
};