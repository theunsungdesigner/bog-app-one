const mongoose = require("./connection.js");
const Schema = mongoose.schema;

mongoose.Promise = global.Promise;

const BogSchema = {
  name: "",
  description: ""
};

const BogModel = mongoose.model("Bog", BogSchema);
//get all Bogs
function getAllBogs() {
  return BogModel.find();
}
/**
 *  getBogById
 * @param {string} bogId
 */
function getBogById(bogId) {
  return BogModel.findById(bogId);
}

/**
 *
 * @param {string} bogId
 */
function deleteBogById(bogId) {
  return BogModel.findOneAndDelete({ _id: bogId });
}

function updateBogById(bogId, bogData) {
  return BogModel.findOneAndUpdate({ _id: bogId }, bogData);
}

function createBog(bogData) {
  return BogModel.create(bogData);
}

module.exports = {
  deleteBogById,
  createBog,
  updateBogById,
  getBogById,
  getAllBogs
};
