function addOne(num){
    return num+1;
}
//전달된 인자에 1을 더하는 간단한 함수를 정의

var plusOne = addOne;

var result = plusOne(1);
console.log(result);

// // 값의 일환인 함수로 무엇을 할 수 있을가?
// function init(){
//     alert("you rule!");
// }
// window.onload = init;

// console.log(1234);