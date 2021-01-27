// bmi checker object

let personalProfile = {
    weight: "",
    height: "",
    bmi: 0,

    // Bmi calculator function

    calcBmi: function(weight, height){
        let tempBmi = Number.parseFloat(this.weight / Math.pow(this.height, 2)).toFixed(2);
        return tempBmi;   
    },

    // bmi checker function

    checkBmi: function(){
        let tempBmi = this.calcBmi();
        let bmiValue = "";

        if(tempBmi < 18.5){
            bmiValue = "Underweight";
        }

        if(18.5 < tempBmi && tempBmi < 24.9){
            bmiValue = " Normal";
        }

        if(25 < tempBmi && tempBmi < 29.9){
            bmiValue = " Overweight";
        }

        if(tempBmi > 30){
            bmiValue = " Obese";
        }

        return bmiValue;

        
    }

}

// Receive the values from input and assign to object properties

personalProfile.weight = prompt("insert your weight in kg: ");
personalProfile.height = prompt("insert your height in meter: ");


// display the result using self Ivoking function

(function(){

    personalProfile.bmi = personalProfile.calcBmi();

    console.log("**************************************************************");
    console.log("your Bmi value is " + personalProfile.bmi + ".");
    console.log("your bmi status is  " + personalProfile.checkBmi() + ".");
    console.log("**************************************************************");

})();

