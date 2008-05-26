var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = { "classes" : [
    {"id" : 337, "sl" : 30, "el" : 149, "name" : "ServiceLeasingTests",
    "methods" : [
              {"sl" : 62, "el" : 81, "sc" : 3},  {"sl" : 83, "el" : 99, "sc" : 3},  {"sl" : 101, "el" : 118, "sc" : 3},  {"sl" : 120, "el" : 133, "sc" : 3},  {"sl" : 135, "el" : 148, "sc" : 3}  ]}
    
 ]
};

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {
		"test_13" : {
					  "name" : "staticMultiService",
					  "pass" : true,
					  "methods" : [{"sl": 135 },],
					  "statements" : [{"sl": 136 },{"sl": 137 },{"sl": 138 },{"sl": 139 },{"sl": 140 },{"sl": 141 },{"sl": 142 },{"sl": 143 },{"sl": 144 },{"sl": 145 },{"sl": 146 },{"sl": 147 },]
					  },
		"test_4" : {
					  "name" : "staticUnaryService",
					  "pass" : true,
					  "methods" : [{"sl": 120 },],
					  "statements" : [{"sl": 121 },{"sl": 122 },{"sl": 123 },{"sl": 124 },{"sl": 125 },{"sl": 126 },{"sl": 127 },{"sl": 128 },{"sl": 129 },{"sl": 130 },{"sl": 131 },{"sl": 132 },]
					  },
		"test_16" : {
					  "name" : "unleasedUnaryService",
					  "pass" : true,
					  "methods" : [{"sl": 62 },],
					  "statements" : [{"sl": 63 },{"sl": 64 },{"sl": 65 },{"sl": 66 },{"sl": 67 },{"sl": 68 },{"sl": 69 },{"sl": 70 },{"sl": 71 },{"sl": 72 },{"sl": 73 },{"sl": 74 },{"sl": 75 },{"sl": 76 },{"sl": 77 },{"sl": 78 },{"sl": 79 },{"sl": 80 },]
					  },
		"test_3" : {
					  "name" : "leasedMultiService",
					  "pass" : true,
					  "methods" : [{"sl": 101 },],
					  "statements" : [{"sl": 102 },{"sl": 103 },{"sl": 104 },{"sl": 105 },{"sl": 106 },{"sl": 107 },{"sl": 108 },{"sl": 109 },{"sl": 110 },{"sl": 111 },{"sl": 112 },{"sl": 113 },{"sl": 114 },{"sl": 115 },{"sl": 116 },{"sl": 117 },]
					  },
		"test_17" : {
					  "name" : "leasedUnaryService",
					  "pass" : true,
					  "methods" : [{"sl": 83 },],
					  "statements" : [{"sl": 85 },{"sl": 86 },{"sl": 87 },{"sl": 88 },{"sl": 89 },{"sl": 90 },{"sl": 91 },{"sl": 92 },{"sl": 93 },{"sl": 94 },{"sl": 95 },{"sl": 96 },{"sl": 97 },{"sl": 98 },]
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
  [ 16   ] ,
  [ 16   ] ,
  [ 16   ] ,
  [ 16   ] ,
  [ 16   ] ,
  [ 16   ] ,
  [ 16   ] ,
  [ 16   ] ,
  [ 16   ] ,
  [ 16   ] ,
  [ 16   ] ,
  [ 16   ] ,
  [ 16   ] ,
  [ 16   ] ,
  [ 16   ] ,
  [ 16   ] ,
  [ 16   ] ,
  [ 16   ] ,
  [ 16   ] ,
  [  ] ,
  [  ] ,
  [ 17   ] ,
  [  ] ,
  [ 17   ] ,
  [ 17   ] ,
  [ 17   ] ,
  [ 17   ] ,
  [ 17   ] ,
  [ 17   ] ,
  [ 17   ] ,
  [ 17   ] ,
  [ 17   ] ,
  [ 17   ] ,
  [ 17   ] ,
  [ 17   ] ,
  [ 17   ] ,
  [ 17   ] ,
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
  [ 3   ] ,
  [ 3   ] ,
  [ 3   ] ,
  [ 3   ] ,
  [ 3   ] ,
  [  ] ,
  [  ] ,
  [ 4   ] ,
  [ 4   ] ,
  [ 4   ] ,
  [ 4   ] ,
  [ 4   ] ,
  [ 4   ] ,
  [ 4   ] ,
  [ 4   ] ,
  [ 4   ] ,
  [ 4   ] ,
  [ 4   ] ,
  [ 4   ] ,
  [ 4   ] ,
  [  ] ,
  [  ] ,
  [ 13   ] ,
  [ 13   ] ,
  [ 13   ] ,
  [ 13   ] ,
  [ 13   ] ,
  [ 13   ] ,
  [ 13   ] ,
  [ 13   ] ,
  [ 13   ] ,
  [ 13   ] ,
  [ 13   ] ,
  [ 13   ] ,
  [ 13   ] ,
  [  ] ,
  [  ] 
];
