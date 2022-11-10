const colorThemes = document.querySelectorAll('[name=theme]');

const storeTheme = (theme) => {
  localStorage.setItem("theme", theme);
};

const retrieveTheme = () => {
  const activeTheme = localStorage.getItem("theme");
  colorThemes.foreach((theme) => {
    if (theme.id === activeTheme) {
      theme.checked = true;
    }
  });
};

colorThemes.forEach((theme) => {
  theme.addEventListener("click", () => {
    storeTheme(theme.id);
  });
});

document.onload = retrieveTheme();