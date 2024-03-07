/**
 * Takes in stix bundle, parses the bundle down to SDO and SRO, and returns SDOs as nodes and SROs as links 
 * @param {json} stixBundle Stix bundle object
 */
function StixParser(stixBundle){
    console.log(stixBundle);

    const nodes = parseNodes(stixBundle);
    const links = parseLinks(stixBundle);

    return {nodes : nodes, links : links};
}

/**
 * Parse STIX bundle SDOs into node objects for network graph
 * @param {json} bundle Stix bundle for  
 */
function parseNodes(bundle){
    const nodes = [];
    bundle.objects.forEach(obj => {
        if(obj.type !== "relationship" && obj.type !== "sighting"){
            nodes.push({
                "id" : obj.id, 
                "type" : obj.type 
            });
        }
    });
    return nodes;
}

/**
 * Parse STIX bundle SROs into link objects for network graph
 * @param {json} bundle 
 */
function parseLinks(bundle){
    const links = [];
    bundle.objects.forEach(obj => {
        if(obj.type === "relationship"){
            links.push({
                "source": obj.source_ref,
                "target": obj.target_ref,
                "value": obj.relationship_type, 
            });
        }
        else if(obj.type === "sighting"){ // TODO How to handle sightings
            links.push({
                "source": obj.sighting_of_ref,
                "target": obj.sighting_of_ref,
                "value": obj.type, 
            });
        }
    });

    return links;
}

export default StixParser;