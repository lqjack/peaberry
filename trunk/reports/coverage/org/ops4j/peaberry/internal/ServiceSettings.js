var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"id":989,"sl":40,"methods":[{"sl":57,"el":61,"sc":3},{"sl":66,"el":75,"sc":3},{"sl":79,"el":81,"sc":3},{"sl":83,"el":85,"sc":3},{"sl":87,"el":89,"sc":3},{"sl":91,"el":93,"sc":3},{"sl":95,"el":97,"sc":3},{"sl":101,"el":110,"sc":3},{"sl":114,"el":116,"sc":3},{"sl":118,"el":120,"sc":3},{"sl":122,"el":137,"sc":3},{"sl":130,"el":132,"sc":11},{"sl":139,"el":150,"sc":3},{"sl":152,"el":158,"sc":3},{"sl":160,"el":173,"sc":3}],"el":174,"name":"ServiceSettings"}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_3":{"methods":[{"sl":57},{"sl":79},{"sl":101},{"sl":114}],"name":"configure","statements":[{"sl":59},{"sl":60},{"sl":80},{"sl":104},{"sl":106},{"sl":115}],"pass":true},"test_4":{"methods":[{"sl":118},{"sl":122},{"sl":139},{"sl":152},{"sl":160}],"name":"testServiceLookupPerformance","statements":[{"sl":119},{"sl":123},{"sl":124},{"sl":125},{"sl":126},{"sl":136},{"sl":140},{"sl":141},{"sl":144},{"sl":145},{"sl":149},{"sl":153},{"sl":154},{"sl":155},{"sl":163},{"sl":164},{"sl":167},{"sl":168},{"sl":172}],"pass":true},"test_13":{"methods":[{"sl":57},{"sl":95},{"sl":101},{"sl":114}],"name":"configure","statements":[{"sl":59},{"sl":60},{"sl":96},{"sl":104},{"sl":106},{"sl":115}],"pass":true},"test_11":{"methods":[{"sl":66},{"sl":83},{"sl":95},{"sl":101},{"sl":152},{"sl":160}],"name":"testServiceExports","statements":[{"sl":68},{"sl":72},{"sl":73},{"sl":84},{"sl":96},{"sl":104},{"sl":106},{"sl":153},{"sl":154},{"sl":155},{"sl":163},{"sl":164},{"sl":167},{"sl":168},{"sl":172}],"pass":true},"test_10":{"methods":[{"sl":57},{"sl":101},{"sl":114}],"name":"configure","statements":[{"sl":59},{"sl":60},{"sl":104},{"sl":106},{"sl":115}],"pass":true},"test_9":{"methods":[{"sl":57},{"sl":101},{"sl":114}],"name":"configure","statements":[{"sl":59},{"sl":60},{"sl":104},{"sl":106},{"sl":115}],"pass":true},"test_6":{"methods":[{"sl":66},{"sl":83},{"sl":95},{"sl":101},{"sl":118},{"sl":122},{"sl":139},{"sl":152},{"sl":160}],"name":"testDecoratedServiceInjection","statements":[{"sl":68},{"sl":72},{"sl":73},{"sl":84},{"sl":96},{"sl":104},{"sl":106},{"sl":119},{"sl":123},{"sl":124},{"sl":125},{"sl":126},{"sl":136},{"sl":140},{"sl":141},{"sl":144},{"sl":145},{"sl":149},{"sl":153},{"sl":154},{"sl":155},{"sl":163},{"sl":164},{"sl":167},{"sl":168},{"sl":172}],"pass":true},"test_16":{"methods":[{"sl":66},{"sl":83},{"sl":95},{"sl":101},{"sl":152},{"sl":160}],"name":"testServiceInjection","statements":[{"sl":68},{"sl":72},{"sl":73},{"sl":84},{"sl":96},{"sl":104},{"sl":106},{"sl":153},{"sl":154},{"sl":155},{"sl":163},{"sl":164},{"sl":167},{"sl":168},{"sl":172}],"pass":true},"test_24":{"methods":[{"sl":57},{"sl":79},{"sl":101},{"sl":114}],"name":"configure","statements":[{"sl":59},{"sl":60},{"sl":80},{"sl":104},{"sl":106},{"sl":115}],"pass":true},"test_14":{"methods":[{"sl":118},{"sl":122},{"sl":139},{"sl":152},{"sl":160}],"name":"testDirectServiceInjection","statements":[{"sl":119},{"sl":123},{"sl":124},{"sl":125},{"sl":126},{"sl":136},{"sl":140},{"sl":141},{"sl":144},{"sl":145},{"sl":149},{"sl":153},{"sl":154},{"sl":155},{"sl":163},{"sl":164},{"sl":167},{"sl":168},{"sl":172}],"pass":true},"test_21":{"methods":[{"sl":57},{"sl":101},{"sl":114}],"name":"configure","statements":[{"sl":59},{"sl":60},{"sl":104},{"sl":106},{"sl":115}],"pass":true},"test_15":{"methods":[{"sl":57},{"sl":91},{"sl":101},{"sl":114}],"name":"configure","statements":[{"sl":59},{"sl":60},{"sl":92},{"sl":104},{"sl":106},{"sl":115}],"pass":true},"test_19":{"methods":[{"sl":57},{"sl":83},{"sl":87},{"sl":101},{"sl":114}],"name":"configure","statements":[{"sl":59},{"sl":60},{"sl":84},{"sl":88},{"sl":104},{"sl":106},{"sl":115}],"pass":true}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [24, 15, 10, 3, 9, 21, 19, 13], [], [24, 15, 10, 3, 9, 21, 19, 13], [24, 15, 10, 3, 9, 21, 19, 13], [], [], [], [], [], [16, 11, 6], [], [16, 11, 6], [], [], [], [16, 11, 6], [16, 11, 6], [], [], [], [], [], [24, 3], [24, 3], [], [], [16, 11, 6, 19], [16, 11, 6, 19], [], [], [19], [19], [], [], [15], [15], [], [], [16, 11, 6, 13], [16, 11, 6, 13], [], [], [], [], [16, 24, 11, 15, 6, 10, 3, 9, 21, 19, 13], [], [], [16, 24, 11, 15, 6, 10, 3, 9, 21, 19, 13], [], [16, 24, 11, 15, 6, 10, 3, 9, 21, 19, 13], [], [], [], [], [], [], [], [24, 15, 10, 3, 9, 21, 19, 13], [24, 15, 10, 3, 9, 21, 19, 13], [], [], [4, 14, 6], [4, 14, 6], [], [], [4, 14, 6], [4, 14, 6], [4, 14, 6], [4, 14, 6], [4, 14, 6], [], [], [], [], [], [], [], [], [], [4, 14, 6], [], [], [4, 14, 6], [4, 14, 6], [4, 14, 6], [], [], [4, 14, 6], [4, 14, 6], [], [], [], [4, 14, 6], [], [], [16, 4, 11, 14, 6], [16, 4, 11, 14, 6], [16, 4, 11, 14, 6], [16, 4, 11, 14, 6], [], [], [], [], [16, 4, 11, 14, 6], [], [], [16, 4, 11, 14, 6], [16, 4, 11, 14, 6], [], [], [16, 4, 11, 14, 6], [16, 4, 11, 14, 6], [], [], [], [16, 4, 11, 14, 6], [], []]
