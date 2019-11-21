const makeStucture = function(previousList, nameAndInfoList) {
  previousList[nameAndInfoList[0]] = {
    father: nameAndInfoList[1],
    mother: nameAndInfoList[2],
    bestFriend: nameAndInfoList[3]
  };
  return previousList;
};

const getFriendsInfo = function(newInfo, name) {
  if (Object.keys(newInfo).includes(name[0])) {
    return [
      newInfo[name].bestFriend,
      newInfo[newInfo[name].bestFriend].father,
      newInfo[newInfo[name].bestFriend].mother,
      newInfo[newInfo[name].bestFriend].bestFriend
    ];
  }
  return "not found";
};

exports.makeStucture = makeStucture;
exports.getFriendsInfo = getFriendsInfo;
