var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"id":741,"sl":35,"methods":[{"sl":41,"el":55,"sc":3},{"sl":57,"el":71,"sc":3},{"sl":61,"el":63,"sc":7},{"sl":73,"el":79,"sc":3},{"sl":81,"el":84,"sc":3},{"sl":86,"el":92,"sc":3}],"el":93,"name":"LdapAttributeFilter"}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1":{"methods":[{"sl":41},{"sl":57},{"sl":61}],"name":"testSingleObjectClassFilter","statements":[{"sl":42},{"sl":44},{"sl":45},{"sl":50},{"sl":52},{"sl":60},{"sl":62},{"sl":66},{"sl":67}],"pass":true},"test_12":{"methods":[{"sl":41},{"sl":73},{"sl":81},{"sl":86}],"name":"testFilterHashCodeAndEquals","statements":[{"sl":42},{"sl":44},{"sl":45},{"sl":50},{"sl":52},{"sl":75},{"sl":76},{"sl":78},{"sl":83},{"sl":88},{"sl":89},{"sl":91}],"pass":true},"test_0":{"methods":[{"sl":41}],"name":"configure","statements":[{"sl":42},{"sl":44},{"sl":45},{"sl":50},{"sl":52}],"pass":true},"test_9":{"methods":[{"sl":41},{"sl":57},{"sl":61},{"sl":73}],"name":"testBrokenLdapFilterStrings","statements":[{"sl":42},{"sl":44},{"sl":45},{"sl":47},{"sl":50},{"sl":52},{"sl":53},{"sl":60},{"sl":62},{"sl":66},{"sl":67},{"sl":69},{"sl":75},{"sl":76},{"sl":78}],"pass":true},"test_21":{"methods":[{"sl":57},{"sl":61}],"name":"testServiceExports","statements":[{"sl":60},{"sl":62},{"sl":66},{"sl":67}],"pass":true},"test_5":{"methods":[{"sl":41},{"sl":57},{"sl":61}],"name":"testMultipleObjectClassFilter","statements":[{"sl":42},{"sl":44},{"sl":45},{"sl":50},{"sl":52},{"sl":60},{"sl":62},{"sl":66},{"sl":67}],"pass":true}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [9, 0, 12, 1, 5], [9, 0, 12, 1, 5], [], [9, 0, 12, 1, 5], [9, 0, 12, 1, 5], [], [9], [], [], [9, 0, 12, 1, 5], [], [9, 0, 12, 1, 5], [9], [], [], [], [9, 21, 1, 5], [], [], [9, 21, 1, 5], [9, 21, 1, 5], [9, 21, 1, 5], [], [], [], [9, 21, 1, 5], [9, 21, 1, 5], [], [9], [], [], [], [9, 12], [], [9, 12], [9, 12], [], [9, 12], [], [], [12], [], [12], [], [], [12], [], [12], [12], [], [12], [], []]
