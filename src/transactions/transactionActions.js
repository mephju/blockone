export const creditAction = {
  type:  'credit',
  create({source, destination, amount, currency}) {
    return {
      type: creditAction.type,
      payload: {
        source,
        destination,
        amount: Number(amount),
        currency,
      }

    }
  }
}

const transactionActions = {
  creditAction,
}

export default transactionActions
