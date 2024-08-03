const phone = require("../model/phone");

const fetchCarousalData = async (req, res) => {
  console.log("yeah i am here!!");
  try {
    const data = await phone.aggregate([
      {
        $group: {
          _id: "$brand", // Group by brand
          models: { $push: "$$ROOT" }, // Push all documents of each brand into an array
        },
      },
      {
        $project: {
          brand: "$_id", // Rename _id to brand
          models: { $slice: ["$models", 1] }, // Limit the array to 5 elements (models)
        },
      },
      {
        $unwind: "$models", // Unwind the array to get separate documents for each model
      },
      {
        $replaceRoot: { newRoot: "$models" }, // Replace the root with the unwound models
      },
    ]);

    // console.log(data);
    res.status(200).send(data);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

module.exports = { fetchCarousalData };
