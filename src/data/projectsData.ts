import type { Project } from "../types/projects";

export const projectsData: Project[] = [
{
    id: 1,
    title: 'The Edge of Innovation: AI and Edge Computing',
    description:
    'A case study exploring the challenges of hardware limitations and showcased advancements in NPUs and TPUs for AI scalability.',
    image: '/assets/projects/edge-computing.png',
    github: 'CaseStudy.pdf',
    type: 'AI/ML',
    tags: ['Neural Networks', 'AI', 'TPUs', 'NPUs', 'Edge Computing'],
},
{
    id: 2,
    title: 'SQLite Playground',
    description:
    'A user-friendly SQL editor with syntax highlighting and visualization tools for database exploration.',
    image: '/assets/projects/sqlite-playground.jpeg',
    github: 'https://github.com/venkateshtantravahi/SqlitePlaygroundApp',
    liveDemo: 'https://sqlitplayground.streamlit.app/',
    type: 'Web Dev',
    tags: ['Streamlit', 'SQLite', 'Python', 'CI/CD'],
},
{
    id: 3,
    title: 'BeatStats: Music Popularity Analysis',
    description:
    'Advanced analytics to uncover patterns in musical attributes and their impact on track success.',
    image: '/assets/projects/spotify-analysis.jpg',
    github: 'https://gist.github.com/venkateshtantravahi/f0b5ab65b3043241f521648bd86e7791',
    type: 'AI/ML',
    tags: ['Pandas', 'Python', 'Plotly'],
},
{
    id: 4,
    title: 'E-Commerce Strategy for Adidas & Nike',
    description:
    'Predictive analytics to optimize inventory and promotional strategies, boosting online presence and revenue.',
    image: '/assets/projects/nike-adidas.webp',
    github: 'https://vtantravahi.medium.com/optimizing-online-sports-retail-revenue-b1cdb4cf2d7c',
    type: 'AI/ML',
    tags: ['Python', 'SQL', 'Data Analysis'],
},
{
    id: 5,
    title: 'Streaming Service Recommender',
    description:
    'Real-time recommender system using Redis and Flask based on collaborative filtering.',
    image: '/assets/projects/streaming-recommender.jpg',
    github: 'https://github.com/venkateshtantravahi/StreamingServiceRecommendation',
    type: 'AI/ML',
    tags: ['Redis', 'Flask', 'Python'],
},
{
    id: 6,
    title: 'Extending Forward Forward Algorithm',
    description:
    'Experimented with the forward-forward algorithm by using complex datasets and different activations.',
    image: '/assets/projects/forward-forward.jpeg',
    github: 'https://github.com/venkateshtantravahi/ForwardForwardAlgorithm/',
    type: 'AI/ML',
    tags: ['Python', 'Tensorflow', 'Pytorch', 'AI'],
},
{
    id: 7,
    title: 'Semantic Search Engine for Research Papers',
    description:
    'Built a semantic search engine using NLP and vector search for academic paper retrieval.',
    image: '/assets/projects/semantic-search.webp',
    github: 'https://github.com/venkateshtantravahi/semantic-search-engine',
    type: 'AI/ML',
    tags: ['NLP', 'Vector Search', 'Elasticsearch', 'FAISS'],
},
{
    id: 8,
    title: 'Data Science Portfolio Projects',
    description:
    'A collection of multiple data science mini-projects spanning EDA, prediction, and visualization.',
    image: '/assets/projects/data-science-portfolio.png',
    github: 'https://github.com/venkateshtantravahi/DataSciencePortfolioProjects/tree/main',
    type: 'AI/ML',
    tags: ['Pandas', 'Scikit-learn', 'Matplotlib', 'EDA'],
},
{
    id: 9,
    title: 'GPU Programming Projects',
    description:
    'CUDA-based projects exploring parallel programming and GPU acceleration for scientific computing.',
    image: '/assets/projects/gpu-programming.jpg',
    github: 'https://github.com/venkateshtantravahi/GPU_ProgrammingWinter2023',
    type: 'System',
    tags: ['CUDA', 'Parallel Computing', 'NVIDIA'],
},
{
    id: 10,
    title: 'Python: Zero to Hero',
    description:
    'A structured repository for learning and mastering Python with hands-on examples and explanations.',
    image: '/assets/projects/python-hero.gif',
    github: 'https://github.com/venkateshtantravahi/Python-0-to-hero-',
    type: 'Web Dev',
    tags: ['Python', 'Tutorials', 'Beginner'],
},
];