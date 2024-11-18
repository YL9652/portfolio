'use strict';
// Enables strict mode to help prevent common JavaScript coding errors

// 1. Pull all section items
const sectionIds = [
  '#home',
  '#about',
  '#skills',
  '#work',
  '#testimonial',
  '#contact',
];
// Defines an array `sectionIds` with IDs for each section in the document

const sections = sectionIds.map((id) => document.querySelector(id));
// Maps over `sectionIds` to select each section element from the document and stores them in `sections`

const navItems = sectionIds.map((id) =>
  document.querySelector(`[href="${id}"]`)
);
// Maps over `sectionIds` to select corresponding navigation items (links with href attributes matching section IDs) and stores them in `navItems`

const visibleSections = sectionIds.map(() => false);
// Creates an array `visibleSections` to track which sections are visible in the viewport, initially setting all values to `false`

let activeNavItem = navItems[0];
// Sets the first navigation item as the initially active navigation item

// 2. IntersectionObserver setup
const options = {
  rootMargin: '-20px 0px 0px 0px',
  threshold: [0, 0.98],
};
// Defines options for the IntersectionObserver:
// - rootMargin: shifts the viewport by -20px at the top
// - threshold: triggers observerCallback when at least 0% or up to 98% of the section is visible

const observer = new IntersectionObserver(observerCallback, options);
// Creates a new IntersectionObserver instance, passing in `observerCallback` and `options`

sections.forEach((section) => observer.observe(section));
// Observes each section using the `observer`, enabling visibility tracking for each section in the viewport

// 3. IntersectionObserver callback function to handle visibility changes
function observerCallback(entries) {
  let selectLastOne;
  entries.forEach((entry) => {
    const index = sectionIds.indexOf(`#${entry.target.id}`);
    // Finds the index of the current entry's section ID in `sectionIds`

    visibleSections[index] = entry.isIntersecting;
    // Updates `visibleSections` to true if the section is intersecting (visible) and false otherwise

    selectLastOne =
      index === sectionIds.length - 1 &&
      entry.isIntersecting &&
      entry.intersectionRatio >= 0.95;
    // Sets `selectLastOne` to true if the last section (footer) is at least 95% visible
  });

  const navIndex = selectLastOne
    ? sectionIds.length - 1
    : findFirstIntersecting(visibleSections);
  // Sets `navIndex` to the last section's index if `selectLastOne` is true; otherwise, finds the first visible section

  selectNavItem(navIndex);
  // Calls `selectNavItem` to update the active navigation item based on `navIndex`
}

// Finds the first visible section by index
function findFirstIntersecting(intersections) {
  const index = intersections.indexOf(true);
  // Gets the index of the first `true` value in `intersections` (first visible section)

  return index >= 0 ? index : 0;
  // Returns the index if found; otherwise, returns 0 (default to the first section)
}

// Updates the active navigation item
function selectNavItem(index) {
  const navItem = navItems[index];
  // Gets the navigation item corresponding to the `index`

  if (!navItem) return;
  // If no navigation item is found, exits the function

  activeNavItem.classList.remove('active');
  // Removes the 'active' class from the current `activeNavItem`

  activeNavItem = navItem;
  // Sets `activeNavItem` to the new active navigation item

  activeNavItem.classList.add('active');
  // Adds the 'active' class to the new `activeNavItem`
}
