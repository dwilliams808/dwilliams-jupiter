

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


const messageForm = document.forms['leave_message'];
messageForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;

    const messageSection = document.querySelector('#messages');
    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');
    newMessage.innerHTML = `
    <a href="mailto:${usersEmail}">${usersName}</a>
    <span>${usersMessage}</span> `;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'remove';
    removeButton.type = 'button';

    removeButton.addEventListener("click", function() {
        const entry = removeButton.parentNode;
        entry.remove();
    });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    console.log(usersName); 
    console.log(usersEmail); 
    console.log(usersMessage); 
    
    messageForm.reset();

});

document.addEventListener('DOMContentLoaded', () => {
    fetch('https://api.github.com/users/dwilliams808/repos')
      .then(response => {
        if (!response.ok) {
          throw new Error('Request failed');
        }
        return response.json(); 
      })
      .then(data => {
        const repositories = data;
        console.log(repositories);  
  

        const projectSection = document.getElementById("Projects");
        const projectList = projectSection.querySelector('ul');
  

        for (let i = 0; i < repositories.length; i++) {
          const project = document.createElement('li');  
          project.textContent = repositories[i].name;    
          projectList.appendChild(project);           
        }
      })

      .catch(error => {
        console.error('An error occurred:', error); 
      });
      
  });
  



  