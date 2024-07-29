
     
        class Product {
            constructor(id, name, price) {
                this.id = id;
                this.name = name;
                this.price = price;
            }
        }

     
        class ShoppingCartItem {
            constructor(product, quantity) {
                this.product = product;
                this.quantity = quantity;
            }

           
            getTotalPrice() {
                return this.product.price * this.quantity;
            }
        }

     
        class ListStore {
            constructor() {
                this.items = []; 
            }

            
            addItem(product, quantity) {

                const existingItemIndex = this.items.findIndex(
                    (item) => item.product.id === product.id
                );

                if (existingItemIndex >= 0) {
                
                    this.items[existingItemIndex].quantity += quantity;
                } else {
                    
                    this.items.push(new ShoppingCartItem(product, quantity));
                }
            }

            
            removeItem(productId) {
                this.items = this.items.filter((item) => item.product.id !== productId);
            }


            getTotalPrice() {
                return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
            }

            displayItems() {
                if (this.items.length === 0) {
                    return '<p>No items in the store.</p>';
                }

                return this.items.map(item => 
                    `<div class="card">
                        <p>Product: ${item.product.name}</p>
                        <p>Quantity: ${item.quantity}</p>
                        <p>Price: $${item.getTotalPrice().toFixed(2)}</p>
                    </div>`
                ).join('');
            }
        }

    
        const store = new ListStore();
let total=0;
   
        function AddCardOnClick() {
            const product1 = new Product(
              document.getElementById('id').value,
              document.getElementById('name').value,
              document.getElementById('price').value
            );

         
            store.addItem(product1, 1);

           
            const elements = document.getElementById('cards');

         
            elements.innerHTML = store.displayItems();
            getTotalPrice();
             }
        function getTotalPrice() {
          total = store.getTotalPrice();
          document.getElementById(
            "totalPrice"
          ).innerHTML = `Total Price${total}`;
       
        }
