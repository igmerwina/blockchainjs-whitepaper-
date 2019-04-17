const Transaction = require('../wallet/transaction')

class TransactionPool {
    constructor(){
        this.transactions = [] // collection of transaction 
    }

    updateOrAddTransaction(transaction){  
        // check transaksi uda ada / terjadi apa belum 
        let transactionWithId = this.transactions.find(t => t.id === transaction.id)

        if (transactionWithId){
            // change the element in array 
            this.transactions[this.transactions.indexOf(transactionWithId)] = transaction 
        } else {
            this.transactions.push(transaction)
        }
    }
    
    existingTransaction(address){
        return this.transactions.find(t => t.input.address === address)
    }

    validTransactions(){
        return this.transactions.filter(transaction => {
            const outputTotal = transaction.outputs.reduce((total, output) => {
                return total + output.amount
            }, 0)

            if (transaction.input.amount !== outputTotal){
                console.log(`Invalid transaction from ${transaction.input.address}`)
                return 
            } 
            // verifiy the signature  
            if(!Transaction.verifyTransaction(transaction)){
                console.log(`Invalid signature from ${transaction.input.address}`)
                return
            }
        })

        return transaction
    }
}

module.exports = TransactionPool