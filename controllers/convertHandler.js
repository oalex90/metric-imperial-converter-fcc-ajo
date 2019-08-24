/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {  
  let test1 = "324lbs";
  const extractChars = /[A-Za-z]+$/;
  
  this.getNum = function(input) {
    
    input.trim(); //take off extra spaces at beg and end of string  
    let strNum = input.replace(extractChars, '') //take of characeters at end of string
    strNum.trim(); //take off extra spaces at beg and end
    
    if(strNum==''){ //if not value, return default value (1)
      //console.log(1);
      return 1;
    }
    
    let validFormat = /^\d*\.{0,1}\d*\/{0,1}\d*\.{0,1}\d*$/;
    if(validFormat.test(strNum)){
      //console.log("valid Format");
      if(strNum.includes('/')){
        let nums = strNum.split('/');
        if(nums[0] == '' || nums[0] == '.' || nums[1] == '' || nums[0] == '.'){
          return "invalid number"
        }
        let result = parseFloat(nums[0]) / parseFloat(nums[1]);
        //console.log(result);
        return result;
      }else{
        if(strNum == '' || strNum == '.'){
          return "invalid number"
        }
        let result = parseFloat(strNum);
        //console.log(result);
        return result;
      }
      
    }else{
      //console.log("invalid number");
      return "invalid number";
    }    

  };
  
  this.getUnit = function(input) {
    var result;
    if(!input.match(extractChars)){
      console.log("invalid unit");
      return "invalid unit";
    }
    let str = input.match(extractChars)[0];
    str = str.toLowerCase();
    //console.log("str", str);
    switch(str){
      case 'mi':
      case 'km':
      case 'lbs':
      case 'kg':
      case 'gal':
      case 'l':
        //console.log(str);
        return str;
      default:
        //console.log("invalid unit");
        return "invalid unit";
    }
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    //console.log("initUnit", initUnit);
    switch(initUnit){
      case 'mi':
        result = "km";
        break;
      case 'km':
        result = "mi";
        break;
      case 'lbs':
        result = "kg";
        break;
      case 'kg':
        result = "lbs";
        break;
      case 'gal':
        result = "l";
        break;
      case 'l':
        result = "gal";
        break;
      default:
        result = "invalid unit"
    }
    //console.log(result);
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    //console.log("initUnit", initUnit);
    switch(unit){
      case 'mi':
        result = "miles";
        break;
      case 'km':
        result = "kilometers";
        break;
      case 'lbs':
        result = "pounds";
        break;
      case 'kg':
        result = "kilograms";
        break;
      case 'gal':
        result = "gallons";
        break;
      case 'l':
        result = "liters";
        break;
      default:
        result = "invalid unit"
    }
    //console.log(result);
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    //console.log("initUnit", initUnit);
    switch(initUnit){
      case 'mi':
        result = initNum * miToKm;
        break;
      case 'km':
        result = initNum / miToKm;
        break;
      case 'lbs':
        result = initNum * lbsToKg;
        break;
      case 'kg':
        result = initNum / lbsToKg;
        break;
      case 'gal':
        result = initNum * galToL;
        break;
      case 'l':
        result = initNum / galToL;
        break;
      default:
        result = "invalid unit"
    }
    //console.log(result);
    return parseFloat(result.toFixed(5));
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return initNum + " " + this.spellOutUnit(initUnit) + " converts to " + returnNum + " " + this.spellOutUnit(returnUnit);
  };
  
}

module.exports = ConvertHandler;
