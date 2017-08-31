var Puzzle =
[
    {s:{x:[0],      y:[0],      z:[0,1]},       p:{x:1, y:0, z:1},  d:{x:1, y:0, z:0},  c:"#0E4A2A"},
    {s:{x:[0],      y:[0,1],    z:[0,1]},       p:{x:1, y:0, z:1},  d:{x:1, y:0, z:0},  c:"#164080"},
    {s:{x:[0],      y:[0],      z:[0]},         p:{x:0, y:1, z:0},  d:{x:0, y:1, z:0},  c:"#5B249A"},
    {s:{x:[0],      y:[0],      z:[0,1]},       p:{x:1, y:0, z:1},  d:{x:1, y:0, z:0},  c:"#142176"},

    {s:{x:[0],      y:[0,1],    z:[0]},         p:{x:-1, y:0, z:0}, d:{x:-1, y:0, z:0}, c:"#BD0C0C"},
    {s:{x:[0,1],    y:[0],      z:[0,1]},       p:{x:2, y:0, z:2},  d:{x:1, y:0, z:0},  c:"#E2EE3B"},
    {s:{x:[0],      y:[0,1],    z:[0]},         p:{x:0, y:2, z:0},  d:{x:0, y:1, z:0},  c:"#EEAC3B"},
    {s:{x:[0],      y:[0],      z:[0]},         p:{x:0, y:0, z:1},  d:{x:0, y:0, z:1},  c:"#F05203"},

    {s:{x:[0,1],    y:[0,1],    z:[0]},         p:{x:0, y:2, z:0},  d:{x:0, y:1, z:0},  c:"#AC243F"},
    {s:{x:[0],      y:[0,1],    z:[0]},         p:{x:1, y:0, z:0},  d:{x:1, y:0, z:0},  c:"#7A0B37"},
    {s:{x:[0],      y:[0,1],    z:[0]},         p:{x:0, y:2, z:0},  d:{x:0, y:1, z:0},  c:"#ABDF66"},
    {s:{x:[0],      y:[0],      z:[0]},         p:{x:0, y:1, z:0},  d:{x:0, y:1, z:0},  c:"#317A06"},
];

var size = 20;
var StartLocation = {
    x: size/2,
    y: size/2,
    z: size/2,
    d: {x:1, y:0, z:0},
};

var CubeVertex =
[
    {x:0, y:0, z:0}, //0
    {x:0, y:0, z:1}, //1
    {x:0, y:1, z:0}, //2
    {x:0, y:1, z:1}, //3
    {x:1, y:0, z:0}, //4
    {x:1, y:0, z:1}, //5
    {x:1, y:1, z:0}, //6
    {x:1, y:1, z:1}  //7
];

var CubeFaces =
[
    {a:0, b:1, c:3, d: 2, i:0},
    {a:4, b:5, c:7, d: 6, i:1},

    {a:0, b:1, c:5, d: 4, i:2},
    {a:2, b:3, c:7, d: 6, i:3},

    {a:0, b:2, c:6, d: 4, i:4},
    {a:1, b:3, c:7, d: 5, i:5}
];
