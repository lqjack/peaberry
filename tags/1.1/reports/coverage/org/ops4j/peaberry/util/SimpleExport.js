var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"id":2236,"sl":29,"methods":[{"sl":70,"el":72,"sc":3},{"sl":74,"el":76,"sc":3},{"sl":78,"el":80,"sc":3},{"sl":82,"el":84,"sc":3},{"sl":86,"el":88,"sc":3},{"sl":90,"el":97,"sc":3},{"sl":99,"el":101,"sc":3},{"sl":103,"el":105,"sc":3}],"el":106,"name":"SimpleExport"},{"id":2236,"sl":33,"methods":[{"sl":38,"el":40,"sc":5},{"sl":42,"el":46,"sc":5},{"sl":48,"el":52,"sc":5},{"sl":54,"el":59,"sc":5}],"el":60,"name":"SimpleExport.CountingImport"}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1":{"methods":[{"sl":38},{"sl":42},{"sl":70},{"sl":74},{"sl":78}],"name":"testServiceInterception","statements":[{"sl":39},{"sl":44},{"sl":45},{"sl":71},{"sl":75},{"sl":79}],"pass":true},"test_3":{"methods":[{"sl":38},{"sl":42},{"sl":54},{"sl":70},{"sl":74},{"sl":78},{"sl":82},{"sl":90},{"sl":103}],"name":"testServiceInjection","statements":[{"sl":39},{"sl":44},{"sl":45},{"sl":56},{"sl":57},{"sl":71},{"sl":75},{"sl":79},{"sl":83},{"sl":92},{"sl":93},{"sl":96},{"sl":104}],"pass":true},"test_72":{"methods":[{"sl":38},{"sl":42},{"sl":54},{"sl":70},{"sl":74},{"sl":90},{"sl":99}],"name":"testConcurrentWatcherEquality","statements":[{"sl":39},{"sl":44},{"sl":45},{"sl":56},{"sl":57},{"sl":71},{"sl":75},{"sl":92},{"sl":93},{"sl":96},{"sl":100}],"pass":true},"test_74":{"methods":[{"sl":38},{"sl":42},{"sl":70},{"sl":74},{"sl":78}],"name":"testDecoratedServiceInjection","statements":[{"sl":39},{"sl":44},{"sl":45},{"sl":71},{"sl":75},{"sl":79}],"pass":true},"test_33":{"methods":[{"sl":38},{"sl":42},{"sl":48},{"sl":54},{"sl":70},{"sl":74},{"sl":78},{"sl":82},{"sl":90},{"sl":99},{"sl":103}],"name":"testServiceWatcher","statements":[{"sl":39},{"sl":44},{"sl":45},{"sl":50},{"sl":51},{"sl":56},{"sl":57},{"sl":71},{"sl":75},{"sl":79},{"sl":83},{"sl":92},{"sl":93},{"sl":96},{"sl":100},{"sl":104}],"pass":true},"test_71":{"methods":[{"sl":38},{"sl":42},{"sl":54},{"sl":70},{"sl":74},{"sl":78},{"sl":90},{"sl":99},{"sl":103}],"name":"run","statements":[{"sl":39},{"sl":44},{"sl":45},{"sl":56},{"sl":57},{"sl":71},{"sl":75},{"sl":79},{"sl":92},{"sl":93},{"sl":96},{"sl":100},{"sl":104}],"pass":true},"test_52":{"methods":[{"sl":38},{"sl":42},{"sl":54},{"sl":70},{"sl":74},{"sl":78},{"sl":90},{"sl":99},{"sl":103}],"name":"rank","statements":[{"sl":39},{"sl":44},{"sl":45},{"sl":56},{"sl":57},{"sl":71},{"sl":75},{"sl":79},{"sl":92},{"sl":93},{"sl":96},{"sl":100},{"sl":104}],"pass":true},"test_54":{"methods":[{"sl":38},{"sl":42},{"sl":70},{"sl":74},{"sl":78}],"name":"testServiceLookupPerformance","statements":[{"sl":39},{"sl":44},{"sl":45},{"sl":71},{"sl":75},{"sl":79}],"pass":true}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [72, 54, 1, 33, 52, 3, 74, 71], [72, 54, 1, 33, 52, 3, 74, 71], [], [], [72, 54, 1, 33, 52, 3, 74, 71], [], [72, 54, 1, 33, 52, 3, 74, 71], [72, 54, 1, 33, 52, 3, 74, 71], [], [], [33], [], [33], [33], [], [], [72, 33, 52, 3, 71], [], [72, 33, 52, 3, 71], [72, 33, 52, 3, 71], [], [], [], [], [], [], [], [], [], [], [], [], [72, 54, 1, 33, 52, 3, 74, 71], [72, 54, 1, 33, 52, 3, 74, 71], [], [], [72, 54, 1, 33, 52, 3, 74, 71], [72, 54, 1, 33, 52, 3, 74, 71], [], [], [54, 1, 33, 52, 3, 74, 71], [54, 1, 33, 52, 3, 74, 71], [], [], [33, 3], [33, 3], [], [], [], [], [], [], [72, 33, 52, 3, 71], [], [72, 33, 52, 3, 71], [72, 33, 52, 3, 71], [], [], [72, 33, 52, 3, 71], [], [], [72, 33, 52, 71], [72, 33, 52, 71], [], [], [33, 52, 3, 71], [33, 52, 3, 71], [], []]