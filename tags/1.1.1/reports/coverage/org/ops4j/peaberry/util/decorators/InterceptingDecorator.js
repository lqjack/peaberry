var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"id":992,"sl":41,"methods":[{"sl":48,"el":58,"sc":3},{"sl":155,"el":163,"sc":3},{"sl":165,"el":167,"sc":3}],"el":168,"name":"InterceptingDecorator"},{"id":1000,"sl":61,"methods":[{"sl":67,"el":69,"sc":5},{"sl":71,"el":89,"sc":5},{"sl":91,"el":92,"sc":5},{"sl":94,"el":113,"sc":5},{"sl":115,"el":152,"sc":5},{"sl":122,"el":124,"sc":9},{"sl":126,"el":128,"sc":9},{"sl":130,"el":132,"sc":9},{"sl":134,"el":136,"sc":9},{"sl":138,"el":150,"sc":9}],"el":153,"name":"InterceptingDecorator.ProxyImport"}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_3":{"methods":[{"sl":71},{"sl":91},{"sl":94},{"sl":115},{"sl":122},{"sl":126},{"sl":130},{"sl":134},{"sl":138},{"sl":155}],"name":"testServiceInterception","statements":[{"sl":74},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":80},{"sl":81},{"sl":84},{"sl":88},{"sl":96},{"sl":98},{"sl":99},{"sl":104},{"sl":105},{"sl":108},{"sl":111},{"sl":119},{"sl":123},{"sl":127},{"sl":131},{"sl":135},{"sl":140},{"sl":142},{"sl":143},{"sl":146},{"sl":148},{"sl":156},{"sl":159},{"sl":160},{"sl":162}],"pass":true},"test_73":{"methods":[{"sl":48}],"name":"testMissingInterceptor","statements":[{"sl":51},{"sl":52},{"sl":53},{"sl":55},{"sl":56}],"pass":true},"test_18":{"methods":[{"sl":48}],"name":"configure","statements":[{"sl":51},{"sl":52},{"sl":53},{"sl":55}],"pass":true}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [73, 18], [], [], [73, 18], [73, 18], [73, 18], [], [73, 18], [73], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [3], [], [], [3], [3], [3], [3], [3], [], [3], [3], [], [], [3], [], [], [], [3], [], [], [3], [], [], [3], [], [3], [], [3], [3], [], [], [], [], [3], [3], [], [], [3], [], [], [3], [], [], [], [3], [], [], [], [3], [], [], [3], [3], [], [], [3], [3], [], [], [3], [3], [], [], [3], [3], [], [], [3], [], [3], [], [3], [3], [], [], [3], [], [3], [], [], [], [], [], [], [3], [3], [], [], [3], [3], [], [3], [], [], [], [], [], []]