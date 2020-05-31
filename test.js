const treeBrowser = require("treebrowser")

const WKTStringQuery = treeBrowser.WKTStringQuery
const BtreePrefixQuery = treeBrowser.BTreePrefixQuery
const PrefixQuery = treeBrowser.PrefixQuery

let locationClient25URI = 'http://193.190.127.164/locationdata25/node0.jsonld#Collection';
let locationClient100URI = 'http://193.190.127.164/locationdata100/node0.jsonld#Collection';

let prefix25URI = 'http://193.190.127.164/streetsprefixtest/25/node0.jsonld#Collection';
let prefix100URI = 'http://193.190.127.164/streetsprefixtest/100/node0.jsonld#Collection';

let btreeprefix25URI = 'http://193.190.127.164/streetsbtreetest/25/node0.jsonld#Collection';
let btreeprefix100URI = 'http://193.190.127.164/streetsbtreetest/100/node0.jsonld#Collection';


// let prefixshaclpath = ["http://xmlns.com/foaf/0.1/name"];
let wktshaclpath = ["https://data.vlaanderen.be/ns/adres#positie", "http://www.opengis.net/ont/geosparql#asWKT"]
let prefixshaclpath = ["http://www.w3.org/2000/01/rdf-schema#label"];

let wktCLient = new treeBrowser.WKTClient()
let acClient = new treeBrowser.AutocompleteClient()

wktCLient.on("member", (member) =>{
  console.log("wktmember", member)
});

acClient.on("member", (member) =>{
  console.log("acmember", member)
});



  // let prefix = "Si"
  let wktvalue = "POLYGON((3.6960303783416757 51.037258507668014,3.6993670463562016 51.03681998621971,3.6993134021759038 51.03567306434908,3.695740699768067 51.035659570981665,3.69516134262085 51.03688745132803,3.6960303783416757 51.037258507668014))"

  let prefixvalue = "Sint-Denijslaan"
  // await client.query(prefix, PrefixQuery, shaclpath, collectionUrl)
  

  async function main(){
    // await wktCLient.query(wktvalue, WKTStringQuery, wktshaclpath, locationClient25URI, 25)
    // await wktCLient.query(wktvalue, WKTStringQuery, wktshaclpath, locationClient100URI, 25)


    await acClient.query(prefixvalue, PrefixQuery, prefixshaclpath, prefix25URI, 25)
    // await acClient.query(prefixvalue, PrefixQuery, prefixshaclpath, prefix100URI, 25)

    // await acClient.query(prefixvalue, BtreePrefixQuery, prefixshaclpath, btreeprefix25URI, 25)
    // await acClient.query(prefixvalue, BtreePrefixQuery, prefixshaclpath, btreeprefix100URI, 25)
  }


  main();