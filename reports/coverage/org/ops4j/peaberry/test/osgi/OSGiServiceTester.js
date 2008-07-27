var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"sl":37,"el":115,"methods":[{"sl":48,"el":50,"sc":3},{"sl":52,"el":74,"sc":3},{"sl":59,"el":65,"sc":7},{"sl":76,"el":78,"sc":3},{"sl":80,"el":85,"sc":3},{"sl":87,"el":90,"sc":3},{"sl":92,"el":97,"sc":3},{"sl":99,"el":114,"sc":3}],"name":"OSGiServiceTester","id":711},{"sl":39,"el":41,"methods":[],"name":"OSGiServiceTester.SimpleService","id":711}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_17":{"statements":[{"sl":54},{"sl":55},{"sl":56},{"sl":58},{"sl":61},{"sl":62},{"sl":68},{"sl":71},{"sl":73},{"sl":81},{"sl":82},{"sl":84},{"sl":88},{"sl":89},{"sl":100},{"sl":101},{"sl":102},{"sl":103},{"sl":104},{"sl":111},{"sl":113}],"pass":true,"methods":[{"sl":52},{"sl":59},{"sl":80},{"sl":87},{"sl":99}],"name":"checkRanking"},"test_16":{"statements":[{"sl":49},{"sl":54},{"sl":55},{"sl":56},{"sl":58},{"sl":61},{"sl":62},{"sl":64},{"sl":68},{"sl":71},{"sl":73},{"sl":77},{"sl":81},{"sl":82},{"sl":84},{"sl":88},{"sl":89},{"sl":93},{"sl":94}],"pass":true,"methods":[{"sl":48},{"sl":52},{"sl":59},{"sl":76},{"sl":80},{"sl":87},{"sl":92}],"name":"stickyService"},"test_3":{"statements":[{"sl":49},{"sl":54},{"sl":55},{"sl":56},{"sl":58},{"sl":61},{"sl":62},{"sl":68},{"sl":71},{"sl":73},{"sl":81},{"sl":82},{"sl":84},{"sl":100},{"sl":101},{"sl":113}],"pass":true,"methods":[{"sl":48},{"sl":52},{"sl":59},{"sl":80},{"sl":99}],"name":"brokenServices"}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [16, 3], [16, 3], [], [], [16, 17, 3], [], [16, 17, 3], [16, 17, 3], [16, 17, 3], [], [16, 17, 3], [16, 17, 3], [], [16, 17, 3], [16, 17, 3], [], [16], [], [], [], [16, 17, 3], [], [], [16, 17, 3], [], [16, 17, 3], [], [], [16], [16], [], [], [16, 17, 3], [16, 17, 3], [16, 17, 3], [], [16, 17, 3], [], [], [16, 17], [16, 17], [16, 17], [], [], [16], [16], [16], [], [], [], [], [17, 3], [17, 3], [17, 3], [17], [17], [17], [], [], [], [], [], [], [17], [], [17, 3], [], []]