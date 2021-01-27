// calculator object

let calculator = {
    firstNumber: 0,
    secondNumber: 0,
    numberArray: [],
    
    
    // addition function
    add: function(numberArray){
        let add = 0;
        numberArray.forEach( numberArray => {
            add = add + parseInt(numberArray);
            }
        )
        return add;
    },
    
    // substraction function
    sub: function(number1, number2){
        return (parseInt(number1) - parseInt(number2));
    },


    // multiplication function
    mul: function(numberArray){
        let multi = 1;
        numberArray.forEach( numberArray => {
            multi = multi * parseInt(numberArray);
            }
        )
        return multi;
    },

    //division function

    divide: function(number1, number2){

        if (parseInt(this.secondNumber) != 0){
            return Number.parseFloat(number1 / number2).toFixed(2);
        }

        else{
            console.log(" no number is divisble by 0. ");
        }
        
    },

    // calculate based on the choosen operation
    calculate: function(choosen){
        let answer;
    
        if (choosen == "add"){
            answer = calculator.add(calculator.numberArray);
            
            
        }

        if (choosen == "sub"){
            answer = this.sub(this.firstNumber, this.secondNumber);
            
        }

        if (choosen == "mul"){
            answer = calculator.mul(calculator.numberArray);
            
        }

        if (choosen == "div"){
            answer = this.divide(this.firstNumber, this.secondNumber);
            
        }

        return answer;

    }




}

let choosen;



(function (){

    let cont = "yes";

    while(cont == "yes"){

        var arrayNumber;

        // accept enteries

        choosen = prompt(" enter your desired operation in this form (add, sub, mul, div)");

        if (choosen == "add" || choosen == "mul"){
            arrayNumber = prompt(" enter the number of elements you want to operate with.");
        
        }

        if (choosen == "sub" || choosen == "div"){
            calculator.firstNumber = prompt("enter the first number: ");
            calculator.secondNumber = prompt("Enter the second number: ");
        }

        // insert the value of the array

        for (let i = 0; i < parseInt(arrayNumber); i++){
            calculator.numberArray[i] = prompt(" number " + (i + 1));
        }

        console.log("*********************************************")

        console.log(" the answer = " + calculator.calculate(choosen));

        console.log("*********************************************")

        cont = prompt("would you like to continue (yes or no)");

    }

})();







