const PTS = [
    [-46, 23],
    [-39, 16],
    [-33, 12],
    [-24,  7],
    [-14, -2],
    [-3 ,-10],
    [15 ,-22],
    [25 ,-32],
    [33 ,-38],
    [44 ,-44],
];
var A,B;

function update(width=0.8){
    // y = a (x-c) + b
    var x0 = 0;
    A = Number(Math.tan(input_a.value));
    B = A*Number(input_c.value) + Number(input_b.value)
    var y0 = A*(50+Number(input_c.value)) + Number(input_b.value) +50;
    var x1 = 100;
    var y1 = A*(-50+Number(input_c.value)) + Number(input_b.value) +50;
    var dx = x1-x0;
    var dy = y1-y0;
    line.outerHTML = `<path style="stroke:#000000;stroke-width:${width};stroke-linecap:round" d="m ${x0},${y0} ${dx},${dy}" id="line" sodipodi:nodetypes="cc"></path>`;
}

function check_points(){
    test_pts_main.innerHTML = "";
    // normal to line, length 1
    const N = [1/Math.sqrt(A*A + 1), A/Math.sqrt(A*A + 1)];
    // vector belonging to the line
    const Q = [0,B];
    for (let i = 0; i < PTS.length; i++) {
        const P = PTS[i];
        // V = P-Q
        const V = [P[0]-Q[0], P[1]-Q[1]];
        // N.V = |N|*|V|*cos(N_V)
        // d = |V|*cos(N_V) = N.V/|N|
        // as |N|=1, d=N.V
        const d = N[0]*V[0] +  N[1]*V[1];
        test_pts_main.innerHTML += `<ellipse style="fill:#00ff00" cx="${P[0]+50}" cy="${P[1]+50}" rx="2" ry="2"></ellipse>\n`
    }
}

// input_a.value = Math.atan(0.75)
// input_c.value = 30
// input_b.value = -35
// A = 0.7578402271487685
// B = -12.264793185536945
// Y = A*X + B
update();
check_points();