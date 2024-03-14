import React, { useEffect, useState } from "react";
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
    // const svgRef = useRef();

    useEffect(() => {
        //d3.js will mutate the links and nodes so it is good practice to make copies
        const links = data.links.map((l) => ({...l}));
        const nodes = data.nodes.map((n) => ({...n}));

        // Grab svg Container
        const svgContainer = d3.select('#network-diagram');
        const containerWidth = svgContainer.node().getBoundingClientRect().width;
        const containerHeight = svgContainer.node().getBoundingClientRect().height;

        //Create SVG
        const svg = svgContainer.append("svg")
        .attr("height", "100%")
        .attr("width", "100%")
        .attr("viewbox",`0 0 ${containerWidth} ${containerHeight}`);

        //append a g to svg. This will help with zoom and pan
        const container = svg.append('g');

        //create zoom handler
        const zoomed = d3.zoom()
            .scaleExtent([1, 8])
            .on("zoom", (e) => {
                container.attr('transform', e.transform);
            });


 
        //Create Drag functions
        const dragStart = (e, d) => {
            if(!e.active){
                simulation.alphaTarget(0.7).restart();
            }
            d.fx = d.x;
            d.fy = d.yl
        };

        const dragged = (e, d) => {
            d.fx = e.x;
            d.fy = e.y
        };

        const dragEnd = (e,d) =>{
            if(!e.active){
                simulation.alphaTarget(0);
            }
            d.fx = null;
            d.fy = null;
        };
        const drag = d3.drag()
            .on("start", dragStart)
            .on("drag", dragged)
            .on("end", dragEnd);
    

        //Add zoom feature to SVG
        svg.call(zoomed);

        // Setup Simulaton
        const simulation = d3.forceSimulation(nodes)
            .force('link', d3.forceLink(links).id((d) => d.id))
            .force('charge', d3.forceManyBody().strength(-1000))
            .force('center', d3.forceCenter(containerWidth/2, 250))
            .force('collide', d3.forceCollide().radius(30))
            .on("tick", () => {
                link.attr('x1', d => d.source.x)
                    .attr('y1', d => d.source.y)
                    .attr('x2', d => d.target.x)
                    .attr('y2', d => d.target.y);
            
                node.attr('transform', d => `translate(${d.x}, ${d.y})`);
            });
            
    //Arrows for links
        container.append("defs").selectAll("marker")
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
        const link = container.append('g')
            .attr("stroke", "#999")
            .attr("stroke-opacity", 0.6)
            .selectAll()
            .data(links)
            .join("line")
            .attr("stroke-width", d => Math.sqrt(d.value))
            .attr('marker-end', 'url(#arrow)');

        const node = container.append('g')
            .selectAll(".node")
            .data(nodes)
            .join("g")
                .attr('class', 'node')
                .call(drag);

        node.append("circle")
            .attr("r", 6)
            .attr("fill", d => "#4780c0");

        node.append('text')
            .text(d => d.name)
            .style('fill', '#000')
            .attr("font-size", '8px');


        return () => {
            svgContainer.selectAll('*').remove();
            simulation.stop();
        }
        
    }, [data, width, height]);


    return(
        <div id='network-diagram'>         
        </div>
    )
}

export default NetworkDiagram;