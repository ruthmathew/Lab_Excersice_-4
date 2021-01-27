// banking system object

let banking = {

    account1: 60.0,
    account1Number: 1,
    account2: 60.0,
    account2Number: 2,
    amount: 0,
    accountName: "",
    // account1Name: "account 1",
    // account2Name: "account 2",
    to: "",


    // diposite function

    deposit: function(amount, accountName, accountNumber){
        let depo;
        if ((accountName == "account 1") && (this.account1Number == parseInt(accountNumber))){
            this.account1 = this.account1 + parseFloat(amount);
            depo = (" you have sucessfully deposited " + amount +" birr to account 1");

        }

        if ((accountName == "account 2") && (this.account2Number == parseInt(accountNumber))){
            this.account2 = this.account1 + parseFloat(amount);
            depo = (" you have sucessfully deposited " + amount +" birr to account 2");

        }

        return depo;
    },

    // withdrawal function

    withdrawal: function(amount, accountName, accountNumber){
        let withd1 = this.account1 - parseFloat(amount);
        let withd2 = this.account2 - parseFloat(amount);
        let withdraw;

        if ((this.account1 < 50) || (this.account2 < 50)){
            withdraw = (" your account have insufichient balance.");
        }

        else if ((withd1 < 50) || (withd2 < 50)){
            withdraw = (" you can not withdraw this much ammount. ( your balance needs to be atleast 50 birr)");
        }

        else {
            if ((accountName == "account 1") && (this.account1Number == parseInt(accountNumber))){
                this.account1 = withd1;
                withdraw = (" you have sucessfully withdrawed " + amount +" birr to account 1");

            }

            if ((accountName == "account 2") && (this.account2Number ==parseInt(accountNumber))){
                this.account2 = withd2;
                withdraw = (" you have sucessfully withdrawed " + amount +" birr to account 2");

            }
        }

        return withdraw;
    },
    
    // check balance function

    balance: function(accountName){
        let balance;
        if(accountName == "account 1"){
            balance = ("account 1 has " + this.account1 + " birr");
        }

        if(accountName == "account 2"){
            balance = ("account 2 has " + this.account2 + " birr");
        }

        return balance;

    },

    // transfer function

    transfer: function(amount, to){
        let trans;
        if(to == "1 to 2"){
            this.account1 = this.account1 - parseFloat(amount);
            this.account2 = this.account2 + parseFloat(amount);
            trans = (" you have sucessfuly transfered " + amount + " birr to account 2");
        }

        if(to == "2 to 1"){
            this.account2 = this.account2 - parseFloat(amount);
            this.account1 = this.account1 + parseFloat(amount);
            trans = (" you have sucessfuly transfered " + amount + " birr to account 1");
        }

        return trans;
    },

    // banker function

    banker: function(choosen){
        let service;
        if (choosen == "depo"){
            service = this.deposit(this.amount, this.accountName, this.accountNumber);
        }

        if (choosen == "with"){
            service = this.withdrawal(this.amount, this.accountName, this.accountNumber);
        }

        if (choosen == "bal"){
            service = this.balance(this.accountName);
        }

        if (choosen == "trans"){
            service = this.transfer(this.amount, this.to);
        }

        return service;
    }
    


}

let choosen;

//
(function (){

    let cont = "yes";

    while(cont == "yes"){

        // accept enteries
        choosen = prompt(" enter your desired application (depo, with, bal, trans) ");

        if (choosen == "depo"){
            banking.amount = prompt(" enter the amount of money to deposit: ");
            banking.accountName = prompt(" enter the account's name");
            banking.accountNumber = prompt(" enter the account's number");
        }

        else if (choosen == "with"){
            banking.amount = prompt(" enter the amount of money to withdraw: ");
            banking.accountName = prompt(" enter the account's name");
            banking.accountNumber = prompt(" enter the account's number");
        }

        else if (choosen == "bal"){
            banking.accountName = prompt(" enter the account's name");
        }

        else if (choosen == "trans") {
            banking.amount = prompt(" enter the amount to transfer: ");
            banking.to = prompt(" enter the  transfer direction: ");
        }


        console.log("*********************************************")

        console.log(banking.banker(choosen));

        console.log("*********************************************")

        cont = prompt("would you like to continue (yes or no)");

    }

    

})();







