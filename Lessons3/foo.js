var body = d3.select('body');

body.append('div')
        .attr("id","header")
    .append('p')
        .text("Is this a circle?")

body.append('svg')
        .attr('width',500)
        .attr('height',40)
    .append('circle')
        .attr('r',20)
        .attr('cx',50)
        .attr('cy',20);

body.append('div')
        .attr('class', 'footer')
    .append('p')
        .text("Yeah, looks like it")
