// Updated Flashcard Data
const flashcards = [
    { word: "Открытый", translation: "op" },
    { word: "Закрытый", translation: "zou" },
    { word: "Громкий", translation: "haart" },
    { word: "Тихий", translation: "lues" },
    { word: "Светлый", translation: "hell" },
    { word: "Тёмный", translation: "donkel" },
    { word: "Лёгкий", translation: "liicht" },
    { word: "Трудный", translation: "komplizéiert" },
    { word: "Новый", translation: "nei" },
    { word: "Старый", translation: "al" },
    { word: "Тяжёлый", translation: "schwéier" },
    { word: "быстрый", translation: "séier; schnell" },
    { word: "Медленный", translation: "lues" },
    { word: "Полный", translation: "voll" },
    { word: "Пустой", translation: "eidel" },
    { word: "Длинный", translation: "laang" },
    { word: "Короткий", translation: "kuerz" },
    { word: "Высокий", translation: "héisch; grouss" },
    { word: "Низкий", translation: "niddereg; kleng" },
    { word: "Широкий", translation: "breet" },
    { word: "Узкий", translation: "schmuel" },
    { word: "Плохой", translation: "schlecht" },
    { word: "Хороший", translation: "gutt" },
    { word: "Горячий", translation: "waarm" },
    { word: "Холодный", translation: "kal" },
    { word: "Мягкий", translation: "mëll" },
    { word: "Твёрдый", translation: "fest; haart" },
    { word: "Мокрый", translation: "naass" },
    { word: "Сухой", translation: "dréchen" },
    { word: "Чистый", translation: "propper" },
    { word: "Грязный", translation: "knaschteg" },
    { word: "Дорогой", translation: "deier" },
    { word: "Дешевый", translation: "bëlleg" },
    { word: "Острый", translation: "schaarf" },
    { word: "Тупой", translation: "stompeg" },
    { word: "Блестящий", translation: "blenkeg" },
    { word: "Тусклый", translation: "dimm" },
    { word: "Глубокий", translation: "déif" },
    { word: "Мелкий", translation: "kleng" },
    { word: "Фантастический", translation: "fantastesch" },
    { word: "Простой", translation: "einfach" },
    { word: "Милый", translation: "léif" },
    { word: "Уродливый", translation: "ellen" }
];

let currentIndex = 0; // Tracks the current card
let showingTranslation = false; // Tracks which side is being shown

// DOM elements
const content = document.getElementById('content');
const flipButton = document.getElementById('flip');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');

// Update card content
function updateCard() {
    const card = flashcards[currentIndex];
    content.textContent = showingTranslation ? card.translation : card.word;

    // Disable previous button on the first card
    prevButton.disabled = currentIndex === 0;

    // Disable next button on the last card
    nextButton.disabled = currentIndex === flashcards.length - 1;
}

// Event listeners
flipButton.addEventListener('click', () => {
    showingTranslation = !showingTranslation; // Flip the card
    updateCard();
});

nextButton.addEventListener('click', () => {
    if (currentIndex < flashcards.length - 1) {
        currentIndex++; // Move to the next card
        showingTranslation = false; // Reset to word side
        updateCard();
    }
});

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--; // Move to the previous card
        showingTranslation = false; // Reset to word side
        updateCard();
    }
});

// Initialize the first card
updateCard();
