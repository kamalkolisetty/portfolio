import React, { createContext, useContext, useState, useEffect } from 'react';

// Create Context
const ResumeContext = createContext();

// Function to parse resume link
const parseResumeLink = (readmeContent) => {
  const defaultResumeLink = 'https://kamalkumar-kolisetty-resume.tiiny.site/';
  try {
    console.log('Parsing resume README content:', readmeContent.substring(0, 100) + '...'); // Log first 100 chars
    const resumeMatch = readmeContent.match(/<!-- RESUME LINK\n([\s\S]*?)\n-->/);
    if (!resumeMatch) {
      console.log('No resume link found in README');
      return defaultResumeLink;
    }

    const resumeData = resumeMatch[1].split('\n').reduce((acc, line) => {
      const firstColonIndex = line.indexOf(':');
      if (firstColonIndex === -1) return acc;
      const key = line.substring(0, firstColonIndex).trim();
      const value = line.substring(firstColonIndex + 1).trim();
      if (key === 'url' && value) {
        acc[key] = value;
      }
      return acc;
    }, {});

    const resumeLink = resumeData.url || defaultResumeLink;
    console.log('Parsed resume link:', resumeLink);
    return resumeLink;
  } catch (error) {
    console.error('Error parsing resume link:', error);
    return defaultResumeLink;
  }
};

// Provider Component
export const ResumeProvider = ({ children }) => {
  const [resumeLink, setResumeLink] = useState('https://kamalkumar-kolisetty-resume.tiiny.site/');

  useEffect(() => {
    const fetchResumeLink = async () => {
      try {
        console.log('Fetching repos with VITE_GITHUB_USERNAME:', import.meta.env.VITE_GITHUB_USERNAME);
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
          throw new Error(`Failed to fetch repositories: ${response.status}`);
        }

        const repos = await response.json();
        console.log('Fetched repos for resume:', repos.map(repo => repo.name));
        const resumeRepo = repos.find(repo => repo.topics.includes('resume-link'));

        if (resumeRepo) {
          console.log('Found resume repo:', resumeRepo.name);
          const resumeReadmeResponse = await fetch(
            `https://api.github.com/repos/${import.meta.env.VITE_GITHUB_USERNAME}/${resumeRepo.name}/readme`,
            {
              headers: {
                Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
                Accept: 'application/vnd.github.v3+json',
              },
            }
          );

          if (resumeReadmeResponse.ok) {
            const resumeReadmeData = await resumeReadmeResponse.json();
            const resumeReadmeContent = atob(resumeReadmeData.content);
            const parsedResumeLink = parseResumeLink(resumeReadmeContent);
            setResumeLink(parsedResumeLink);
          } else {
            console.error('Failed to fetch resume repo README:', resumeReadmeResponse.status);
          }
        } else {
          console.log('No repo with resume-link topic found, using default resume link');
        }
      } catch (error) {
        console.error('Error fetching resume link:', error);
      }
    };

    fetchResumeLink();
  }, []);

  return (
    <ResumeContext.Provider value={{ resumeLink }}>
      {children}
    </ResumeContext.Provider>
  );
};

// Hook to use resume link
export const useResume = () => {
  const context = useContext(ResumeContext);
  if (context === undefined) {
    throw new Error('useResume must be used within a ResumeProvider');
  }
  return context;
};