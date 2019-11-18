const info = [["Priyanshu","Sahil","Shanti","Ragini"],
["Rashmi","Pallav","Pallavi","Pallabi"],
["Sita","Janaka","Janaki","Rashmi"],
["Ragini","Rajender","Tejinder","Priyanshu"],
["Pallabi","Satyan","Subha","Priyanshu"]];

const makeStucture = function(previousList, infoList){
  previousList[infoList[0]] = {father : infoList[1], mother : infoList[2], bestFriend : infoList[3]};
  return previousList;
};

const infoStuc = (info.reduce(makeStucture ,{}));
//console.log(infoStuc);
const name = (process.argv).slice(2);
console.log(infoStuc[infoStuc[name].bestFriend]);


