describe('test for payments with setup and tear-down values', () => {
  beforeEach(() => {
    billAmtInput.value = 100
    tipAmtInput.value = 20
  })

  it('should add a current payment object to allPayments object when submitPaymentInfo is called', () => {
    submitPaymentInfo()
    // make sure there is 1 object added to allPayments
    expect(Object.keys(allPayments).length.toEqual(1))
    //make sure bill amount is 100
    expect(allPayments['payment1'].billAmt).toEqual('100')
    // make sure tip amount is 20
    expect(allPayments['payment1'].tipAmt).toEqual('20')
    // make sure tip percent is 20
    expect(allPayments['payment1'].tipPercent).toEqual('20')
  })

  it('should not create a payment if input is empty when submitPaymentInfo is called', () => {
    billAmtInput.value = ''
    submitPaymentInfo()
    expect(Object.keys(allPayments).length).toEqual(0)
  })

  it('should update the paymentTable elements when appendPaymentTable is called', () => {
    let curPayment = createCurPayment()
    allPayments['payment1'] = curPayment
    appendPaymentTable(curPayment)
    let tableElements = document.querySelectorAll('#paymentTable tbody tr td')
    expect(tableElements[0].innerText).toEqual('$100')
    expect(tableElements[1].innerText).toEqual('$20')
    expect(tableElements[3].innerText).toEqual('20%')
  })

  it('should create new payment object when createCurPayment is called', () => {
    let newPayment = {
      billAmt: '100',
      tipAmt: '20',
      tipPercent: '20',
    }
    expect(curPayment).toEqual(newPayment)
  })

  it('should not create a new payment if input is empty when createCurPayment() is called', () => {
    billAmtInput.value = ''
    tipAmtInput.value = ''
    let curPayment = createCurPayment()
    expect(curPayment).toEqual(undefined)
  })

  afterEach(() => {
    billAmtInput.value = ''
    tipAmtInput.value = ''
    paymentTbody.innerHTML = ''
    summaryTds[0].innerHTML = ''
    summaryTds[1].innerHTML = ''
    summaryTds[2].innerHTML = ''
    serverTbody.innerHTML = ''
    paymentId = 0
    allPayments = {}
  })
})
