// Flashcard Data with Translations, including Luxembourgish (lb)
const flashcards = [
    {
        translations: {
            en: "Open",
            fr: "Ouvert",
            de: "Offen",
            ru: "Открытый",
            uk: "Відкритий",
            es: "Abierto",
            pt: "Aberto",
            it: "Aperto",
            lb: "Op"
        }
    },
    {
        translations: {
            en: "Closed",
            fr: "Fermé",
            de: "Geschlossen",
            ru: "Закрытый",
            uk: "Закритий",
            es: "Cerrado",
            pt: "Fechado",
            it: "Chiuso",
            lb: "Zou"
        }
    },
    {
        translations: {
            en: "Loud",
            fr: "Fort",
            de: "Laut",
            ru: "Громкий",
            uk: "Гучний",
            es: "Ruidoso",
            pt: "Barulhento",
            it: "Rumoroso",
            lb: "Haart"
        }
    },
    {
        translations: {
            en: "Quiet",
            fr: "Calme",
            de: "Leise",
            ru: "Тихий",
            uk: "Тихий",
            es: "Silencioso",
            pt: "Silencioso",
            it: "Silenzioso",
            lb: "Lues"
        }
    },
    {
        translations: {
            en: "Bright",
            fr: "Lumineux",
            de: "Hell",
            ru: "Светлый",
            uk: "Світлий",
            es: "Brillante",
            pt: "Brilhante",
            it: "Luminoso",
            lb: "Hell"
        }
    },
    {
        translations: {
            en: "Dark",
            fr: "Sombre",
            de: "Dunkel",
            ru: "Тёмный",
            uk: "Темний",
            es: "Oscuro",
            pt: "Escuro",
            it: "Scuro",
            lb: "Donkel"
        }
    },
    {
        translations: {
            en: "Light",
            fr: "Léger",
            de: "Leicht",
            ru: "Лёгкий",
            uk: "Легкий",
            es: "Ligero",
            pt: "Leve",
            it: "Leggero",
            lb: "Liicht"
        }
    },
    {
        translations: {
            en: "Difficult",
            fr: "Difficile",
            de: "Schwierig",
            ru: "Трудный",
            uk: "Складний",
            es: "Difícil",
            pt: "Difícil",
            it: "Difficile",
            lb: "Komplizéiert"
        }
    },
    {
        translations: {
            en: "New",
            fr: "Nouveau",
            de: "Neu",
            ru: "Новый",
            uk: "Новий",
            es: "Nuevo",
            pt: "Novo",
            it: "Nuovo",
            lb: "Nei"
        }
    },
    {
        translations: {
            en: "Old",
            fr: "Vieux",
            de: "Alt",
            ru: "Старый",
            uk: "Старий",
            es: "Viejo",
            pt: "Velho",
            it: "Vecchio",
            lb: "Al"
        }
    },
    {
        translations: {
            en: "Heavy",
            fr: "Lourd",
            de: "Schwer",
            ru: "Тяжёлый",
            uk: "Важкий",
            es: "Pesado",
            pt: "Pesado",
            it: "Pesante",
            lb: "Schwéier"
        }
    },
    {
        translations: {
            en: "Fast",
            fr: "Rapide",
            de: "Schnell",
            ru: "Быстрый",
            uk: "Швидкий",
            es: "Rápido",
            pt: "Rápido",
            it: "Veloce",
            lb: "Séier"
        }
    },
    {
        translations: {
            en: "Slow",
            fr: "Lent",
            de: "Langsam",
            ru: "Медленный",
            uk: "Повільний",
            es: "Lento",
            pt: "Lento",
            it: "Lento",
            lb: "Lues"
        }
    },
    {
        translations: {
            en: "Full",
            fr: "Plein",
            de: "Voll",
            ru: "Полный",
            uk: "Повний",
            es: "Lleno",
            pt: "Cheio",
            it: "Pieno",
            lb: "Voll"
        }
    },
    {
        translations: {
            en: "Empty",
            fr: "Vide",
            de: "Leer",
            ru: "Пустой",
            uk: "Порожній",
            es: "Vacío",
            pt: "Vazio",
            it: "Vuoto",
            lb: "Eidel"
        }
    },
    {
        translations: {
            en: "Long",
            fr: "Long",
            de: "Lang",
            ru: "Длинный",
            uk: "Довгий",
            es: "Largo",
            pt: "Longo",
            it: "Lungo",
            lb: "Laang"
        }
    },
    {
        translations: {
            en: "Short",
            fr: "Court",
            de: "Kurz",
            ru: "Короткий",
            uk: "Короткий",
            es: "Corto",
            pt: "Curto",
            it: "Corto",
            lb: "Kuerz"
        }
    },
    {
        translations: {
            en: "Tall",
            fr: "Grand",
            de: "Hoch",
            ru: "Высокий",
            uk: "Високий",
            es: "Alto",
            pt: "Alto",
            it: "Alto",
            lb: "Héisch"
        }
    },
    {
        translations: {
            en: "Low",
            fr: "Bas",
            de: "Niedrig",
            ru: "Низкий",
            uk: "Низький",
            es: "Bajo",
            pt: "Baixo",
            it: "Basso",
            lb: "Niddereg"
        }
    }
];

// Current state
let currentIndex = 0; // Current flashcard index
let currentLanguage = 'en'; // Default translation language
let showingTranslation = false; // Flip state (false shows Luxembourgish)

// DOM elements
const cardContent = document.getElementById('content');
const flipButton = document.getElementById('flip');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const progress = document.getElementById('progress');
const languageToggle = document.getElementById('language-toggle');
const languageOptions = document.getElementById('language-options');
const languageMenu = document.getElementById('language-menu');

// Update card content
function updateCard() {
    const card = flashcards[currentIndex];
    const text = showingTranslation
        ? card.translations[currentLanguage] // Show selected language translation
        : card.translations.lb; // Show Luxembourgish by default
    cardContent.textContent = text;

    // Update progress indicator
    progress.textContent = `Card ${currentIndex + 1} / ${flashcards.length}`;

    // Enable or disable navigation buttons
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === flashcards.length - 1;
}

// Flip the card
flipButton.addEventListener('click', () => {
    showingTranslation = !showingTranslation; // Toggle translation side
    updateCard();
});

// Navigate to the next card
nextButton.addEventListener('click', () => {
    if (currentIndex < flashcards.length - 1) {
        currentIndex++;
        showingTranslation = false; // Reset to Luxembourgish side
        updateCard();
    }
});

// Navigate to the previous card
prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        showingTranslation = false; // Reset to Luxembourgish side
        updateCard();
    }
});

// Toggle dropdown visibility
languageToggle.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent dropdown from closing on click
    languageMenu.classList.toggle('active');
});

// Change language and update card content
languageOptions.addEventListener('click', (event) => {
    const selectedLang = event.target.dataset.lang;
    if (selectedLang) {
        currentLanguage = selectedLang; // Set the new translation language

        // Update the language toggle button text
        languageToggle.querySelector('span').textContent = `🌐 ${event.target.textContent}`;

        // Refresh the current card content
        updateCard();

        // Hide the dropdown menu
        languageMenu.classList.remove('active');
    }
});

// Hide dropdown when clicking outside
document.addEventListener('click', () => {
    languageMenu.classList.remove('active');
});



// Initialize the first card
updateCard();



