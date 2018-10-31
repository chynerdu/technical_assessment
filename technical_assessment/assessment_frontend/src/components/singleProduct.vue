<template>
    <div>
        <section class='first-section  pt-md-64 pt-xs-32' >
            <div class='container-fluid'>
                <div class= 'row'>
                    <div class='col-md-6 offset-md-3'>
                        <!-- Card -->
                        <div class="card card-cascade wider reverse">

                        <!-- Card image -->
                            <div class="view view-cascade overlay pt24">
                                <img class="card-img-top" :src= "product.imageFullPath" alt="Card image cap" style="width:50%">                              
                                <a href="#!">
                                <div class="mask rgba-white-slight"></div>
                                </a>
                            </div>

                            <!-- Card content -->
                            <div class="card-body card-body-cascade text-center">

                                <!-- Title -->
                                <h4 class="card-title"><strong>{{product.productName}}</strong></h4>
                                <!-- Subtitle -->
                                <h6 class="font-weight-bold indigo-text py-2">{{product.category}}</h6>
                                <!-- Text -->
                                <p class="card-text">{{product.description}}
                                </p>

                                <!-- Linkedin -->
                                <a class="px-2 fa-lg li-ic">&#8358; {{product.price}}</a>
                                <!-- Twitter -->
                                <a class="px-2 fa-lg tw-ic" :style= 'product.color'><p style='width:50px; height:50px; border-radius:20px;'></p></a>
                                <!-- Dribbble -->
                                <a class="px-2 fa-lg fb-ic"><i class="fa fa-facebook"></i></a>

                            </div>
                            <div class = 'card-footer p-0' style="background-color:white;">
                                <router-link to='/product-listings' tag = 'a' class = 'pull-left btn btn-sm btn-success'>View Product Listings</router-link>
                                
                            </div>
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
        }
    }
}
</script>