import React, { useState, useEffect } from 'react';
import styles from './Projects.module.css';
import { ProjectCard } from './ProjectCard';

// Function to parse portfolio data from README (unchanged)
const parsePortfolioData = (readmeContent) => {
  const defaultData = {
    title: 'No title provided',
    description: 'No description provided',
    skills: [],
    image: 'https://placehold.co/300',
  };

  try {
    console.log('Raw README content:', readmeContent);

    const portfolioMatch = readmeContent.match(/<!-- PORTFOLIO DATA\n([\s\S]*?)\n-->/);
    if (!portfolioMatch) {
      console.log('No portfolio data found in README');
      return defaultData;
    }

    const portfolioData = portfolioMatch[1].split('\n').reduce((acc, line) => {
      const firstColonIndex = line.indexOf(':');
      if (firstColonIndex === -1) return acc;
      const key = line.substring(0, firstColonIndex).trim();
      const value = line.substring(firstColonIndex + 1).trim();
      if (key && value) {
        if (key === 'skills') {
          acc[key] = value.split(',').map(s => s.trim());
        } else {
          acc[key] = value;
        }
      }
      return acc;
    }, {});

    const parsedData = {
      title: portfolioData.title || defaultData.title,
      description: portfolioData.description || defaultData.description,
      skills: portfolioData.skills || defaultData.skills,
      image: portfolioData.image || defaultData.image,
    };

    console.log('Parsed portfolio data:', parsedData);

    return parsedData;
  } catch (error) {
    console.error('Error parsing portfolio data:', error);
    return defaultData;
  }
};

export const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        console.log('VITE_GITHUB_USERNAME:', import.meta.env.VITE_GITHUB_USERNAME);
        console.log('VITE_GITHUB_TOKEN:', import.meta.env.VITE_GITHUB_TOKEN ? 'Token is set' : 'Token is missing');

        if (!import.meta.env.VITE_GITHUB_USERNAME || !import.meta.env.VITE_GITHUB_TOKEN) {
          throw new Error('GitHub username or token is missing in environment variables');
        }

        // Fetch repositories
        const response = await fetch(
          `https://api.github.com/users/${import.meta.env.VITE_GITHUB_USERNAME}/repos`,
          {
            headers: {
              Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
              Accept: 'application/vnd.github.v3+json',
            },
          }
        );

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Failed to fetch repositories: ${response.status} - ${errorText}`);
        }

        const repos = await response.json();
        console.log('Fetched repositories:', repos.map(repo => repo.name));
        const filteredRepos = repos.filter(repo => repo.topics.includes('portfolio-project'));

        // NEW: Sort filtered repos by updated_at (most recent first)
        filteredRepos.sort((a, b) => {
          const dateA = new Date(a.updated_at);
          const dateB = new Date(b.updated_at);
          return dateB - dateA; // Descending order (newest first)
        });

        console.log('Sorted filtered repos by updated_at:', filteredRepos.map(repo => ({ name: repo.name, updated_at: repo.updated_at })));

        // Fetch README for each filtered repository
        const mappedProjects = await Promise.all(
          filteredRepos.map(async (repo) => {
            try {
              const readmeResponse = await fetch(
                `https://api.github.com/repos/${import.meta.env.VITE_GITHUB_USERNAME}/${repo.name}/readme`,
                {
                  headers: {
                    Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
                    Accept: 'application/vnd.github.v3+json',
                  },
                }
              );

              let readmeContent = 'No README found';
              if (readmeResponse.ok) {
                const readmeData = await readmeResponse.json();
                readmeContent = atob(readmeData.content); // Decode Base64 content
              }

              const portfolioData = parsePortfolioData(readmeContent);

              return {
                title: portfolioData.title,
                description: portfolioData.description,
                skills: portfolioData.skills,
                github: repo.html_url,
                imageSrc: portfolioData.image,
              };
            } catch (readmeError) {
              console.error(`Error fetching README for ${repo.name}:`, readmeError);
              return {
                title: repo.name,
                description: repo.description || 'No description provided',
                skills: repo.topics || [],
                github: repo.html_url,
                imageSrc: 'https://placehold.co/300',
              };
            }
          })
        );

        console.log('Mapped projects (sorted by repo update):', mappedProjects);
        setProjects(mappedProjects);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return <div>Loading projects...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </div>
    </section>
  );
};