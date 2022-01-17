var objects = [
    {
        sentence: 'ももクロの玉井詩織のニックネームといえば?',
        answer: 'しおりん'
    },
    {
        sentence: 'ドラえもんの誕生日といえば9月3日。では、のび太の誕生日は?',
        answer: '8月7日'
    },
    {
        sentence: 'HTMLで記述したホームぺージの文書構造を装飾する言語と言えば?',
        answer: 'CSS'
    },
    {
        sentence: '栃木県の県庁所在地と言えば?',
        answer: '宇都宮市'
    },
    {
        sentence: 'ルーレットの数字を全部掛け算すると値はいくつになる?',
        answer: '0'
    }
];

function checkAnswer(input) {
    var isCorrect = false;
    if(input == this.answer) {
        isCorrect = true;
    }
    return isCorrect;
}

function getObjects() {
    for(var i = 0; i < objects.length; i++) {
        var object = objects[i];
        object.check = checkAnswer;
    }
    return objects;
}