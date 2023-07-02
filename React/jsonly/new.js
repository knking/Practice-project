let arr =[4,3,5,6,7];

// const ans  = arr.filter((val,idx)=>{
//     if(val> 4){
//         return val;
//     }
// })

// console.log(ans)
arr.unshift(100)
arr.map((val,inx)=>(console.log(val,inx)))