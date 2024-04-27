function saveThemePreference(theme) {
  localStorage.setItem('themePreference', theme);
  document.cookie = `themePreference=${theme}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
  const urlParams = new URLSearchParams(window.location.search);
  urlParams.set('theme', theme);
  const newUrl = `${window.location.pathname}?${urlParams.toString()}`;
  window.history.replaceState({}, '', newUrl);
}

function loadThemePreference() {
  const urlParams = new URLSearchParams(window.location.search);
  const theme = urlParams.get('theme');

  if (theme) {
    checkbox.checked = theme === 'light';
    applyTheme(theme);
  } else {
    const savedTheme = localStorage.getItem('themePreference');

    if (savedTheme) {
      checkbox.checked = savedTheme === 'light';
      applyTheme(savedTheme);
    } else {
      const cookie = document.cookie;
      const themeMatch = cookie.match(/themePreference=([^;]+)/);
      if (themeMatch && themeMatch[1]) {
        const savedTheme = themeMatch[1];
        checkbox.checked = savedTheme === 'light';
        applyTheme(savedTheme);
      }
    }
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-bs-theme', theme);
  const navbar = document.querySelector('.navbar');
  const areaClienteBtn = document.getElementById('areaClienteBtn');
  const button = areaClienteBtn.querySelector('.btn');
  navbar.classList.remove('bg-primary', 'bg-body-tertiary');
  button.classList.remove('btn-dark', 'btn-outline-success');
  if (theme === 'light') {
    navbar.classList.add('bg-primary');
    button.classList.add('btn-dark');
  } else {
    navbar.classList.add('bg-body-tertiary');
    button.classList.add('btn-outline-success');
  }
}


const checkbox = document.querySelector('.checkbox');
checkbox.addEventListener('change', function() {
  const theme = checkbox.checked ? 'light' : 'dark';
  applyTheme(theme);
  saveThemePreference(theme);
});

loadThemePreference();

function loadThemePreferenceFromQueryParams() {
  const urlParams = new URLSearchParams(window.location.search);
  const theme = urlParams.get('theme');
  if (theme) {
    checkbox.checked = theme === 'light';
    applyTheme(theme);
  } else {
    loadThemePreference();
  }
}

function loadThemePreferenceFromCookie() {
  const cookie = document.cookie;
  const themeMatch = cookie.match(/themePreference=([^;]+)/);
  if (themeMatch && themeMatch[1]) {
    const savedTheme = themeMatch[1];
    applyTheme(savedTheme);
  }
}

loadThemePreferenceFromQueryParams();
loadThemePreferenceFromCookie();

const dropdownItems = document.querySelectorAll('.nav-item.dropdown');
dropdownItems.forEach((dropdownItem) => {
  const dropdownMenu = dropdownItem.querySelector('.dropdown-menu');
  
  dropdownItem.addEventListener('mouseenter', function() {
    dropdownMenu.classList.add('show');
  });
  
  dropdownItem.addEventListener('mouseleave', function() {
    dropdownMenu.classList.remove('show');
  });
});

window.addEventListener("load", function() {
  var footer = document.getElementById("footer");
  var bodyHeight = document.body.offsetHeight;
  var windowHeight = window.innerHeight;
  var footerHeight = footer.offsetHeight;

  if (bodyHeight < windowHeight) {
    footer.style.position = "fixed";
  } else {
    footer.style.position = "static";
  }
});

window.addEventListener("resize", function() {
  var footer = document.getElementById("footer");
  var bodyHeight = document.body.offsetHeight;
  var windowHeight = window.innerHeight;
  var footerHeight = footer.offsetHeight;

  if (bodyHeight < windowHeight) {
    footer.style.position = "fixed";
  } else {
    footer.style.position = "static";
  }
});