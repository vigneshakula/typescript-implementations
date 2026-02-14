import throttling from "./implementations/throttling";

const tt = throttling(()=>console.log("hello world"),3000);

let time = 1;
setInterval(()=>{
    console.log(time);
    tt();
    time++;
},1000);