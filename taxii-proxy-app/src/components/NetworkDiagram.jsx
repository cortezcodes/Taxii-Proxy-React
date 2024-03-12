import React, { useEffect, useRef, useState } from "react";
import StixParser from "../utils/StixParser";
import * as d3 from "d3";

/**
 * Force Simulator Component for display STIX objects in a network graph. 
 * @param {number} height - height dimension of network graph, defaults to 600
 * @param {number} width - width dimension of network graph, defaults to 800
 * @param {json} stixbundle - stix bundle to be processed into a network graph
 * @returns 
 */
function NetworkDiagram({height=600 , width=800, stixBundle}){
    const [data, setData] = useState(StixParser(stixBundle));
    

    // Grab the svg reference from the html
    const svgRef = useRef();

    useEffect(() => {
        //d3.js will mutate the links and nodes so it is good practice to make copies
        const links = data.links.map((l) => ({...l}));
        const nodes = data.nodes.map((n) => ({...n}));

        console.log(links);
        console.log(nodes);
        
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

        //Arrows for links
        svg.append("defs").selectAll("marker")
            .data(["arrow"])
            .enter().append("marker")
            .attr("id", function(d) { return d; })
            .attr("viewBox", "0 -5 10 10")
            .attr("refX", 20)
            .attr("refY", 0)
            .attr("markerWidth", 6)
            .attr("markerHeight", 6)
            .attr('orient', 'auto')
            .append("path")
            .attr("d", "M 0 ,-5 L 10 ,0 L 0, 5")

        // Add a line for each link, and a circle for each node
        const link = svg.append('g')
            .attr("stroke", "#999")
            .attr("stroke-opacity", 0.6)
            .selectAll()
            .data(links)
            .join("line")
            .attr("stroke-width", d => Math.sqrt(d.value))
            .attr('marker-end', 'url(#arrow)');

        const node = svg.append('g')
            .attr("stroke", "#fff")
            .attr("stroke-width", 1.5)
            .selectAll()
            .data(nodes)
            .join("circle")
            .attr("r", 10)
            .attr("fill", d => color(d.group));

        node.append("title")
            .text(d => d.id);
        
        return () => {
            simulation.stop();
        }
        
    }, [data, width, height]);


    return(
        <div className='network-diagram'>
            <svg className="network-svg" height={height} width={width} ref={svgRef}></svg>
        </div>
    )
}

export default NetworkDiagram;