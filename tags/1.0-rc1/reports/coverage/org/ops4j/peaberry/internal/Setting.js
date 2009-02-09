var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"id":1057,"sl":28,"methods":[{"sl":39,"el":55,"sc":3},{"sl":46,"el":53,"sc":7},{"sl":60,"el":73,"sc":3},{"sl":67,"el":71,"sc":7},{"sl":75,"el":78,"sc":3},{"sl":82,"el":85,"sc":5}],"el":87,"name":"Setting"}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1":{"methods":[{"sl":39},{"sl":46},{"sl":60},{"sl":67},{"sl":75},{"sl":82}],"name":"testServiceExports","statements":[{"sl":40},{"sl":45},{"sl":48},{"sl":50},{"sl":52},{"sl":61},{"sl":66},{"sl":70},{"sl":77},{"sl":84}],"pass":true},"test_12":{"methods":[{"sl":67},{"sl":82}],"name":"testDirectServiceInjection","statements":[{"sl":70},{"sl":84}],"pass":true},"test_27":{"methods":[{"sl":46},{"sl":67},{"sl":82}],"name":"testServiceLookupPerformance","statements":[{"sl":48},{"sl":50},{"sl":52},{"sl":70},{"sl":84}],"pass":true},"test_0":{"methods":[{"sl":39},{"sl":60},{"sl":75}],"name":"configure","statements":[{"sl":40},{"sl":45},{"sl":61},{"sl":66},{"sl":77}],"pass":true},"test_25":{"methods":[{"sl":60},{"sl":75}],"name":"configure","statements":[{"sl":61},{"sl":66},{"sl":77}],"pass":true},"test_9":{"methods":[{"sl":60},{"sl":75}],"name":"configure","statements":[{"sl":61},{"sl":66},{"sl":77}],"pass":true},"test_5":{"methods":[{"sl":60},{"sl":75}],"name":"configure","statements":[{"sl":61},{"sl":66},{"sl":77}],"pass":true},"test_7":{"methods":[{"sl":39},{"sl":60},{"sl":75}],"name":"configure","statements":[{"sl":40},{"sl":45},{"sl":61},{"sl":66},{"sl":77}],"pass":true},"test_24":{"methods":[{"sl":60},{"sl":75}],"name":"configure","statements":[{"sl":61},{"sl":66},{"sl":77}],"pass":true},"test_21":{"methods":[{"sl":39},{"sl":46},{"sl":60},{"sl":75},{"sl":82}],"name":"testServiceInjection","statements":[{"sl":40},{"sl":45},{"sl":48},{"sl":52},{"sl":61},{"sl":66},{"sl":77},{"sl":84}],"pass":true},"test_22":{"methods":[{"sl":60},{"sl":75}],"name":"configure","statements":[{"sl":61},{"sl":66},{"sl":77}],"pass":true},"test_15":{"methods":[{"sl":39},{"sl":60},{"sl":75}],"name":"configure","statements":[{"sl":40},{"sl":45},{"sl":61},{"sl":66},{"sl":77}],"pass":true},"test_20":{"methods":[{"sl":39},{"sl":46},{"sl":60},{"sl":67},{"sl":75},{"sl":82}],"name":"testDecoratedServiceInjection","statements":[{"sl":40},{"sl":45},{"sl":48},{"sl":52},{"sl":61},{"sl":66},{"sl":70},{"sl":77},{"sl":84}],"pass":true}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [21, 0, 20, 15, 7, 1], [21, 0, 20, 15, 7, 1], [], [], [], [], [21, 0, 20, 15, 7, 1], [21, 20, 1, 27], [], [21, 20, 1, 27], [], [1, 27], [], [21, 20, 1, 27], [], [], [], [], [], [], [], [21, 0, 24, 9, 20, 22, 15, 7, 1, 25, 5], [21, 0, 24, 9, 20, 22, 15, 7, 1, 25, 5], [], [], [], [], [21, 0, 24, 9, 20, 22, 15, 7, 1, 25, 5], [20, 12, 1, 27], [], [], [20, 12, 1, 27], [], [], [], [], [21, 0, 24, 9, 20, 22, 15, 7, 1, 25, 5], [], [21, 0, 24, 9, 20, 22, 15, 7, 1, 25, 5], [], [], [], [], [21, 20, 12, 1, 27], [], [21, 20, 12, 1, 27], [], [], []]