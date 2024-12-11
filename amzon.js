/*alert("hello everyone welcome on amazone !"); */
document.querySelector("#mode").style.background="#222f3d";
document.querySelector("#mode").style.color="white";
let modeBtn=document.querySelector("#mode");

let currMode ="light";

modeBtn.addEventListener("click" , () => {
    if(currMode==="light"){
        currMode="dark";
        document.querySelector("body").style.backgroundColor="black";
    }
    else{
        currMode="light";
        document.querySelector("body").style.backgroundColor="white";

    }
    console.log(currMode);
}
);


