function wallet(){
    let bal=0;
    return{
        addmoney:function(amount){
            bal+=amount;
            console.log(`added ${amount}.newbalance:${bal}`);
        },
        checkbal:function()
        {
            console.log(`currentbal:${bal}`);
                return bal;
        
    }
}}
let mywallet=wallet();
mywallet.addmoney(500);
mywallet.addmoney(600);
mywallet.checkbal();
