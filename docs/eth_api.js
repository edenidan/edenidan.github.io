function usd_balance(address){

    return 23 + Math.random()*20;
    
    $.get(`https://thingproxy.freeboard.io/fetch/https://www.blockchain.com/eth/address/${address}`, (response) => {
        console.log(response);
        // TODO: solve the cros problem
    });
}
