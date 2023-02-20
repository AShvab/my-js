const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
  };
  
  const account = {
    balance: 0,
    transactions: [],
  
    createTransaction(amount, type) {  
      const transaction = { amount, type, id: this.transactions.length };
  
      return transaction;
    },
  
    // getBalance() {},
  
    // getBalance: function () {}  
    deposit(amount) {
      this.balance += amount;
  
      const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
  
      this.transactions.push(transaction);
    },
  
    // withdraw(amount) {
    //   if (amount > this.balance) {
    //     console.log(`зняття ${amount} не можливе - недостатньо коштів`);
    //   } else {
    //     this.balance -= amount;
  
    //     const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
  
    //     this.transactions.push(transaction);
    //   }
    // },
  
    withdraw(amount) {
      if (amount > this.balance) {
        console.log(`зняття ${amount} не можливе - недостатньо коштів`);
        return;
      }
  
      this.balance -= amount;
  
      const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
  
      this.transactions.push(transaction);
    },
  };
  
//   console.log(account);
  
//   account.deposit(10000);
  
//   account.deposit(50000);
  
//   account.withdraw(30000);
  
//   account.withdraw(45000);
  
//   console.log(account);
