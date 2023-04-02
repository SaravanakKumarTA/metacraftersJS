/* 
// Metacrafters - Beginning Javascript
//
// This is a javascript playground for testing your javascript code!
// When you are ready to test, simply right click and select "Run Code"
// to see the result print below. If you have more then one snippet of code,
// you can highlight the code you want to test, and then right click and select "Run Code"
*/

// Enter your code below this line

var nfts=[];

async function mintNFT (_name,_eyeColor,_shirtType,_bling) {
    const nft ={
    "name":_name,
    "eyeColor":_eyeColor,
    "shirtType":_shirtType,
    "bling":_bling,

    }
    console.log("\n\tMinted "+nft.name );
    nfts.push(nft);
    
}

function listNFTs () {
    nfts.map((nft,ind)=>{
        console.log("\n=============================================")
        console.log("\n\tItem no "+(ind+1));
        console.log("\t\tname \t\t: "+ nft.name);
        console.log("\t\tshirt type\t: "+ nft.shirtType);
        console.log("\t\teyeColor \t: "+ nft.eyeColor);
        console.log("\t\tbling \t\t: "+ nft.bling);
            
    });
    console.log("\n=============================================")
}


function getTotalSupply() {
    console.log("\n                   ============                ");
    console.log("\n\n\t\t\t  Total NFT(s) available are "+nfts.length);
    console.log("\n                   ============                ");
}

mintNFT("abc","T-Shirt","blue","Gold Tooth");
mintNFT("def","Polo Shirt","black","gold chain");
mintNFT("ghi","office Shirt","grey","ring");
getTotalSupply();
listNFTs();
