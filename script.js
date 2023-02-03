let answers = [],
    questions = [
        'How do you do?',
        'Whats you name?',
        'How old are you?'
    ];

    for (let i = 0; i < questions.length; i++) {
        answers[i] = prompt(questions[i], '');
    }
    document.write(answers);
    console.log(answers);

    let i = 0;
    do {
        console.log(i);
        i++;
        document.write(i);       
    } while (i < 10);

let u = 11;
while (u < 100) {
    console.log(u);
    u++;
    document.write(u); 
}