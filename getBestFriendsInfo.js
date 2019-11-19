const makeStucture = require("./src/getBestFriendInfoFuncs.js").makeStucture; 
const getFriendsInfo = require("./src/getBestFriendInfoFuncs.js").getFriendsInfo;


const main = function(){
  const nameAndInfo = [["Priyanshu","Sahil","Shanti","Ragini"],
    ["Rashmi","Pallav","Pallavi","Pallabi"],
    ["Sita","Janaka","Janaki","Rashmi"],
    ["Ragini","Rajender","Tejinder","Priyanshu"],
    ["Pallabi","Satyan","Subha","Priyanshu"]];
  const newInfo = (nameAndInfo.reduce(makeStucture ,{}));
  const name = (process.argv).slice(2);
  const infoList = getFriendsInfo(newInfo, name);
console.log("Bestfriend's name : ", infoList[0]);
console.log(infoList[0] ,"'s Father's name : ", infoList[1]);
console.log(infoList[0], "'s Mother's name : ", infoList[2]);
console.log(infoList[0], "'s Bestfriend's name : ", infoList[3]);
};

main();
