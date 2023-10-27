const paymentRouter = require("express").Router();
const Razorpay = require("razorpay");



const instance = new Razorpay({
    key_id: "rzp_test_UxQFlUckww5Hee",
    key_secret: "o9WZTW4jG8lS8vfrWinqXDBS",
});

paymentRouter.get('/', (req, res) => {
  
 var options = {
    amount: 10000,  // amount in the smallest currency unit
    currency: "INR",
    receipt: Math.random().toString()
  };

  instance.orders.create(options, function(err, order) {
    res.json({data:order})
  });

})

// webhook route
// webhook route must always be a post request 

paymentRouter.post('/', (req, res) => {
    // validation 
    let secret = 'anandhu'
    
    const crypto = require('crypto')

	const shasum = crypto.createHmac('sha256', secret)
	shasum.update(JSON.stringify(req.body))
	const digest = shasum.digest('hex')

	console.log(digest, req.headers['x-razorpay-signature'])

	if (digest === req.headers['x-razorpay-signature']) {
		console.log('request is valid')
		// store information in database
    console.log(req.body)
		require('fs').writeFileSync('payment1.json', JSON.stringify(req.body, null, 4))
	} else {
		// send error message , trying to make an invalid request to server without razorpay. not allowed
	}
	res.json({ status: 'ok' })
  
  
  
  
  })



// 1 --> 4 HTTP Methods --> GET POST PUT DELETE


// 1. Create your server and run the server in localhost
// 2. Create an account with ngrok(free) and make sure you like install it correctly
// 3. You should always run the localhost
// 4. You should use command ngrok http 3000  
// 5. Check whether the Signature sent by razorpay is valid or not

// 1. enable cors 







module.exports={paymentRouter}