module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  let array = [];
  for (let member of members) {
    if (typeof member == "string") {
      let tempStr = member.trim();
      array.push(tempStr[0].toUpperCase());
    }
  }

  return array.sort().join('');
};