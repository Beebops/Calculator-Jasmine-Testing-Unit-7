// accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects
function sumPaymentTotal(type) {
  let total = 0

  for (let key in allPayments) {
    let payment = allPayments[key]

    total += Number(payment[type])
  }

  return total
}

// converts the bill and tip amount into a tip percent
function calculateTipPercent(billAmt, tipAmt) {
  return Math.round(100 / (billAmt / tipAmt))
}

// expects a table row element, appends a newly created td element from the value
function appendTd(tr, value) {
  let newTd = document.createElement('td')
  newTd.innerText = value

  tr.append(newTd)
}

// add a delete button to each new tr element created
function appendDeleteBtn(tr, type) {
  let deleteTd = document.createElement('td')
  deleteTd.className = 'deleteBtn'
  deleteTd.innerText = 'X'
  deleteTd.addEventListener('click', removeElement)
  tr.append(deleteTd)
}

function removeElement(e) {
  //closest property
  // the closest ancestor of that element that is a tr
  let element = e.target.closest('tr')
  // delete keyword removes a property from an obj
  // removes serverId property which is an obj itself
  // so it will delete that obj
  delete allServers[element.id]
  //parentNode property
  // remove the child element of the parent
  element.parentNode.removeChild(element)
  updateServerTable()
}
