<template>
    <div>
        <section class='first-section  pt-md-64 pt-xs-32' >
            <div class='container-fluid widgets pt40'>
                <h3 class= 'text-center mb40'>New Product  </h3>           
                <div class= 'col-md-6 offset-md-3'>
                    <form @submit = 'create' class="light-bg border border-light p-5">

                        <p class="h5 mb-4 text-center ">Enter product details <span @click = 'cancel' class = 'btn btn-sm  btn-danger small pull-right'><i class='fa fa-plus'></i> Cancel</span></p>
                         <!-- Category -->
                        <label>Category</label>
                        <select class="browser-default custom-select mb-4" v-model = 'newProduct.category' required>
                            <option value="" disabled>Choose category</option>
                            <option value="fashion" selected>Fashion</option>
                            <option value="Mobile Phones">Mobile Phones</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Others">Others</option>
                        </select>
                        <!-- Name -->
                        <input type="text" id="defaultContactFormName"  v-model = 'newProduct.product' class="form-control mb-4" placeholder="Product Name" required>

                        <!-- Price -->
                        <!-- <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1">&#8358;</span>
                            </div> -->
                            <input type="number"   v-model = 'newProduct.price' class="form-control mb-4" placeholder="Product Price" aria-describedby="basic-addon1" required>                          
                        <!-- </div>        -->
                        <!-- description -->
                        <div class="form-group">
                            <textarea class="form-control rounded-0"   v-model = 'newProduct.description' rows="3" placeholder="Product Description" required></textarea>
                        </div>
                        <div class = 'form-group row n'>
                            <label class='col-md-3'>
                                Product Color
                            </label>
                           <!-- Color -->
                            <div class= 'col-md-4'>
                                <!-- <label class='btn btn-success btn-sm' >Select -->
                                    <input type="color" @change = 'preview' v-model = 'newProduct.color' class="form-control mb-4" placeholder="Product color" >
                                <!-- </label> -->
                                <p class='text-danger'>{{error}}</p>
                            </div>
                            <div class= 'col-md-4 preview' :style= "{background: selectedColor}"><i>{{previewMessage}}</i></div>
                        </div>
                        <label>Select Image</label>
                        <input type="file" id="defaultContactFormEmail" @change = 'fileChange($event.target.files)' name= 'file' ref="file" class="form-control mb-4"  aria-describedby="basic-addon1" required>                          
                        <!-- Send button -->
                        <button class="btn btn-sm purple btn-block" type="submit">Submit</button>

                    </form>              
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import Vue from 'vue'
import NProgress from 'nprogress'
export default {
    data(){
        return {
            newProduct : {},
            error: '',
            selectedColor: '',
            previewMessage: 'No color selected',
            selectedFile: new FormData(),
            file: ''
        }
    },
    methods : {
        create(e){
            if (this.newProduct.color === undefined || this.newProduct.color ===''){
                this.error = 'Please select product color'
            }
            else{
            NProgress.start()
            const config = {
                headers: {
                'Content-Type': 'multipart/form-data'
                }
            }
             const formData = new FormData()
              
              
             let UploadProduct = {
                category : this.newProduct.category,
                product : this.newProduct.product,
                description : this.newProduct.description,
                color : this.newProduct.color,
                price : this.newProduct.price
            //     // file: formData

            };
            formData.append('myFile', this.file)
            formData.append('category', this.newProduct.category)
            formData.append('product', this.newProduct.product)
            formData.append('description', this.newProduct.description)
            formData.append('color', this.newProduct.color)
            formData.append('price', this.newProduct.price)

            this.$http.post('https://safe-stream-94866.herokuapp.com/products', formData)
            .then( response =>{
                console.log('product created ', response)
                console.log('product ID  ', response.body._id)
                console.log('image ', formData)
                console.log('product ',this.newProduct)
                this.newProduct = ''
                NProgress.done()
                this.showNotification('Success!', 'Product added', 'success')
                this.$router.push('preview/'+response.body._id)
            }, 
            error =>{
                console.log('product creation failed')
                 console.log('image ', this.selectedFile)
                NProgress.done()
                this.showNotification('Failure!', 'Operation failed', 'error')
            })            
        }
        e.preventDefault()
        },
        fileChange(fileList){
            // this.selectedFile.append("file", fileList[0], fileList[0].name)
            this.file = this.$refs.file.files[0]
            console.log('file is '+this.file)
        },
        preview(){
        console.log('color changed '+this.selectedColor)
         this.selectedColor = this.newProduct.color
         this.previewMessage = ''
        },
        cancel(){
            history.back();
        },
        showNotification(msgtitle, msgtext, msgtype){
        Vue.notify({
            group: 'foo',
            title: msgtitle,
            text: msgtext,
            type: msgtype,
            duration: 8000,
        })
    }

    }
}
//  {
            
//                 category : this.newProduct.category,
//                 product : this.newProduct.product,
//                 description : this.newProduct.description,
//                 color : this.newProduct.color,
//                 price : this.newProduct.price,
                
//             },
</script>
<style>
form.light-bg{
background:rgb(252, 252, 252) !important;
}
.preview{
    width:50px;
    height:50px;
}
</style>
