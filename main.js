var app = new Vue({
    el: '#app',
    data: {
        brand:"Vue Mastery",
        product: 'Socks',
        selectedVariant: 0,
        details: ["80% cotton", "Machine Washable", "Gender neutral"],
        variants:[
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: 'sockpic.jpeg',
                variantQuantity: 5,
                onSale: true
                
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: 'blueSocks.jpeg',
                variantQuantity: 2,
                onSale: false
            }
        ],
        cart: 0
    },
    methods: {
        addToCart () {
            this.cart += 1
        },
        updateProduct (index){
            this.selectedVariant = index            
        },
        removeFromCart () {
            this.cart -= 1
        }
  
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image(){
            return this.variants[this.selectedVariant].variantImage
        },
        inventory() {
           return this.variants[this.selectedVariant].variantQuantity
        },
        sale() {
            if(this.variants[this.selectedVariant].onSale){
                return this.brand + ' ' + this.product + ' ' + '-- on sale!'
            }else{
                return this.brand + ' ' + this.product + ' ' + '-- original low price.'
            }
        }
    }
    

});