const themeBtn = document.getElementById("themeBtn");
themeBtn.onclick = () => {
    document.body.classList.toggle("dark");
};


const facts = [
    
    "TechNova существует с 2025 года.",
    "Мы используем современные фреймворки и технологии.",
    "Команда состоит из 15 специалистов."
];

const factBtn = document.getElementById("factBtn");
const factText = document.getElementById("factText");

if (factBtn) {
    factBtn.onclick = () => {
        const random = Math.floor(Math.random() * facts.length);
        factText.textContent = facts[random];
    };
}