// 1주차 - js: 변수 선언(const, let), 
// 변수의 타입, 함수 설명
// 조건문, 간단한 반복문 예제 설명
// if while for

// 자료형 여러개
const str1 = "Hello World";
const boolean1 = true;
const test2 = 3.14;

const testObj = {
    "size"      : 10,
    "height"    : 100
}


// 
const student = {
    "age": 30,
    "major": "web",


}
const array = [1,2,3,4,5,6,7,8];


// for(let i = 0; i < array.length; i++) {
//     console.log(i, array[i]);
// }

// 자료형 알아보기
// let i = 0;
// while(true) {
//     console.log(array[i]);
//     i = i + 1;
//     if(i == 5) {
//         break;
//     }
// }

console.log("*");
console.log("**");
console.log("***");
console.log("****");
console.log("*****");



// 더하기 함수
const add1 = (num1, num2, num3) => {

    const result = num1 + num2 + num3;


    // console.log(typeof(str1));
    // console.log(typeof(boolean1));
    // console.log(typeof(test2));
    // console.log(typeof(testObj));
    // console.log(testObj);
    // console.log(testObj.size)
    // console.log(testObj.height)



    // console.log(array[0]);
    // console.log(array[1]);
    // console.log(array[2]);
    // console.log(array[3]);
    // console.log(array[4]);

    // console.log("result : ", result);

}


// 함수 호출
add1(123, 456, 789);