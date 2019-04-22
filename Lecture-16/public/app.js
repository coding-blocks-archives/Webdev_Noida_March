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
      
        fetch(`/add`, { 
            method: 'POST',
            headers: new Headers({'content-type': 'application/json'}),
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
                      taskList.push(d);
                      display(d);
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
        let span = document.createElement('span');
        let btn = document.createElement('button');
        let btnText = document.createTextNode('delete');
        btn.addEventListener('click', deleteNode);
        btn.appendChild(btnText);
        span.appendChild(data);
        p.appendChild(span);
        p.appendChild(btn);
        result.prepend(p);
    }
   
    function deleteNode(){
       let that = this; 
       var eltext = this.previousSibling.textContent;
       var index = taskList.indexOf(eltext);
       delfromServer(index)
         .then(function(data){
            that.parentNode.remove();
            console.log(data);
         })
      
    }

    function delfromServer(ind) {
        return new Promise(function(resolve, reject){
            fetch(`/del`, { 
                method: 'POST',
                headers: new Headers({'content-type': 'application/json'}),
                body: JSON.stringify({"id": ind})
             })
                .then(function(data){
                    if(data.status !== 200) {
                        console.error('Internal Server Error')
                        return;
                    }
                    data.json()
                        .then(function(d){
                          loader.style.display = 'none'; 
                          result.style.backgroundColor = '#0000003b';
                          taskList = d;
                          resolve(d)
                          localStorage.setItem('task', JSON.stringify(taskList));
                        //   display(d);
                        })
                }).catch(function(e){
                    console.log(e);
                    reject(d);
                })
        })
       
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