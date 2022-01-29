document.getElementById("diceRoll").addEventListener("pointerup", getAmount);
function getAmount(){
    var amount = document.getElementById("diceAmount").value;
    var sides = document.getElementById("diceSides").value;
    let i = 0;
    let total = 0;
    let rolls = "";

    while (i < amount) {
    var roll = Math.floor(Math.random() * sides +1);
    total+=roll;
    rolls+= roll+" | "
    document.getElementById("result").innerHTML = "Hurray You rolled "+amount+" D"+sides+".<br> This was your result.<br><br> | "+rolls+"<br><br><u>TOTAL</u><br>"+total;
    i++}
    document.getElementById("result").className = "result";
}
