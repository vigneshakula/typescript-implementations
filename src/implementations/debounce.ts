function Debounce(fn:()=>void,delay:number){
    let id:null|number = null;
    return function(){
        if (id){
            clearTimeout(id);
        }
        id = setTimeout(()=>{
            fn();
        },1000);
    }
}

export default Debounce;