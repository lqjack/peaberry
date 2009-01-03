var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"id":1200,"sl":42,"methods":[{"sl":51,"el":72,"sc":3},{"sl":55,"el":59,"sc":7},{"sl":61,"el":64,"sc":7},{"sl":66,"el":69,"sc":7},{"sl":74,"el":116,"sc":3}],"el":117,"name":"ServiceInjectionTests"}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_11":{"methods":[{"sl":55},{"sl":61},{"sl":66}],"name":"testServiceExports","statements":[{"sl":57},{"sl":58},{"sl":63},{"sl":68}],"pass":true},"test_16":{"methods":[{"sl":55},{"sl":66},{"sl":74}],"name":"testServiceInjection","statements":[{"sl":57},{"sl":58},{"sl":68},{"sl":75},{"sl":77},{"sl":79},{"sl":80},{"sl":81},{"sl":83},{"sl":85},{"sl":86},{"sl":87},{"sl":89},{"sl":91},{"sl":92},{"sl":93},{"sl":94},{"sl":96},{"sl":98},{"sl":99},{"sl":100},{"sl":102},{"sl":104},{"sl":105},{"sl":106},{"sl":107},{"sl":109},{"sl":110},{"sl":114},{"sl":115}],"pass":true},"test_14":{"methods":[{"sl":55},{"sl":66}],"name":"testDirectServiceInjection","statements":[{"sl":57},{"sl":58},{"sl":68}],"pass":true},"test_15":{"methods":[{"sl":51}],"name":"configure","statements":[{"sl":53},{"sl":71}],"pass":true},"test_6":{"methods":[{"sl":55}],"name":"testDecoratedServiceInjection","statements":[{"sl":57},{"sl":58}],"pass":true}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [15], [], [15], [], [16, 14, 11, 6], [], [16, 14, 11, 6], [16, 14, 11, 6], [], [], [11], [], [11], [], [], [16, 14, 11], [], [16, 14, 11], [], [], [15], [], [], [16], [16], [], [16], [], [16], [16], [16], [], [16], [], [16], [16], [16], [], [16], [], [16], [16], [16], [16], [], [16], [], [16], [16], [16], [], [16], [], [16], [16], [16], [16], [], [16], [16], [], [], [], [16], [16], [], []]
