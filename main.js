const { data: { key } } = await axios.get("http://localhost:5252/api/getkey")
const { data: { order } } = await axios.post('http://localhost:5252/api/checkout', {
    amount: cart.total
})
var options = {
    key: key,
    amount: order.amount,
    currency: "INR",
    name: "Acharya Project",
    desciption: "Test Transaction",
    image: "https://i.imgur.com/hqTZ4NT.png",
    order_id: order.id,
    callback_url: "http://localhost:5252/api/verify",
    prefill: {
        name: "User",
        email: "email@example.com",
        contact: "7800818620"
    },
    notes: {

    },
    theme: {
        color: "#121212"
    }
}

var rzp1 = new window.Razorpay(options);
rzp1.open()
console.log(order);