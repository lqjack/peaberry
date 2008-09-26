var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"id":384,"sl":34,"methods":[{"sl":39,"el":39,"sc":3},{"sl":41,"el":80,"sc":3},{"sl":47,"el":66,"sc":7},{"sl":53,"el":55,"sc":11},{"sl":57,"el":60,"sc":11},{"sl":62,"el":64,"sc":11},{"sl":68,"el":78,"sc":7},{"sl":82,"el":131,"sc":3},{"sl":102,"el":116,"sc":7},{"sl":118,"el":126,"sc":7},{"sl":133,"el":139,"sc":3},{"sl":141,"el":143,"sc":3}],"el":144,"name":"ServiceProxyFactory"}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_13":{"methods":[{"sl":102},{"sl":118}],"name":"testServiceTypesAndSignatures","statements":[{"sl":103},{"sl":104},{"sl":106},{"sl":107},{"sl":108},{"sl":109},{"sl":112},{"sl":115},{"sl":120},{"sl":121},{"sl":122},{"sl":123},{"sl":124}],"pass":true},"test_11":{"methods":[{"sl":47},{"sl":53},{"sl":57},{"sl":62},{"sl":68},{"sl":102},{"sl":118},{"sl":133},{"sl":141}],"name":"testServiceInjection","statements":[{"sl":48},{"sl":54},{"sl":59},{"sl":63},{"sl":70},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":77},{"sl":103},{"sl":104},{"sl":106},{"sl":107},{"sl":108},{"sl":109},{"sl":112},{"sl":113},{"sl":115},{"sl":120},{"sl":121},{"sl":122},{"sl":123},{"sl":124},{"sl":134},{"sl":135},{"sl":142}],"pass":true},"test_25":{"methods":[{"sl":47},{"sl":53},{"sl":57},{"sl":68},{"sl":102},{"sl":118},{"sl":133},{"sl":141}],"name":"testDecoratedServiceInjection","statements":[{"sl":48},{"sl":54},{"sl":59},{"sl":70},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":75},{"sl":77},{"sl":103},{"sl":104},{"sl":106},{"sl":107},{"sl":108},{"sl":109},{"sl":112},{"sl":115},{"sl":120},{"sl":121},{"sl":122},{"sl":123},{"sl":124},{"sl":134},{"sl":135},{"sl":142}],"pass":true},"test_23":{"methods":[{"sl":102}],"name":"run","statements":[{"sl":103},{"sl":104},{"sl":112},{"sl":115}],"pass":true},"test_17":{"methods":[{"sl":102}],"name":"run","statements":[{"sl":103},{"sl":104},{"sl":112},{"sl":115}],"pass":true},"test_21":{"methods":[{"sl":102},{"sl":118}],"name":"testServiceExports","statements":[{"sl":103},{"sl":104},{"sl":106},{"sl":107},{"sl":108},{"sl":109},{"sl":112},{"sl":113},{"sl":115},{"sl":120},{"sl":121},{"sl":122},{"sl":123},{"sl":124}],"pass":true},"test_14":{"methods":[{"sl":102},{"sl":118}],"name":"testDirectServiceInjection","statements":[{"sl":103},{"sl":104},{"sl":106},{"sl":107},{"sl":108},{"sl":109},{"sl":112},{"sl":115},{"sl":120},{"sl":121},{"sl":122},{"sl":123},{"sl":124}],"pass":true},"test_19":{"methods":[{"sl":82},{"sl":102},{"sl":118},{"sl":133},{"sl":141}],"name":"testServiceLookupPerformance","statements":[{"sl":95},{"sl":103},{"sl":104},{"sl":106},{"sl":107},{"sl":108},{"sl":109},{"sl":112},{"sl":115},{"sl":120},{"sl":121},{"sl":122},{"sl":123},{"sl":124},{"sl":130},{"sl":134},{"sl":135},{"sl":142}],"pass":true}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [25, 11], [25, 11], [], [], [], [], [25, 11], [25, 11], [], [], [25, 11], [], [25, 11], [], [], [11], [11], [], [], [], [], [25, 11], [], [25, 11], [25, 11], [25, 11], [25, 11], [25, 11], [25, 11], [], [25, 11], [], [], [], [], [19], [], [], [], [], [], [], [], [], [], [], [], [], [19], [], [], [], [], [], [], [23, 14, 25, 19, 21, 11, 17, 13], [23, 14, 25, 19, 21, 11, 17, 13], [23, 14, 25, 19, 21, 11, 17, 13], [], [14, 25, 19, 21, 11, 13], [14, 25, 19, 21, 11, 13], [14, 25, 19, 21, 11, 13], [14, 25, 19, 21, 11, 13], [], [], [23, 14, 25, 19, 21, 11, 17, 13], [21, 11], [], [23, 14, 25, 19, 21, 11, 17, 13], [], [], [14, 25, 19, 21, 11, 13], [], [14, 25, 19, 21, 11, 13], [14, 25, 19, 21, 11, 13], [14, 25, 19, 21, 11, 13], [14, 25, 19, 21, 11, 13], [14, 25, 19, 21, 11, 13], [], [], [], [], [], [19], [], [], [25, 19, 11], [25, 19, 11], [25, 19, 11], [], [], [], [], [], [25, 19, 11], [25, 19, 11], [], []]
