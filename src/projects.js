'use strict';
// Enables strict mode, which helps to catch common mistakes and improve code safety

// Projects filtering functionality logic
const categories = document.querySelector('.categories');
// Selects the '.categories' element (container for category buttons) and stores it in `categories`

const projects = document.querySelectorAll('.project');
// Selects all elements with the class '.project' (individual projects) and stores them in a NodeList called `projects`

const projectsContainer = document.querySelector('.projects');
// Selects the '.projects' container (holds all project elements) and stores it in `projectsContainer`

categories.addEventListener('click', (event) => {
  // Adds a click event listener to `categories`. When a category is clicked, the function runs.

  const filter = event.target.dataset.category;
  // Gets the `data-category` attribute value of the clicked element and stores it in `filter`

  if (filter == null) {
    return;
    // If `filter` is null (i.e., a non-category element was clicked), exits the function
  }

  handleActiveSelection(event.target);
  // Calls `handleActiveSelection` with the clicked target to update the active category styling

  filterProjects(filter);
  // Calls `filterProjects` with the chosen category to filter the displayed projects
});

// Active menu switch
function handleActiveSelection(target) {
  // Defines a function to manage the active category selection style

  const active = document.querySelector('.category--selected');
  // Finds the currently active category (with class '.category--selected') and stores it in `active`

  active.classList.remove('category--selected');
  // Removes the 'category--selected' class from the currently active category

  target.classList.add('category--selected');
  // Adds the 'category--selected' class to the newly selected category
}

// Project filtering
function filterProjects(filter) {
  // Defines a function to filter projects based on the selected category

  projectsContainer.classList.add('anim-out');
  // Adds the 'anim-out' class to `projectsContainer`, possibly triggering an animation effect

  projects.forEach((project) => {
    // Loops through each project in `projects`

    console.log(project.dataset.type);
    // Logs the `data-type` attribute of each project to the console for debugging

    if (filter == 'all' || filter == project.dataset.type) {
      // Checks if the filter is 'all' or matches the project's `data-type`

      project.style.display = 'block';
      // If true, displays the project by setting `display` to 'block'
    } else {
      project.style.display = 'none';
      // If false, hides the project by setting `display` to 'none'
    }
  });

  setTimeout(() => {
    projectsContainer.classList.remove('anim-out');
    // Removes the 'anim-out' class from `projectsContainer` after 250 milliseconds
  }, 250);
}
