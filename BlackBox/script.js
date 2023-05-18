
console.log(input_a.value)

function update(){
    var x0 = 0;
    var y0 = 0;
    var x1 = 100;
    var y1 = 10;
    var dx = x1-x0;
    var dy = y1-y0;
    line.outerHTML = `<path style="stroke:#000000;stroke-width:0.3;stroke-linecap:round" d="m ${x0},${y0} ${dx},${dy}" id="line" sodipodi:nodetypes="cc"></path>`;

}