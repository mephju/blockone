export const toPartialNames = name => name
  .split('.')
  .reduce((acc, key) => {

    const a2 = acc.slice(-1)
    a2.push(key)
    acc.push(a2.join('.'))

    return acc
  }, [])

export const compose = (...fns) => param => fns.reduceRight((acc, fn) => fn(acc), param)
