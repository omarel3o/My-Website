// دالة لتطبيق وحفظ الثيم على مستوى المتصفح لجميع الصفحات
function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const themeToggle = document.getElementById('theme-toggle');
    
    if (themeToggle) {
        if (theme === 'dark') {
            themeToggle.classList.add('on');
        } else {
            themeToggle.classList.remove('on');
        }
    }
}

// تشغيل السكريبت فور تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    // تفعيل وضع الدارك مود كوضع افتراضي عند الدخول أول مرة
    const savedTheme = localStorage.getItem('theme') || 'dark';
    applyTheme(savedTheme);

    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            localStorage.setItem('theme', newTheme);
            applyTheme(newTheme);
        });
    }

    // منطق التحكم في نافذة زر الـ Subscribe المنبثقة
    const subscribeBtn = document.getElementById('subscribe-btn');
    const subscribeModal = document.getElementById('subscribe-modal');
    const closeSubscribe = document.getElementById('close-subscribe');

    if (subscribeBtn && subscribeModal && closeSubscribe) {
        subscribeBtn.addEventListener('click', () => {
            subscribeModal.style.display = 'flex';
        });

        closeSubscribe.addEventListener('click', () => {
            subscribeModal.style.display = 'none';
        });

        subscribeModal.addEventListener('click', (e) => {
            if (e.target === subscribeModal) {
                subscribeModal.style.display = 'none';
            }
        });
    }

    // منطق التحكم في نافذة الصورة الشخصية المكبرة (Modal)
    const modal = document.getElementById('image-modal');
    const trigger = document.getElementById('profile-trigger');
    const closeModal = document.getElementById('close-modal');

    if (trigger && modal && closeModal) {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            modal.style.display = 'flex';
        });

        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    // تأثير كتابة الأكواد البرمجية ومسحها بطريقة تفاعلية بشرية
    const codeElement = document.getElementById('typing-effect-code');
    if (codeElement) {
        const codeLines = [
            "from tensorflow import keras\nimport transformers\n\nif test_results > 0.85:\n    print(\"Deploying Model...\")\nelse:\n    print(\"Optimizing Hyperparameters...\")\n\n# Metrics Output:\nR2 = 0.9999\ntest Results = 0.8918"
        ];

        let lineIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function typeCode() {
            const currentFullText = codeLines[lineIndex];
            
            if (!isDeleting) {
                codeElement.innerHTML = currentFullText.substring(0, charIndex + 1).replace(/\n/g, '<br>').replace(/ /g, '&nbsp;');
                charIndex++;

                if (charIndex === currentFullText.length) {
                    setTimeout(() => { isDeleting = true; typeCode(); }, 4000);
                    return;
                }
            } else {
                codeElement.innerHTML = currentFullText.substring(0, charIndex - 1).replace(/\n/g, '<br>').replace(/ /g, '&nbsp;');
                charIndex--;

                if (charIndex === 0) {
                    isDeleting = false;
                }
            }

            const typingSpeed = isDeleting ? 25 : (Math.random() * 60 + 40);
            setTimeout(typeCode, typingSpeed);
        }

        setTimeout(typeCode, 1000);
    }
});