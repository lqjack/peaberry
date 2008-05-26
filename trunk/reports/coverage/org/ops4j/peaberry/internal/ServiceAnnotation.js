var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = { "classes" : [
    {"id" : 270, "sl" : 31, "el" : 82, "name" : "ServiceAnnotation",
    "methods" : [
              {"sl" : 37, "el" : 40, "sc" : 3},  {"sl" : 42, "el" : 44, "sc" : 3},  {"sl" : 46, "el" : 48, "sc" : 3},  {"sl" : 50, "el" : 52, "sc" : 3},  {"sl" : 54, "el" : 58, "sc" : 3},  {"sl" : 60, "el" : 70, "sc" : 3},  {"sl" : 72, "el" : 81, "sc" : 3}  ]}
    
 ]
};

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {
		"test_3" : {
					  "name" : "serviceFilters",
					  "pass" : true,
					  "methods" : [{"sl": 37 },{"sl": 42 },{"sl": 46 },],
					  "statements" : [{"sl": 38 },{"sl": 39 },{"sl": 43 },{"sl": 47 },]
					  },
		"test_4" : {
					  "name" : "testAnnotations",
					  "pass" : true,
					  "methods" : [{"sl": 37 },{"sl": 50 },],
					  "statements" : [{"sl": 38 },{"sl": 39 },{"sl": 51 },]
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
  [ 4 , 3   ] ,
  [ 4 , 3   ] ,
  [ 4 , 3   ] ,
  [  ] ,
  [  ] ,
  [ 3   ] ,
  [ 3   ] ,
  [  ] ,
  [  ] ,
  [ 3   ] ,
  [ 3   ] ,
  [  ] ,
  [  ] ,
  [ 4   ] ,
  [ 4   ] ,
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
  [  ] 
];
