
function main(){
function redirect(callback){
    var name=document.getElementById("name").value;
    var psw= document.getElementById("psw").value;
    callback(name,psw);
}
function message(name,psw){
    if(name !="admin" || psw !="12345"){
        console.log("error");
        alert("Enter correct Username and Password");
        return false;  
    }
    else{
        window.open("main.html");
        //alert("error");
    }
}
redirect(message);

}

function ajax(){
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            var response =JSON.parse(this.responseText);
            var output ="";
            var completed="";
            for( var i=0;i<response.length;i++){
                if(response[i].completed==true){
                output+="<li><input type='checkbox'checked='true' disabled='disabled' id='box1'/><label>"+ response[i].title + "</label></li>";
                output+="</br>"; 
                }
                else{
                    output+="<li><input type='checkbox' class='box1'/><label>"+ response[i].title + "</label></li>";
                    output+="</br>"; 
                }
            }
              $("#todo").html(output);

              var count=0; 
              const alertpromise=()=>{
                  return new Promise((resolve,reject)=>{
                    if(count===5){
                        resolve(count);
                    }else{
                        reject('not equal to 5');
                    }
                  });
              }

             const promisecall=()=>{
                alertpromise().then((data)=>{
                    alert(`congrats!! ${data} tasks have been Successfully Completed`);
                })
                .catch((err)=>{
                    console.log('tasks!=5');
                });
             }  
                
              $("#todo").on('change','.box1',function(e){
                  if($(this).prop('checked')===true){
                      console.log("checked");
                      count++;
                      $(this).parent().addClass('active');
                  }else{
                      count--;
                      console.log("unchecked");
                      $(this).parent().removeClass('active');
                  }
                  promisecall();
                });  
                 

              
              

        /*     const promise= new Promise(function(resolve,reject){
                
                var count=0;
                for(j=0;j<output.length;j++){
                    //checkbox = document.getElementById('box2');
                    checkbox=output[j];
                    checkbox.addEventListener('change', e => {
                   // $("#todo").on('change','.box1',function(e){
                        if($(this).prop('checked')===true){
                            console.log("checked");
                            count++;
                            $(this).parent().addClass('active');
                            resolve();
                        }else{
                            count--;
                            console.log("unchecked");
                            $(this).parent().removeClass('active');
                            reject();
                        }
    
                       /* if(e.target.checked){
                            count++;
                            resolve();
                        }
                        else{
                            reject();
                        } 
                    });
                } 
            }) 
            */
            
           /* promise
                .then(function(){
                    if(count===5){
                        console.log("completed 5 tasks");
                    }
                })
                .catch(function(err){
                    console.log("error detected");
                })
                */
           
        }
            
    }
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
}

  
