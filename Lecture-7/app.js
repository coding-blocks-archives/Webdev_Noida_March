window.onload = function(){
    let input = document.getElementById('inp');
    let btn = document.getElementById('btn');
    let result = document.getElementById('result');

    btn.onclick = function(){
        let val = input.value;
        let li = document.createElement('li');
        let text = document.createTextNode(val);
        li.appendChild(text);
        result.appendChild(li);
    }
}



