var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"id":759,"sl":36,"methods":[{"sl":41,"el":43,"sc":5},{"sl":48,"el":50,"sc":3},{"sl":52,"el":55,"sc":3},{"sl":57,"el":60,"sc":3},{"sl":62,"el":68,"sc":3},{"sl":73,"el":105,"sc":3},{"sl":78,"el":96,"sc":9},{"sl":83,"el":85,"sc":13},{"sl":87,"el":90,"sc":13},{"sl":92,"el":94,"sc":13},{"sl":98,"el":101,"sc":9}],"el":106,"name":"OSGiServiceAttributes"}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_13":{"methods":[{"sl":48}],"name":"testServiceInjection","statements":[{"sl":49}],"pass":true},"test_27":{"methods":[{"sl":48}],"name":"run","statements":[{"sl":49}],"pass":true},"test_26":{"methods":[{"sl":48}],"name":"testServiceLookupPerformance","statements":[{"sl":49}],"pass":true},"test_10":{"methods":[{"sl":48},{"sl":52}],"name":"testServiceExports","statements":[{"sl":49},{"sl":54}],"pass":true},"test_24":{"methods":[{"sl":48}],"name":"rank","statements":[{"sl":49}],"pass":true},"test_17":{"methods":[{"sl":48}],"name":"testDecoratedServiceInjection","statements":[{"sl":49}],"pass":true},"test_5":{"methods":[{"sl":48}],"name":"testDirectServiceInjection","statements":[{"sl":49}],"pass":true},"test_20":{"methods":[{"sl":48}],"name":"rank","statements":[{"sl":49}],"pass":true}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [5, 26, 17, 10, 24, 13, 27, 20], [5, 26, 17, 10, 24, 13, 27, 20], [], [], [10], [], [10], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]