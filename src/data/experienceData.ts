import type { ExperienceEntry } from "../types/experience";

export const experienceData: ExperienceEntry[] = [
  {
    id: 1,
    title: "B.Tech - Electrical Engineering",
    subtitle: "MGIT, Hyderabad",
    year: "Aug 2016 – Sep 2020",
    logo: "/assets/logos/mgit.jpeg",
    details:
      "Blended electrical engineering fundamentals with programming and analytics, laying the groundwork for a career in data science.",
    skills: ["C", "MATLAB", "Data Structures", "Python"],
    achievements: [
      "Built a smart power load monitoring prototype using embedded systems and microcontrollers.",
      "Completed 45+ lab sessions across circuits, control systems, and data analytics.",
      "Explored data analysis techniques using MATLAB for electrical system modeling.",
      "Scored >80% in electives like C programming, Data Structures, and Numerical Methods.",
      "Graduated with distinction, demonstrating strong problem-solving and analytical thinking."
    ]
  },
  {
    id: 2,
    title: "Intern – Power Systems and Analytics",
    subtitle: "NTECL (NTPC Tamil Nadu Energy Company Ltd)",
    year: "May 2019 – Aug 2019",
    logo: "/assets/logos/ntecl.png",
    details:
      "Industrial internship at a thermal power plant focusing on real-time system analytics and predictive maintenance.",
    skills: ["SCADA", "Python", "Excel Macros", "Sensors", "Data Analysis"],
    achievements: [
      "Analyzed SCADA logs for predictive maintenance, reducing potential downtime by 15%.",
      "Built Excel macro scripts to automate shift reports, saving ~60% manual effort.",
      "Collaborated with engineers to explore data-driven fault analysis in electrical systems.",
      "Assisted in sensor data collection and Python-based preprocessing for operational analytics.",
      "Gained insights into bridging electrical engineering with real-time analytics workflows."
    ]
  },
  {
    id: 3,
    title: "Backend Data Engineer",
    subtitle: "3IceCubes (Remote)",
    year: "May 2019 – Dec 2019",
    logo: "/assets/logos/3icecubes.png",
    details:
      "Engineered APIs and data pipelines for a B2C analytics platform in a startup environment.",
    skills: ["Django", "GCP", "REST APIs", "Docker", "PostgreSQL", "Cloud Run"],
    achievements: [
      "Built Django REST APIs for ingesting and transforming data, boosting pipeline efficiency by 12%.",
      "Deployed microservices on GCP Cloud Run, improving scalability and reducing costs.",
      "Implemented JWT-based authentication, cutting unauthorized access incidents by 95%.",
      "Automated CI/CD pipelines using GitHub Actions and Cloud Build, reducing deployment time by 40%.",
      "Enhanced data retrieval systems for faster analytics dashboards, improving client insights delivery."
    ]
  },
  {
    id: 4,
    title: "Intern – Data Science & Engineering",
    subtitle: "Jukshio, Hyderabad",
    year: "Apr 2020 – Jun 2020",
    logo: "/assets/logos/jukshio.webp",
    details:
      "Explored full-stack and data science workflows in a mentorship-driven program, leading to a full-time offer.",
    skills: ["Python", "Pandas", "Flask", "React", "SQL", "Matplotlib"],
    achievements: [
      "Built data pipelines processing 100K+ records using Pandas and Flask APIs.",
      "Developed internal dashboards to visualize KPIs, enhancing cross-team insights.",
      "Explored clustering algorithms for anomaly detection in sensor datasets.",
      "Collaborated with data science and frontend teams, gaining full-stack exposure.",
      "Received full-time offer as Data Scientist based on exceptional performance."
    ]
  },
  {
    id: 5,
    title: "Data Scientist",
    subtitle: "Jukshio, Hyderabad",
    year: "Jul 2020 – Jun 2021",
    logo: "/assets/logos/jukshio.webp",
    details:
      "Designed and deployed fraud detection and facial recognition ML pipelines in production.",
    skills: ["TensorFlow", "AWS SageMaker", "Keras", "Flask", "Docker", "BERT", "LIME"],
    achievements: [
      "Achieved 98% facial recognition accuracy by fine-tuning TensorFlow models on AWS.",
      "Deployed NLP models (BERT, RoBERTa) for identity verification, improving contextual accuracy by 18%.",
      "Automated MLOps pipelines (S3, Glue, Lambda) reducing model downtime by 35%.",
      "Applied SHAP and LIME for model explainability, enhancing stakeholder trust in AI solutions.",
      "Developed scalable REST API for real-time inference using Flask + Docker on AWS Fargate."
    ]
  },
  {
    id: 6,
    title: "Data Engineer & Analyst",
    subtitle: "Capgemini, Hyderabad",
    year: "Jun 2021 – Dec 2022",
    logo: "/assets/logos/capgemini.jpeg",
    details:
      "Worked on cloud-based BI pipelines, production ML workflows, and data engineering in AWS.",
    skills: ["AWS", "Glue", "Redshift", "Power BI", "Lambda", "Step Functions", "Airflow"],
    achievements: [
      "Built and optimized SQL-based ETL pipelines using AWS Glue, reducing data latency by 25%.",
      "Integrated Redshift and RDS data sources into Power BI, enabling real-time business insights.",
      "Deployed ML models on SageMaker, improving predictive accuracy and delivery speed.",
      "Developed CI/CD pipelines (GitHub Actions, Jenkins) to streamline ML deployments, improving stability by 40%.",
      "Enabled A/B testing for dashboards, enhancing decision-making speed by 18% across teams."
    ]
  },
  {
    id: 7,
    title: "M.S. Computer Science",
    subtitle: "State University of New York, Utica",
    year: "Jan 2023 – Dec 2024",
    logo: "/assets/logos/SUNY.png",
    details:
      "Specialized in AI, NLP, and scalable distributed systems for data-driven applications.",
    skills: ["FAISS", "TensorFlow", "PyTorch", "React", "Kubernetes", "NLP", "FastAPI"],
    achievements: [
      "Developed a semantic search engine for academic papers using FAISS and Sentence Transformers.",
      "Built a media conversion platform using RabbitMQ and GridFS, enabling real-time video-to-audio pipelines.",
      "Researched and extended the Forward-Forward Algorithm as an alternative to backpropagation.",
      "Presented 'The Edge of Innovation' case study on NPUs, TPUs, and scalability in AI hardware.",
      "Maintained a 4.0 GPA while completing 6+ AI/ML projects in distributed systems and NLP."
    ]
  }
];
