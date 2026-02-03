/* Resume-Style Portfolio CSS */

/* CSS Variables for Theming */
:root {
    --primary-color: #2563eb;
    --secondary-color: #7c3aed;
    --accent-color: #10b981;
    --bg-primary: #ffffff;
    --bg-secondary: #f9fafb;
    --bg-sidebar: #f8fafc;
    --text-primary: #111827;
    --text-secondary: #6b7280;
    --border-color: #e5e7eb;
    --shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
}

[data-theme='dark'] {
    --primary-color: #3b82f6;
    --secondary-color: #8b5cf6;
    --accent-color: #34d399;
    --bg-primary: #1f2937;
    --bg-secondary: #111827;
    --bg-sidebar: #1a1f2e;
    --text-primary: #f9fafb;
    --text-secondary: #d1d5db;
    --border-color: #374151;
}

/* Reset and Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    line-height: 1.6;
    color: var(--text-primary);
    background-color: var(--bg-primary);
    overflow-x: hidden;
}

/* Theme Toggle Button */
.theme-toggle {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1000;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: var(--primary-color);
    color: white;
    border: none;
    cursor: pointer;
    box-shadow: var(--shadow-lg);
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
}

.theme-toggle:hover {
    transform: scale(1.1);
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
}

/* Main Layout Container */
.resume-container {
    display: flex;
    min-height: 100vh;
}

/* Left Sidebar (Fixed) */
.sidebar {
    width: 450px;
    background-color: var(--bg-sidebar);
    border-right: 1px solid var(--border-color);
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    overflow-y: auto;
    z-index: 100;
}

.sidebar-content {
    padding: 2rem 1.5rem;
}

/* Profile Section */
.profile-section {
    text-align: center;
    padding-bottom: 2rem;
    border-bottom: 2px solid var(--border-color);
    margin-bottom: 2rem;
}

.profile-image {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    margin: 0 auto 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: var(--shadow-md);
    position: relative;
    overflow: hidden;
}

.profile-photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
}

.profile-initials {
    font-size: 3rem;
    font-weight: bold;
    color: white;
}

.profile-name {
    font-size: 1.75rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 0.25rem;
}

.profile-title {
    font-size: 1.1rem;
    color: var(--primary-color);
    font-weight: 600;
}

/* Sidebar Sections */
.sidebar-section {
    margin-bottom: 2rem;
}

/* Sidebar Contact Icons */
.sidebar-contact-icons {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-top: 0.5rem;
}

.sidebar-contact-link {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.6rem 1rem;
    background: var(--bg-secondary);
    border-radius: 8px;
    color: var(--text-primary);
    text-decoration: none;
    transition: all 0.3s ease;
    font-size: 0.9rem;
    border: 1px solid var(--border-color);
}

.sidebar-contact-link i {
    color: var(--primary-color);
    font-size: 1.1rem;
    width: 20px;
    text-align: center;
}

.sidebar-contact-link span {
    word-break: break-all;
}

.sidebar-contact-link:hover {
    background: var(--primary-color);
    color: white;
    transform: translateX(3px);
    border-color: var(--primary-color);
}

.sidebar-contact-link:hover i {
    color: white;
}

.sidebar-heading {
    font-size: 1rem;
    font-weight: 700;
    color: var(--text-primary);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid var(--primary-color);
}

.about-content {
    font-size: 0.9rem;
    line-height: 1.7;
    color: var(--text-secondary);
}

.about-content p {
    margin-bottom: 0.75rem;
}

/* Skills in Sidebar */
.sidebar #skillsContainer {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.sidebar .skill-category h3 {
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 0.5rem;
}

.sidebar .skill-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
}

.sidebar .skill-item {
    display: inline-block;
    padding: 0.25rem 0.6rem;
    background-color: var(--bg-primary);
    color: var(--text-secondary);
    border-radius: 4px;
    font-size: 0.8rem;
    border: 1px solid var(--border-color);
}

/* Contact List */
.contact-list {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.sidebar .contact-list {
    /* Sidebar specific styles if needed */
}

.main-content .contact-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
    margin-top: 1rem;
}

.contact-list .contact-method {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.5rem;
    background-color: var(--bg-primary);
    border-radius: 6px;
    text-decoration: none;
    color: var(--text-secondary);
    font-size: 0.9rem;
    transition: all 0.3s ease;
    border: 1px solid var(--border-color);
}

.main-content .contact-list .contact-method {
    padding: 1rem;
    background-color: var(--bg-secondary);
    font-size: 1rem;
}

.contact-list .contact-method:hover {
    background-color: var(--primary-color);
    color: white;
    transform: translateX(5px);
}

.main-content .contact-list .contact-method:hover {
    transform: translateY(-3px);
}

.contact-list .contact-method i {
    font-size: 1.1rem;
    width: 20px;
    text-align: center;
}

/* Social Links in Sidebar */
.sidebar .social-links {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-top: 1rem;
}

.sidebar .social-link {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: var(--bg-primary);
    color: var(--text-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-size: 1.2rem;
    transition: all 0.3s ease;
    border: 1px solid var(--border-color);
}

.sidebar .social-link:hover {
    background-color: var(--primary-color);
    color: white;
    transform: translateY(-3px);
}

/* Main Content Area (Scrollable) */
.main-content {
    margin-left: 450px;
    flex: 1;
    padding: 3rem;
    background-color: var(--bg-primary);
}

/* Content Sections */
.content-section {
    margin-bottom: 3rem;
}

.content-heading {
    font-size: 2rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 2rem;
    position: relative;
    padding-bottom: 0.75rem;
}

.content-heading::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
    border-radius: 2px;
}

/* Experience List */
.experience-list {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
}

.timeline-item {
    position: relative;
    padding-left: 2rem;
    border-left: 2px solid var(--border-color);
}

.timeline-item::before {
    content: '';
    position: absolute;
    left: -6px;
    top: 0;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: var(--primary-color);
    box-shadow: 0 0 0 4px var(--bg-primary);
}

.timeline-date {
    font-size: 0.9rem;
    color: var(--primary-color);
    font-weight: 600;
    margin-bottom: 0.5rem;
}

.timeline-company {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 0.25rem;
}

.timeline-role {
    font-size: 1.1rem;
    color: var(--text-secondary);
    font-weight: 600;
    margin-bottom: 1rem;
}

.timeline-description {
    color: var(--text-secondary);
    line-height: 1.8;
}

.timeline-description p {
    margin-bottom: 1rem;
}

.timeline-description ul {
    list-style: none;
    padding-left: 0;
}

.timeline-description li {
    padding-left: 1.5rem;
    margin-bottom: 0.75rem;
    position: relative;
}

.timeline-description li::before {
    content: '▸';
    position: absolute;
    left: 0;
    color: var(--primary-color);
    font-weight: bold;
}

/* Experience Projects Cards */
.experience-projects {
    margin-top: 1.5rem;
}

.experience-projects-heading {
    font-weight: 600;
    color: var(--primary-color);
    margin-bottom: 1rem;
    font-size: 1.1rem;
}

.experience-projects-grid {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.experience-project-card {
    background-color: var(--bg-secondary);
    padding: 1.25rem;
    border-radius: 10px;
    border-left: 4px solid var(--primary-color);
    transition: all 0.3s ease;
}

.experience-project-card:hover {
    transform: translateX(5px);
    box-shadow: var(--shadow-md);
}

.experience-project-header {
    display: flex;
    justify-content: space-between;
    align-items: start;
    margin-bottom: 0.75rem;
    gap: 1rem;
}

.experience-project-name {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--text-primary);
    margin: 0;
}

.experience-project-link {
    font-size: 0.85rem;
    color: var(--primary-color);
    text-decoration: none;
    white-space: nowrap;
    font-weight: 600;
}

.experience-project-link:hover {
    text-decoration: underline;
}

.experience-project-description {
    font-size: 0.95rem;
    color: var(--text-secondary);
    margin-bottom: 0.75rem;
    line-height: 1.6;
}

.experience-project-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 0.75rem;
}

.tech-tag {
    display: inline-block;
    padding: 0.25rem 0.6rem;
    background-color: var(--bg-primary);
    color: var(--primary-color);
    border-radius: 4px;
    font-size: 0.8rem;
    font-weight: 500;
    border: 1px solid var(--border-color);
}

.experience-project-highlights {
    list-style: none;
    padding-left: 0;
    margin: 0;
}

.experience-project-highlights li {
    padding-left: 1.25rem;
    margin-bottom: 0.5rem;
    position: relative;
    font-size: 0.9rem;
    color: var(--text-secondary);
    line-height: 1.6;
}

.experience-project-highlights li::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: var(--primary-color);
    font-weight: bold;
}

/* Key Responsibilities List */
.responsibilities-list {
    list-style: none;
    padding-left: 0;
    margin-top: 1rem;
}

.responsibilities-list li {
    padding-left: 1.5rem;
    margin-bottom: 0.75rem;
    position: relative;
    color: var(--text-secondary);
    line-height: 1.8;
}

.responsibilities-list li::before {
    content: '▸';
    position: absolute;
    left: 0;
    color: var(--primary-color);
    font-weight: bold;
}

/* Projects List */
.projects-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
}

.project-card {
    background-color: var(--bg-secondary);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    padding: 1.5rem;
    transition: all 0.3s ease;
    cursor: pointer;
}

.project-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
    border-color: var(--primary-color);
}

.project-image {
    font-size: 3rem;
    margin-bottom: 1rem;
    text-align: center;
}

.project-title {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 0.75rem;
}

.project-description {
    color: var(--text-secondary);
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 1rem;
}

.project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1rem;
}

.tag {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    background-color: var(--primary-color);
    color: white;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 500;
}

.project-links {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}

.project-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background-color: var(--bg-primary);
    color: var(--text-primary);
    text-decoration: none;
    border-radius: 6px;
    font-size: 0.9rem;
    font-weight: 600;
    transition: all 0.3s ease;
    border: 1px solid var(--border-color);
}

.project-link:hover {
    background-color: var(--primary-color);
    color: white;
    border-color: var(--primary-color);
}

/* Education List */
#educationList {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.education-item {
    background-color: var(--bg-secondary);
    padding: 1.5rem;
    border-radius: 12px;
    border-left: 4px solid var(--primary-color);
}

.education-degree {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 0.5rem;
}

.education-school {
    font-size: 1.1rem;
    color: var(--text-secondary);
    font-weight: 600;
    margin-bottom: 0.25rem;
}

.education-date {
    font-size: 0.9rem;
    color: var(--primary-color);
    font-weight: 600;
    margin-bottom: 1rem;
}

.education-description {
    color: var(--text-secondary);
    line-height: 1.7;
}

/* Footer */
.main-footer {
    margin-top: 4rem;
    padding-top: 2rem;
    border-top: 1px solid var(--border-color);
    text-align: center;
    color: var(--text-secondary);
    font-size: 0.9rem;
}

/* Scrollbar Styling */
.sidebar::-webkit-scrollbar {
    width: 6px;
}

.sidebar::-webkit-scrollbar-track {
    background: var(--bg-sidebar);
}

.sidebar::-webkit-scrollbar-thumb {
    background: var(--border-color);
    border-radius: 3px;
}

.sidebar::-webkit-scrollbar-thumb:hover {
    background: var(--primary-color);
}

/* Responsive Design */
@media (max-width: 1024px) {
    .sidebar {
        width: 300px;
    }
    
    .main-content {
        margin-left: 300px;
        padding: 2rem;
    }
}

@media (max-width: 768px) {
    .resume-container {
        flex-direction: column;
    }
    
    .sidebar {
        position: relative;
        width: 100%;
        height: auto;
        border-right: none;
        border-bottom: 1px solid var(--border-color);
    }
    
    .main-content {
        margin-left: 0;
        padding: 2rem 1rem;
    }
    
    .theme-toggle {
        top: 10px;
        right: 10px;
        width: 45px;
        height: 45px;
        font-size: 1.1rem;
    }
    
    .profile-image {
        width: 100px;
        height: 100px;
    }
    
    .profile-initials {
        font-size: 2.5rem;
    }
    
    .profile-name {
        font-size: 1.5rem;
    }
    
    .content-heading {
        font-size: 1.5rem;
    }
    
    .projects-list {
        grid-template-columns: 1fr;
    }
}

/* Print Styles */
@media print {
    .theme-toggle {
        display: none;
    }
    
    .sidebar {
        position: relative;
        width: 300px;
    }
    
    .main-content {
        margin-left: 300px;
    }
    
    .project-card,
    .education-item {
        break-inside: avoid;
    }
}
