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
    "summary": "Hands-on Technology Leader and Software Engineer with 17+ years of experience delivering scalable software products. Over 4 years of experience leading high-performing engineering teams while remaining deeply involved in architecture, project delivery, and hands-on development. Strong background in SaaS and in-house systems, microservices, RESTful APIs, cloud infrastructure, CI/CD pipelines, and AI-assisted development. Passionate about mentoring engineers and building secure, maintainable solutions in collaborative teams.",
    "highlights": [
      "17+ years of software development experience",
      "4+ years of software development team leading and people management experience",
      "Full stack expertise from .NET to modern cloud architecture",
      "Strong stakeholder management and technical leadership"
    ]
  },
  "keyResponsibilities": [
    "Technical and people leadership across end-to-end project delivery",
    "System architecture ownership, technical decision-making, and code reviews",
    "Line management responsibilities including goal setting, performance feedback, and career development",
    "Mentoring, coaching, and professional development of engineers at multiple levels",
    "Cross-functional stakeholder communication and collaboration",
    "Resource planning, capacity management, and delivery prioritisation",
    "Research, evaluation, and adoption of new technologies and best practices",
    "Ownership of production stability, incident management, end-user training and support management"
  ],
  "experience": [
    {
      "id": "exp-1",
      "company": "LawPartners Personal Injury Lawyers",
      "location": "Sydney, Australia",
      "website": "https://lawpartners.com.au/",
      "role": "Lead Developer",
      "employmentType": "Full time permanent",
      "startDate": "August 2024",
      "endDate": "Present",
      "isCurrentJob": true,
      "description": "Leading a team of 6 developers, managing multiple projects and ensuring delivery of high-quality software solutions.",
      "projects": [
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
            "CRM module improvement by leading a squad of 4 senior engineers, planning and delivering business-critical features to support daily operations.",
            "Finance module improvement by leading a squad of 4 senior engineers, planning and delivering integrations with NebuLAW (Salesforce), NAB DirectLink and Xero, for automated EFT approvals and transfers."
          ],
          "detailPage": ""
        }
      ]
    },
    {
      "id": "exp-2",
      "company": "Service NSW",
      "location": "Sydney, Australia",
      "website": "https://www.service.nsw.gov.au/",
      "role": "Senior Product Engineer",
      "employmentType": "Full time permanent",
      "startDate": "January 2019",
      "endDate": "July 2024",
      "isCurrentJob": false,
      "description": "Developed and maintained multiple public facing enterprise applications using modern cloud architecture.",
      "projects": [
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
      ]
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

    // Profile Section
    document.getElementById('heroName').textContent = portfolioData.personal.name;
    document.getElementById('heroTitle').textContent = portfolioData.personal.title;
    
    // Update profile photo or initials
    const profilePhoto = document.getElementById('profilePhoto');
    const profileInitials = document.getElementById('profileInitials');
    
    if (portfolioData.personal.profilePhoto && portfolioData.personal.profilePhoto.trim() !== '') {
        // Show photo
        profilePhoto.src = portfolioData.personal.profilePhoto;
        profilePhoto.style.display = 'block';
        profileInitials.style.display = 'none';
    } else {
        // Show initials
        const initials = portfolioData.personal.name.split(' ').map(n => n[0]).join('');
        profileInitials.textContent = initials;
        profilePhoto.style.display = 'none';
        profileInitials.style.display = 'block';
    }

    // About Section
    const aboutText = portfolioData.about?.summary || portfolioData.about;
    document.getElementById('aboutText').innerHTML = aboutText.split('\n').map(p => `<p>${p}</p>`).join('');

    // Sidebar Contact Icons
    const sidebarContactIcons = document.getElementById('sidebarContactIcons');
    const sidebarIcons = [];
    
    if (portfolioData.personal.social.email && portfolioData.personal.social.email.trim() !== '') {
        sidebarIcons.push(`
            <a href="mailto:${portfolioData.personal.social.email}" class="sidebar-contact-link">
                <i class="fas fa-envelope"></i>
                <span>${portfolioData.personal.social.email}</span>
            </a>
        `);
    }
    if (portfolioData.personal.social.linkedin && portfolioData.personal.social.linkedin.includes('linkedin.com/in/')) {
        const linkedinHandle = portfolioData.personal.social.linkedin.split('linkedin.com/in/')[1]?.replace('/', '') || 'LinkedIn';
        sidebarIcons.push(`
            <a href="${portfolioData.personal.social.linkedin}" class="sidebar-contact-link" target="_blank">
                <i class="fab fa-linkedin"></i>
                <span>${linkedinHandle}</span>
            </a>
        `);
    }
    if (portfolioData.personal.social.github && portfolioData.personal.social.github.includes('github.com/')) {
        const githubHandle = portfolioData.personal.social.github.split('github.com/')[1]?.replace('/', '') || 'GitHub';
        sidebarIcons.push(`
            <a href="${portfolioData.personal.social.github}" class="sidebar-contact-link" target="_blank">
                <i class="fab fa-github"></i>
                <span>${githubHandle}</span>
            </a>
        `);
    }
    if (portfolioData.personal.social.medium && portfolioData.personal.social.medium.includes('medium.com')) {
        const mediumHandle = portfolioData.personal.social.medium.split('medium.com/')[1]?.replace('@', '').replace('/', '') || 'Medium';
        sidebarIcons.push(`
            <a href="${portfolioData.personal.social.medium}" class="sidebar-contact-link" target="_blank">
                <i class="fab fa-medium"></i>
                <span>${mediumHandle}</span>
            </a>
        `);
    }
    
    sidebarContactIcons.innerHTML = sidebarIcons.join('');

    // Key Responsibilities Section (in main content now)
    if (portfolioData.keyResponsibilities && portfolioData.keyResponsibilities.length > 0) {
        const responsibilitiesContainer = document.getElementById('responsibilitiesContainer');
        responsibilitiesContainer.innerHTML = `
            <ul class="responsibilities-list">
                ${portfolioData.keyResponsibilities.map(resp => `<li>${resp}</li>`).join('')}
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
    experienceTimeline.innerHTML = portfolioData.experience.map(exp => `
        <div class="timeline-item">
            <div class="timeline-date">${exp.startDate} - ${exp.endDate}</div>
            <h3 class="timeline-company">${exp.company}</h3>
            <h4 class="timeline-role">${exp.role}</h4>
            <div class="timeline-description">
                <p>${exp.description}</p>
                ${exp.achievements && exp.achievements.length > 0 ? `
                    <ul>
                        ${exp.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                    </ul>
                ` : ''}
                ${exp.projects && exp.projects.length > 0 ? `
                    <div class="experience-projects">
                        <h5 class="experience-projects-heading">Key Projects:</h5>
                        <div class="experience-projects-grid">
                            ${exp.projects.map(project => `
                                <div class="experience-project-card">
                                    ${project.image ? `<div class="experience-project-image"><img src="${project.image}" alt="${project.name}"></div>` : ''}
                                    <div class="experience-project-header">
                                        <h6 class="experience-project-name">${project.name}</h6>
                                        ${project.detailPage ? `<a href="${project.detailPage}" class="experience-project-link" target="_blank">View Details →</a>` : ''}
                                    </div>
                                    <p class="experience-project-description">${project.description}</p>
                                    <div class="experience-project-tech">
                                        ${Array.isArray(project.techStack) ? project.techStack.map(tech => `<span class="tech-tag">${tech}</span>`).join('') : project.techStack}
                                    </div>
                                    ${project.highlights && project.highlights.length > 0 ? `
                                        <ul class="experience-project-highlights">
                                            ${project.highlights.map(h => `<li>${h}</li>`).join('')}
                                        </ul>
                                    ` : ''}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}
            </div>
        </div>
    `).join('');

    // Personal Projects Grid
    const projectsGrid = document.getElementById('projectsGrid');
    const personalProjects = (portfolioData.personalProjects || portfolioData.projects || [])
        .filter(project => project.publiclyVisible !== false); // Show only if publiclyVisible is true or undefined
    
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
            <h3 class="project-title">${project.name}</h3>
            <p class="project-description">${project.shortDescription || project.description}</p>
            <div class="project-tags">
                ${(project.technologies || project.techStack || []).map(tech => `<span class="tag">${tech}</span>`).join('')}
            </div>
            <div class="project-links">
                ${project.github ? `<a href="${project.github}" class="project-link" target="_blank"><i class="fab fa-github"></i> Code</a>` : ''}
                ${project.live ? `<a href="${project.live}" class="project-link" target="_blank"><i class="fas fa-external-link-alt"></i> Live</a>` : ''}
                ${project.detailPage ? `<a href="${project.detailPage}" class="project-link"><i class="fas fa-info-circle"></i> Details</a>` : ''}
            </div>
        </div>
    `).join('');
    }

    // Skills Section
    const skillsContainer = document.getElementById('skillsContainer');
    skillsContainer.innerHTML = Object.entries(portfolioData.skills).map(([category, skills]) => `
        <div class="skill-category">
            <h3>${category}</h3>
            <div class="skill-list">
                ${skills.map(skill => `<span class="skill-item">${skill}</span>`).join('')}
            </div>
        </div>
    `).join('');

    // Education Section
    const educationList = document.getElementById('educationList');
    educationList.innerHTML = portfolioData.education.map(edu => `
        <div class="education-item">
            <h3 class="education-degree">${edu.degree}${edu.field ? ` in ${edu.field}` : ''}</h3>
            <div class="education-school">${edu.institution || edu.school}${edu.location ? `, ${edu.location}` : ''}</div>
            <div class="education-date">${edu.startYear || edu.startDate} - ${edu.completionYear || edu.endDate}</div>
            ${edu.result ? `<div class="education-result">${edu.result}</div>` : ''}
            ${edu.description ? `<p class="education-description">${edu.description}</p>` : ''}
        </div>
    `).join('');

    // Certifications Section
    const certificationsList = document.getElementById('certificationsList');
    const certificationsSection = document.getElementById('certifications');
    
    if (portfolioData.certifications && portfolioData.certifications.length > 0) {
        certificationsList.innerHTML = portfolioData.certifications.map(cert => `
            <div class="certification-item">
                <h3 class="certification-name">${cert.name || cert.title}</h3>
                ${cert.issuer ? `<div class="certification-issuer">${cert.issuer}</div>` : ''}
                ${cert.date ? `<div class="certification-date">${cert.date}</div>` : ''}
                ${cert.credentialId ? `<div class="certification-id">Credential ID: ${cert.credentialId}</div>` : ''}
                ${cert.url ? `<a href="${cert.url}" class="certification-link" target="_blank">View Certificate</a>` : ''}
            </div>
        `).join('');
    } else {
        certificationsSection.style.display = 'none';
    }

    // Contact Methods
    const contactMethods = document.getElementById('contactMethods');
    const socialLinks = [];
    
    if (portfolioData.personal.social.email && portfolioData.personal.social.email.trim() !== '') {
        socialLinks.push(`
            <a href="mailto:${portfolioData.personal.social.email}" class="contact-method">
                <i class="fas fa-envelope"></i>
                <span>${portfolioData.personal.social.email}</span>
            </a>
        `);
    }
    
    if (portfolioData.personal.social.linkedin && portfolioData.personal.social.linkedin.includes('linkedin.com/in/')) {
        socialLinks.push(`
            <a href="${portfolioData.personal.social.linkedin}" class="contact-method" target="_blank">
                <i class="fab fa-linkedin"></i>
                <span>Connect on LinkedIn</span>
            </a>
        `);
    }
    
    if (portfolioData.personal.social.github && portfolioData.personal.social.github.includes('github.com/')) {
        socialLinks.push(`
            <a href="${portfolioData.personal.social.github}" class="contact-method" target="_blank">
                <i class="fab fa-github"></i>
                <span>View GitHub Profile</span>
            </a>
        `);
    }
    
    if (portfolioData.personal.social.medium && portfolioData.personal.social.medium.includes('medium.com')) {
        socialLinks.push(`
            <a href="${portfolioData.personal.social.medium}" class="contact-method" target="_blank">
                <i class="fab fa-medium"></i>
                <span>Read on Medium</span>
            </a>
        `);
    }
    
    contactMethods.innerHTML = socialLinks.join('');

    // Footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    document.getElementById('footerName').textContent = portfolioData.personal.name;

    // Generate individual project pages
    generateProjectPages();
}

function openProjectDetails(projectId) {
    window.location.href = `project-${projectId}.html`;
}

function generateProjectPages() {
    // This function would generate individual project pages
    // In a static site, you'd create these pages manually or use a build tool
    portfolioData.projects.forEach(project => {
        // Store project details for individual pages
        localStorage.setItem(`project-${project.id}`, JSON.stringify(project));
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
