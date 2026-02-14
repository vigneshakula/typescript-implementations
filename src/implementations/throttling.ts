function throttling(fn:()=>void,timer:number){
    let prevTime:number = 0;
    return function(){
        let currTime:number= Date.now();
        if (currTime-prevTime>=timer){
            prevTime=currTime;
            fn();
        }
    }
}

export default throttling;