const PTS = [
    [-46, 23],
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
    for (let i = 0; i < PTS.length; i++) {
        const pt = PTS[i];
        test_pts_main.innerHTML += `<ellipse style="fill:#00ff00" cx="${pt[0]+50}" cy="${pt[1]+50}" rx="3" ry="3"></ellipse>\n`
    }
}


update();
