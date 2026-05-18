// Load data from JSON file
let portfolioData = null;

async function loadData() {
    try {
        portfolioData = {
            "personal": {
                "name": "Vanu Protap Verma",
                "title": "Team Lead | People Manager | Software Problem Solver | AI User",
                "location": "Waitara, Sydney, Australia",
                "tagline": "Leading and managing teams to deliver exceptional software solutions",
                "profilePhoto": "images/profile.jpg",
                "social": {
                "email": "contact.vanuverma@gmail.com",
                "linkedin": "https://linkedin.com/in/vanuverma",
                "github": "",
                "medium": "https://medium.com/@vanu-verma"
                }
            },
            "about": {
                "summary": "Hands-on Technology Leader and Software Engineer with 17+ years of experience delivering scalable software products. Over 4 years of experience leading high-performing engineering teams while remaining deeply involved in architecture, project delivery, and hands-on development. Strong background in SaaS and in-house systems, microservices, RESTful APIs, cloud infrastructure, CI/CD pipelines, and AI-assisted development. Passionate about mentoring engineers and building secure, maintainable solutions in collaborative teams."
            },
            "highlights": [
                "17+ years of software development experience",
                "4+ years of software development team leading and people management experience",
                "Full stack expertise on .NET and NodeJS based modern cloud architecture",
                "Strong stakeholder management and technical leadership"
            ],
            "majorProjects": [
                {
                "name": "Business Communication Automation",
                "description": "Automated priority item reminder email, report generation and distribution tool",
                "techStack": [
                    "n8n",
                    "SQL Server",
                    "3rd Party email sender",
                    "Javascript"
                ],
                "highlights": [
                    "CRM module improvement by leading a squad of 4 senior engineers, planning and delivering business-critical features to support daily operations.",
                    "Finance module improvement by leading a squad of 4 senior engineers, planning and delivering integrations with NebuLAW (Salesforce), NAB DirectLink and Xero, for automated EFT approvals and transfers."
                ],
                "detailPage": "project-business-communication-automation.html"
                },
                {
                "name": "CasePlan",
                "description": "In-house CRM, Finance, Document and Legal Case management software",
                "techStack": [
                    "C#",
                    "ASP.NET MVC",
                    "SQL Server",
                    "Azure",
                    "SignalR"
                ],
                "highlights": [
                    "Automated emails sent to respective users on their related priority items.",
                    "Automated report generation and distribution to respective users on scheduled interval/trigger."
                ],
                "detailPage": ""
                },
                {
                "name": "Digital Licence Platform",
                "description": "Cloud based platform offering digital and enhanced versions of some of the existing credentials like NSW Driver Licence, Trade licences etc.",
                "techStack": [
                    "C#",
                    "NodeJs",
                    "NestJs",
                    "MongoDB",
                    "Apigee",
                    "Splunk",
                    "Docker",
                    "Kubernetes"
                ],
                "highlights": [
                    "One of the OG developers and SMEs in re-writing the tightly coupled, monolith platform into a decoupled, scalable, microservice based application.",
                    "Reduced time frame of releasing a digitized credential from 6 months to a 2 weeks.",
                    "Led a squad of 4 engineers for digitizing Working With Children Check and Covid certificate."
                ],
                "detailPage": "project-digital-licence-platform.html"
                },
                {
                "name": "Partner Management Portal",
                "description": "In house SaaS product for sharing information from DDL with participant RSL venues.",
                "techStack": [
                    "C#",
                    "NodeJs",
                    "NestJs",
                    "MongoDB",
                    "Apigee",
                    "Splunk",
                    "Docker",
                    "Kubernetes"
                ],
                "highlights": [
                    "Rewrote existing code to microservice architecture with increased test coverage from around 40% to over 90% prior to being transferred to the next project.",
                    "Established seemless integration for sharing data between NSW Digital Licence Holders and participating RSL venues."
                ],
                "detailPage": "project-partner-entitlement.html"
                },
                {
                "name": "Verifiable Credentials ecosystem",
                "description": "Public facing platform for developed to support NSW government's Verifiable Credential initiative",
                "techStack": [
                    "AWS Serverless",
                    "Python lambda",
                    "DynamoDb",
                    "Apigee",
                    "Splunk",
                    "GitLab CI/CD"
                ],
                "highlights": [
                    "Led a squad of 3 engineers to design and build a SaaS platform on AWS.",
                    "Participated in vendor platform evaluation as part of the procurement technical advisory team, leading early adoption and integration.",
                    "Trained engineers across multiple squads on effective usage of the selected vendor platform and collaborated with the vendors on improving their product with new feature requests."
                ],
                "detailPage": "project-verifiable-credential.html"
                },
                {
                "name": "Identity Conformance Component",
                "description": "Internal project to establish a standard integration approach between verifiable credential holder and participating credential issuing agencies.",
                "techStack": [
                    "AWS Serverless",
                    "Python lambda",
                    "DynamoDb",
                    "Apigee",
                    "Splunk",
                    "GitLab CI/CD"
                ],
                "highlights": [
                    "Led cross-functional system architecture design and documentation for an in-house SaaS platform.",
                    "Delivered a production-ready platform establishing connectivity between multiple participants."
                ],
                "detailPage": ""
                }
            ],
            
            "skills": {
                "Languages": [
                "C#",
                "JavaScript",
                "TypeScript",
                "Python"
                ],
                "Frontend": [
                "React",
                "ASP.NET MVC",
                "HTML/CSS",
                "jQuery"
                ],
                "Backend": [
                "ASP.NET Core",
                "Node.js",
                "NestJs",
                "Express"
                ],
                "Cloud & DevOps": [
                "AWS",
                "Azure",
                "Docker"
                ],
                "Architecture": [
                "Microservices",
                "Serverless",
                "MVC",
                "RESTful APIs",
                "Event-Driven"
                ],
                "Databases": [
                "SQL Server",
                "MongoDB",
                "DynamoDB"
                ],
                "Tools & Practices": [
                "n8n",
                "GitLab",
                "GitHub",
                "Github Copilot",
                "Jira",
                "Confluence",
                "TDD",
                "Pair Programming",
                "Code Review"
                ],
                "Monitoring": [
                "Splunk",
                "Apigee"
                ],
                "Leadership": [
                "Team Leading",
                "Architecture Design",
                "Technical Research",
                "Stakeholder Collaboration",
                "Documentation",
                "Resource Management",
                "User support Management"
                ]
            },
            "education": [
                {
                "degree": "Master of Science (MSc)",
                "field": "Computer Science and Engineering",
                "major": "Software Engineering",
                "institution": "East West University",
                "location": "Dhaka, Bangladesh",
                "startYear": "2010",
                "completionYear": "2013",
                "isCompleted": true,
                "result": "CGPA 3.45 out of 4",
                "description": "Focused on advanced software engineering principles and practices."
                },
                {
                "degree": "Bachelor of Science (BSc)",
                "field": "Computer Science and Engineering",
                "major": "Software Engineering",
                "institution": "United International University",
                "location": "Dhaka, Bangladesh",
                "startYear": "2005",
                "completionYear": "2008",
                "isCompleted": true,
                "result": "CGPA 3.67 out of 4",
                "description": "Strong foundation in computer science fundamentals and software development."
                }
            ],
            "certifications": [],
            "achievements": [],
            "personalProjects": []
            };
        populatePage();
    } catch (error) {
        console.error('Error loading data:', error);
    }
}

function populatePage() {
    if (!portfolioData) return;

    const personal = portfolioData.personal || {};
    const social = personal.social || {};
    const projects = normalizeArray(portfolioData.majorProjects || portfolioData.projects);
    const personalProjects = normalizeArray(portfolioData.personalProjects || portfolioData.projects)
        .filter(project => project.publiclyVisible !== false);
    const responsibilities = normalizeArray(portfolioData.keyResponsibilities || portfolioData.highlights);

    // Profile Section
    document.getElementById('heroName').textContent = personal.name || '';
    document.getElementById('heroTitle').textContent = personal.title || '';
    
    // Update profile photo or initials
    const profilePhoto = document.getElementById('profilePhoto');
    const profileInitials = document.getElementById('profileInitials');
    
    if (isNonEmptyString(personal.profilePhoto)) {
        // Show photo
        profilePhoto.src = personal.profilePhoto;
        profilePhoto.style.display = 'block';
        profileInitials.style.display = 'none';
    } else {
        // Show initials
        const initials = (personal.name || '')
            .split(' ')
            .filter(Boolean)
            .map(n => n[0])
            .join('') || 'VP';
        profileInitials.textContent = initials;
        profilePhoto.style.display = 'none';
        profileInitials.style.display = 'block';
    }

    // About Section
    const aboutText = portfolioData.about?.summary || portfolioData.about || '';
    document.getElementById('aboutText').innerHTML = String(aboutText)
        .split('\n')
        .filter(Boolean)
        .map(p => `<p>${escapeHtml(p)}</p>`)
        .join('');

    // Sidebar Contact Icons
    const sidebarContactIcons = document.getElementById('sidebarContactIcons');
    const sidebarIcons = [];
    
    if (isNonEmptyString(social.email)) {
        sidebarIcons.push(`
            <a href="mailto:${escapeHtml(social.email)}" class="sidebar-contact-link">
                <i class="fas fa-envelope"></i>
                <span>${escapeHtml(social.email)}</span>
            </a>
        `);
    }
    if (isNonEmptyString(social.linkedin) && social.linkedin.includes('linkedin.com/in/')) {
        const linkedinHandle = social.linkedin.split('linkedin.com/in/')[1]?.replace('/', '') || 'LinkedIn';
        sidebarIcons.push(`
            <a href="${escapeHtml(social.linkedin)}" class="sidebar-contact-link" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-linkedin"></i>
                <span>${escapeHtml(linkedinHandle)}</span>
            </a>
        `);
    }
    if (isNonEmptyString(social.github) && social.github.includes('github.com/')) {
        const githubHandle = social.github.split('github.com/')[1]?.replace('/', '') || 'GitHub';
        sidebarIcons.push(`
            <a href="${escapeHtml(social.github)}" class="sidebar-contact-link" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-github"></i>
                <span>${escapeHtml(githubHandle)}</span>
            </a>
        `);
    }
    if (isNonEmptyString(social.medium) && social.medium.includes('medium.com')) {
        const mediumHandle = social.medium.split('medium.com/')[1]?.replace('@', '').replace('/', '') || 'Medium';
        sidebarIcons.push(`
            <a href="${escapeHtml(social.medium)}" class="sidebar-contact-link" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-medium"></i>
                <span>${escapeHtml(mediumHandle)}</span>
            </a>
        `);
    }
    
    sidebarContactIcons.innerHTML = sidebarIcons.join('');

    // Key Responsibilities Section (in main content now)
    if (responsibilities.length > 0) {
        const responsibilitiesContainer = document.getElementById('responsibilitiesContainer');
        responsibilitiesContainer.innerHTML = `
            <ul class="responsibilities-list">
                ${responsibilities.map(resp => `<li>${escapeHtml(resp)}</li>`).join('')}
            </ul>
        `;
    } else {
        const responsibilitiesSection = document.getElementById('responsibilitiesSection');
        if (responsibilitiesSection) {
            responsibilitiesSection.style.display = 'none';
        }
    }

    // Experience Timeline
    const experienceTimeline = document.getElementById('experienceTimeline');
    if (projects.length === 0) {
        experienceTimeline.innerHTML = '<p class="timeline-description">No major projects available.</p>';
    } else {
        experienceTimeline.innerHTML = `
            <div class="">
                <div class="timeline-description">
                    <div class="experience-projects-grid">
                        ${projects.map(project => `
                            <div class="experience-project-card">
                                <div class="experience-project-header">
                                    <h6 class="experience-project-name">${escapeHtml(project.name)}</h6>
                                    ${isNonEmptyString(project.detailPage) ? `<a href="${escapeHtml(project.detailPage)}" class="experience-project-link" target="_self">View Details →</a>` : ''}
                                </div>
                                <p class="experience-project-description">${escapeHtml(project.description || '')}</p>
                                <div class="experience-project-tech">
                                    ${normalizeArray(project.techStack).map(tech => `<span class="tech-tag">${escapeHtml(tech)}</span>`).join('')}
                                </div>
                                ${normalizeArray(project.highlights).length > 0 ? `
                                    <ul class="experience-project-highlights">
                                        ${normalizeArray(project.highlights).map(h => `<li>${escapeHtml(h)}</li>`).join('')}
                                    </ul>
                                ` : ''}
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    // Personal Projects Grid
    const projectsGrid = document.getElementById('projectsGrid');
    
    // Hide Projects section if no projects to display
    const projectsSection = document.getElementById('projects');
    if (personalProjects.length === 0) {
        projectsSection.style.display = 'none';
    } else {
        projectsSection.style.display = 'block';
        projectsGrid.innerHTML = personalProjects.map(project => `
        <div class="project-card">
            <div class="project-image">
                ${project.image ? `<img src="${project.image}" alt="${project.name}">` : (project.icon || '<i class="fas fa-code"></i>')}
            </div>
            <h3 class="project-title">${escapeHtml(project.name)}</h3>
            <p class="project-description">${escapeHtml(project.shortDescription || project.description || '')}</p>
            <div class="project-tags">
                ${normalizeArray(project.technologies || project.techStack).map(tech => `<span class="tag">${escapeHtml(tech)}</span>`).join('')}
            </div>
            <div class="project-links">
                ${isNonEmptyString(project.github) ? `<a href="${escapeHtml(project.github)}" class="project-link" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i> Code</a>` : ''}
                ${isNonEmptyString(project.live) ? `<a href="${escapeHtml(project.live)}" class="project-link" target="_blank" rel="noopener noreferrer"><i class="fas fa-external-link-alt"></i> Live</a>` : ''}
                ${isNonEmptyString(project.detailPage) ? `<a href="${escapeHtml(project.detailPage)}" class="project-link"><i class="fas fa-info-circle"></i> Details</a>` : ''}
            </div>
        </div>
    `).join('');
    }

    // Skills Section
    const skillsContainer = document.getElementById('skillsContainer');
    skillsContainer.innerHTML = Object.entries(portfolioData.skills || {}).map(([category, skills]) => `
        <div class="skill-category">
            <h3>${escapeHtml(category)}</h3>
            <div class="skill-list">
                ${normalizeArray(skills).map(skill => `<span class="skill-item">${escapeHtml(skill)}</span>`).join('')}
            </div>
        </div>
    `).join('');

    // Education Section
    const educationList = document.getElementById('educationList');
    educationList.innerHTML = normalizeArray(portfolioData.education).map(edu => `
        <div class="education-item">
            <h3 class="education-degree">${escapeHtml(edu.degree || '')}${edu.field ? ` in ${escapeHtml(edu.field)}` : ''}</h3>
            <div class="education-school">${escapeHtml(edu.institution || edu.school || '')}${edu.location ? `, ${escapeHtml(edu.location)}` : ''}</div>
            <div class="education-date">${escapeHtml(edu.startYear || edu.startDate || '')} - ${escapeHtml(edu.completionYear || edu.endDate || '')}</div>
            ${edu.result ? `<div class="education-result">${escapeHtml(edu.result)}</div>` : ''}
            ${edu.description ? `<p class="education-description">${escapeHtml(edu.description)}</p>` : ''}
        </div>
    `).join('');

    // Certifications Section
    const certificationsList = document.getElementById('certificationsList');
    const certificationsSection = document.getElementById('certifications');
    
    if (normalizeArray(portfolioData.certifications).length > 0) {
        certificationsList.innerHTML = normalizeArray(portfolioData.certifications).map(cert => `
            <div class="certification-item">
                <h3 class="certification-name">${escapeHtml(cert.name || cert.title || '')}</h3>
                ${cert.issuer ? `<div class="certification-issuer">${escapeHtml(cert.issuer)}</div>` : ''}
                ${cert.date ? `<div class="certification-date">${escapeHtml(cert.date)}</div>` : ''}
                ${cert.credentialId ? `<div class="certification-id">Credential ID: ${escapeHtml(cert.credentialId)}</div>` : ''}
                ${cert.url ? `<a href="${escapeHtml(cert.url)}" class="certification-link" target="_blank" rel="noopener noreferrer">View Certificate</a>` : ''}
            </div>
        `).join('');
    } else {
        certificationsSection.style.display = 'none';
    }

    // Contact Methods
    const contactMethods = document.getElementById('contactMethods');
    const socialLinks = [];
    
    if (isNonEmptyString(social.email)) {
        socialLinks.push(`
            <a href="mailto:${escapeHtml(social.email)}" class="contact-method">
                <i class="fas fa-envelope"></i>
                <span>${escapeHtml(social.email)}</span>
            </a>
        `);
    }
    
    if (isNonEmptyString(social.linkedin) && social.linkedin.includes('linkedin.com/in/')) {
        socialLinks.push(`
            <a href="${escapeHtml(social.linkedin)}" class="contact-method" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-linkedin"></i>
                <span>Connect on LinkedIn</span>
            </a>
        `);
    }
    
    if (isNonEmptyString(social.github) && social.github.includes('github.com/')) {
        socialLinks.push(`
            <a href="${escapeHtml(social.github)}" class="contact-method" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-github"></i>
                <span>View GitHub Profile</span>
            </a>
        `);
    }
    
    if (isNonEmptyString(social.medium) && social.medium.includes('medium.com')) {
        socialLinks.push(`
            <a href="${escapeHtml(social.medium)}" class="contact-method" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-medium"></i>
                <span>Read on Medium</span>
            </a>
        `);
    }
    
    contactMethods.innerHTML = socialLinks.join('');

    // Footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    document.getElementById('footerName').textContent = personal.name || '';

    // Generate individual project pages
    generateProjectPages();
}

function openProjectDetails(projectId) {
    window.location.href = `project-${projectId}.html`;
}

function generateProjectPages() {
    // This function would generate individual project pages
    // In a static site, you'd create these pages manually or use a build tool
    const projects = normalizeArray(portfolioData.majorProjects || portfolioData.projects);
    projects.forEach(project => {
        // Store project details for individual pages
        if (project.id) {
            localStorage.setItem(`project-${project.id}`, JSON.stringify(project));
        }
    });
}

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

function setTheme(theme) {
    htmlElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// Check for saved theme preference or default to 'light' mode
const currentTheme = localStorage.getItem('theme') || 'light';
setTheme(currentTheme);

themeToggle.addEventListener('click', () => {
    const newTheme = htmlElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect (only if navbar exists)
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

if (navbar) {
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            navbar.style.boxShadow = 'var(--shadow)';
        } else {
            navbar.style.boxShadow = 'var(--shadow-lg)';
        }
        
        lastScroll = currentScroll;
    });
}

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Load data
    loadData();
});
