const nameAndInfo = [["Priyanshu","Sahil","Shanti","Ragini"],
  ["Rashmi","Pallav","Pallavi","Pallabi"],
  ["Sita","Janaka","Janaki","Rashmi"],
  ["Ragini","Rajender","Tejinder","Priyanshu"],
  ["Pallabi","Satyan","Subha","Priyanshu"]];

const makeStucture = function(previousList, nameAndInfoList){
  previousList[nameAndInfoList[0]] = {father : nameAndInfoList[1], mother : nameAndInfoList[2], bestFriend : nameAndInfoList[3]};
  return previousList;
};

const newInfo = (nameAndInfo.reduce(makeStucture ,{}));
const name = (process.argv).slice(2);
console.log("best friend's name = ", newInfo[name].bestFriend)
console.log(newInfo[name].bestFriend,"'s father name = " , newInfo[newInfo[name].bestFriend].father);
console.log(newInfo[name].bestFriend,"'s mother name = ", newInfo[newInfo[name].bestFriend].mother);
console.log(newInfo[name].bestFriend,"'s best friend's name = ",newInfo[newInfo[name].bestFriend].bestFriend);
