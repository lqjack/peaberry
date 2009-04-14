var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"id":1266,"sl":33,"methods":[{"sl":42,"el":46,"sc":3},{"sl":48,"el":50,"sc":3},{"sl":70,"el":72,"sc":3}],"el":73,"name":"SingleServiceProvider"},{"id":1271,"sl":52,"methods":[{"sl":60,"el":63,"sc":5},{"sl":65,"el":67,"sc":5}],"el":68,"name":"SingleServiceProvider.DirectProvider"}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_48":{"methods":[{"sl":42}],"name":"configure","statements":[{"sl":44},{"sl":45}],"pass":true},"test_66":{"methods":[{"sl":42},{"sl":60},{"sl":70}],"name":"configure","statements":[{"sl":44},{"sl":45},{"sl":62},{"sl":71}],"pass":true},"test_47":{"methods":[{"sl":42}],"name":"configure","statements":[{"sl":44},{"sl":45}],"pass":true},"test_65":{"methods":[{"sl":42}],"name":"configure","statements":[{"sl":44},{"sl":45}],"pass":true},"test_73":{"methods":[{"sl":42}],"name":"configure","statements":[{"sl":44},{"sl":45}],"pass":true},"test_13":{"methods":[{"sl":42},{"sl":60},{"sl":70}],"name":"configure","statements":[{"sl":44},{"sl":45},{"sl":62},{"sl":71}],"pass":true},"test_12":{"methods":[{"sl":42}],"name":"configure","statements":[{"sl":44},{"sl":45}],"pass":true},"test_74":{"methods":[{"sl":65}],"name":"testDecoratedServiceInjection","statements":[{"sl":66}],"pass":true},"test_10":{"methods":[{"sl":42}],"name":"configure","statements":[{"sl":44},{"sl":45}],"pass":true},"test_51":{"methods":[{"sl":42},{"sl":60},{"sl":70}],"name":"configure","statements":[{"sl":44},{"sl":45},{"sl":62},{"sl":71}],"pass":true},"test_34":{"methods":[{"sl":42}],"name":"configure","statements":[{"sl":44},{"sl":45}],"pass":true},"test_54":{"methods":[{"sl":48},{"sl":65}],"name":"testServiceLookupPerformance","statements":[{"sl":49},{"sl":66}],"pass":true}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [65, 34, 12, 51, 13, 73, 66, 10, 48, 47], [], [65, 34, 12, 51, 13, 73, 66, 10, 48, 47], [65, 34, 12, 51, 13, 73, 66, 10, 48, 47], [], [], [54], [54], [], [], [], [], [], [], [], [], [], [], [51, 13, 66], [], [51, 13, 66], [], [], [54, 74], [54, 74], [], [], [], [51, 13, 66], [51, 13, 66], [], []]