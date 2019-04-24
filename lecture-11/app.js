(function(){
    var btn = document.getElementById('btn');
    var result = document.getElementById('result');
    var loader = document.getElementById('loader');
    var url = 'https://api.darksky.net/forecast/23d0c959cf01620646340bbf2afbe08b/37.8267,-122.4233'
    function networkRequest(){
        result.style.backgroundColor = '#030303c4';
        loader.style.display = 'block';
        fetch(url, { mode: 'no-cors' })
            .then(function(data){
                if(data.status !== 200) {
                    return;
                }
                data.json()
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
        networkRequest();

    }
})()