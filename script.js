//1 დაწერეთ პროგრამა მასივში სიდიდით მეორე რიცხვის მოსაძებნად.

//  let array=[1,2,3,8,9,13,19,16]

// function findSecond(arr){
//     let sorted=arr.sort((a,b)=>b-a);
//   return sorted[1];
// }

// console.log(findSecond(array))


// 2 დაწერეთ პროგრამა, რომ იპოვოთ მასივის ყველა ლუწი რიცხვის ჯამი.

//  let array=[1,2,3,8,9,13,19,16]
// function sum(arr){
//      let count=0;
//     for(let i=0;i<arr.length;i++){
       
//         if(arr[i]%2==0){
//             count+=arr[i];
//         }
        
//     }
//     return count;
// }

// console.log(sum(array))


// 3 დაწერეთ პროგრამა, რათა შეამოწმოთ არის თუ არა ორი მასივი ტოლი


// let array1=[1,2,3];
// let array2=[1,2,3];


// function arrays(arr1,arr2){
//     if(arr1.length==arr2.length){
//         for(let i=0;i<arr2.length;i++){
//             if(!arr1.includes(arr2[i])){
//                  return "araris 2 masivi ertmanetis toli";
//             }
//         }
//         return "2 masivi ertmanetis tolia"
        
//     }else{
//         return "araris 2 masivi ertmanetis toli";
//     }
// }
// console.log(arrays(array1,array2))


// let word="hello world";
// let updated=word.slice(1);
// console.log(updated);
// let arr=[1,2,3,4,5];

// let updated=arr.splice(1,3,"hello bitcamp");
// console.log(updated);
// console.log(arr)