<template>
    <div>
        <section class='first-section  pt-md-64 pt-xs-32' >
            <div class='container-fluid'>
                 <h4 class="text-center mb48">Product Information</h4>
                <div class= 'row'>
                    <div class='card col-md-6 offset-md-3 '>
                        <!-- Card -->
                       
                        <div class="row">
                            <div class = 'col-md-6 p-0'>
                                <img class="card-img-top" :src= "product.imageFullPath" alt="Card image cap">                             
                                <a href="#!">
                                <div class="mask rgba-white-slight"></div>
                                </a>                            
                            </div>
                            <div class = 'col-md-6 p-0'>
                                <div class="card-body">
                                    <h5 class="card-title">{{product.productName}}</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">{{product.category}}</h6>
                                <p class="card-text">{{product.description}}</p>
                                                                
                                <p href="#!" class="card-link">&#8358; {{product.price}} <span class="pull-right card-link" style='width:30px; height:30px; border-radius:20px;'  :style= '{background:product.color}'></span></p>
                               
                                </div>                                
                            </div>

                        </div>
                    <div class = 'card-footer p-0' style="background-color:white;">
                        <router-link to='/product-listings' tag = 'a' class = 'pull-left btn btn-sm btn-success'>View Product Listings</router-link>
                        <router-link to= '/create' tag = 'a' class = 'pull-right btn btn-sm purple small'>Add Another Product</router-link>
                    </div>
                    </div> 
                </div>
                
                <!-- Card -->                             
            </div>
        </section>
    </div>
</template>
<script>
export default {
    data () {
        return {
        product : ''

        }
    },
    mounted(){
        this.fetchProducts()
    },
    methods: {
        fetchProducts (){
            var id = this.$route.params.id;      
            this.$http.get('https://safe-stream-94866.herokuapp.com/products/'+id)
            .then(response => {
                console.log('response is ', response)
                this.product = response.body
                console.log('products are ', this.product)
                return response.json()
                
            })
            // .then( data => {
            //     const resultArray = []
            //     for ( let key in data.body){
            //         resultArray.unshift(data.body[key])
            //         this.products = resultArray
            //         console.log('responsess ', this.products)
            //     }
            // })
        },
        productList (){
            this.$router.push('/product-listings')
            this.$router.reload();
            
        }
    }
}
</script>
<style>

</style>