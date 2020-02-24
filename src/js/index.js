// Listen for click on the document
document.addEventListener('click', function (event) {

  //Bail if our clicked element doesn't have the class
  if (!event.target.classList.contains('accordion-toggle')) return;

  // Get the target content
  var content = document.querySelector(event.target.hash);
  if (!content) return;

  // Prevent default link behavior
  event.preventDefault();

  // If the content is already expanded, collapse it and quit
  if (content.classList.contains('active')) {
    content.classList.remove('active');
    return;
  }

  // Get all open accordion content, loop through it, and close it
  var accordions = document.querySelectorAll('.accordion-content.active');
  for (var i = 0; i < accordions.length; i++) {
    accordions[i].classList.remove('active');
  }

  // Toggle our content
  content.classList.toggle('active');
})

// function collapseSection(element) {
//   // get the height of the element's inner content, regardless of its actual size
//   var sectionHeight = element.scrollHeight;

//   // temporarily disable all css transitions
//   var elementTransition = element.style.transition;
//   element.style.transition = '';

//   // on the next frame (as soon as the previous style change has taken effect),
//   // explicitly set the element's height to its current pixel height, so we
//   // aren't transitioning out of 'auto'
//   requestAnimationFrame(function () {
//     element.style.height = sectionHeight + 'px';
//     element.style.transition = elementTransition;

//     // on the next frame (as soon as the previous style change has taken effect),
//     // have the element transition to height: 0
//     requestAnimationFrame(function () {
//       element.style.height = 0 + 'px';
//     });
//   });

//   // mark the section as "currently collapsed"
//   element.setAttribute('data-collapsed', 'true');
// }

// function expandSection(element) {
//   // get the height of the element's inner content, regardless of its actual size
//   var sectionHeight = element.scrollHeight;

//   // have the element transition to the height of its inner content
//   element.style.height = sectionHeight + 'px';

//   // when the next css transition finishes (which should be the one we just triggered)
//   element.addEventListener('transitionend', function (e) {
//     // remove this event listener so it only gets triggered once
//     element.removeEventListener('transitionend', arguments.callee);

//     // remove "height" from the element's inline styles, so it can return to its initial value
//     element.style.height = null;
//   });

//   // mark the section as "currently not collapsed"
//   element.setAttribute('data-collapsed', 'false');
// }

// document.querySelector('.accordion-toggle').addEventListener('click', function (e) {
//   var targetElement = e.target.hash;
//   var section = document.querySelector(targetElement);
//   var isCollapsed = section.getAttribute('data-collapsed') === 'true';

//   console.log(targetElement);

//   if (isCollapsed) {
//     expandSection(section)
//     section.setAttribute('data-collapsed', 'false')
//   } else {
//     collapseSection(section)
//   }
// });