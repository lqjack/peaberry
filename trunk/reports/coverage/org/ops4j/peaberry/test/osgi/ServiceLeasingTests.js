var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = { "classes" : [
    {"id" : 311, "sl" : 33, "el" : 142, "name" : "ServiceLeasingTests",
    "methods" : [
              {"sl" : 56, "el" : 75, "sc" : 3},  {"sl" : 77, "el" : 92, "sc" : 3},  {"sl" : 94, "el" : 111, "sc" : 3},  {"sl" : 113, "el" : 126, "sc" : 3},  {"sl" : 128, "el" : 141, "sc" : 3}  ]}
    
 ]
};

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {
		"test_18" : {
					  "name" : "leasedMultiService",
					  "pass" : true,
					  "methods" : [{"sl": 94 },],
					  "statements" : [{"sl": 95 },{"sl": 96 },{"sl": 97 },{"sl": 98 },{"sl": 99 },{"sl": 100 },{"sl": 101 },{"sl": 102 },{"sl": 103 },{"sl": 104 },{"sl": 105 },{"sl": 106 },{"sl": 107 },{"sl": 108 },{"sl": 109 },{"sl": 110 },]
					  },
		"test_6" : {
					  "name" : "unleasedUnaryService",
					  "pass" : true,
					  "methods" : [{"sl": 56 },],
					  "statements" : [{"sl": 57 },{"sl": 58 },{"sl": 59 },{"sl": 60 },{"sl": 61 },{"sl": 62 },{"sl": 63 },{"sl": 64 },{"sl": 65 },{"sl": 66 },{"sl": 67 },{"sl": 68 },{"sl": 69 },{"sl": 70 },{"sl": 71 },{"sl": 72 },{"sl": 73 },{"sl": 74 },]
					  },
		"test_12" : {
					  "name" : "staticMultiService",
					  "pass" : true,
					  "methods" : [{"sl": 128 },],
					  "statements" : [{"sl": 129 },{"sl": 130 },{"sl": 131 },{"sl": 132 },{"sl": 133 },{"sl": 134 },{"sl": 135 },{"sl": 136 },{"sl": 137 },{"sl": 138 },{"sl": 139 },{"sl": 140 },]
					  },
		"test_16" : {
					  "name" : "staticUnaryService",
					  "pass" : true,
					  "methods" : [{"sl": 113 },],
					  "statements" : [{"sl": 114 },{"sl": 115 },{"sl": 116 },{"sl": 117 },{"sl": 118 },{"sl": 119 },{"sl": 120 },{"sl": 121 },{"sl": 122 },{"sl": 123 },{"sl": 124 },{"sl": 125 },]
					  },
		"test_15" : {
					  "name" : "leasedUnaryService",
					  "pass" : true,
					  "methods" : [{"sl": 77 },],
					  "statements" : [{"sl": 78 },{"sl": 79 },{"sl": 80 },{"sl": 81 },{"sl": 82 },{"sl": 83 },{"sl": 84 },{"sl": 85 },{"sl": 86 },{"sl": 87 },{"sl": 88 },{"sl": 89 },{"sl": 90 },{"sl": 91 },]
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
  [ 6   ] ,
  [ 6   ] ,
  [ 6   ] ,
  [ 6   ] ,
  [ 6   ] ,
  [ 6   ] ,
  [ 6   ] ,
  [ 6   ] ,
  [ 6   ] ,
  [ 6   ] ,
  [ 6   ] ,
  [ 6   ] ,
  [ 6   ] ,
  [ 6   ] ,
  [ 6   ] ,
  [ 6   ] ,
  [ 6   ] ,
  [ 6   ] ,
  [ 6   ] ,
  [  ] ,
  [  ] ,
  [ 15   ] ,
  [ 15   ] ,
  [ 15   ] ,
  [ 15   ] ,
  [ 15   ] ,
  [ 15   ] ,
  [ 15   ] ,
  [ 15   ] ,
  [ 15   ] ,
  [ 15   ] ,
  [ 15   ] ,
  [ 15   ] ,
  [ 15   ] ,
  [ 15   ] ,
  [ 15   ] ,
  [  ] ,
  [  ] ,
  [ 18   ] ,
  [ 18   ] ,
  [ 18   ] ,
  [ 18   ] ,
  [ 18   ] ,
  [ 18   ] ,
  [ 18   ] ,
  [ 18   ] ,
  [ 18   ] ,
  [ 18   ] ,
  [ 18   ] ,
  [ 18   ] ,
  [ 18   ] ,
  [ 18   ] ,
  [ 18   ] ,
  [ 18   ] ,
  [ 18   ] ,
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
  [  ] ,
  [  ] ,
  [ 12   ] ,
  [ 12   ] ,
  [ 12   ] ,
  [ 12   ] ,
  [ 12   ] ,
  [ 12   ] ,
  [ 12   ] ,
  [ 12   ] ,
  [ 12   ] ,
  [ 12   ] ,
  [ 12   ] ,
  [ 12   ] ,
  [ 12   ] ,
  [  ] ,
  [  ] 
];
