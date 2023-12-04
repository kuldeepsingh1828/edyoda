$(document).ready(function () {
    let answers = [];
    $.ajax({
        url: 'https://5d76bf96515d1a0014085cf9.mockapi.io/quiz',
        success: function (response) {
            let quizHtml = response.map(function (item, index) {
                answers.push(item.answer);
                let optionsHtml = item.options.map(function (option, optionIndex) {
                    return `<div><input type="radio" name='${index + 1}' value='${optionIndex + 1}' />
                    <label>${option}</label></div>`
                }).join("");

                return `<h2>Q${index + 1}.${item.question}</h2>
                    ${optionsHtml}<hr/>`;
            });
            console.log(answers)
            $('#quiz-data').html(quizHtml);
            let submitButton = '<button id="submit-quiz">Submit</button>';
            $('#quiz-data').append(submitButton);
            $('#submit-quiz').click(function (e) {
                e.preventDefault();
                let formdata = $('#quiz-form').serializeArray();
                let score = 0;
                formdata.forEach(function (item, index) {
                    if (item.value == answers[index]) {
                        score++;
                    }
                });
                $('#quiz-score').html(`<h1>Your Score is ${score}/5</h1>`);
            });
        }
    });
});