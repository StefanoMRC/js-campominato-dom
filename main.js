let btn = document.getElementById("btn");
let griglia = document.getElementById("griglia")
let bombeTot=[]
let bombe=[]
let array =[]


btn.addEventListener("click", function () {
    let difficolta = document.getElementById("difficolta").value;
    console.log(difficolta)
    griglia.innerHTML=""

    let numeroCelle;
    array=[]
    bombeTot=[]
    bombe=[]

    if(difficolta=="1"){
        numeroCelle=100
    }else if(difficolta=="2"){
        numeroCelle=81
    }else{
        numeroCelle=49
    }

    for(y=1; y<=numeroCelle; y++){
        array.push(y)
    }

    function shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
    }

    array=shuffle(array)
    console.log(shuffle(array))

     // array bombe
     for(x=1; x <= numeroCelle; x++){
        bombeTot.push(x)
    }
    bombeTot=shuffle(bombeTot)
    console.log(`le bombe sono ${bombeTot}`)
    for(z=0; z<16;z++){
        bombe.push(bombeTot[z])
    }
    console.log(`le 16 bombe sono ${bombe}`)
    // fine array bombe

    for(i=0; i<numeroCelle;i++){
        let box = document.createElement("div")
        griglia.appendChild(box);
        if(numeroCelle == 100){
            box.classList.add("box1") 
        }else if(numeroCelle==81){
            box.classList.add("box2")
        }else{
            box.classList.add("box3")
        }
        box.innerHTML=array[i]
        griglia.appendChild(box);
       



        box.addEventListener("click", function(){
            console.log(this.innerText)
            if(bombe.includes(parseInt(this.innerText))){
                this.classList.add("bg_bomba")
                box.removeEventListener("click", function(){
                    
                })
            } else{
                this.classList.add("bg_box")
            }
        })
    }    
})




