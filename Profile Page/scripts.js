// Add additional skills to the skills list
const skillsList = document.getElementById('skills-list');
const additionalSkills = ['React', 'Node.js', 'Git'];

additionalSkills.forEach(skill => {
    const skillItem = document.createElement('li');
    skillItem.textContent = skill;
    skillsList.appendChild(skillItem);
});

// Add additional projects to the projects list
const projectsList = document.getElementById('projects-list');
const additionalProjects = ['Project 3', 'Project 4', 'Project 5'];
const projectLinks = ['#', '#', '#'];

additionalProjects.forEach((project, index) => {
    const projectItem = document.createElement('li');
    const projectLink = document.createElement('a');
    projectLink.href = projectLinks[index];
    projectLink.textContent = project;
    projectItem.appendChild(projectLink);
    projectsList.appendChild(projectItem);
});
                      
