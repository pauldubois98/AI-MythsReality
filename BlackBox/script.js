
function update(width=0.8){
    // y = a (x-c) + b
    var x0 = 0;
    var y0 = Number(Math.tan(input_a.value))*(50-Number(input_c.value)) + Number(input_b.value) +50;
    var x1 = 100;
    var y1 = Number(Math.tan(input_a.value))*(-50-Number(input_c.value)) + Number(input_b.value) +50;
    var dx = x1-x0;
    var dy = y1-y0;
    line.outerHTML = `<path style="stroke:#000000;stroke-width:${width};stroke-linecap:round" d="m ${x0},${y0} ${dx},${dy}" id="line" sodipodi:nodetypes="cc"></path>`;
}

update();
