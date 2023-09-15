// JavaScript with D3.js (Include D3.js library in your HTML)
const dataset = [30, 50, 70, 90, 110];

const svg = d3.select('svg');
const circles = svg.selectAll('circle').data(dataset);

circles
    .enter()
    .append('circle')
    .attr('cx', (d, i) => i * 50 + 50)
    .attr('cy', (d) => 100 - d)
    .attr('r', (d) => d)
    .style('fill', 'blue');
