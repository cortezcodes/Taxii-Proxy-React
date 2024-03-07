/**
 * Takes in stix bundle, parses the bundle down to SDO and SRO, and returns SDOs as nodes and SROs as links 
 * @param {json} stixBundle Stix bundle object
 */
function StixParser(stixBundle){
    console.log(stixBundle);

    const nodes = parseNodes(stixBundle);
    const links = parseLinks(stixBundle);

    return {nodes, links};
}

/**
 * Parse STIX bundle SDOs into node objects for network graph
 * @param {json} bundle Stix bundle for  
 */
function parseNodes(bundle){
    
}

/**
 * Parse STIX bundle SROs into link objects for network graph
 * @param {json} bundle 
 */
function parseLinks(bundle){
    const nodes = {nodes : {}};
    
}

export default StixParser;