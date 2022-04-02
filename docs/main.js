
function draw_chart(){

    var xValues = ["Republican", "Democrat"];
    var yValues = [usd_balance(REPUBLICAN_ADDRESS), usd_balance(DEMOCRAT_ADDRESS)];
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

function main(){
    draw_chart();

    $('#republican_address').html(REPUBLICAN_ADDRESS);
    $('#democrat_address').html(DEMOCRAT_ADDRESS);
}

let DEMOCRAT_ADDRESS = "0x01a9609b209f92e78fd1e62cb75d0fd190e725e6";
let REPUBLICAN_ADDRESS = "0xecbda50297630d346c0e0a7882865e379f747914";

$('document').ready(main);