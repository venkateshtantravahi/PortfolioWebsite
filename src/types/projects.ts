export type Project = {
    id: number;
    title: string;
    description: string;
    image: string;
    github?: string;
    liveDemo?: string;
    type: 'AI/ML' | 'Web Dev' | 'Visualizations' | 'System' | 'Other';
    tags: string[];
};