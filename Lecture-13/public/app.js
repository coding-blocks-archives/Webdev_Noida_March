(function(){
    var btn = document.getElementById('btn');
    var result = document.getElementById('result');
    var loader = document.getElementById('loader');
    var inp = document.getElementById('inp');
    getArray();
    function networkRequest(){
        result.style.backgroundColor = '#030303c4';
        loader.style.display = 'block';
        var val = inp.value;
        display(val);
        fetch(`/add?q=${val}`, { mode: 'no-cors' })
            .then(function(data){
                if(data.status !== 200) {
                    return;
                }
                data.text()
                    .then(function(d){
                      loader.style.display = 'none'; 
                      result.style.backgroundColor = '#0000003b';
                      console.log(d); 
                    //   display(d);
                    })
            })
    }
    function display(inf){
        let p = document.createElement('p');
        let data = document.createTextNode(inf);
        p.appendChild(data);
        result.prepend(p);
    }
   
    function getArray(){
        fetch(`/data`, { mode: 'no-cors' })
        .then(function(data){
            if(data.status !== 200) {
                return;
            }
            data.json()
                .then(function(d){
                  console.log(d); 
                  d.forEach(function(i){
                    display(i);
                  })
                //   display(d);
                })
        })

    }

    btn.onclick = function(){
        networkRequest();

    }
})()