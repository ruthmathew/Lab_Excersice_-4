// calculator object

let calculator = {
    firstNumber: 0,
    secondNumber: 0,
    numberArray: [],
    
    
    // addition function
    add: function(number){
        let add = 0;
        add = add + parseInt(number);
        return add;
    },

    // substraction function
    sub: function(number1, number2){
        return (number1 - number2);
    },


    // multiplication function
    multiply: function(number){
        let mul = 1;
        mul = mul * parseInt(number);
        return mul;
    },

    //division function

    divide: function(number1, number2){

        if (this.secondNumber != 0){
            return (number1 / number2);
        }

        else{
            console.log(" ni number is divisble by 0. ");
        }
        
    },

    // calculate based on the choosen operation
    calculate: function(choosen){
        let answer;
    
        if (choosen == "add"){
            answer = this.numberArray.forEach(this.add);
            
            
        }

        if (choosen == "sub"){
            answer = this.sub(this.firstNumber, this.secondNumber);
            
        }

        if (choosen == "mul"){
            answer = this.numberArray.forEach(this.mul);
            
        }

        if (choosen == "div"){
            answer = this.div(this.firstNumber, this.secondNumber);
            
        }

        return answer;

    }




}

var arrayNumber;

// accept enteries

let choosen = prompt(" enter your desired operation in this form (add, sub, mul, div)");

if (choosen == "add" || choosen == "mul"){
    arrayNumber = prompt(" enter the number of elements you want to operate with.");
    // return arrayNumber;
}

if (choosen == "sub" || choosen == "div"){
    calculator.firstNumber = prompt("enter the first number: ");
    calculator.secondNumber = prompt("Enter the second number: ");
}

// insert the value of the array

for (let i = 0; i < parseInt(arrayNumber); i++){
    calculator.numberArray[i] = prompt(" number " + i);
}

(function (){

    console.log("*********************************************")

    console.log(" the answer = " + calculator.calculate(choosen));

    console.log("*********************************************")

})();







