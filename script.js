/**
 * Translation Dictionary
 * Contains all text content for English (EN) and Czech (CZ).
 */
const i18n = {
    en: {
        navAbout: "About",
        navStack: "Stack",
        navProjects: "Projects",
        heroGreeting: "Welcome to my page 👋",
        heroTitle: 'Hi, my name is <span class="highlight">Josef Talac</span>.',
        heroSubtitle: "I like to code and build things.",
        aboutTitle: "About Me",
        aboutText: "My name is <strong>Josef Talač</strong> and I am studying <strong>Software Engineering </strong> at the <strong>Czech Technical University in Prague</strong> while specializing in <span class=\"highlight\">backend development</span>. My interests outside of coding include <strong>football, running</strong> and other sporting activities.",
        stackTitle: "Tech Stack",
        projectsTitle: "Projects",
        contactTitle: "Let's connect",
        contactSubtitle: "Want to collab, or got a question? Hit me up.",
        toggleLangBtn: "CZ",
        viewGithub: "source"
    },
    cz: {
        navAbout: "O mně",
        navStack: "Technologie",
        navProjects: "Projekty",
        heroGreeting: "Vítejte na mé stránce 👋",
        heroTitle: 'Ahoj, jmenuji se <span class="highlight">Josef Talač</span>.',
        heroSubtitle: "Rád programuji a tvořím věci.",
        aboutTitle: "O mně",
        aboutText: "Jmenuji se <strong>Josef Talač</strong> a studuji <strong>Softwarové inženýrství</strong> na <strong>ČVUT v Praze</strong>, specializuji se na <span class=\"highlight\">backendový vývoj</span>. Mimo programování se rád věnuji sportu.",
        stackTitle: "Technologie",
        projectsTitle: "Projekty",
        contactTitle: "Chcete se spojit?",
        contactSubtitle: "Chcete spolupracovat nebo máte otázku? Napište mi.",
        toggleLangBtn: "EN",
        viewGithub: "zdrojový kód"
    }
};

const projects = [
    {
        id: "proj0",
        titleEn: "Git-writer",
        titleCz: "Git-writer",
        descEn: "Git-backed markdown note-taking app. Cross-platfrom application for note-taking with easy and private git sync",
        descCz: "Aplikace na vytváření poznámek v Markdownu se synchronizací přes Git remote repozitáře.",
        link: "https://github.com/jotalac/git-writer",
        tags: ["Kotlin", "Kotlin Multiplatform", "Compose Multiplatform", "Android"],
        featured: true,
    },
    {
        id: "proj1",
        titleEn: "Market Viewer",
        titleCz: "Market Viewer",
        descEn: "Device that allows you to easily monitor the prices of various stock and crypto assets and track their price history, and more features. Part of the project is hardware device, Android application and backend api service.",
        descCz: "Zařízení, které umožňuje snadno sledovat ceny různých akcií a kryptoměn a sledovat jejich cenovou historii, a další featury. Součásní projektu je hardwarové zařízení, aplikace pro Android a backendová api služba. .",
        link: "https://github.com/market-viewer",
        tags: ["Arduino C++", "Spring Boot API", "Kotlin", "Android"],
        featured: true,
    },
    {
        id: "proj2",
        titleEn: "Quickey",
        titleCz: "Quickey",
        descEn: "Custom build macropad keyboard with web application for key bindings configuration.",
        descCz: "Macropad klávesnice s webovou aplikací pro konfiguraci kláves.",
        link: "https://github.com/jotalac/quickey_app",
        tags: ["NodeJS", "VueJS", "MicroPython", "Web", "PWA", "3D printing"],
        featured: false,
        website: "https://quickey.jotalac.dev/"
    },
    {
        id: "proj3",
        titleEn: "RAG-App",
        titleCz: "RAG-App",
        descEn: "Application with TUI (terminal user interface) for local RAG pipeline with embedded resources.",
        descCz: "Aplikace s TUI (terminálové uživatelské rozhraní) pro lokální RAG nad vlastními dokumenty.",
        link: "https://github.com/jotalac/rag-app",
        tags: ["Python", "RAG", "Embeddings", "ChromaDB", "ollama"]
    },
    {
        id: "proj4",
        titleEn: "Jump King (in Java)",
        titleCz: "Jump King (v Javě)",
        descEn: "Recreated Jump King game in Java using JavaFX. Made for school project",
        descCz: "Přetvořená hra Jump King v Javě pomocí JavaFX. Vytvořeno jako školní projekt",
        link: "https://github.com/jotalac/jump_king_java",
        tags: ["Java", "JavaFX"]
    },
    {
        id: "proj6",
        titleEn: "WeatherRoute",
        titleCz: "WeatherRoute",
        descEn: "Web application for displaying weather on your choosen route. Using weather and routing api. Created as school project.",
        descCz: "Webová aplikace pro zobrazení počasí na zvolené trase. Využívá weather a routing api. Vytvořeno jako školní projekt.",
        link: "https://github.com/jotalac/weather_route",
        tags: ["VueJS", "API", "OpenWeatherMap", "JavaScript", "HTML", "CSS"],
        website: "https://jotalac.github.io/weather-route/"
    },
];

// Current application state
let currentLang = 'en';

/**
 * Renders the projects dynamically into the DOM based on the current language
 */
function renderProjects() {
    const container = document.getElementById('projects-container');
    container.innerHTML = '';
    
    const langDict = i18n[currentLang];

    projects.forEach(proj => {
        const title = currentLang === 'en' ? proj.titleEn : proj.titleCz;
        const desc = currentLang === 'en' ? proj.descEn : proj.descCz;
        const tagsHTML = proj.tags ? proj.tags.map(t => `<span class="project-tag">${t}</span>`).join('') : '';

        const card = document.createElement('div');
        const featuredClass = proj.featured ? 'featured' : '';
        const featuredBadge = proj.featured ? `<div class="featured-badge"><span class="material-symbols-outlined">star</span> ${currentLang === 'en' ? 'Featured' : 'Hlavní projekt'}</div>` : '';
        
        const websiteLinkHTML = proj.website ? `
            <a href="${proj.website}" class="project-icon-link" target="_blank" rel="noopener noreferrer" title="Visit Website">
                <span class="material-symbols-outlined">open_in_new</span>
            </a>
        ` : '';

        card.className = `project-card card ${featuredClass}`;
        card.innerHTML = `
            ${featuredBadge}
            <div class="project-info">
                <h4>${title}</h4>
                <p>${desc}</p>
                <div class="project-tags">
                    ${tagsHTML}
                </div>
            </div>
            <div class="project-actions">
                <a href="${proj.link}" class="project-link" target="_blank" rel="noopener noreferrer">
                    <span class="material-symbols-outlined">code</span> ${langDict.viewGithub}
                </a>
                ${websiteLinkHTML}
            </div>
        `;
        container.appendChild(card);
    });
}

/**
 * Updates all static elements on the page that have a 'data-i18n' attribute
 */
function updateStaticText() {
    const elements = document.querySelectorAll('[data-i18n]');
    const langDict = i18n[currentLang];

    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (langDict[key]) {
            if (key === 'heroTitle' || key === 'aboutText') {
                el.innerHTML = i18n[currentLang][key];
            }
            else {
                el.textContent = langDict[key];
            }
        }
    });

    // Update the toggle button text specifically
    const toggleBtn = document.getElementById('lang-toggle');
    if (toggleBtn) {
        toggleBtn.textContent = langDict.toggleLangBtn;
    }
}

/**
 * Toggles the current language between 'en' and 'cz' and re-renders the UI
 */
function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'cz' : 'en';
    updateStaticText();
    renderProjects();
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    updateStaticText();
    renderProjects();

    const toggleBtn = document.getElementById('lang-toggle');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', toggleLanguage);
    }
});