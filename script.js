// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted!');
});

// Scroll animation for elements
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Dynamic skill bars
const skills = {
    'HTML/CSS': 90,
    'JavaScript': 85,
    'React': 80,
    'Node.js': 75,
    'Python': 70
};

function createSkillBars() {
    const skillsGrid = document.querySelector('.skills-grid');
    if(!skillsGrid) return;
    Object.entries(skills).forEach(([skill, percentage]) => {
        const skillBar = document.createElement('div');
        skillBar.className = 'skill-bar';
        skillBar.innerHTML = `
            <div class="skill-name">${skill}</div>
            <div class="skill-progress" style="background: #eee; border-radius: 10px; overflow: hidden; margin: 0.5rem 0;">
                <div class="progress" style="width: ${percentage}%; background: #007bff; height: 10px; border-radius: 10px;"></div>
            </div>
            <div class="skill-percentage">${percentage}%</div>
        `;
        skillsGrid.appendChild(skillBar);
    });
}
document.addEventListener('DOMContentLoaded', createSkillBars);

// Projects section
const projects = [
    {
        title: "FirstRepo",
        description: "This is my first project Navigation Menu, showcasing my skills in web development.",
        technologies: ["HTML", "CSS", "JavaScript"],
        githubLink: "https://github.com/bipinraut1/PRODIGY_WD_01",
        previewImage: "project1.png"
    },
    {
        title: " Second Project",
        description: "This is my second Project StopWatch webapplication  ,showcasing my skills in web development.",
        technologies: ["HTML", "CSS", "JAvaScript"],
        githubLink: "https://github.com/bipinraut1/PRODIGY_WD_02",
        previewImage: "project2.png"
    },
    {
        title: "Third Project",
        description: "This is my third project Tic-Tac-Toe Webapplication ,showcasing my skills in web development.",
        technologies: ["HTML", "CSS", "JAvaScript"],
        githubLink: "https://github.com/bipinraut1/PRODIGY_WD_03",
        previewImage: "project3.png"
    }
   
   
];

function createProjectCards() {
    const projectGrid = document.querySelector('.project-grid');
    if(!projectGrid) return;
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.previewImage}" alt="${project.title}">
            </div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="tech-stack">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.githubLink}" target="_blank" class="btn github-btn">
                        <i class="fab fa-github"></i> View on GitHub
                    </a>
                </div>
            </div>
        `;
        projectGrid.appendChild(projectCard);
    });
}
document.addEventListener('DOMContentLoaded', createProjectCards);