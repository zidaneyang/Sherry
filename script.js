// Script for handling language switching
document.getElementById('en-btn').addEventListener('click', () => {
    switchLanguage('en');
});

document.getElementById('zh-btn').addEventListener('click', () => {
    switchLanguage('zh');
});

function switchLanguage(lang) {
    const allContent = document.querySelectorAll('.content');
    allContent.forEach(section => {
        section.classList.remove('active');
    });

    const activeContent = document.querySelectorAll(`.content.${lang}`);
    activeContent.forEach(section => {
        section.classList.add('active');
    });
}

// Default language setting
switchLanguage('en');
