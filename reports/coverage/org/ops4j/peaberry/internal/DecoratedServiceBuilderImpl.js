var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"id":310,"sl":43,"methods":[{"sl":57,"el":59,"sc":3},{"sl":61,"el":64,"sc":3},{"sl":66,"el":69,"sc":3},{"sl":71,"el":74,"sc":3},{"sl":76,"el":79,"sc":3},{"sl":81,"el":100,"sc":3},{"sl":87,"el":98,"sc":7},{"sl":102,"el":121,"sc":3},{"sl":108,"el":119,"sc":7},{"sl":123,"el":128,"sc":3},{"sl":130,"el":136,"sc":3}],"el":137,"name":"DecoratedServiceBuilderImpl"}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_4":{"methods":[{"sl":87},{"sl":123},{"sl":130}],"name":"testWiring","statements":[{"sl":90},{"sl":91},{"sl":93},{"sl":94},{"sl":97},{"sl":124},{"sl":125},{"sl":127},{"sl":131},{"sl":135}],"pass":true},"test_0":{"methods":[{"sl":108},{"sl":123},{"sl":130}],"name":"brokenServices","statements":[{"sl":111},{"sl":112},{"sl":114},{"sl":115},{"sl":124},{"sl":125},{"sl":131},{"sl":135}],"pass":true},"test_7":{"methods":[{"sl":87},{"sl":108},{"sl":123},{"sl":130}],"name":"testWiring","statements":[{"sl":90},{"sl":91},{"sl":93},{"sl":94},{"sl":111},{"sl":112},{"sl":114},{"sl":115},{"sl":124},{"sl":127},{"sl":131},{"sl":135}],"pass":true}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [7, 4], [], [], [7, 4], [7, 4], [], [7, 4], [7, 4], [], [], [4], [], [], [], [], [], [], [], [], [], [], [7, 0], [], [], [7, 0], [7, 0], [], [7, 0], [7, 0], [], [], [], [], [], [], [], [7, 4, 0], [7, 4, 0], [4, 0], [], [7, 4], [], [], [7, 4, 0], [7, 4, 0], [], [], [], [7, 4, 0], [], []]
