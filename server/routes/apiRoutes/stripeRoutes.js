const router = require('express').Router();
const dotenv = require("dotenv");
dotenv.config();
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);

router.post("/checkout", async (req, res) => {
  var order = req.body;
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      automatic_tax: {
        enabled: true
      },
      customer_email: order.billingEmail,
      success_url: `${process.env.SERVER_URL}/success`,
      cancel_url: `${process.env.SERVER_URL}/cancel`,
      line_items: order.items.map(item => {
        const firstURL = item.photo.replaceAll(' ', '%20');
        const secondURL = firstURL.replaceAll('\r', '');
        return {
          price_data: {
            currency: 'usd',
            product_data: {
              name: item.partNumber + ' - ' + item.descriptionTwo,
              description: item.description,
              images: [secondURL]
            },
            unit_amount: item.priceInCents,
            tax_behavior: 'inclusive'
          },
          quantity: item.quantity
        }
      }),
      shipping_options: [{
        shipping_rate_data: {
          display_name: 'Standard Ground Shipping',
          type: 'fixed_amount',
          delivery_estimate: {
            maximum: {
              unit: 'business_day',
              value: 7
            },
            minimum: {
              unit: 'business_day',
              value: 5
            },
          },
          fixed_amount: {
            amount: 2500,
            currency: 'usd'
          },
          tax_behavior: 'inclusive'
        }
      }],
      shipping_address_collection: {
        allowed_countries: ['US']
      },
      billing_address_collection: 'required',
    });
    res.json(session)
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
})

module.exports = router;