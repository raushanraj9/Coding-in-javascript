function reverseInteger(number) {

    let reversed = 0;
    let pop;
    
    while (number != 0) {
      pop = number % 10; 
      reversed = (reversed * 10) + pop;
      number = Math.floor(number / 10);
    }
  
    return reversed;
  
  }
  
  const num=reverseInteger(345)
  console.log(num)