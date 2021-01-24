let personalProfile = {
    weight: "",
    height: "",
    bmi: 0,

    calcBmi: function(weight, height){
        let tempBmi = Number(this.weight / Math.pow(this.height, 2)).toFixed(1)
        return tempBmi   
    },

    checkBmi: function(){
        let tempBmi = this.calcBmi()
        let bmiValue = ""

        if(tempBmi < 18.5){
            bmiValue = "Underweight"
        }

        if(18.5 < tempBmi && tempBmi < 24.9){
            bmiValue = " Normal"
        }

        if(25 < tempBmi && tempBmi < 29.9){
            bmiValue = " Overweight"
        }

        if(tempBmi > 30){
            bmiValue = " Obese"
        }

        
    }

}



