class Taxi {
    constructor(taxiFare, taxiID, taxiDriver){
        this.fare = taxiFare;
        this.ID = taxiID;
        this.profit = 0;
        this.driver = taxiDriver;
    }
}

Taxi.prototype.calculate = function(amount,amountPeople){
    var gain = amountPeople * this.fare;
    this.profit += gain;
    document.getElementById("profit").innerHTML = "Profit: " + this.profit ;
    if(amount == -1)
        return (-1);
    alert ("Change $: " + (amount -(gain)));
    console.log(this.profit);

}

function getFare(event) {
    event.preventDefault();
    let driver = document.getElementById("driver").value;
    let fare = document.getElementById("fare").value;
    let taxiID = document.getElementById("taxiID").value;
    if (driver != "" && fare != "" && taxiID != ""){
        obj = new Taxi(fare, taxiID, driver);
        document.getElementById("details").innerHTML = "Route: " + taxiID + "  Driver: " + driver;
        document.getElementById("taxiFare").style.display = "none";
        document.getElementById("calculate").style.display = "block";

        console.log("object fare: " + obj.fare + " object ID: " + obj.ID);
    }

}

function getChange() {
    event.preventDefault();
    let people = document.getElementById("numOfPeople").value;
    let paid = document.getElementById("amount").value;
    if (people != "" && paid != ""){
    document. getElementById("calculate").reset();
    alert(people + " people paid an amount of " + paid);
    obj.calculate(paid, people);}
}
