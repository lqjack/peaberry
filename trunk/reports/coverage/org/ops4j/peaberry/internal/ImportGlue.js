var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"id":594,"sl":66,"methods":[{"sl":69,"el":69,"sc":3},{"sl":81,"el":94,"sc":3},{"sl":96,"el":108,"sc":3},{"sl":110,"el":156,"sc":3},{"sl":158,"el":173,"sc":3},{"sl":175,"el":265,"sc":3},{"sl":267,"el":273,"sc":3},{"sl":275,"el":286,"sc":3}],"el":287,"name":"ImportGlue"}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_22":{"methods":[{"sl":81},{"sl":96},{"sl":110},{"sl":158},{"sl":175},{"sl":267},{"sl":275}],"name":"testGetProxyConstructor","statements":[{"sl":82},{"sl":85},{"sl":86},{"sl":87},{"sl":88},{"sl":93},{"sl":97},{"sl":98},{"sl":101},{"sl":102},{"sl":104},{"sl":107},{"sl":112},{"sl":113},{"sl":115},{"sl":116},{"sl":118},{"sl":119},{"sl":120},{"sl":122},{"sl":123},{"sl":126},{"sl":128},{"sl":129},{"sl":131},{"sl":134},{"sl":135},{"sl":137},{"sl":139},{"sl":140},{"sl":141},{"sl":146},{"sl":148},{"sl":149},{"sl":153},{"sl":155},{"sl":160},{"sl":162},{"sl":164},{"sl":165},{"sl":166},{"sl":167},{"sl":168},{"sl":169},{"sl":171},{"sl":172},{"sl":177},{"sl":179},{"sl":180},{"sl":181},{"sl":183},{"sl":185},{"sl":186},{"sl":188},{"sl":189},{"sl":190},{"sl":191},{"sl":192},{"sl":194},{"sl":196},{"sl":197},{"sl":198},{"sl":200},{"sl":201},{"sl":202},{"sl":203},{"sl":205},{"sl":207},{"sl":209},{"sl":210},{"sl":212},{"sl":213},{"sl":216},{"sl":217},{"sl":218},{"sl":219},{"sl":222},{"sl":223},{"sl":225},{"sl":228},{"sl":230},{"sl":231},{"sl":234},{"sl":236},{"sl":237},{"sl":238},{"sl":240},{"sl":242},{"sl":243},{"sl":246},{"sl":248},{"sl":249},{"sl":251},{"sl":253},{"sl":254},{"sl":255},{"sl":257},{"sl":259},{"sl":260},{"sl":262},{"sl":263},{"sl":264},{"sl":268},{"sl":269},{"sl":270},{"sl":272},{"sl":276},{"sl":277},{"sl":279},{"sl":281},{"sl":285}],"pass":true},"test_19":{"methods":[{"sl":81},{"sl":96},{"sl":110},{"sl":158},{"sl":175},{"sl":267},{"sl":275}],"name":"testServiceLookupPerformance","statements":[{"sl":82},{"sl":85},{"sl":87},{"sl":90},{"sl":93},{"sl":97},{"sl":98},{"sl":101},{"sl":104},{"sl":107},{"sl":112},{"sl":113},{"sl":115},{"sl":116},{"sl":118},{"sl":119},{"sl":120},{"sl":126},{"sl":128},{"sl":129},{"sl":131},{"sl":134},{"sl":135},{"sl":137},{"sl":139},{"sl":140},{"sl":141},{"sl":146},{"sl":148},{"sl":149},{"sl":153},{"sl":155},{"sl":160},{"sl":162},{"sl":164},{"sl":165},{"sl":166},{"sl":167},{"sl":168},{"sl":169},{"sl":171},{"sl":172},{"sl":177},{"sl":179},{"sl":180},{"sl":181},{"sl":183},{"sl":185},{"sl":186},{"sl":188},{"sl":189},{"sl":190},{"sl":191},{"sl":192},{"sl":194},{"sl":196},{"sl":197},{"sl":198},{"sl":200},{"sl":201},{"sl":202},{"sl":203},{"sl":205},{"sl":207},{"sl":209},{"sl":210},{"sl":212},{"sl":213},{"sl":216},{"sl":217},{"sl":218},{"sl":219},{"sl":222},{"sl":223},{"sl":225},{"sl":228},{"sl":230},{"sl":231},{"sl":234},{"sl":236},{"sl":237},{"sl":238},{"sl":240},{"sl":242},{"sl":243},{"sl":246},{"sl":248},{"sl":249},{"sl":251},{"sl":253},{"sl":254},{"sl":255},{"sl":257},{"sl":259},{"sl":260},{"sl":262},{"sl":263},{"sl":264},{"sl":268},{"sl":269},{"sl":272},{"sl":276},{"sl":277},{"sl":279},{"sl":281},{"sl":285}],"pass":true}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [22, 19], [22, 19], [], [], [22, 19], [22], [22, 19], [22], [], [19], [], [], [22, 19], [], [], [22, 19], [22, 19], [22, 19], [], [], [22, 19], [22], [], [22, 19], [], [], [22, 19], [], [], [22, 19], [], [22, 19], [22, 19], [], [22, 19], [22, 19], [], [22, 19], [22, 19], [22, 19], [], [22], [22], [], [], [22, 19], [], [22, 19], [22, 19], [], [22, 19], [], [], [22, 19], [22, 19], [], [22, 19], [], [22, 19], [22, 19], [22, 19], [], [], [], [], [22, 19], [], [22, 19], [22, 19], [], [], [], [22, 19], [], [22, 19], [], [], [22, 19], [], [22, 19], [], [22, 19], [], [22, 19], [22, 19], [22, 19], [22, 19], [22, 19], [22, 19], [], [22, 19], [22, 19], [], [], [22, 19], [], [22, 19], [], [22, 19], [22, 19], [22, 19], [], [22, 19], [], [22, 19], [22, 19], [], [22, 19], [22, 19], [22, 19], [22, 19], [22, 19], [], [22, 19], [], [22, 19], [22, 19], [22, 19], [], [22, 19], [22, 19], [22, 19], [22, 19], [], [22, 19], [], [22, 19], [], [22, 19], [22, 19], [], [22, 19], [22, 19], [], [], [22, 19], [22, 19], [22, 19], [22, 19], [], [], [22, 19], [22, 19], [], [22, 19], [], [], [22, 19], [], [22, 19], [22, 19], [], [], [22, 19], [], [22, 19], [22, 19], [22, 19], [], [22, 19], [], [22, 19], [22, 19], [], [], [22, 19], [], [22, 19], [22, 19], [], [22, 19], [], [22, 19], [22, 19], [22, 19], [], [22, 19], [], [22, 19], [22, 19], [], [22, 19], [22, 19], [22, 19], [], [], [22, 19], [22, 19], [22, 19], [22], [], [22, 19], [], [], [22, 19], [22, 19], [22, 19], [], [22, 19], [], [22, 19], [], [], [], [22, 19], [], []]
