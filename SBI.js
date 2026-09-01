let Account={
    holder_name:"Vishal ",
    account_number:123456789,
    account_balance:10000,
    branch:"Ghaziabad",
    deposit:function(amount){
        this.balance+=amount
    },
withdraw:function(amount){
if(this.balance>=amount){
    this.balance-=amount
    console.log("Amount withdrawn:"+amount)
}else if(this.balance<amount){
    console.log("insufficient balance")
}
},
display:function(){
    console.log("Account Holder Name:"+this.holder_name)
    console.log("Account Number:"+this.account_number)
    console.log("Account balance:"+this.account_balance)
    console.log("Branch:"+this.branch)
},
}
Account.deposit()
Account.display()