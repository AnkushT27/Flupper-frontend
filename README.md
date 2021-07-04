# Angular:  Shopping Cart

## Environment 

- Angular CLI Version: 10.0.4
- Angular Core Version: 10.0.4
- Node Version: 12.18.3
- Default Port: 4200

### Application Demo:



The app  implements the following functionalities:

- Clicking on each Add To Cart adds the item to the shopping cart. The listing in the Product Listing component is updated to show the Increase/Decrease Quantity button and the quantity of the item in cart.
  
- Clicking on each Increase Quantity Button  increases the quantity of the item in cart. 
  
- Clicking on each Decrease Quantity button when:
  
  - Cart Quantity of item is 1:   removes the item from the cart, hide the Increase/Decrease Quantity button, and  shows the Add to Cart button.
  
  - Cart Quantity Greater than 1: The quantity of the item in the cart is decreased.
  
- On every quantity update operation, the text for the Quantity of item is updated both in the Listing component as well as in the corresponding entry in the Cart Component.

- Items is displayed in the Cart Component in the order they are added to Cart. 
  
- The list of products and the cart object is passed as Prop to the Product Listing Component and Cart Component respectively.

- Integrated BackednService from flupper-backend Project for user Profile 
  






```
