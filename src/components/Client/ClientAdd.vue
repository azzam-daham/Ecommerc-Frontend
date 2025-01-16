<!-- Problem files bootstrap not work -->
<template>
  <div class="container">
    {{ client }}
                <form @submit.prevent="addClient">
                  <div class="card">
                  <div class="card-header">
                    <div class="card-title">Clients list>Add Client</div>
                    <div class="card-body">
                    <div class="row">
                      <div class="col-md-6 col-lg-4">
                        <div class="form-group">
                          <label for="email2">Email Address</label>
                          <input
                          v-model="client.email"
                            type="email"
                            class="form-control"
                            id="email2"
                            placeholder="Enter Email"
                          />
                          
                        </div>
                        <div class="form-group">
                          <label for="email2">Name</label>
                          <input
                            v-model="client.name"
                            type="text"
                            class="form-control"
                            id="email2"
                            placeholder="Enter Name"
                          />
                          
                        </div>
                        <div class="form-group">
                          <label for="email2">Address</label>
                          <input
                          v-model="client.address"
                            type="text"
                            class="form-control"
                            id="email2"
                            placeholder="Enter Address"
                          />
                          
                        </div>
                        <div class="form-group">
                          <label for="email2">Mobile Number</label>
                          <input
                          v-model="client.mobile"
                            type="text"
                            class="form-control"
                            id="email2"
                            placeholder="Enter Mobile Number"
                          />
                          
                        </div>
                        <button type="submit" class="btn btn-outline-success">Add</button>
                        </div>
                  </div>
                  </div>
                </div>
              </div>
                </form>
  </div>
</template>

<script>
  import axios from 'axios'
  export default{
    data(){
      return{
         client:{}
      }
    },
    methods:{
      async addClient(){
        let data = new FormData();
        data.append('name', this.client.name);
        data.append('email', this.client.email);
        data.append('address', this.client.address);
        data.append('mobile', this.client.mobile);

        const response = await axios.post('http://127.0.0.1:8000/api/clients', data)
        console.log(response);
      }
    }
  }

</script>