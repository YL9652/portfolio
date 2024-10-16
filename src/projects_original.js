'use strict';

// Projects filtering functionality logic
const catrgories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project');
const projectsContainer = document.querySelector('.projects');

catrgories.addEventListener('click', (event) => {
  // console.log(event);
  const filter = event.target.dataset.category;
  if(filter == null) {
    return;
  }

  // Active menu switch
  const active = document.querySelector('.category--selected');
  active.classList.remove('category--selected');
  event.target.classList.add('category--selected');

  // Project filtering
  projectsContainer.classList.add('anim-out');

  projects.forEach(project => {
    console.log(project.dataset.type);
    if(filter == 'all' || filter == project.dataset.type) {
      project.style.display = 'block';
    } else {
      project.style.display = 'none';
    }
  });

  setTimeout(() => {
    projectsContainer.classList.remove('anim-out');
  }, 250);
});