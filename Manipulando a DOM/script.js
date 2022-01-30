function changeMode() {
    changeClasses();
    changeText();
}

//para mudar as classes para dark mode
function changeClasses() {
    button.classList.toggle('dark-mode');
    h1.classList.toggle('dark-mode');
    body.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
}

//para mudar o texto escrito dentro do botão(innerHTML) de dark mode para light mode
function changeText() {
    const lightMode = "Light Mode";
    const darkMode = "Dark Mode";

    if (body.classList.contains(darkModeClass)) {
        button.innerHTML = lightMode;
        h1.innerHTML = darkMode + " ON";
        return;
    }
    button.innerHTML = darkMode;
    h1.innerHTML = lightMode + " ON";
}
const darkModeClass = 'dark-mode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

//para adicionar o tipo de evento ao botão, e o que ele fará depois de ser clicado
button.addEventListener('click', changeMode);