require('dotenv').config();

const express = require('express');

const app = express();
app.use(express.static('public'));
app.use(express.json());

const cors = require('cors');

app.use(cors(
    {
        origin: 'http://127.0.0.1:5501',
    }
));

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const storeItems = new Map([
    [1, { priceInCents: 20000, name: 'Intel Core i5 12 Gen' }],
])

app.post('/create-checkout-session', async (req, res) => {
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items: req.body.items.map(item => {
                const storeItem = storeItems.get(item.id);
                return {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: storeItem.name,
                        },
                        unit_amount: storeItem.priceInCents,
                    },
                    quantity: item.quantity,
                }
            }),
            success_url: `${process.env.CLIENT_URL}/success.html`,
            cancel_url: `${process.env.CLIENT_URL}/cancel.html`,
        });

        res.json({ url: session.url });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
})

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
})



// const express = require('express');
// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
// const cors = require('cors');
// const helmet = require('helmet'); // Import helmet for security headers

// const app = express();
// app.use(express.static('public'));
// app.use(express.json());

// // Configure CORS to allow requests from your frontend
// const corsOptions = {
//     origin: 'http://127.0.0.1:5501', // Replace with your frontend's origin
//     optionsSuccessStatus: 200
// };

// app.use(cors(corsOptions)); // Use the cors middleware with the specified options

// // Set CSP headers using helmet
// app.use(helmet.contentSecurityPolicy({
//     directives: {
//         defaultSrc: ["'self'"],
//         scriptSrc: ["'self'", "https://js.stripe.com", "https://m.stripe.network", "https://pay.google.com"],
//         styleSrc: ["'self'", "'unsafe-inline'"],
//         imgSrc: ["'self'", "data:"],
//         fontSrc: ["'self'", "https://fonts.gstatic.com"],
//         connectSrc: ["'self'", "https://api.stripe.com"],
//         frameSrc: ["'self'", "https://js.stripe.com", "https://m.stripe.network", "https://pay.google.com"],
//     },
// }));

// const storeItems = new Map([
//     [1, { priceInCents: 20000, name: 'Intel Core i5 12 Gen' }],
// ]);

// app.post('/create-checkout-session', async (req, res) => {
//     try {
//         const session = await stripe.checkout.sessions.create({
//             payment_method_types: ['card'],
//             line_items: req.body.items.map(item => ({
//                 price_data: {
//                     currency: 'usd',
//                     product_data: {
//                         name: storeItems.get(item.id).name,
//                     },
//                     unit_amount: storeItems.get(item.id).priceInCents,
//                 },
//                 quantity: item.quantity,
//             })),
//             mode: 'payment',
//             success_url: 'http://localhost:3000/success.html',
//             cancel_url: 'http://localhost:3000/cancel.html',
//         });

//         res.json({ url: session.url });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// app.listen(3000, () => {
//     console.log('Server is listening on port 3000');
// });