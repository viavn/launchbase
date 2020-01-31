const user = {
    name: 'Mariana',
    transactions: [],
    balance: 0
}

function createTransaction(transaction) {
    addUserTransaction(transaction)

    if (transaction.type === 'credit') {
        creditBalance(transaction.value)
    } else {
        debitBalance(transaction.value)
    }
}

function addUserTransaction(transaction) {
    user.transactions.push(transaction)
}

function creditBalance(credit) {
    user.balance += credit
}

function debitBalance(credit) {
    user.balance -= credit
}

function getHigherTransactionByType(transactionType) {
    let value = 0

    for (const transaction of user.transactions) {
        if (transaction.type === transactionType) {
            value = transaction.value > value ? transaction.value : value
        }
    }

    return { type: transactionType, value }
}

function getAverageTransactionValue() {
    let sum = 0

    for (const value of user.transactions) {
        sum += value.value
    }

    return (sum / user.transactions.length).toFixed(2)
}

function getTransactionsCount() {
    const credit = getTransactionsCountByType('credit')
    const debit = getTransactionsCountByType('debit')

    return { credit, debit }
}

function getTransactionsCountByType(transactionType) {
    let sum = 0

    for (const transaction of user.transactions) {
        if (transaction.type === transactionType) {
            sum++
        }
    }

    return sum
}

createTransaction({ type: 'credit', value: 50 })
createTransaction({ type: 'credit', value: 120 })
createTransaction({ type: 'debit', value: 80 })
createTransaction({ type: 'debit', value: 30 })

console.log(user.balance)

console.log(getHigherTransactionByType('credit'))
console.log(getHigherTransactionByType('debit'))

console.log(getAverageTransactionValue())

console.log(getTransactionsCount())