<template>
    <!-- <div class="container">
        <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Mobile</th>
                <th scope="col">Address</th>
                <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="client in clients" :key="client.id">
                <th scope="row">{{ client.id }}</th>
                <td>{{ client.name }}</td>
                <td>{{client.email}}</td>
                <td>{{client.mobile}}</td>
                <td>{{ client.address }}</td>
                <td><router-link :to="`clients/${client.id}`">show</router-link></td>
                </tr>
            </tbody>
        </table>
    </div> -->

    <div class="container">
                <div class="card">
                  <div class="card-header">
                    <div class="card-title">Clients list</div>
                  </div>
                  <div class="card-body">
                    <table class="table table-hover">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">name</th>
                          <th scope="col">email</th>
                          <th scope="col">mobile</th>
                          <th scope="col">address</th>
                          <th scope="col">actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                          <td>Riyadh</td>
                          <td>
                            
                              <router-link>
                                <span class="material-symbols-outlined">
                                  update
                                </span>
                              </router-link>

                              <router-link>
                                <span class="material-symbols-outlined">
                                  delete
                                </span>
                              </router-link>

                              <router-link>
                                <span class="material-symbols-outlined">
                                  visibility
                                </span>
                              </router-link>
                            
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              

</template>

<script>
import axios from 'axios'

export default{
    data() {
        return {
            clients:[],
        }
    },

    mounted(){
        this.allClients()
    },
    methods: {
        async allClients(){
            const clients = await axios.get('http://127.0.0.1:8000/api/clients')
            this.clients = clients.data.data
        }
    }
}

</script>

<style>

</style>