const router = require('express').Router();
const path = require('path');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.post('/payment', (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currenct: 'usd',
  };

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  });
});

module.exports = router;
