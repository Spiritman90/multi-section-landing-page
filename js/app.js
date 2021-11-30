
// Variables
const  navItems = document.getElementById('nav-items');

 const navArray = [
   {text: 'Home', link: 'showcase'}, 
   {text: 'What', link: 'what'}, 
   {text: 'Who', link: 'who'}, 
   {text: 'Contact', link: 'contact'}, 
  ];
 navArray.forEach((navArrayItem) => {
   let li = document.createElement('li');
   let link = document.createElement('a');
  link.className = 'list';
  link.textContent = navArrayItem.text;
  link.setAttribute('data-link', navArrayItem.link);
  li.appendChild(link);
  navItems.appendChild(li);
 });

// Smooth scroll
const navLinks = document.querySelectorAll('.list');
navLinks.forEach((item) => {
  item.addEventListener("click", () => {
    for (let i = 0; i < navLinks.length; i++) {
      if (navLinks[i].classList.contains('active')) {
         navLinks[i].classList.remove('active');
      }
    }
    const nav = document.getElementById(item.getAttribute("data-link"));
    nav.scrollIntoView({ behavior: "smooth", block: "center" });
    item.classList.add('active');
  });
});








