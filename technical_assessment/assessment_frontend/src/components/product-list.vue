<template>
    <div>
        <section class='first-section  pt-md-64 pt-xs-32' >
            <div class='container-fluid widgets '>
                <h3 class= 'text-center mb40'>Product Listing <span @click = 'newProduct' class = 'btn btn-sm purple small pull-right'><i class='fa fa-plus'></i> New Product</span></h3>      
                <div v-if = 'loading' class = 'pt80 text-center text-info' style= "height: 70vh"> <h4>Loading Products..please wait!!</h4></div>
                <div v-else class= 'row'>  
            
                    <div class='col-md-3' v-for = "product in products" :key = 'product._id'>
                    <!-- Card -->
                    <!-- Card -->
                        <div class="card" @click = 'view(product._id)' style='cursor:pointer'>

                        <!-- Card image -->
                            <div class="view overlay" >
                                <img  class="card-img-top" :src= "product.imageFullPath" alt="Card image cap" >
                                <a href="#!">
                                <div class="mask rgba-white-slight"></div>
                                </a>
                            </div>

                            <!-- Card content -->
                            <div class="card-body">

                                <!-- Title -->
                                <h4 class="card-title limit">{{product.productName}}</h4>
                                <p class= 'small'>Product Id: {{product._id}}</p>
                                <hr>
                                <!-- Text -->
                                <p class="card-text body-limit">{{product.description}} ...</p>
                                <a  @click = 'view(product._id)' class="btn btn-primary">&#8358; {{product.price}} </a>

                            </div>

                        </div>
                        <!-- Card -->
                        
                        <!-- Card --> 
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
        products : '', 
        value: 'description',
        loading: true
        }
    },
    mounted(){
        this.fetchProducts()
    },
    filters: {       
        limit(value){
            return value.substr(0, 35)
        }
    },
    methods: {
        fetchProducts (){
            this.$http.get('https://safe-stream-94866.herokuapp.com/products')
            .then(response => {
                this.loading = false
                console.log('response is ', response)
                this.products = response.body
                console.log('products are ', this.products)
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
        view(id){
            this.$router.push('product-listing/'+id)
        },
        newProduct(){
            this.$router.push('/create')
        }
    }
}
</script>
<style>

.limit{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-height: 25px;
    max-height: 32px;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
.body-limit{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-height: 16px;
    max-height: 48px;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
}
.view{
    height:40vh;
}
</style>