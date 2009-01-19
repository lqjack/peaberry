var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"id":233,"sl":36,"methods":[{"sl":45,"el":50,"sc":3},{"sl":52,"el":54,"sc":3},{"sl":56,"el":58,"sc":3},{"sl":60,"el":62,"sc":3},{"sl":64,"el":66,"sc":3},{"sl":68,"el":76,"sc":3},{"sl":78,"el":80,"sc":3},{"sl":82,"el":87,"sc":3},{"sl":89,"el":94,"sc":3}],"el":95,"name":"ServiceSettings"}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1":{"methods":[{"sl":45},{"sl":64},{"sl":68}],"name":"configure","statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":49},{"sl":65},{"sl":71},{"sl":72}],"pass":true},"test_3":{"methods":[{"sl":45},{"sl":56},{"sl":68}],"name":"configure","statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":49},{"sl":57},{"sl":71},{"sl":72}],"pass":true},"test_26":{"methods":[{"sl":78},{"sl":82}],"name":"testServiceLookupPerformance","statements":[{"sl":79},{"sl":83},{"sl":84},{"sl":86}],"pass":true},"test_0":{"methods":[{"sl":45},{"sl":52},{"sl":64},{"sl":68}],"name":"configure","statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":49},{"sl":53},{"sl":65},{"sl":71},{"sl":72}],"pass":true},"test_17":{"methods":[{"sl":78},{"sl":82}],"name":"testDecoratedServiceInjection","statements":[{"sl":79},{"sl":83},{"sl":84}],"pass":true},"test_14":{"methods":[{"sl":45},{"sl":68}],"name":"configure","statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":49},{"sl":71},{"sl":72}],"pass":true},"test_15":{"methods":[{"sl":45},{"sl":52},{"sl":64},{"sl":68}],"name":"configure","statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":49},{"sl":53},{"sl":65},{"sl":71},{"sl":72}],"pass":true},"test_22":{"methods":[{"sl":45},{"sl":68}],"name":"configure","statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":49},{"sl":71},{"sl":72}],"pass":true},"test_5":{"methods":[{"sl":78},{"sl":82},{"sl":89}],"name":"testDirectServiceInjection","statements":[{"sl":79},{"sl":83},{"sl":84},{"sl":90},{"sl":91}],"pass":true},"test_7":{"methods":[{"sl":45},{"sl":68}],"name":"configure","statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":49},{"sl":71},{"sl":72}],"pass":true},"test_19":{"methods":[{"sl":45},{"sl":60},{"sl":68}],"name":"configure","statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":49},{"sl":61},{"sl":71},{"sl":72}],"pass":true}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [14, 3, 1, 22, 7, 19, 15, 0], [14, 3, 1, 22, 7, 19, 15, 0], [14, 3, 1, 22, 7, 19, 15, 0], [14, 3, 1, 22, 7, 19, 15, 0], [14, 3, 1, 22, 7, 19, 15, 0], [], [], [15, 0], [15, 0], [], [], [3], [3], [], [], [19], [19], [], [], [1, 15, 0], [1, 15, 0], [], [], [14, 3, 1, 22, 7, 19, 15, 0], [], [], [14, 3, 1, 22, 7, 19, 15, 0], [14, 3, 1, 22, 7, 19, 15, 0], [], [], [], [], [], [26, 17, 5], [26, 17, 5], [], [], [26, 17, 5], [26, 17, 5], [26, 17, 5], [], [26], [], [], [5], [5], [5], [], [], [], []]