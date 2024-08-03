const phone = require("../model/phone");

const homeData = async (req, res) => {
  try {
    const data = await phone.find();

    // console.log(data);
    res.status(200).send(data);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

module.exports = { homeData };

// const axios = require("axios");

// const homeData = async (req, res) => {
//   const options = {
//     method: "GET",
//     url: "https://mobile-phone-specs-database.p.rapidapi.com/gsm/all-brands",
//     headers: {
//       "X-RapidAPI-Key": "27d9726627mshe96a61d1bafb369p16ab72jsn3c8b30681663",
//       "X-RapidAPI-Host": "mobile-phone-specs-database.p.rapidapi.com",
//     },
//   };

//   try {
//     const response = await axios.request(options);
//     res.status(200).send(response.data);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Internal Server Error");
//   }
// };

// module.exports = { homeData };
