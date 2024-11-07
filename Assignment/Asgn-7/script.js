function calculateBill(items, discount = 0, taxRate = 0.1) {
    let totalPrice = items.reduce((sum, item) => sum + item.price, 0);
    let discountAmount = (discount / 100) * totalPrice;
    let priceAfterDiscount = totalPrice - discountAmount;
    let taxAmount = taxRate * priceAfterDiscount;
    let finalTotal = priceAfterDiscount + taxAmount;
  
    console.log("----- Bill -----");
    items.forEach(item => {
      console.log(`${item.name}: ₹${item.price.toFixed(2)}`);
    });
    console.log(`Total Price: ₹${totalPrice.toFixed(2)}`);
    console.log(`Discount: ${discount}% = -₹${discountAmount.toFixed(2)}`);
    console.log(`Price After Discount: ₹${priceAfterDiscount.toFixed(2)}`);
    console.log(`Tax (at ${taxRate * 100}%): +₹${taxAmount.toFixed(2)}`);
    console.log(`----------------`);
    console.log(`Final Total: ₹${finalTotal.toFixed(2)}`);
  }
  
  const items = [
    { name: "Shirt", price: 200 },
    { name: "Jeans", price: 300 },
    { name: "Socks", price: 50 }
  ];
  
  calculateBill(items, 10, 0.1);
  