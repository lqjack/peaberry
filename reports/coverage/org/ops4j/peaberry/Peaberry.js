var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = { "classes" : [
    {"id" : 96, "sl" : 42, "el" : 164, "name" : "Peaberry",
    "methods" : [
              {"sl" : 45, "el" : 45, "sc" : 3},  {"sl" : 54, "el" : 70, "sc" : 3},  {"sl" : 58, "el" : 60, "sc" : 7},  {"sl" : 62, "el" : 64, "sc" : 7},  {"sl" : 66, "el" : 68, "sc" : 7},  {"sl" : 78, "el" : 89, "sc" : 3},  {"sl" : 81, "el" : 83, "sc" : 7},  {"sl" : 85, "el" : 87, "sc" : 7},  {"sl" : 100, "el" : 104, "sc" : 3},  {"sl" : 117, "el" : 121, "sc" : 3},  {"sl" : 129, "el" : 133, "sc" : 3},  {"sl" : 141, "el" : 143, "sc" : 3},  {"sl" : 149, "el" : 163, "sc" : 3},  {"sl" : 152, "el" : 161, "sc" : 7}  ]}
    
 ]
};

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {
		"test_12" : {
					  "name" : "standardDelegation",
					  "pass" : true ,
					  "methods" : [{"sl": 141 },],
					  "statements" : [{"sl": 142 },]
					  },
		"test_2" : {
					  "name" : "serviceFilters",
					  "pass" : true ,
					  "methods" : [{"sl": 54 },{"sl": 58 },{"sl": 62 },],
					  "statements" : [{"sl": 56 },{"sl": 59 },{"sl": 63 },]
					  },
		"test_16" : {
					  "name" : "testAnnotations",
					  "pass" : true ,
					  "methods" : [{"sl": 54 },{"sl": 66 },{"sl": 78 },{"sl": 85 },],
					  "statements" : [{"sl": 56 },{"sl": 67 },{"sl": 79 },{"sl": 86 },]
					  },
		"test_21" : {
					  "name" : "run",
					  "pass" : true ,
					  "methods" : [{"sl": 54 },{"sl": 58 },{"sl": 62 },{"sl": 66 },{"sl": 78 },{"sl": 81 },{"sl": 85 },{"sl": 100 },{"sl": 117 },{"sl": 129 },{"sl": 141 },{"sl": 149 },{"sl": 152 },],
					  "statements" : [{"sl": 56 },{"sl": 59 },{"sl": 63 },{"sl": 67 },{"sl": 79 },{"sl": 82 },{"sl": 86 },{"sl": 103 },{"sl": 120 },{"sl": 132 },{"sl": 142 },{"sl": 151 },{"sl": 154 },{"sl": 157 },{"sl": 160 },]
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
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [ 21 , 16 , 2   ] ,
  [  ] ,
  [ 21 , 16 , 2   ] ,
  [  ] ,
  [ 21 , 2   ] ,
  [ 21 , 2   ] ,
  [  ] ,
  [  ] ,
  [ 21 , 2   ] ,
  [ 21 , 2   ] ,
  [  ] ,
  [  ] ,
  [ 21 , 16   ] ,
  [ 21 , 16   ] ,
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
  [ 21 , 16   ] ,
  [ 21 , 16   ] ,
  [  ] ,
  [ 21   ] ,
  [ 21   ] ,
  [  ] ,
  [  ] ,
  [ 21 , 16   ] ,
  [ 21 , 16   ] ,
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
  [ 21   ] ,
  [  ] ,
  [  ] ,
  [ 21   ] ,
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
  [ 21   ] ,
  [  ] ,
  [  ] ,
  [ 21   ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [ 21   ] ,
  [  ] ,
  [  ] ,
  [ 21   ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [ 21 , 12   ] ,
  [ 21 , 12   ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [ 21   ] ,
  [  ] ,
  [ 21   ] ,
  [ 21   ] ,
  [  ] ,
  [ 21   ] ,
  [  ] ,
  [  ] ,
  [ 21   ] ,
  [  ] ,
  [  ] ,
  [ 21   ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] 
];