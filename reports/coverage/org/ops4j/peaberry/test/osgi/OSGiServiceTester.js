var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"id":789,"sl":37,"methods":[{"sl":48,"el":50,"sc":3},{"sl":52,"el":74,"sc":3},{"sl":59,"el":65,"sc":7},{"sl":76,"el":78,"sc":3},{"sl":80,"el":85,"sc":3},{"sl":87,"el":90,"sc":3},{"sl":92,"el":97,"sc":3},{"sl":99,"el":114,"sc":3}],"el":115,"name":"OSGiServiceTester"},{"id":789,"sl":39,"methods":[],"el":41,"name":"OSGiServiceTester.SimpleService"}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_3":{"methods":[{"sl":52},{"sl":59},{"sl":80},{"sl":87},{"sl":99}],"name":"checkRanking","statements":[{"sl":54},{"sl":55},{"sl":56},{"sl":58},{"sl":61},{"sl":62},{"sl":68},{"sl":71},{"sl":73},{"sl":81},{"sl":82},{"sl":84},{"sl":88},{"sl":89},{"sl":100},{"sl":101},{"sl":102},{"sl":103},{"sl":104},{"sl":111},{"sl":113}],"pass":true},"test_15":{"methods":[{"sl":48},{"sl":52},{"sl":59},{"sl":76},{"sl":80},{"sl":87},{"sl":92}],"name":"stickyService","statements":[{"sl":49},{"sl":54},{"sl":55},{"sl":56},{"sl":58},{"sl":61},{"sl":62},{"sl":64},{"sl":68},{"sl":71},{"sl":73},{"sl":77},{"sl":81},{"sl":82},{"sl":84},{"sl":88},{"sl":89},{"sl":93},{"sl":94}],"pass":true},"test_18":{"methods":[{"sl":48},{"sl":52},{"sl":59},{"sl":80},{"sl":99}],"name":"brokenServices","statements":[{"sl":49},{"sl":54},{"sl":55},{"sl":56},{"sl":58},{"sl":61},{"sl":62},{"sl":68},{"sl":71},{"sl":73},{"sl":81},{"sl":82},{"sl":84},{"sl":100},{"sl":101},{"sl":113}],"pass":true}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [18, 15], [18, 15], [], [], [3, 18, 15], [], [3, 18, 15], [3, 18, 15], [3, 18, 15], [], [3, 18, 15], [3, 18, 15], [], [3, 18, 15], [3, 18, 15], [], [15], [], [], [], [3, 18, 15], [], [], [3, 18, 15], [], [3, 18, 15], [], [], [15], [15], [], [], [3, 18, 15], [3, 18, 15], [3, 18, 15], [], [3, 18, 15], [], [], [3, 15], [3, 15], [3, 15], [], [], [15], [15], [15], [], [], [], [], [3, 18], [3, 18], [3, 18], [3], [3], [3], [], [], [], [], [], [], [3], [], [3, 18], [], []]
