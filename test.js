const sey = require('./')
const assert = require('assert')

let totalTest = 0

function test(arg) {
  try {
    console.log(`"${arg}" test ediliyor...`)
    const fixed = sey.fix(arg)
    console.log("fixed: ", fixed);
    if (fixed) {
        totalTest += 1
    }
  } catch (e) {
    console.error(e.message)
  }
}

test('Birşey')
test('Herşey vatan için.')
test('Şeyma Subaşı')
test("Herhangibirşey iste.")

console.log(`\nToplam ${totalTest} test çalıştı`);