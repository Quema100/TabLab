const quote = () => {
    
    const quoteElement = document.getElementById('quote');
    const userLang = navigator.language || navigator.userLanguage;

    const enQuotes = [
        "You become what you believe.",
        "If you don't walk today, you'll have to run tomorrow.",
        "Small habits change your life.",
        "Live today better than yesterday.",
        "Don't give up. See it through to the end."
    ];
    const krQuotes = [
        "당신은 당신이 믿는 만큼의 사람이 된다.",
        "오늘 걷지 않으면 내일은 뛰어야 한다.",
        "작은 습관이 인생을 바꾼다.",
        "어제보다 나은 오늘을 살아라.",
        "포기하지 마라. 끝까지 해라."
    ];

    const quotes = userLang.startsWith('ko') ? krQuotes : enQuotes;
    quoteElement.textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
}