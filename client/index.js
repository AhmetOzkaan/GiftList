const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';

async function checkGift(name) {
  const merkleTree = new MerkleTree(niceList);
  const proof = merkleTree.getProof(niceList.findIndex(line => line === name));

  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    proof,
    name
  });

  console.log(name + ": " + gift);
}

checkGift("Roy Blick");
checkGift("Ray Blick");
checkGift("Horace Larkin DVM");
checkGift("Ahmet");
