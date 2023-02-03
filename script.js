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
