(function(){
    var inp = document.getElementById('inp');
    var btn = document.getElementById('btn');
    var result = document.getElementById('result');
    var loader = document.getElementById('loader');

    function networkRequest(val){
        result.style.backgroundColor = '#030303c4';
        loader.style.display = 'block';
        fetch('http://numbersapi.com/' + val)
            .then(function(data){
                if(data.status !== 200) {
                    return;
                }
                data.text()
                    .then(function(d){
                      loader.style.display = 'none'; 
                      result.style.backgroundColor = '#0000003b';
                       display(d);
                    })
            })
    }
    function display(inf){
        let p = document.createElement('p');
        let data = document.createTextNode(inf);
        p.appendChild(data);
        result.prepend(p);
    }
   
    btn.onclick = function(){
        var value = inp.value;
        networkRequest(value);

    }
})()