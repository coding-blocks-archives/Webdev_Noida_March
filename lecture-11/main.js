$(document).ready(function(){
    var inp = $('#inp');
    var btn = $('#btn');
    var result = $('#result');

    btn.click(function(){
        var value = inp.val();
        var para = $(`<p>${value}</p>`);
        var btn = $(`<button>delete</button>`)
        btn.on('click', deleteNode)
        para.append(btn);
        result.append(para);
    })

    function deleteNode(){
        $(this).parent().remove();
    }




});
