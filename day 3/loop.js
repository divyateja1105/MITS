//to access the values we use for of loop
let num=[1,2,3,4,5,5]
for(let value of num){
    console.log(value);
}
//to access the index/key we use for in loop
for(let index in num){
    console.log(index); //index  
    console.log(num[index]); //values
}
let obj={
    name:'divya',
    city:'b.kk',
    age:24
}
for(let index in obj){
    console.log(index);//only keys will be printed
    
    console.log(obj[index]);//only values will print
    
    console.log(obj);//key&value will printed 
}
let obj2={
    name:'chaitra',
    state:{
        city:'mpl'
    },
    age:21,
}
console.log(obj2.state.city);
console.log(obj2?.state?.city);//optional chaining if city is not present then it will show undefined