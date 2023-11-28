describe("Servers test (with setup and tear-down)", function () {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = "Alice";
  });

  it("should add a new server to allServers on submitServerInfo()", function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers["server" + serverId].serverName).toEqual("Alice");
  });

  it("should not add servers if input is empty", function () {
    serverNameInput.value = "";
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(0);
  });

  it("should update server table using updateServerTable()", function () {
    submitServerInfo();
    updateServerTable();

    let tds = document.querySelectorAll("#serverTable td");
    expect(tds.length).toEqual(2);
    expect(tds[0].innerText).toEqual("Alice");
    expect(tds[1].innerText).toEqual("$0.00");
  });

  afterEach(function () {
    serverTbody.innerHTML = "";
    serverId = 0;
    allServers = {};
    // teardown logic
  });
});
