let id = 1

const Transaction = {
  createFromParams(destination, source, amount, currency) {
    return {
      id: id++, destination, source, amount, createdAt: Date.now(), currency
    }
  },

  create({destination, source, amount, currency}, accounts) {
    const sourceAccount = accounts.find(a => a.id === source)
    const destinationAccount = accounts.find(a => a.id === destination)

    const description = `${sourceAccount.holder} wired ${amount} ${currency} to ${destinationAccount.holder}`

    return {
      id: id++,
      destination,
      source,
      amount,
      createdAt: Date.now(),
      currency,
      description,
    }
  },
}

export default Transaction
