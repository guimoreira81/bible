const e = {
    title: document.getElementById("title"),
    text: document.getElementById("text"),
    leftPage: document.getElementById("left-page"),
    rightPage: document.getElementById("right-page"),
}

const BooksChapterNumbers = [
    ["Genesis", 50],
    ["Exodus", 40],
    ["Leviticus", 27],
    ["Numbers", 36],
    ["Deuteronomy", 34],
    ["Joshua", 24],
    ["Judges", 21],
    ["Ruth", 4],
    ["1 Samuel", 31],
    ["2 Samuel", 24],
    ["1 Kings", 22],
    ["2 Kings", 25],
    ["1 Chronicles", 29],
    ["2 Chronicles", 36],
    ["Ezra", 10],
    ["Nehemiah", 13],
    ["Tobit", 14],
    ["Judith", 16],
    ["Esther", 16],
    ["1 Maccabees", 16],
    ["2 Maccabees", 15],
    ["Job", 42],
    ["Psalms", 150],
    ["Proverbs", 31],
    ["Ecclesiastes", 12],
    ["Song of Solomon", 8],
    ["Wisdom", 19],
    ["Sirach", 51],
    ["Isaiah", 66],
    ["Jeremiah", 52],
    ["Lamentations", 5],
    ["Baruch", 6],
    ["Ezekiel", 48],
    ["Daniel", 14],
    ["Hosea", 14],
    ["Joel", 3],
    ["Amos", 9],
    ["Obadiah", 1],
    ["Jonah", 4],
    ["Micah", 7],
    ["Nahum", 3],
    ["Habakkuk", 3],
    ["Zephaniah", 3],
    ["Haggai", 2],
    ["Zechariah", 14],
    ["Malachi", 4],
    ["Matthew", 28],
    ["Mark", 16],
    ["Luke", 24],
    ["John", 21],
    ["Acts", 28],
    ["Romans", 16],
    ["1 Corinthians", 16],
    ["2 Corinthians", 13],
    ["Galatians", 6],
    ["Ephesians", 6],
    ["Philippians", 4],
    ["Colossians", 4],
    ["1 Thessalonians", 5],
    ["2 Thessalonians", 3],
    ["1 Timothy", 6],
    ["2 Timothy", 4],
    ["Titus", 3],
    ["Philemon", 1],
    ["Hebrews", 13],
    ["James", 5],
    ["1 Peter", 5],
    ["2 Peter", 3],
    ["1 John", 5],
    ["2 John", 1],
    ["3 John", 1],
    ["Jude", 1],
    ["Revelation", 22],
];
let currentChapter = 0;
let currentBookIndex = 0;

function setPage(){
    const book = BooksChapterNumbers[currentBookIndex][0];
    const chapter = currentChapter+1;
    fetch(`https://bible-api.com/${book} ${chapter}`)
    .then(res => res.json())
    .then(data => {
        e.title.textContent = `${book} ${chapter}`;
        e.text.textContent = `${data.text}`;
    })
    .catch(res => {
        e.title.textContent = `${book} ${chapter}`;
        e.text.textContent = "Error, could'nt fetch data";
    });
}


setPage();

e.leftPage.addEventListener("mousedown", (event) => {
    console.log(`Page Turned Left, Book: ${currentBookIndex}, Chapter: ${currentChapter}`);
    if (currentChapter-1>0){
        currentChapter--;
    }else if (currentBookIndex-1>=0){
        currentBookIndex--;
        currentChapter = BooksChapterNumbers[currentBookIndex][1];
    }
    setPage();
});

e.rightPage.addEventListener("mousedown", (event) => {
    console.log(`Page Turned Right, Book: ${currentBookIndex}, Chapter: ${currentChapter}`);
    if (currentChapter+1<=BooksChapterNumbers[currentBookIndex][1]){
        currentChapter++;
    }else if (currentBookIndex+1<=BooksChapterNumbers.length){
        currentChapter = 0;
        currentBookIndex++;
    }
    setPage();
});