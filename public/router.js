const routes = [
  {
    path: '/',
    data: `
      <h1>Welcome to Home page.</h1>
      <p>A home page is the main web page of a website. The term also refers to one or more pages always shown in a web browser when the application starts up.</p>
    `
  },
  { 
    path: '/about',
    data: `
      <h1>Welcome to About page.</h1>
      <p>The About page is the section of a website where people go to find out about the website they're on.</p>
    `
  },
  { 
    path: '/contact',
    data: `
      <h1>Welcome to Contact page.</h1>
      <p>A contact page is a common web page on a website for visitors to contact the organization or individual providing the website.</p>
    `
  }, 
  {
    path: '/account',
    data: account
  }
];

const root = document.getElementById('root');

function router(event) {
  event.preventDefault();
  history.pushState({}, 'newUrl', event.target.href);
  let route = routes.find(route => route.path == window.location.pathname);
  root.innerHTML = route.data;
  navColorLink();
}

window.addEventListener('popstate', function() {
  let data = routes.find(route => route.path == window.location.pathname);
  root.innerHTML = data.data;
})

window.addEventListener('DOMContentLoaded', function() {
  let route = routes.find(route => route.path == window.location.pathname);
  root.innerHTML = route.data;
  navColorLink();
})

const links = document.querySelectorAll('nav ul li a');

function navColorLink() {
  links.forEach(link => {
    if(link.href === window.location.href) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  })
}