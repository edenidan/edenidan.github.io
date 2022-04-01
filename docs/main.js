function main(){
    // Read polls.json file.
    // Use ETH api to retrieve the balance of both wallets.
    // Init the var charts.


    var xValues = ["Red", "Blue"];
    var yValues = [55, 49, 44, 24, 15];
    var barColors = ["red", "blue"];

    new Chart("chart", {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
        backgroundColor: barColors,
        data: yValues
        }]
    },
    options: {
        legend: {display: false},
        title: {
        display: true,
        text: "Current results"
        }
    }
    });
}

$('document').ready(main);