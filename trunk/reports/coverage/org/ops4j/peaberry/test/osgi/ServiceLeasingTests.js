var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = { "classes" : [
    {"id" : 232, "sl" : 35, "el" : 155, "name" : "ServiceLeasingTests",
    "methods" : [
              {"sl" : 38, "el" : 54, "sc" : 3},  {"sl" : 75, "el" : 87, "sc" : 3},  {"sl" : 89, "el" : 102, "sc" : 3},  {"sl" : 104, "el" : 122, "sc" : 3},  {"sl" : 124, "el" : 138, "sc" : 3},  {"sl" : 140, "el" : 154, "sc" : 3}  ]}
    
 ]
};

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {
		"test_3" : {
					  "name" : "unleasedUnaryService",
					  "pass" : true,
					  "methods" : [{"sl": 75 },],
					  "statements" : [{"sl": 76 },{"sl": 77 },{"sl": 78 },{"sl": 79 },{"sl": 80 },{"sl": 81 },{"sl": 82 },{"sl": 83 },{"sl": 84 },{"sl": 85 },{"sl": 86 },]
					  },
		"test_1" : {
					  "name" : "leasedUnaryService",
					  "pass" : true,
					  "methods" : [{"sl": 89 },],
					  "statements" : [{"sl": 90 },{"sl": 91 },{"sl": 92 },{"sl": 93 },{"sl": 94 },{"sl": 95 },{"sl": 96 },{"sl": 97 },{"sl": 98 },{"sl": 99 },{"sl": 100 },{"sl": 101 },]
					  },
		"test_0" : {
					  "name" : "staticUnaryService",
					  "pass" : true,
					  "methods" : [{"sl": 124 },],
					  "statements" : [{"sl": 125 },{"sl": 126 },{"sl": 127 },{"sl": 128 },{"sl": 129 },{"sl": 130 },{"sl": 131 },{"sl": 132 },{"sl": 133 },{"sl": 134 },{"sl": 135 },{"sl": 136 },{"sl": 137 },]
					  },
		"test_9" : {
					  "name" : "staticMultiService",
					  "pass" : true,
					  "methods" : [{"sl": 140 },],
					  "statements" : [{"sl": 141 },{"sl": 142 },{"sl": 143 },{"sl": 144 },{"sl": 145 },{"sl": 146 },{"sl": 147 },{"sl": 148 },{"sl": 149 },{"sl": 150 },{"sl": 151 },{"sl": 152 },{"sl": 153 },]
					  },
		"test_7" : {
					  "name" : "leasedMultiService",
					  "pass" : true,
					  "methods" : [{"sl": 104 },],
					  "statements" : [{"sl": 105 },{"sl": 106 },{"sl": 107 },{"sl": 108 },{"sl": 109 },{"sl": 110 },{"sl": 111 },{"sl": 112 },{"sl": 113 },{"sl": 114 },{"sl": 115 },{"sl": 116 },{"sl": 117 },{"sl": 118 },{"sl": 119 },{"sl": 120 },{"sl": 121 },]
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
  [ 3   ] ,
  [ 3   ] ,
  [ 3   ] ,
  [ 3   ] ,
  [ 3   ] ,
  [ 3   ] ,
  [ 3   ] ,
  [ 3   ] ,
  [ 3   ] ,
  [ 3   ] ,
  [ 3   ] ,
  [ 3   ] ,
  [  ] ,
  [  ] ,
  [ 1   ] ,
  [ 1   ] ,
  [ 1   ] ,
  [ 1   ] ,
  [ 1   ] ,
  [ 1   ] ,
  [ 1   ] ,
  [ 1   ] ,
  [ 1   ] ,
  [ 1   ] ,
  [ 1   ] ,
  [ 1   ] ,
  [ 1   ] ,
  [  ] ,
  [  ] ,
  [ 7   ] ,
  [ 7   ] ,
  [ 7   ] ,
  [ 7   ] ,
  [ 7   ] ,
  [ 7   ] ,
  [ 7   ] ,
  [ 7   ] ,
  [ 7   ] ,
  [ 7   ] ,
  [ 7   ] ,
  [ 7   ] ,
  [ 7   ] ,
  [ 7   ] ,
  [ 7   ] ,
  [ 7   ] ,
  [ 7   ] ,
  [ 7   ] ,
  [  ] ,
  [  ] ,
  [ 0   ] ,
  [ 0   ] ,
  [ 0   ] ,
  [ 0   ] ,
  [ 0   ] ,
  [ 0   ] ,
  [ 0   ] ,
  [ 0   ] ,
  [ 0   ] ,
  [ 0   ] ,
  [ 0   ] ,
  [ 0   ] ,
  [ 0   ] ,
  [ 0   ] ,
  [  ] ,
  [  ] ,
  [ 9   ] ,
  [ 9   ] ,
  [ 9   ] ,
  [ 9   ] ,
  [ 9   ] ,
  [ 9   ] ,
  [ 9   ] ,
  [ 9   ] ,
  [ 9   ] ,
  [ 9   ] ,
  [ 9   ] ,
  [ 9   ] ,
  [ 9   ] ,
  [ 9   ] ,
  [  ] ,
  [  ] 
];
