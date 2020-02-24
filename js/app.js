$(function () {

    var leftElements = $('.panel-left').find('.list-element');
    var listRight = $('.list-right');
    var listLeft = $('.list-left');

    leftElements.on('click', function () {
        if ($(this).parent().hasClass('list-left')) {
            listRight.append(this);
        } else {
            listLeft.append(this);
        }
    });
});