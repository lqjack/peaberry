var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = { "classes" : [
    {"id" : 493, "sl" : 37, "el" : 121, "name" : "OSGiServiceTester",
    "methods" : [
             {"sl" : 48, "el" : 50, "sc" : 3},  {"sl" : 52, "el" : 74, "sc" : 3},  {"sl" : 59, "el" : 65, "sc" : 7},  {"sl" : 76, "el" : 78, "sc" : 3},  {"sl" : 80, "el" : 85, "sc" : 3},  {"sl" : 87, "el" : 90, "sc" : 3},  {"sl" : 92, "el" : 97, "sc" : 3},  {"sl" : 99, "el" : 114, "sc" : 3},  {"sl" : 116, "el" : 120, "sc" : 3}  ]}
    ,
    {"id" : 493, "sl" : 39, "el" : 41, "name" : "OSGiServiceTester.SimpleService",
    "methods" : [
              ]}
    
 ]
};

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {
		"test_3" : {
					  "name" : "unleasedUnaryService",
					  "pass" : true,
					  "methods" : [{"sl": 48 },{"sl": 52 },{"sl": 59 },{"sl": 76 },{"sl": 80 },{"sl": 87 },{"sl": 92 },],
					  "statements" : [{"sl": 49 },{"sl": 54 },{"sl": 55 },{"sl": 56 },{"sl": 58 },{"sl": 61 },{"sl": 62 },{"sl": 68 },{"sl": 71 },{"sl": 73 },{"sl": 77 },{"sl": 81 },{"sl": 84 },{"sl": 88 },{"sl": 89 },{"sl": 93 },{"sl": 94 },]
					  },
		"test_13" : {
					  "name" : "checkRanking",
					  "pass" : true,
					  "methods" : [{"sl": 52 },{"sl": 59 },{"sl": 80 },{"sl": 87 },{"sl": 99 },],
					  "statements" : [{"sl": 54 },{"sl": 55 },{"sl": 56 },{"sl": 58 },{"sl": 61 },{"sl": 62 },{"sl": 68 },{"sl": 71 },{"sl": 73 },{"sl": 81 },{"sl": 82 },{"sl": 84 },{"sl": 88 },{"sl": 89 },{"sl": 100 },{"sl": 101 },{"sl": 102 },{"sl": 103 },{"sl": 104 },{"sl": 111 },{"sl": 113 },]
					  },
		"test_1" : {
					  "name" : "leasedUnaryService",
					  "pass" : true,
					  "methods" : [{"sl": 48 },{"sl": 52 },{"sl": 59 },{"sl": 76 },{"sl": 80 },{"sl": 87 },{"sl": 92 },{"sl": 116 },],
					  "statements" : [{"sl": 49 },{"sl": 54 },{"sl": 55 },{"sl": 56 },{"sl": 58 },{"sl": 61 },{"sl": 62 },{"sl": 64 },{"sl": 68 },{"sl": 71 },{"sl": 73 },{"sl": 77 },{"sl": 81 },{"sl": 84 },{"sl": 88 },{"sl": 89 },{"sl": 93 },{"sl": 94 },{"sl": 117 },{"sl": 118 },]
					  },
		"test_8" : {
					  "name" : "checkInjection",
					  "pass" : true,
					  "methods" : [{"sl": 48 },{"sl": 52 },{"sl": 59 },{"sl": 80 },{"sl": 87 },{"sl": 92 },],
					  "statements" : [{"sl": 49 },{"sl": 54 },{"sl": 55 },{"sl": 56 },{"sl": 58 },{"sl": 61 },{"sl": 62 },{"sl": 68 },{"sl": 71 },{"sl": 73 },{"sl": 81 },{"sl": 82 },{"sl": 84 },{"sl": 88 },{"sl": 89 },{"sl": 93 },{"sl": 94 },]
					  },
		"test_0" : {
					  "name" : "staticUnaryService",
					  "pass" : true,
					  "methods" : [{"sl": 48 },{"sl": 52 },{"sl": 59 },{"sl": 76 },{"sl": 80 },{"sl": 87 },{"sl": 92 },{"sl": 116 },],
					  "statements" : [{"sl": 49 },{"sl": 54 },{"sl": 55 },{"sl": 56 },{"sl": 58 },{"sl": 61 },{"sl": 62 },{"sl": 64 },{"sl": 68 },{"sl": 71 },{"sl": 73 },{"sl": 77 },{"sl": 81 },{"sl": 82 },{"sl": 84 },{"sl": 88 },{"sl": 89 },{"sl": 93 },{"sl": 94 },{"sl": 117 },{"sl": 118 },]
					  },
		"test_9" : {
					  "name" : "staticMultiService",
					  "pass" : true,
					  "methods" : [{"sl": 48 },{"sl": 52 },{"sl": 59 },{"sl": 76 },{"sl": 80 },{"sl": 87 },{"sl": 99 },{"sl": 116 },],
					  "statements" : [{"sl": 49 },{"sl": 54 },{"sl": 55 },{"sl": 56 },{"sl": 58 },{"sl": 61 },{"sl": 62 },{"sl": 64 },{"sl": 68 },{"sl": 71 },{"sl": 73 },{"sl": 77 },{"sl": 81 },{"sl": 82 },{"sl": 84 },{"sl": 88 },{"sl": 89 },{"sl": 100 },{"sl": 101 },{"sl": 102 },{"sl": 103 },{"sl": 104 },{"sl": 107 },{"sl": 111 },{"sl": 113 },{"sl": 117 },{"sl": 118 },]
					  },
		"test_7" : {
					  "name" : "leasedMultiService",
					  "pass" : true,
					  "methods" : [{"sl": 48 },{"sl": 52 },{"sl": 59 },{"sl": 76 },{"sl": 80 },{"sl": 87 },{"sl": 99 },{"sl": 116 },],
					  "statements" : [{"sl": 49 },{"sl": 54 },{"sl": 55 },{"sl": 56 },{"sl": 58 },{"sl": 61 },{"sl": 62 },{"sl": 64 },{"sl": 68 },{"sl": 71 },{"sl": 73 },{"sl": 77 },{"sl": 81 },{"sl": 84 },{"sl": 88 },{"sl": 89 },{"sl": 100 },{"sl": 101 },{"sl": 102 },{"sl": 103 },{"sl": 104 },{"sl": 107 },{"sl": 111 },{"sl": 113 },{"sl": 117 },{"sl": 118 },]
					  }
 };

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [  [],   [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [ 3 , 8 , 9 , 0 , 7 , 1   ] ,
  [ 3 , 8 , 9 , 0 , 7 , 1   ] ,
  [  ] ,
  [  ] ,
  [ 3 , 8 , 9 , 0 , 7 , 13 , 1   ] ,
  [  ] ,
  [ 3 , 8 , 9 , 0 , 7 , 13 , 1   ] ,
  [ 3 , 8 , 9 , 0 , 7 , 13 , 1   ] ,
  [ 3 , 8 , 9 , 0 , 7 , 13 , 1   ] ,
  [  ] ,
  [ 3 , 8 , 9 , 0 , 7 , 13 , 1   ] ,
  [ 3 , 8 , 9 , 0 , 7 , 13 , 1   ] ,
  [  ] ,
  [ 3 , 8 , 9 , 0 , 7 , 13 , 1   ] ,
  [ 3 , 8 , 9 , 0 , 7 , 13 , 1   ] ,
  [  ] ,
  [ 9 , 0 , 7 , 1   ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [ 3 , 8 , 9 , 0 , 7 , 13 , 1   ] ,
  [  ] ,
  [  ] ,
  [ 3 , 8 , 9 , 0 , 7 , 13 , 1   ] ,
  [  ] ,
  [ 3 , 8 , 9 , 0 , 7 , 13 , 1   ] ,
  [  ] ,
  [  ] ,
  [ 3 , 9 , 0 , 7 , 1   ] ,
  [ 3 , 9 , 0 , 7 , 1   ] ,
  [  ] ,
  [  ] ,
  [ 3 , 8 , 9 , 0 , 7 , 13 , 1   ] ,
  [ 3 , 8 , 9 , 0 , 7 , 13 , 1   ] ,
  [ 8 , 9 , 0 , 13   ] ,
  [  ] ,
  [ 3 , 8 , 9 , 0 , 7 , 13 , 1   ] ,
  [  ] ,
  [  ] ,
  [ 3 , 8 , 9 , 0 , 7 , 13 , 1   ] ,
  [ 3 , 8 , 9 , 0 , 7 , 13 , 1   ] ,
  [ 3 , 8 , 9 , 0 , 7 , 13 , 1   ] ,
  [  ] ,
  [  ] ,
  [ 3 , 8 , 0 , 1   ] ,
  [ 3 , 8 , 0 , 1   ] ,
  [ 3 , 8 , 0 , 1   ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [ 9 , 7 , 13   ] ,
  [ 9 , 7 , 13   ] ,
  [ 9 , 7 , 13   ] ,
  [ 9 , 7 , 13   ] ,
  [ 9 , 7 , 13   ] ,
  [ 9 , 7 , 13   ] ,
  [  ] ,
  [  ] ,
  [ 9 , 7   ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [ 9 , 7 , 13   ] ,
  [  ] ,
  [ 9 , 7 , 13   ] ,
  [  ] ,
  [  ] ,
  [ 9 , 0 , 7 , 1   ] ,
  [ 9 , 0 , 7 , 1   ] ,
  [ 9 , 0 , 7 , 1   ] ,
  [  ] ,
  [  ] ,
  [  ] 
];
