function throttling(fn:()=>void,timer:number){
    let prevTime:null|number = null;
    return function(){
        let currTime = Date.now();
        if (prevTime){
            if (currTime-prevTime>=timer){
                prevTime=currTime;
                fn();
            }
            return;
        }
        else prevTime=currTime;
    }
}

const tt = throttling(()=>console.log("hello"),3000);
let t=1;
setInterval(()=>{
    tt();
    console.log(t)
    t++;
},1000)