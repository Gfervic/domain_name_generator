let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let extensions = [".com", ".net", ".us", ".io"];

// Different order than expected

// for (let i = 0; i < pronoun.length; i++) {
//   for (let j = 0; j < adj.length; j++) {
//     for (let y = 0; y < noun.length; y++) {
//         console.log(pronoun[i] + adj[j] + noun[y]);
//     }
//   }
// }

const generateDomain = (extArr) => {
  randDomain = Math.floor(Math.random() * extArr.length);
  return extArr[randDomain];
};

// console.log(generateDomain());

for (let i = 0; i < adj.length; i++) {
  for (let j = 0; j < pronoun.length; j++) {
    for (let y = 0; y < noun.length; y++) {
        console.log(pronoun[j] + adj[i] + noun[y] + generateDomain(extensions));
    }
  }
}

// Expected solution

// thegreatjogger.com
// thegreatracoon.com
// ourgreatjogger.com
// ourgreatracoon.com
// thebigjogger.com
// thebigracoon.com
// ourbigjogger.com
// ourbigracoon.com
