

const currentDate =new Date();
const thisYear = currentDate.getFullYear();

//footer
const footer = document.createElement('footer');
document.body.appendChild(footer);
const footerElement = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = "DaiGianna Williams © " + thisYear;
footerElement.appendChild(copyright);

const skills = ["JavaScript", "HTML", "CSS", "GitHub", "Python", "R"];
const skillsSection = document.querySelector('#Skills');
const skillsList = skillsSection.querySelector('ul');
for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement('li');
    skill.textContent = skills[i];
    skillsList.appendChild(skill);
}

