// Code your solutions in this file
function writeCards(arr,eventName){
    const newArr = []
    for(let i=0;i<arr.length;i++){
  
      newArr[i] = `Thank you, ${arr[i]}, for the wonderful ${eventName} gift!`;
  
    }
    return newArr;
  }
  
  
  function countDown(num){
    let i=num;
    while( i >= 0){
      console.log(i);
      i--
    }
  }