// ========== MALTISH - MAIN APP LOGIC ==========

// State
let currentMode = 'practice';
let currentCategory = null;
let currentLesson = null;
let currentLessonStep = 0;
let currentModule = null;
let currentWordIndex = 0;
let currentQuizIndex = 0;
let quizScore = 0;
let navigationStack = [];
let practiceProgress = {};
let universityProgress = {};

// Initialize
function init() {
    loadProgress();
    renderPracticeModules();
    renderUniversityCategories();
    updateProgress();
    showPasti();
    pastiSpeak();
}

// Load progress from localStorage
function loadProgress() {
    const savedPractice = localStorage.getItem('maltish_practice_progress');
    const savedUniversity = localStorage.getItem('maltish_university_progress');
    
    if (savedPractice) {
        practiceProgress = JSON.parse(savedPractice);
    }
    if (savedUniversity) {
        universityProgress = JSON.parse(savedUniversity);
    }
}

// Save progress
function saveProgress() {
    localStorage.setItem('maltish_practice_progress', JSON.stringify(practiceProgress));
    localStorage.setItem('maltish_university_progress', JSON.stringify(universityProgress));
}

// ========== MODE SWITCHING ==========
function switchMode(mode) {
    currentMode = mode;
    
    // Update buttons
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Show/hide screens
    document.getElementById('homePractice').classList.remove('active');
    document.getElementById('homeUniversity').classList.remove('active');
    
    if (mode === 'practice') {
        document.getElementById('homePractice').classList.add('active');
        showPasti();
        pastiSpeak();
    } else {
        document.getElementById('homeUniversity').classList.add('active');
        hidePasti();
    }
    
    document.getElementById('backBtn').classList.remove('visible');
    updateProgress();
}

// ========== PASTI MASCOT ==========
function showPasti() {
    document.getElementById('pastiTopContainer').classList.add('visible');
}

function hidePasti() {
    document.getElementById('pastiTopContainer').classList.remove('visible');
}

function pastiSpeak() {
    const phrase = pastiPhrases[Math.floor(Math.random() * pastiPhrases.length)];
    document.getElementById('pastiSpeechTop').textContent = phrase;
}

function pastiPraise() {
    const praises = [
        "Prosit! Tajjeb ħafna! 👏",
        "Brava! Excellent! ⭐",
        "Perfett! Tu es un champion ! 🎉",
        "Jien kuntent! Continue! 💪"
    ];
    const phrase = praises[Math.floor(Math.random() * praises.length)];
    document.getElementById('pastiSpeechTop').textContent = phrase;
}

// ========== RENDER FUNCTIONS ==========
function renderPracticeModules() {
    const container = document.getElementById('practiceModules');
    container.innerHTML = '';
    
    practiceModules.forEach((module, index) => {
        const completed = practiceProgress[module.id] || false;
        
        const card = document.createElement('div');
        card.className = 'module-card' + (completed ? ' completed' : '');
        card.onclick = () => startPracticeModule(index);
        
        card.innerHTML = `
            <div class="module-icon">${module.emoji}</div>
            <div class="module-info">
                <h3>${module.name}</h3>
                <p>${module.desc}</p>
            </div>
            <div class="module-status">${completed ? '✅' : '▶️'}</div>
        `;
        
        container.appendChild(card);
    });
}

function renderUniversityCategories() {
    const container = document.getElementById('universityCategories');
    container.innerHTML = '';
    
    Object.values(universityCategories).forEach(category => {
        const card = document.createElement('div');
        card.className = `category-card ${category.color}`;
        card.onclick = () => openCategory(category.id);
        
        card.innerHTML = `
            <div class="cat-icon">${category.icon}</div>
            <h3>${category.title}</h3>
            <p>${category.desc}</p>
        `;
        
        container.appendChild(card);
    });
}

// ========== PRACTICE MODE ==========
function startPracticeModule(index) {
    currentModule = practiceModules[index];
    currentWordIndex = 0;
    navigationStack.push('homePractice');
    
    showScreen('wordLessonScreen');
    displayWord();
    document.getElementById('backBtn').classList.add('visible');
    pastiSpeak();
}

function displayWord() {
    const word = currentModule.words[currentWordIndex];
    const totalWords = currentModule.words.length;
    
    document.getElementById('wordCounter').textContent = `${currentWordIndex + 1} / ${totalWords}`;
    document.getElementById('wordMaltese').textContent = word.maltese;
    document.getElementById('wordPhonetic').textContent = word.phonetic;
    document.getElementById('wordFrench').textContent = word.french;
    document.getElementById('tipText').textContent = word.tip;
    
    updateProgress();
}

function nextWord() {
    if (currentWordIndex < currentModule.words.length - 1) {
        currentWordIndex++;
        displayWord();
    } else {
        // Start quiz
        startQuiz();
    }
}

function prevWord() {
    if (currentWordIndex > 0) {
        currentWordIndex--;
        displayWord();
    } else {
        goBack();
    }
}

function playCurrentWord() {
    const word = currentModule.words[currentWordIndex];
    speak(word.maltese);
}

// ========== QUIZ ==========
function startQuiz() {
    currentQuizIndex = 0;
    quizScore = 0;
    navigationStack.push('wordLessonScreen');
    
    showScreen('quizScreen');
    displayQuiz();
}

function displayQuiz() {
    const word = currentModule.words[currentQuizIndex];
    document.getElementById('quizPrompt').textContent = 'Comment dit-on :';
    document.getElementById('quizWord').textContent = word.french;
    
    const options = generateQuizOptions(word);
    const optionsContainer = document.getElementById('quizOptions');
    optionsContainer.innerHTML = '';
    
    options.forEach(option => {
        const btn = document.createElement('div');
        btn.className = 'quiz-option';
        btn.textContent = option;
        btn.onclick = () => checkQuizAnswer(option, word.maltese, btn);
        optionsContainer.appendChild(btn);
    });
    
    updateProgress();
}

function generateQuizOptions(correctWord) {
    const options = [correctWord.maltese];
    const allWords = currentModule.words.filter(w => w.maltese !== correctWord.maltese);
    
    // Shuffle and get random wrong answers
    const shuffled = allWords.sort(() => Math.random() - 0.5);
    
    while (options.length < 4 && shuffled.length > 0) {
        const randomWord = shuffled.pop();
        if (!options.includes(randomWord.maltese)) {
            options.push(randomWord.maltese);
        }
    }
    
    // Shuffle options
    return options.sort(() => Math.random() - 0.5);
}

function checkQuizAnswer(selected, correct, btn) {
    const allOptions = document.querySelectorAll('.quiz-option');
    allOptions.forEach(opt => opt.classList.add('disabled'));
    
    if (selected === correct) {
        btn.classList.add('correct');
        quizScore++;
        pastiPraise();
    } else {
        btn.classList.add('wrong');
        allOptions.forEach(opt => {
            if (opt.textContent === correct) {
                opt.classList.add('correct');
            }
        });
    }
    
    setTimeout(() => {
        if (currentQuizIndex < currentModule.words.length - 1) {
            currentQuizIndex++;
            displayQuiz();
        } else {
            showResults();
        }
    }, 1500);
}

// ========== RESULTS ==========
function showResults() {
    const totalWords = currentModule.words.length;
    const percentage = Math.round((quizScore / totalWords) * 100);
    
    document.getElementById('resultScore').textContent = `${quizScore}/${totalWords}`;
    
    if (percentage >= 80) {
        document.getElementById('resultIcon').textContent = '🎉';
        document.getElementById('resultTitle').textContent = 'Perfett!';
        document.getElementById('resultMessage').textContent = 'Tu maîtrises cette leçon !';
        practiceProgress[currentModule.id] = true;
        saveProgress();
    } else if (percentage >= 60) {
        document.getElementById('resultIcon').textContent = '👍';
        document.getElementById('resultTitle').textContent = 'Tajjeb!';
        document.getElementById('resultMessage').textContent = 'Bien joué, continue !';
    } else {
        document.getElementById('resultIcon').textContent = '💪';
        document.getElementById('resultTitle').textContent = 'Ipprova erġa\'!';
        document.getElementById('resultMessage').textContent = 'Réessaie pour améliorer ton score.';
    }
    
    showScreen('resultScreen');
    updateProgress();
}

function finishLesson() {
    renderPracticeModules();
    showScreen('homePractice');
    document.getElementById('backBtn').classList.remove('visible');
    navigationStack = [];
    pastiSpeak();
}

// ========== UNIVERSITY MODE ==========
function openCategory(categoryId) {
    currentCategory = universityCategories[categoryId];
    navigationStack.push('homeUniversity');
    
    const container = document.getElementById('categoryLessons');
    container.innerHTML = '';
    
    currentCategory.lessons.forEach((lesson, index) => {
        const completed = universityProgress[categoryId + '_' + lesson.id] || false;
        
        const card = document.createElement('div');
        card.className = 'module-card' + (completed ? ' completed' : '');
        card.onclick = () => startLesson(categoryId, index);
        
        card.innerHTML = `
            <div class="module-icon">${lesson.emoji}</div>
            <div class="module-info">
                <h3>${lesson.name}</h3>
                <p>${lesson.desc}</p>
            </div>
            <div class="module-status">${completed ? '✅' : '▶️'}</div>
        `;
        
        container.appendChild(card);
    });
    
    showScreen('categoryScreen');
    document.getElementById('backBtn').classList.add('visible');
}

function startLesson(categoryId, lessonIndex) {
    currentCategory = universityCategories[categoryId];
    currentLesson = currentCategory.lessons[lessonIndex];
    currentLessonStep = 0;
    navigationStack.push('categoryScreen');
    
    showScreen('lessonScreen');
    displayLessonStep();
    document.getElementById('backBtn').classList.add('visible');
}

function displayLessonStep() {
    const step = currentLesson.steps[currentLessonStep];
    const totalSteps = currentLesson.steps.length;
    
    // Update dots
    const dotsContainer = document.getElementById('lessonDots');
    dotsContainer.innerHTML = '';
    for (let i = 0; i < totalSteps; i++) {
        const dot = document.createElement('div');
        dot.className = 'lesson-dot' + (i === currentLessonStep ? ' active' : '') + (i < currentLessonStep ? ' completed' : '');
        dotsContainer.appendChild(dot);
    }
    
    // Display content
    const contentContainer = document.getElementById('lessonContent');
    
    if (step.type === 'theory') {
        contentContainer.innerHTML = step.content;
    } else if (step.type === 'dialogue') {
        contentContainer.innerHTML = `<div class="theory-box" style="padding: 12px;">${step.content}</div>`;
    } else if (step.type === 'phonetic-list') {
        let html = '<div class="theory-box"><h3>🔤 Lettres Spéciales</h3>';
        step.content.forEach(item => {
            html += `
                <div class="phonetic-card">
                    <div class="phonetic-letter">${item.letter}</div>
                    <div class="phonetic-ipa">${item.ipa}</div>
                    <div class="phonetic-desc">${item.desc}</div>
                    <div class="phonetic-examples">
                        ${item.examples.map(ex => `<div class="phonetic-example" onclick="speak('${ex.split('(')[0].trim()}')">${ex}</div>`).join('')}
                    </div>
                </div>
            `;
        });
        html += '</div>';
        contentContainer.innerHTML = html;
    } else if (step.type === 'reading') {
        contentContainer.innerHTML = `
            <div class="reading-box">
                <h3 style="color: var(--reading); margin-bottom: 12px;">📄 ${step.title}</h3>
                <div class="reading-text">${step.text}</div>
                <h4 style="margin: 15px 0 10px;">📝 Traduction</h4>
                <div class="reading-text" style="background: linear-gradient(135deg, #e3f2fd, #fff);">
                    ${step.translation}
                </div>
            </div>
        `;
    } else if (step.type === 'translation') {
        // Translation exercise
        displayTranslationExercise(step.exercises);
    }
}

function displayTranslationExercise(exercises) {
    // Simplified: show all exercises at once
    const contentContainer = document.getElementById('lessonContent');
    let html = '<div class="theory-box"><h3>🔄 Exercices de Traduction</h3>';
    
    exercises.forEach((ex, i) => {
        if (ex.french) {
            html += `
                <div class="translation-box">
                    <p class="translation-prompt">Traduisez en maltais :</p>
                    <div class="translation-source">${ex.french}</div>
                    <div style="padding: 10px; background: #f0fff0; border-radius: 8px; margin-top: 10px;">
                        <strong style="color: var(--success);">Réponse :</strong> ${ex.maltese}
                    </div>
                    <div class="tip-box" style="margin-top: 8px;">
                        <div class="icon">💡</div>
                        <p>${ex.tip}</p>
                    </div>
                </div>
            `;
        } else {
            html += `
                <div class="translation-box">
                    <p class="translation-prompt">Traduisez en français :</p>
                    <div class="translation-source">${ex.maltese}</div>
                    <div style="padding: 10px; background: #f0fff0; border-radius: 8px; margin-top: 10px;">
                        <strong style="color: var(--success);">Réponse :</strong> ${ex.french}
                    </div>
                    <div class="tip-box" style="margin-top: 8px;">
                        <div class="icon">💡</div>
                        <p>${ex.tip}</p>
                    </div>
                </div>
            `;
        }
    });
    
    html += '</div>';
    contentContainer.innerHTML = html;
}

function nextLessonStep() {
    if (currentLessonStep < currentLesson.steps.length - 1) {
        currentLessonStep++;
        displayLessonStep();
    } else {
        // Mark lesson as completed
        const progressKey = currentCategory.id + '_' + currentLesson.id;
        universityProgress[progressKey] = true;
        saveProgress();
        
        // Go back to category
        goBack();
    }
}

function prevLessonStep() {
    if (currentLessonStep > 0) {
        currentLessonStep--;
        displayLessonStep();
    } else {
        goBack();
    }
}

// ========== NAVIGATION ==========
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

function goBack() {
    if (navigationStack.length > 0) {
        const prevScreen = navigationStack.pop();
        showScreen(prevScreen);
        
        if (navigationStack.length === 0) {
            document.getElementById('backBtn').classList.remove('visible');
        }
    }
}

// ========== PROGRESS ==========
function updateProgress() {
    if (currentMode === 'practice') {
        const completed = Object.values(practiceProgress).filter(v => v === true).length;
        const total = practiceModules.length;
        const percentage = Math.round((completed / total) * 100);
        
        document.getElementById('progressFill').style.width = percentage + '%';
        document.getElementById('progressPercent').textContent = percentage + '%';
        document.getElementById('progressLabel').textContent = `${completed} / ${total} modules`;
    } else {
        // University mode progress
        const completed = Object.values(universityProgress).filter(v => v === true).length;
        let total = 0;
        Object.values(universityCategories).forEach(cat => {
            total += cat.lessons.length;
        });
        const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
        
        document.getElementById('progressFill').style.width = percentage + '%';
        document.getElementById('progressPercent').textContent = percentage + '%';
        document.getElementById('progressLabel').textContent = `${completed} / ${total} leçons`;
    }
}

// ========== BOTTOM NAV ==========
function showTab(tab) {
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    event.currentTarget.classList.add('active');
    
    if (tab === 'learn') {
        // Already on learn screen
    } else if (tab === 'practice') {
        alert('📝 Section Révision\n\nRévisez vos modules complétés !\n\n(Fonctionnalité à venir)');
    } else if (tab === 'stats') {
        const practiceCompleted = Object.values(practiceProgress).filter(v => v).length;
        const universityCompleted = Object.values(universityProgress).filter(v => v).length;
        
        alert(`📊 Tes Statistiques\n\n🎮 Pratique : ${practiceCompleted}/${practiceModules.length} modules\n🎓 Universitaire : ${universityCompleted} leçons\n🔥 Série : 7 jours\n\nContinue comme ça ! 🌟`);
    } else if (tab === 'settings') {
        alert('⚙️ Paramètres\n\n- Langue : Français\n- Son : Activé\n- Notifications : Activées\n- Thème : Clair\n\n(Configuration à venir)');
    }
}

// ========== SPEECH SYNTHESIS ==========
function speak(text) {
    if ('speechSynthesis' in window) {
        // Cancel any ongoing speech
        speechSynthesis.cancel();
        
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'mt-MT';
        utterance.rate = 0.8;
        utterance.pitch = 1;
        
        speechSynthesis.speak(utterance);
    } else {
        console.log('Speech synthesis not supported');
    }
}

// ========== INITIALIZATION ==========
window.addEventListener('DOMContentLoaded', () => {
    init();
});
