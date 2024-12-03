const numb1 = Number(prompt("inserisci il primo numero"));
const numb2 = Number(prompt("inserisci il secondo numero"));

if (numb1 > numb2) {
    alert(numb1)
} else if (numb2 > numb1) {
    alert(numb2)
} else {
    alert("i numeri sono uguali")
}