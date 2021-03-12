module.exports = function toReadable (number) {
var ones = {1:'one', 2:'two', 3:'three', 4:'four', 5:'five', 6:'six', 7:'seven', 8:'eight', 9:'nine'};
var tens = {2:'twenty', 3:'thirty', 4:'forty', 5:'fifty', 6:'sixty', 7:'seventy', 8:'eighty', 9:'ninety'};
var teens = {10:'ten', 11:'eleven', 12:'twelve', 13:'thirteen', 14:'fourteen', 15:'fifteen', 16:'sixteen', 17:'seventeen', 18:'eighteen', 19:'nineteen'};

function convert_units(num){
  return ones[num];
}

function convert_teens(num){
    if(num<20){
      return teens[num];
    }
    else{
      let spase=' ';
      let dozens = tens[Math.trunc(num/10)];
      let units =num%10;
      if(units!==0){
        units=convert_units(units);
        let str =dozens +' '+ units;
        return str
      }
      else{
        units='';
        let str =dozens;
        return str
      }
      
    }
  }
  
  function convert_hundred(num){
    let hundred = convert_units(Math.trunc(num/100));
    let dozens=num % 100;
    if (dozens===0){
      let str =hundred + " " + 'hundred';
      return str;
    }
    else if(dozens<10){
      dozens=convert_units(dozens);
    }
    else{
      dozens=convert_teens(dozens);
    }
    let str =hundred + " " + 'hundred' + " " + dozens;
    return str;
    
  }  
    
 
if((Math.trunc(number/100))>0){
  return (convert_hundred(number))
}
else if ((Math.trunc(number/10))>0){
  return (convert_teens(number));
}
else if (number>0){
  return (convert_units(number))
  
}
else{
  return ('zero')
}
  
}
