
console.log(input_a.value)

function update(){
    // y = a (x-c) + b
    var x0 = 0;
    var y0 = Number(input_a.value)*(50-Number(input_c.value)) + Number(input_b.value) +50;
    var x1 = 100;
    var y1 = Number(input_a.value)*(-50-Number(input_c.value)) + Number(input_b.value) +50;
    console.log(input_a.value, input_b.value, input_c.value)
    var dx = x1-x0;
    var dy = y1-y0;
    line.outerHTML = `<path style="stroke:#000000;stroke-width:0.3;stroke-linecap:round" d="m ${x0},${y0} ${dx},${dy}" id="line" sodipodi:nodetypes="cc"></path>`;

}