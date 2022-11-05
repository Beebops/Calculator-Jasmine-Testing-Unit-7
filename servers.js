let serverNameInput = document.getElementById('serverName')
let serverForm = document.getElementById('serverForm')

let serverTbody = document.querySelector('#serverTable tbody')

let allServers = {}
let serverId = 0

serverForm.addEventListener('submit', submitServerInfo)

// create server object and add to allServers, update html and reset input
function submitServerInfo(evt) {
  if (evt) evt.preventDefault() // when running tests there is no event

  let serverName = serverNameInput.value

  // if user inputs string for server name
  // serverId is incremented to assign a unique ID to each server
  // create a server object for each server inputted
  // server1: {serverName: 'Beth}
  // server2: { serverName: 'John'}
  // allServers.server1.serverName = 'Beth'
  // allServers.server2.serverName = 'John'
  if (serverName !== '') {
    serverId++
    allServers['server' + serverId] = { serverName }

    updateServerTable()

    serverNameInput.value = ''
  }
}

// Create table row element and pass to appendTd function with input value
function updateServerTable() {
  serverTbody.innerHTML = ''

  for (let key in allServers) {
    let curServer = allServers[key]
    // curServer is allServers.server1.serverName = 'Beth'
    // assign id with the key of server1 to tr element
    let newTr = document.createElement('tr')
    newTr.setAttribute('id', key)
    // to find average tips, divide the total of all tip amounts paid by the numver of server objects
    let tipAverage = sumPaymentTotal('tipAmt') / Object.keys(allServers).length

    appendTd(newTr, curServer.serverName)
    appendTd(newTr, '$' + tipAverage.toFixed(2))
    appendDeleteBtn(newTr, 'server')

    serverTbody.append(newTr)
  }
}
