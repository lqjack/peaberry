var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"id":546,"sl":27,"methods":[{"sl":32,"el":34,"sc":3},{"sl":36,"el":42,"sc":3}],"el":43,"name":"DecoratorChain"}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_18":{"methods":[{"sl":32}],"name":"configure","statements":[{"sl":33}],"pass":true},"test_44":{"methods":[{"sl":32},{"sl":36}],"name":"testDecoratorChaining","statements":[{"sl":33},{"sl":37},{"sl":38},{"sl":39},{"sl":41}],"pass":true}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [44, 18], [44, 18], [], [], [44], [44], [44], [44], [], [44], [], []]
