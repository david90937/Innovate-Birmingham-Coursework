// slowMath.add(6, 2).then((result) => {
//     console.log(result)
//     return slowMath.multiply(result, 2);
// }).then((result) => {
//     console.log(result)
//     return slowMath.divide(result, 4);
// }).then((result) => {
//     console.log(result);
//     return slowMath.subtract(result, 3);
// }).then((result) => {
//     console.log(result);
//     return slowMath.add(result, 98);
// }).then((result) => {
//     console.log(result);
//     return slowMath.remainder(result, 2);
// }).then((result) => {
//     console.log(result);
//     return slowMath.multiply(result, 50);
// }).then((result) => {
//     console.log(result);
//     return slowMath.remainder(result, 40)
// }).then((result) => {
//     console.log(result);
//     return slowMath.add(result, 32);
// }).then((result) => {
//     console.log(`The final result is: ${result}`);
// }).catch((err) => {
//     console.log(err)
// })


// async function doMath(){
//     try {
//         let result = await slowMath.add(1,1);
//         console.log(result);
//         result = await slowMath.multiply(result, 2);
//         console.log(result);
//         result = await slowMath.divide(result, 4);
//         console.log(result)
//         result = await slowMath.subtract(result, 3);
//         console.log(result)
//         result = await slowMath.add(result, 98);
//         console.log(result)
//         result = await slowMath.remainder(result, 2);
//         console.log(result)
//         result = await slowMath.multiply(result, 50);
//         console.log(result)
//         result = await slowMath.remainder(result, 40);
//         console.log(result)
//         result = await slowMath.add(result, 32);
//         console.log(`The final result is: ${result}`);
//     }
//     catch {
//         console.log('An error has occurred');
//     }
// }

// doMath();

// function jumpingNumber(n){
//     //your code here
//     let array = String(n).split("").map((n) => {
//         return Number(n)
//     })

//     for (let i = 0; i < array.length; i++) {
//         if ((array[i] +1 ) == array[i+1] || ((array[i] -1) == array[i+1])){
//             continue
//         }
//         if ( (i+1) == array.length) {
//             return 'Jumping!!'
//         }
//         else {
//             return 'Not!!';
//         }
//     }
//   }

// function positiveSum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (Math.abs(arr[i]) == arr[i]) {
//             sum += arr[i];
//         }
//     }
//     console.log(sum)
// }

// function enough(cap, on, wait) {
//     // your code here
//     if ((cap - on - wait) > 0 ){
//         return 0;
//     }
//     else if ((cap -on) < wait){
//         return (on - wait)
//     }
//   }

// function getCount(str) {
//     var vowelsCount = 0;
    
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === "a"){
//             vowelsCount +=1;
//         }
//         if (str[i] === "e"){
//             vowelsCount +=1;
//         }
//         if (str[i] === "i"){
//             vowelsCount +=1;
//         }
//         if (str[i] === "o"){
//             vowelsCount +=1;
//         }
//         if (str[i] === "u"){
//             vowelsCount +=1;
//         }
        
//     }
//     // enter your majic here
    
//     return vowelsCount;
//   }

// function rowWeights(array){
//     let team1 = []
//     let team2 = []
    
//     for (let i = 0; i < array.length; i++) {
//         if( i % 2 == 0){
//             team1.push(array[i])
//         }
//         else {
//             team2.push(array[i])
//         }
//     }

//     return [team1, team2]
//   }

//   function rowWeights(array){
//     let team1 = []
//     let team2 = []
//     let weight1 = 0;
//     let weight2 = 0;
    
//     for (let i = 0; i < array.length; i++) {
//         if( i % 2 == 0){
//             team1.push(array[i])
//         }
//         else {
//             team2.push(array[i])
//         }
//     }
    
//     for (let x =0; x < team1.length; x++){
//       weight1 += team1[x];
//     }
  
//     for (let y =0; y < team2.length; y++){
//       weight2 += team2[y];
//     }
  
//     return [weight1, weight2]
//   }

function commonSubseq(s1, s2) {

    // let string1 = Array.from(s1);
    // let string2 = Array.from(s2);

    // let result = string1.filter((i, index) => {
    //     let stringArr = [];
    //     if (i == s2[index]) {
    //         stringArr.push(i)
    //     }
    //     // console.log(i)
    //     console.log(i);
    //     console.log(s2[index])
    //     return stringArr
    // })
    // console.log(result);
    let result = [];
    let test = [];
    let strippedString = []

    for (let x = 0; x < s2.length; x++) {
        if (s1.includes(s2[x])) {
            strippedString.push(s2[x])
        }
    }

    for (let i = 0; i < s1.length; i++) {

        // if (!s2.includes(s1[i])) {
        //     strippedString.push()
        // }

        //console.log(s1.substring(i))

        if (s2.includes(s1.substring(i))) {
            test.push(i)
            //console.log(test)
        }
        
        if (s2.indexOf(s1[i]) < i) {
            if (s1.substring(i).includes(s2[i])){
                result.push(s1[i])
            }
        }
        
        else if (s2.substring(i).includes(s1[i])){
            // console.log(i)
            // console.log(s2.substring(i))
            result.push(s1[i])
        }   
    }
    //console.log(result)
};

commonSubseq("ABAZDC", "BACBAD")
commonSubseq("AGGTAB", "GXTXAYB")