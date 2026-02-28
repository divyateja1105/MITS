let arr=[1,2,3,4,5,6]
const addone=(num)=>{return num+1}
let res=arr.map(addone)
let double=arr.map((num)=>num*2)
console.log(res)
console.log(double)


let products=[
{id:1,name:'laptop',price:25000},
{id:2,name:'mobile',price:9500},
{id:3,name:'keyboard',price:2000},
]
let productId=products.map((product)=>{console.log(product.id)})
let productName=products.map((product)=>{console.log(product.name)})
let productprice=products.map((product)=>{console.log(product.price)})

let product=products.filter((p)=>p.price>6000)
console.log(product);

//sum of all prices
let totalPrice=products.reduce((total,curr)=>{return total+curr.price},0)
console.log(totalPrice);


let b=arr.filter((num)=>num>3)
console.log(b);

//even numbers
let even=arr.filter((num)=>num%2==0)
console.log(even);
//odd numbers
let odd=arr.filter((num)=>num%2!=0)
console.log(odd);

//reduce
let sum=arr.reduce((total,curr)=>{return total+curr},1)
console.log(sum);

//find
let a=products.find((p)=>p.id==2)
console.log(a);

let arr1=[11,22,33,44,55,66]
let[x,,c]=arr1
console.log(c);

let student={
    name:"xyz",
    department:"CSE",
    age:22
}
const {name,department}=student
console.log(name,department);

//destructured
let car={
    brand:"BMW",
    year:2024,
}
let newCar={...car,year:2026}
console.log(newCar);