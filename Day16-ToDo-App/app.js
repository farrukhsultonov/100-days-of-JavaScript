console.log('Connected');

const $ul = $('<ul></ul>')
$('#to-do-list').append($ul)
const todoItems = [];
const newTodo = [];

$('form').on('submit', (e) => {
    e.preventDefault();
    const todo = $('#input-box').val()
    $('form').trigger('reset')
    $('#input-box').focus();

    // Let's push the todo's in todoItems array
    todoItems.push(todo)

    // We need to append those val()'s to div
    render(todoItems)
})

const render = (Array) => {
    $ul.empty();
    Array.forEach(todo => {
        $ul.append(`<li class="item">${todo}</li>`)
    });
}

// Append it to the completed tasks
$(document).on('click', '.item', (e) => {
    $('#completed').append($(e.currentTarget))
    $(e.currentTarget).removeClass('item').addClass('completed')
    newTodo = todoItems.filter((todo) => todo !== $(e.currentTarget).text() )
})

// Remove the todo completely
$(document).on('click', '.completed', (e) => {
    $(e.currentTarget).remove()
})