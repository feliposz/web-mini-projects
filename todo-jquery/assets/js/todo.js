$('#plus').click(function () {
    $('input').fadeToggle();
});

$('input[type="text"]').on('keypress', function (event) {
    if (event.which === 13) {
        var todo = $(this).val();
        $(this).val('');
        $('<li><span><i class="fa fa-trash"></i></span> ' + todo + '</li>').appendTo($('ul'));
    }
});

$('ul').on('click', 'li', function () {
    $(this).toggleClass('completed');
});

$('ul').on('click', 'span', function (event) {
    $(this).parent().fadeOut(250, function () {
        $(this).remove();
    });
    event.stopPropagation();
});

