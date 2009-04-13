var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"id":1922,"sl":45,"methods":[{"sl":58,"el":69,"sc":3},{"sl":71,"el":90,"sc":3},{"sl":92,"el":108,"sc":3},{"sl":110,"el":119,"sc":3},{"sl":121,"el":126,"sc":3},{"sl":128,"el":141,"sc":3},{"sl":143,"el":153,"sc":3},{"sl":155,"el":175,"sc":3},{"sl":177,"el":184,"sc":3},{"sl":186,"el":199,"sc":3},{"sl":201,"el":214,"sc":3}],"el":215,"name":"OSGiServiceListener"}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1":{"methods":[{"sl":92},{"sl":128},{"sl":143},{"sl":186}],"name":"testServiceInterception","statements":[{"sl":93},{"sl":95},{"sl":96},{"sl":97},{"sl":98},{"sl":130},{"sl":132},{"sl":134},{"sl":137},{"sl":138},{"sl":145},{"sl":146},{"sl":147},{"sl":148},{"sl":189},{"sl":193},{"sl":194}],"pass":true},"test_3":{"methods":[{"sl":92},{"sl":128},{"sl":143},{"sl":177},{"sl":186},{"sl":201}],"name":"testServiceInjection","statements":[{"sl":93},{"sl":95},{"sl":96},{"sl":97},{"sl":98},{"sl":102},{"sl":103},{"sl":104},{"sl":130},{"sl":132},{"sl":134},{"sl":137},{"sl":138},{"sl":145},{"sl":146},{"sl":147},{"sl":148},{"sl":179},{"sl":180},{"sl":182},{"sl":189},{"sl":190},{"sl":193},{"sl":194},{"sl":198},{"sl":204},{"sl":207},{"sl":208},{"sl":209},{"sl":213}],"pass":true},"test_74":{"methods":[{"sl":92},{"sl":128},{"sl":143},{"sl":186},{"sl":201}],"name":"testDecoratedServiceInjection","statements":[{"sl":93},{"sl":95},{"sl":96},{"sl":97},{"sl":98},{"sl":130},{"sl":132},{"sl":134},{"sl":137},{"sl":138},{"sl":145},{"sl":146},{"sl":147},{"sl":148},{"sl":189},{"sl":193},{"sl":194},{"sl":198},{"sl":204},{"sl":207},{"sl":208},{"sl":209},{"sl":213}],"pass":true},"test_61":{"methods":[{"sl":186}],"name":"testServiceTypesAndSignatures","statements":[{"sl":189},{"sl":193},{"sl":194}],"pass":true},"test_71":{"methods":[{"sl":92},{"sl":128},{"sl":177}],"name":"run","statements":[{"sl":93},{"sl":95},{"sl":96},{"sl":97},{"sl":98},{"sl":102},{"sl":103},{"sl":104},{"sl":130},{"sl":132},{"sl":134},{"sl":137},{"sl":179},{"sl":180},{"sl":182}],"pass":true},"test_52":{"methods":[{"sl":92},{"sl":128},{"sl":177}],"name":"rank","statements":[{"sl":93},{"sl":95},{"sl":96},{"sl":97},{"sl":98},{"sl":102},{"sl":103},{"sl":104},{"sl":130},{"sl":132},{"sl":134},{"sl":137},{"sl":179},{"sl":180},{"sl":182}],"pass":true},"test_54":{"methods":[{"sl":58},{"sl":71},{"sl":128},{"sl":186}],"name":"testServiceLookupPerformance","statements":[{"sl":59},{"sl":61},{"sl":64},{"sl":67},{"sl":68},{"sl":72},{"sl":75},{"sl":78},{"sl":79},{"sl":82},{"sl":83},{"sl":130},{"sl":132},{"sl":134},{"sl":137},{"sl":189},{"sl":193},{"sl":194}],"pass":true}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [54], [54], [], [54], [], [], [54], [], [], [54], [54], [], [], [54], [54], [], [], [54], [], [], [54], [54], [], [], [54], [54], [], [], [], [], [], [], [], [], [1, 52, 3, 74, 71], [1, 52, 3, 74, 71], [], [1, 52, 3, 74, 71], [1, 52, 3, 74, 71], [1, 52, 3, 74, 71], [1, 52, 3, 74, 71], [], [], [], [52, 3, 71], [52, 3, 71], [52, 3, 71], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [54, 1, 52, 3, 74, 71], [], [54, 1, 52, 3, 74, 71], [], [54, 1, 52, 3, 74, 71], [], [54, 1, 52, 3, 74, 71], [], [], [54, 1, 52, 3, 74, 71], [1, 3, 74], [], [], [], [], [1, 3, 74], [], [1, 3, 74], [1, 3, 74], [1, 3, 74], [1, 3, 74], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [52, 3, 71], [], [52, 3, 71], [52, 3, 71], [], [52, 3, 71], [], [], [], [54, 1, 61, 3, 74], [], [], [54, 1, 61, 3, 74], [3], [], [], [54, 1, 61, 3, 74], [54, 1, 61, 3, 74], [], [], [], [3, 74], [], [], [3, 74], [], [], [3, 74], [], [], [3, 74], [3, 74], [3, 74], [], [], [], [3, 74], [], []]
