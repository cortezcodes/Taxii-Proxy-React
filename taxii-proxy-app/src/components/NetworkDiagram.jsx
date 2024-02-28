import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

function NetworkDiagram({height=600 , width=800}){

    
    const data = {
        nodes : [
            {id:"James", group:"team 1"},
            {id:"Alex", group:"team 1"},
            {id:"Mark", group:"team 1"},
        ],
        links : [
            {source: "James", target:"Alex", value: "Friends"},
            {source: "Alex", target:"Mark", value:"Hates"}
        ]
    };

    //d3.js will mutate the links and nodes so it is good practice to make copies
    const links = data.links.map((l) => ({...l}));
    const nodes = data.nodes.map((n) => ({...n}));
    console.log(nodes);
    // Grab the svg reference from the html
    const svgRef = useRef();

    useEffect(() => {
        const svg = d3.select(svgRef.current);
        const color = d3.scaleOrdinal(d3.schemeCategory10);

        d3.select(svgRef.current).selectAll("*").remove();


        // Setup Simulaton
        const simulation = d3.forceSimulation(nodes)
            .force('link', d3.forceLink(links).id((d) => d.id))
            .force('charge', d3.forceManyBody())
            .force('center', d3.forceCenter(width/2,height/2))
            .on("tick", () => {
                link.attr('x1', d => d.source.x)
                    .attr('y1', d => d.source.y)
                    .attr('x2', d => d.target.x)
                    .attr('y2', d => d.target.y);
            
                node.attr('cx', d => d.x)
                    .attr('cy', d => d.y);
            });

        // Add a line for each link, and a circle for each node
        const link = svg.append('g')
            .attr("stroke", "#999")
            .attr("stroke-opacity", 0.6)
            .selectAll()
            .data(links)
            .join("line")
            .attr("stroke-width", d => Math.sqrt(d.value));

        const node = svg.append('g')
            .attr("stroke", "#fff")
            .attr("stroke-width", 1.5)
            .selectAll()
            .data(nodes)
            .join("circle")
            .attr("r", 5)
            .attr("fill", d => color(d.group));

        node.append("title")
            .text(d => d.id);
        
        return () => {
            simulation.stop();
        }
        
    }, [nodes, links, width, height]);


    return(
        <div className='network-diagram'>
            <svg className="network-svg" height={height} width={width} ref={svgRef}></svg>
        </div>
    )
}

export default NetworkDiagram;