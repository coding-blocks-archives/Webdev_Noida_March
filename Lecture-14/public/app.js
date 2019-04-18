(function(){
    var btn = document.getElementById('btn');
    var result = document.getElementById('result');
    var loader = document.getElementById('loader');
    var inp = document.getElementById('inp');
    var taskList = [];
    getArray();
    function networkRequest(){
        result.style.backgroundColor = '#030303c4';
        loader.style.display = 'block';
        var val = inp.value;
        taskList.push(val);
       
        display(val);
        fetch(`/add`, { 
            method: 'POST',
            body: JSON.stringify({"todo": val})
         })
            .then(function(data){
                if(data.status !== 200) {
                    console.error('Internal Server Error')
                    return;
                }
                data.text()
                    .then(function(d){
                      loader.style.display = 'none'; 
                      result.style.backgroundColor = '#0000003b';
                      console.log(d); 
                      localStorage.setItem('task', JSON.stringify(taskList));
                    //   display(d);
                    })
            }).catch(function(e){
                console.log(e);
            })
    }
    function display(inf){
        let p = document.createElement('p');
        let data = document.createTextNode(inf);
        p.appendChild(data);
        result.prepend(p);
    }
   
    function getArray(){
        taskList =  JSON.parse(localStorage.getItem('task') ) || [];
        if(taskList.length === 0) {
            fetch(`/data`, { mode: 'no-cors' })
            .then(function(data){
                if(data.status !== 200) {
                    return;
                }
                data.json()
                    .then(function(d){
                      console.log(d); 
                      taskList = d;
                      localStorage.setItem('task', JSON.stringify(taskList));
                      d.forEach(function(i){
                        display(i);
                      })
                    //   display(d);
                    })
            })
        }

        else {
            taskList.forEach(function(i){
                display(i);
              })
        }
      

    }

    btn.onclick = function(){
        networkRequest();

    }
})()