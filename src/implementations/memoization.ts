
function getFactorial(num:number){
    let fact:bigint = BigInt(1);
    for (let i=2;i<=num;i++){
        fact=fact*BigInt(i);
    }
    console.log(fact);
    return fact;
}

function memoize(){
   let cache = new Map<number,bigint>();

   return function(num:number){
        if (!cache.has(num)){
            cache.set(num,getFactorial(num));
        }
        return cache.get(num);
   }
}

export default memoize;