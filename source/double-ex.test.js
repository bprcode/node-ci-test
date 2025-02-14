const double = require('./double-ex')
console.log('importing double:', double)
console.log('doubling 3:', double(3))

test('doubles 3 to 6', () => {
  expect(double(3)).toBe(6)
})

test('I am bad at math', () => {
  expect(double(2)).toBe(5)
})

test('Server is up', async () => {
  const res = await fetch('http://localhost:3000/ex')
  expect(res.ok)
  const body = await res.text()
  expect(body).toBe('new WRONG example route !!??#?? ;) 🦆🐐😺')
})