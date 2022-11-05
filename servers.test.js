describe('Servers test (with setup and tear-down)', () => {
  beforeEach(() => {
    // initialization logic
    serverNameInput.value = 'Beth'
  })

  it('should add a new server object to allServers on submitServerInfo()', () => {
    submitServerInfo()

    expect(Object.keys(allServers).length).toEqual(1)
    expect(allServers['server' + serverId].serverName).toEqual('Beth')
  })

  it('should not add a new server object if input is empty', () => {
    serverNameInput.value = ''
    submitServerInfo()
    // number of server objects in allServers should be 0
    expect(Object.keys(allServers).length).toEqual(0)
  })

  it('should update the servertable when updateServerTable is called', () => {
    submitServerInfo()
    updateServerTable()
    // grab all the child elements in the table elements
    let tableElements = document.querySelectorAll('#serverTable tbody tr td')
    expect(tableElements[0].innerText).toEqual('Beth')
    expect(tableElements[1].innerText).toEqual('$0.00')
  })

  afterEach(function () {
    serverTbody.innerHTML = ''
    allServers = {}
    serverId = 0
  })
})
