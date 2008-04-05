var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = { "classes" : [
    {"id" : 41, "sl" : 34, "el" : 92, "name" : "ServiceMatcher",
    "methods" : [
              {"sl" : 37, "el" : 37, "sc" : 3},  {"sl" : 45, "el" : 55, "sc" : 3},  {"sl" : 47, "el" : 49, "sc" : 7},  {"sl" : 51, "el" : 53, "sc" : 7},  {"sl" : 65, "el" : 91, "sc" : 3}  ]}
    
 ]
};

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {
		"test_8" : {
					  "name" : "leasedSpec",
					  "pass" : true ,
					  "methods" : [{"sl": 65 },],
					  "statements" : [{"sl": 68 },{"sl": 73 },{"sl": 75 },{"sl": 77 },{"sl": 78 },{"sl": 79 },{"sl": 80 },{"sl": 82 },{"sl": 83 },{"sl": 84 },{"sl": 85 },]
					  },
		"test_17" : {
					  "name" : "handlesNull",
					  "pass" : true ,
					  "methods" : [{"sl": 45 },{"sl": 47 },{"sl": 65 },],
					  "statements" : [{"sl": 46 },{"sl": 48 },{"sl": 68 },{"sl": 69 },]
					  },
		"test_20" : {
					  "name" : "serviceSpec",
					  "pass" : true ,
					  "methods" : [{"sl": 45 },{"sl": 47 },{"sl": 65 },],
					  "statements" : [{"sl": 46 },{"sl": 48 },{"sl": 68 },{"sl": 73 },{"sl": 75 },{"sl": 77 },{"sl": 78 },{"sl": 79 },{"sl": 80 },{"sl": 82 },{"sl": 83 },{"sl": 84 },{"sl": 85 },]
					  },
		"test_21" : {
					  "name" : "run",
					  "pass" : true ,
					  "methods" : [{"sl": 45 },{"sl": 47 },{"sl": 65 },],
					  "statements" : [{"sl": 46 },{"sl": 48 },{"sl": 68 },{"sl": 69 },{"sl": 73 },{"sl": 75 },{"sl": 77 },{"sl": 78 },{"sl": 79 },{"sl": 80 },{"sl": 82 },{"sl": 83 },{"sl": 84 },{"sl": 85 },{"sl": 90 },]
					  },
		"test_7" : {
					  "name" : "missingAnnotations",
					  "pass" : true ,
					  "methods" : [{"sl": 65 },],
					  "statements" : [{"sl": 68 },{"sl": 73 },{"sl": 75 },{"sl": 77 },{"sl": 78 },{"sl": 79 },{"sl": 80 },{"sl": 82 },{"sl": 84 },{"sl": 85 },{"sl": 90 },]
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
  [ 21 , 20 , 17   ] ,
  [ 21 , 20 , 17   ] ,
  [ 21 , 20 , 17   ] ,
  [ 21 , 20 , 17   ] ,
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
  [ 21 , 20 , 17 , 8 , 7   ] ,
  [  ] ,
  [  ] ,
  [ 21 , 20 , 17 , 8 , 7   ] ,
  [ 21 , 17   ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [ 21 , 20 , 8 , 7   ] ,
  [  ] ,
  [ 21 , 20 , 8 , 7   ] ,
  [  ] ,
  [ 21 , 20 , 8 , 7   ] ,
  [ 21 , 20 , 8 , 7   ] ,
  [ 21 , 20 , 8 , 7   ] ,
  [ 21 , 20 , 8 , 7   ] ,
  [  ] ,
  [ 21 , 20 , 8 , 7   ] ,
  [ 21 , 20 , 8   ] ,
  [ 21 , 20 , 8 , 7   ] ,
  [ 21 , 20 , 8 , 7   ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [ 21 , 7   ] ,
  [  ] ,
  [  ] 
];
