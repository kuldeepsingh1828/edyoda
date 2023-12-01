$(document).ready(function () {
    $.ajax({
        url: 'http://localhost:3000/tasks',
        method: 'GET',
        success: function (data) {
            let content = data.map((task) => {
                return `
                <div class="child">
                <h2>${task.title}</h2>
                <h3>${task.description}</h3>
                <div>
                    <span>${task.isCompleted ? "Completed" : "Not Completed"}</span>
                    <hr/>
                    <span>${task.createDate}</span>
                </div>
            </div>`
            });
            $('.task-container').html(content);
        }
    });
    $('form').submit(function (e) {

        e.preventDefault();
        var data = new FormData(this);
        let jsonData = {};
        for (var pair of data.entries()) {
            jsonData[pair[0]] = pair[1];
        }
        console.log(jsonData);
        $.ajax({
            url: 'http://localhost:3000/tasks',
            method: 'POST',
            data: JSON.stringify(jsonData),
            contentType: 'application/json',
            success: function (data) {
                console.log(data);
            }
        });
    });

    // button should have a type button if in the form
    // $('add-task-btn').click(function () {

    // });
});