import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

function ticked(node, link){
    link.attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y);
    
    node.attr('cx', d => d.x)
        .attr('cy', d => d.y);
}

function NetworkDiagram({height=200 , width=400}){

    const nodes = [
        {id:"James", group:"team 1"},
        {id:"Alex", group:"team 1"},
        {id:"Mark", group:"team 1"},
    ];
    
    const links = [
        {source: "James", target:"Alex", value: "Friends"},
        {source: "Alex", target:"Mark", value:"Hates"}
    ];

    const svgRef = useRef();

    useEffect(() => {
        const svg = d3.select(svgRef.current);
        svg.selectAll('*').remove();

        // Setup Simulaton
        const simulation = d3.forceSimulation(nodes)
        .force('link', d3.forceLink(links).id(d => d.id).distance(50))
        .force('charge', d3.forceManyBody())
        .force('center', d3.forceCenter(width/2, height/2));

        // Draw Links
        const link = svg.selectAll('.link')
            .data(links)
            .enter()
            .append('line')
            .attr('class', 'link');

        // Draw Nodes
        const node = svg.selectAll('.node')
            .data(nodes)
            .enter()
            .append('circle')
            .attr('class', 'node')
            .attr('r', 10)
            .attr('fill', 'steelblue')
            .call(d3.drag()
                .on('start',dragStarted)
                .on('drag', dragged)
                .on('end', dragEnded));
        
        node.append('title').text(d => d.id);

        // Update positions on tick
        simulation.on('tick', ticked(node, link));

        simulation.force('link').links(links);

        //enable zoom and pan
        svg.call(d3.zoom()
            .extent([[0,0], [width, height]])
            .scaleExtent([0.1, 4])
            .on('zoom', zoomed));

        function zoomed(event) {
            svg.selectAll('.nodes, .links')
                .attr('transform', event.transform);
        }

        function dragStarted(event) {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            event.subject.fx = event.subject.x;
            event.subject.fy = event.subject.y;
          }
      
          function dragged(event) {
            event.subject.fx = event.x;
            event.subject.fy = event.y;
          }
      
          function dragEnded(event) {
            if (!event.active) simulation.alphaTarget(0);
            event.subject.fx = null;
            event.subject.fy = null;
          }
        
    }, [nodes, links, width, height]);

    return(
        <div className='network-diagram'>
            <svg ref={svgRef} width={800} height={400}></svg>
        </div>
    )
}

export default NetworkDiagram;