module.exports = function toReadable (number) {
    const numbers = {
        0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine',
        10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen',
        20: 'twenty', 30: 'thirty', 40: 'forty', 50: 'fifty', 60: 'sixty', 70: 'seventy', 80: 'eighty', 90: 'ninety',  
        100: 'hundred', 1000: 'thousand', 1000000: 'million',
    }; 
    const str = String(number);
    const arr = [];
    const length = str.length;
    
    for (let i = 0; i < str.length; i++) {
     let c = +(str[length-i-1]) * Math.pow(10, i);
     arr.push(c);
   }
   let strResult = '';
   for (let j = length; j >= 0; j--) {
     let value = arr[j];
     let a = 0;
     if (value >= 1000 && value < 1000000) {
       a = value / 1000;
       strResult += numbers[a] + " " + numbers[1000] + " ";
     } else if (value >= 100 && value < 1000) {
       a = value / 100;
       strResult += numbers[a] + " " + numbers[100] + " ";
     }
     if (value in numbers && value < 100) {
       strResult += numbers[value] + " ";
     }
   }
   
   strResult = strResult.trim();
   return strResult;
   }

