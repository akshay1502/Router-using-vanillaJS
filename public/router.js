const routes = [
  {
    path: '/',
    data: 'Welcome to Home page.'
  },
  { 
    path: '/about',
    data: 'Welcome to About page.'
  },
  { 
    path: '/contact',
    data: 'Welcome to Contact page.'
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