let nfts = [];

function mintNFT(name, artist, dateCreated, description) {
   
    let nft = {
        name: name,
        artist: artist,
        dateCreated: dateCreated,
        description: description
    };
    
    nfts.push(nft);
}


function listNFTs() {

    for (let i = 0; i < nfts.length; i++) {
        console.log(`Name: ${nfts[i].name}`);
        console.log(`Artist: ${nfts[i].artist}`);
        console.log(`Date Created: ${nfts[i].dateCreated}`);
        console.log(`Description: ${nfts[i].description}`);
        console.log('----------------------');
    }
}


function getTotalSupply() {
 
    return nfts.length;
}

mintNFT("Sunset Overdrive", "Jane Doe", "2024-05-29", "A beautiful sunset over the mountains.");
mintNFT("Sea to Heaven", "John Smith", "2024-05-30", "A refreshing view of the sea during sunrise.");
mintNFT("Urban Spectrum", "Alice Johnson", "2024-06-01", "A stunning depiction of city lights at night.");
mintNFT("Stary Night", "Arun", "2024-06-07", "A stunning depiction of stars in the clear sky.");


listNFTs();

console.log(`Total Supply: ${getTotalSupply()}`);
