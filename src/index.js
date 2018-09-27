// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!  
    // Return an object containing the minimum number of coins needed to make change
const H=50, Q=25, D=10, N=5, P=1;
var res = {};
if(currency>=10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};
if(currency<=0) return {};
else {
let half = Math.floor(currency/H);
currency = currency - (half*H);
if(half > 0) res.H = half;

let quaters = Math.floor(currency/Q);
currency = currency - (quaters*Q);
if(quaters > 0) res.Q = quaters;

let dimes = Math.floor(currency/D);
currency = currency - (dimes*D);
if(dimes > 0) res.D = dimes;

let nick = Math.floor(currency/N);
currency = currency - (nick*N);
if(nick > 0) res.N = nick;

let penn = Math.floor(currency/P);
currency = currency - (penn*P);
if(penn > 0) res.P = penn;
}
return res;

//if(currency==500) return {"H":10};
//if(currency==50) return {"H":1};
//if(currency==102) return {"H":2,"P":2};
}
