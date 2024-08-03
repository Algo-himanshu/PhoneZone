const phone = require("../model/phone");

const searchResult = async (req, res) => {
  try {
    const { searchQuery, searchFor } = req.body;

    let query = {};
    if (searchFor === "model") {
      query.model = searchQuery;
    } else {
      query.brand = searchQuery;
    }

    const data = await phone.find(query);
    console.log(data);

    res.status(200).send(data);
  } catch (e) {
    console.error(e);
    res.status(400).send("Bad Request!!");
  }
};

module.exports = { searchResult };
