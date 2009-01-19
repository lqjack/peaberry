var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"id":1049,"sl":43,"methods":[{"sl":54,"el":65,"sc":3},{"sl":67,"el":86,"sc":3},{"sl":88,"el":104,"sc":3},{"sl":106,"el":118,"sc":3},{"sl":120,"el":125,"sc":3},{"sl":127,"el":143,"sc":3},{"sl":145,"el":162,"sc":3},{"sl":164,"el":171,"sc":3},{"sl":173,"el":186,"sc":3},{"sl":188,"el":201,"sc":3}],"el":202,"name":"OSGiServiceListener"}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_28":{"methods":[{"sl":88},{"sl":127},{"sl":164},{"sl":173},{"sl":188}],"name":"testServiceInjection","statements":[{"sl":89},{"sl":91},{"sl":92},{"sl":93},{"sl":94},{"sl":98},{"sl":99},{"sl":100},{"sl":129},{"sl":131},{"sl":133},{"sl":136},{"sl":137},{"sl":138},{"sl":139},{"sl":166},{"sl":167},{"sl":169},{"sl":176},{"sl":177},{"sl":180},{"sl":181},{"sl":185},{"sl":191},{"sl":194},{"sl":195},{"sl":196},{"sl":200}],"pass":true},"test_11":{"methods":[{"sl":54},{"sl":67},{"sl":127},{"sl":173}],"name":"testServiceLookupPerformance","statements":[{"sl":55},{"sl":57},{"sl":60},{"sl":63},{"sl":64},{"sl":68},{"sl":71},{"sl":74},{"sl":75},{"sl":78},{"sl":79},{"sl":129},{"sl":131},{"sl":133},{"sl":136},{"sl":176},{"sl":180},{"sl":181}],"pass":true},"test_23":{"methods":[{"sl":88},{"sl":127},{"sl":164}],"name":"rank","statements":[{"sl":89},{"sl":91},{"sl":92},{"sl":93},{"sl":94},{"sl":98},{"sl":99},{"sl":100},{"sl":129},{"sl":131},{"sl":133},{"sl":136},{"sl":166},{"sl":167},{"sl":169}],"pass":true},"test_9":{"methods":[{"sl":88},{"sl":127},{"sl":173},{"sl":188}],"name":"testDecoratedServiceInjection","statements":[{"sl":89},{"sl":91},{"sl":92},{"sl":93},{"sl":94},{"sl":129},{"sl":131},{"sl":133},{"sl":136},{"sl":137},{"sl":138},{"sl":139},{"sl":176},{"sl":180},{"sl":181},{"sl":185},{"sl":191},{"sl":194},{"sl":195},{"sl":196},{"sl":200}],"pass":true},"test_17":{"methods":[{"sl":173}],"name":"testServiceTypesAndSignatures","statements":[{"sl":176},{"sl":180},{"sl":181}],"pass":true},"test_5":{"methods":[{"sl":88},{"sl":127},{"sl":164},{"sl":173},{"sl":188}],"name":"testDirectServiceInjection","statements":[{"sl":89},{"sl":91},{"sl":92},{"sl":93},{"sl":94},{"sl":98},{"sl":99},{"sl":100},{"sl":129},{"sl":131},{"sl":133},{"sl":136},{"sl":137},{"sl":138},{"sl":139},{"sl":166},{"sl":167},{"sl":169},{"sl":176},{"sl":177},{"sl":180},{"sl":181},{"sl":185},{"sl":191},{"sl":200}],"pass":true},"test_7":{"methods":[{"sl":88},{"sl":127},{"sl":164}],"name":"run","statements":[{"sl":89},{"sl":91},{"sl":92},{"sl":93},{"sl":94},{"sl":98},{"sl":99},{"sl":100},{"sl":129},{"sl":131},{"sl":133},{"sl":136},{"sl":166},{"sl":167},{"sl":169}],"pass":true}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [11], [11], [], [11], [], [], [11], [], [], [11], [11], [], [], [11], [11], [], [], [11], [], [], [11], [11], [], [], [11], [11], [], [], [], [], [], [], [], [], [5, 28, 9, 7, 23], [5, 28, 9, 7, 23], [], [5, 28, 9, 7, 23], [5, 28, 9, 7, 23], [5, 28, 9, 7, 23], [5, 28, 9, 7, 23], [], [], [], [5, 28, 7, 23], [5, 28, 7, 23], [5, 28, 7, 23], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [5, 28, 9, 11, 7, 23], [], [5, 28, 9, 11, 7, 23], [], [5, 28, 9, 11, 7, 23], [], [5, 28, 9, 11, 7, 23], [], [], [5, 28, 9, 11, 7, 23], [5, 28, 9], [5, 28, 9], [5, 28, 9], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [5, 28, 7, 23], [], [5, 28, 7, 23], [5, 28, 7, 23], [], [5, 28, 7, 23], [], [], [], [5, 17, 28, 9, 11], [], [], [5, 17, 28, 9, 11], [5, 28], [], [], [5, 17, 28, 9, 11], [5, 17, 28, 9, 11], [], [], [], [5, 28, 9], [], [], [5, 28, 9], [], [], [5, 28, 9], [], [], [28, 9], [28, 9], [28, 9], [], [], [], [5, 28, 9], [], []]