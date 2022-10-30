describe('should calculate the montly payment', () => {
  it('should calculate the monthly rate correctly', function () {
    expect(
      calculateMonthlyPayment({ amount: 265000, years: 15, rate: 4.32 })
    ).toEqual('2002.94')
  })

  it('should return a result with 2 decimal places', function () {
    expect(
      calculateMonthlyPayment({
        amount: 265000,
        years: 15,
        rate: 4.32,
      })
    ).toBeCloseTo(2002.94, 2)
  })

  it('should return a string', () => {
    expect(
      calculateMonthlyPayment({
        amount: 265000,
        years: 15,
        rate: 4.32,
      })
    ).toBeInstanceOf(String)
  })
})
