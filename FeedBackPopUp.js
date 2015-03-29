function showFeedbackDialog(id) {
    var div = document.getElementById(id);
    if (div.style.display == 'block')
        div.style.display = 'none';
    else
        div.style.display = 'block'
}

function hideFeedbackDialog(id) {
    var div = document.getElementById(id);
    div.style.display = 'none';

}

function sumbitFeedBack(id)
{
    var div = document.getElementById(id);
    div.style.display = 'none';
}