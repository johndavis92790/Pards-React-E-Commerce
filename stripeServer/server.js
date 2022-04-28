//basic stripe server setup to be able to charge credit cards, 
//ran out of time to get it fully setup so this is incomplete

require('dotenv').config();
const axios = require("axios");

const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static("public"));
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);
const PORT = 3002;

var storeItems = [];

// [
//    {
//      _id: '624a988076a4e82a39f39143',
//      partNumber: '16060',
//      brand: 'Air Lift',
//      description: 'Air Lift 16060 Black electric 12V Standard Air Compressor',
//      descriptionTwo: 'Compressor System',
//      category: 'Suspension',
//      photo: 'https://1ddf4b1b856a39e33863-d785dc0e3b62b5e0ef07f55db00b0659.ssl.cf2.rackcdn.com/Air Lift Company/16060_v1_20120101.jpg\r',
//      retailPrice: '104.17',
//      mapPrice: ''
//   },
// ]

async function fetchData() {
  try {
    const res = await axios.get("http://localhost:3001/api/part");
    storeItems = res.data;
    // console.log(res.data);
  } catch (err) {
    console.log(err);
  }
}
fetchData();

const storeItemsMap = new Map(storeItems);

app.post('/create-checkout-session', async (req, res) => {
  console.log("req", req.body.items);
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.items.map(item => {
        const storeItem = storeItems.find(data => data._id === item._id);
        console.log("storeItem", storeItem);
        console.log("item", item);
        return {
          price_data: {
            currency: 'usd',
            product_data: {
              name: storeItem.partNumber
            },
            unit_amount: storeItem.priceInCents
          },
          quantity: item.quantity
        }
      }),
      success_url: `${proccess.env.SERVER_URL}/success.html`,
      cancel_url: `${proccess.env.SERVER_URL}/cancel.html`,
    });
    res.json({ url: session.url });
  } catch (e) {
    res. status(500).json({ error: e.message })
  }
})

app.listen(PORT, () => {
  console.log(`Stripe server running on port ${PORT}!`);
});

// \"cd stripeServer && npm run devStart\"