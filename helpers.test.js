describe('tests utilities function with setup and tear down', () => {
  beforeEach(() => {
    billAmtInput.value = 100
    tipAmtInput.value = 20
    submitPaymentInfo()
  })

  it('should sum the total tip amount all all the payments when sumPaymentTotal is called', () => {
    billAmtInput.value = 400
    tipAmtInput.value = 80
    submitPaymentInfo()
    expect(sumPaymentTotal('tipAmt')).toEqual(120)
  })

  it('should sum the total bill amount of all the payments when sumPayment total is called', () => {
    billAmtInput.value = 400
    tipAmtInput.value = 80
    submitPaymentInfo()
    expect(sumPaymentTotal('billAmt')).toEqual(500)
  })

  it('should sum the tip percent of a single tip on calculateTipPercent function call', () => {
    expect(calculateTipPercent(200, 40)).toEqual(20)
    expect(calculateTipPercent(50, 5)).toEqual(10)
  })

  it('should render new td from the values input and append to tr element when appendTd is called', () => {
    let newTr = document.createElement('tr')
    appendTd(newTr, 'testingTr')
    expect(newTr.children.length).toEqual(1)
    expect(newTr.firstChild.innerHTML).toEqual('testingTr')
  })

  afterEach(() => {
    billAmtInput.value = ''
    tipAmtInput.value = ''
    paymentTbody.innerHTML = ''
    summaryTds[0].innerHTML = ''
    summaryTds[1].innerHTML = ''
    summaryTds[2].innerHTML = ''
    serverTBody.innerHTML = ''
    allPayments = {}
    paymentId = 0
  })
})
