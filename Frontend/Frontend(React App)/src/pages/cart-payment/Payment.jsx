import axios from 'axios'

function App() {

  //vanilla 

  function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => {
            resolve(true);
        };
        script.onerror = () => {
            resolve(false);
        };
        document.body.appendChild(script);
    });
}

  async function displayRazorpay() {
    const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
    }
    const response = await axios.get("http://localhost:4500/payment")
    console.log("id from backend",response.data.data.id)
    const options = {
        key: "rzp_test_UxQFlUckww5Hee", // Enter the Key ID generated from the Dashboard
        amount: 10000, // 100 --> 100 rupees 1 rs -- > 1 cent 1 paise
        currency: "INR",
        order_id:response.data.data.id,
        name: "EBuy online store",
        description: "Complete payment securely with us..",
        handler: async function (response) {
            const data = {
                razorpayPaymentId: response.razorpay_payment_id,
                razorpayOrderId: response.razorpay_order_id,
                razorpaySignature: response.razorpay_signature,
            };
            console.log(data)
        },
        // prefill: {
        //     name: "Anandhu P A",
        //     email: "anandhupa131@gmail.com",
        //     contact: "95263325467",
        // },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
}

  return (
    <div className="App">
      Razorpay 
      <button onClick={displayRazorpay}>Make a Payment</button>
    </div>
  );
}

export default App;

// one time payment
// Subscriptions or recurring

// Uber 

// 1. driver 2. Customer

//    50 dollars ----> Driver 50% ---> 2% --> 23 dollars credited to uber

// 1. Aadhar Card Pan Card Bank Account
// 2. SSN Bank 

// 1. Individual 
// 2. LLP 
// 3. Enterprise Company
 