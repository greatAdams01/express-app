<template>
  <div class="d-flex">
    <div id="mySidepanel" class="sidepanel">
      <a
        href="javascript:void(0)"
        class="closebtn"
        id="closebtn"
        @click="closeNav"
        >&times;</a
      >

      <router-link to="/admin">Parcels</router-link>
      <router-link to="/admin/add-parcel">Add Parcels</router-link>
      <router-link to="/admin/add-location">Add Location</router-link>
      <a href="#" @click="logout">Logout</a>
    </div>
    <div class="w-100 p-4">
      <div>
        <button class="openbtn" @click="openNav">&#9776;</button>
        <!-- <b-button class="m-lg-4 m-2 openbtn2" @click="modalShow = !modalShow"
          >Update parcel</b-button
        >
        <b-button class="m-lg-4 m-2 openbtn2" @click="modalShow2 = !modalShow2"
          >Update Sender and Receiver Info</b-button
        > -->
      </div>
      <!-- Update Sender and Receiver Information start -->
      <div class="heading my-4">Update Sender and Receiver Info</div>
        <div class="d-lg-flex w-100">
          <div class="m-2 w-100">
            <input
              type="text"
              class="p-2 border"
              placeholder="Parcel ID"
              v-model="parcelId"
            />
          </div>
          <div class="m-2 w-100">
            <input
              type="text"
              class="p-2 border"
              placeholder="Senders Name"
              v-model="sendersName"
            />
          </div>
        </div>
        <div class="d-lg-flex w-100">
          <div class="m-2 w-100">
            <input
              type="text"
              class="p-2 border"
              placeholder="Senders Email"
              v-model="sendersEmail"
            />
          </div>
          <div class="m-2 w-100">
            <input
              type="text"
              class="p-2 border"
              placeholder="Senders Address"
              v-model="sendersAddress"
            />
          </div>
        </div>
        <div class="d-lg-flex w-100">
          <div class="m-2 w-100">
            <input
              type="text"
              class="p-2 border"
              placeholder="senders City"
              v-model="sendersCity"
            />
          </div>
          <div class="m-2 w-100">
            <input
              type="text"
              class="p-2 border"
              placeholder="Senders County"
              v-model="sendersCountry"
            />
          </div>
        </div>
        <div class="d-lg-flex w-100">
          <div class="m-2 w-100">
            <input
              type="text"
              class="p-2 border"
              placeholder="Senders Phone"
              v-model="sendersPhone"
            />
          </div>
          <div class="m-2 w-100">
            <input
              type="text"
              class="p-2 border"
              placeholder="Senders Post Code"
              v-model="sendersPostCode"
            />
          </div>
        </div>
        <div class="d-lg-flex w-100">
          <div class="m-2 w-100">
            <input
              type="text"
              class="p-2 border"
              placeholder="Receivers Name"
              v-model="recevicerName"
            />
          </div>
          <div class="m-2 w-100">
            <input
              type="text"
              class="p-2 border"
              placeholder="Receivers Email"
              v-model="recevicerEmail"
            />
          </div>
        </div>
        <div class="d-lg-flex w-100">
          <div class="m-2 w-100">
            <input
              type="text"
              class="p-2 border"
              placeholder="Receivers Address"
              v-model="recevicerAddress"
            />
          </div>
          <div class="m-2 w-100">
            <input
              type="text"
              class="p-2 border"
              placeholder="Receivers City"
              v-model="recevicerCity"
            />
          </div>
        </div>
        <div class="d-lg-flex w-100">
          <div class="m-2 w-100">
            <input
              type="text"
              class="p-2 border"
              placeholder="Receivers Country"
              v-model="recevicerCountry"
            />
          </div>
          <div class="m-2 w-100">
            <input
              type="text"
              class="p-2 border"
              placeholder="Receivers Phone Number"
              v-model="recevicerPhone"
            />
          </div>
        </div>
        <div class="d-lg-flex w-100">
          <div class="m-2 w-100">
            <input
              type="text"
              class="p-2 border"
              placeholder="Receiver Post Code"
              v-model="recevicerPostCode"
            />
          </div>
        </div>
        <div class="w-100">
          <div class="m-2 w-100">
            <input
              type="button"
              class="p-2 openbtn2"
              value="SUBMIT"
              @click="updateInfo"
            />
          </div>
        </div>
      <!-- Update Sender and Receiver Information end -->

      <!-- Update parcel start -->
          <div class="heading my-4">Update parcel</div>
        <div class="d-lg-flex w-100">
          <div class="m-2 w-100">
            <input
              type="text"
              class="p-2 border"
              placeholder="Parcel ID"
              v-model="parcelId"
            />
          </div>
          <div class="m-2 w-100">
            <input
              type="text"
              class="p-2 border"
              placeholder="Parcel Name"
              v-model="parcelName"
            />
          </div>
        </div>
        <div class="d-lg-flex w-100">
          <div class="m-2 w-100">
            <input
              type="text"
              class="p-2 border"
              placeholder="Transport Method"
              v-model="transportMethod"
            />
          </div>
          <div class="m-2 w-100">
            <input
              type="date"
              class="p-2 border"
              placeholder="Delivery Date"
              v-model="deliveryDate"
            />
          </div>
        </div>
        <div class="d-lg-flex w-100">
          <div class="m-2 w-100">
            <input
              type="text"
              class="p-2 border"
              placeholder="Payment Method"
              v-model="paymentMethod"
            />
          </div>
          <div class="m-2 w-100">
            <input
              type="text"
              class="p-2 border"
              placeholder="Insurance"
              v-model="insurance"
            />
          </div>
        </div>
        <div class="d-lg-flex w-100">
          <div class="m-2 w-100">
            <input
              type="text"
              class="p-2 border"
              placeholder="Weight"
              v-model="weight"
            />
          </div>
          <div class="m-2 w-100">
            <input
              type="text"
              class="p-2 border"
              placeholder="Number of Goods "
              v-model="numberOfGoods"
            />
          </div>
        </div>
        <div class="w-100">
          <div class="m-2 w-100">
            <input
              type="button"
              class="p-2 openbtn2"
              value="SUBMIT"
              @click="updateUser"
            />
          </div>
        </div>
      <!-- Update parcel end -->

      <div>
        <div class="heading my-4">Parcels</div>
        <div class="d-lg-flex flex-wrap">
          <div
            v-for="(parcel, index) in parcels"
            :key="index"
            class="w-100 border m-2 p-2 d-flex"
          >
            <div>
              Parcel Name: {{ parcel.parcelName }}
              <div>Receiver Name: {{ parcel.receiverInfo.name }}</div>
              <div>{{ parcel._id }}</div>
            </div>
            <div class="move-left">
              <input
                type="button"
                value="Delete"
                class="p-2 openbtn2"
                @click="deleteParcel(parcel._id)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const token = localStorage.getItem('token')
const userToken = JSON.parse(token)
// import { mapMutations } from "vuex";
export default {
  // middleware: "authenticated",
  data() {
    return {
      modalShow: false,
      modalShow2: false,
      adminToken: token,

      parcels: null,
      parcelId: "",
      parcelName: "",
      location: "",
      time: "",
      date: "",
      transportMethod: "",
      deliveryDate: "",
      paymentMethod: "",
      insurance: "",
      weight: "",
      numberOfGoods: "",
      sendersName: "",
      sendersEmail: "",
      sendersAddress: "",
      sendersCity: "",
      sendersCountry: "",
      sendersPhone: "",
      sendersPostCode: "",
      recevicerName: "",
      recevicerEmail: "",
      recevicerAddress: "",
      recevicerCity: "",
      recevicerCountry: "",
      recevicerPhone: "",
      recevicerPostCode: "",
    };
  },
  mounted() {
    this.getParcels()
  },
  methods: {
    getParcels() {
      fetch("https://peak-express.onrender.com/api", {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${userToken}`,
      },
      method: "POST",
      body: JSON.stringify({
        query: `
              query {
                parcels {
                  _id
                  parcelName
                  receiverInfo{
                    name
                  }
                  
                }
              }
          `,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result.data.parcels);
        this.parcels = result.data.parcels;
      });
    },
    // ...mapMutations(["userLoggedOut"]),
    deleteParcel(id) {
      fetch("https://peak-express.onrender.com/api", {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${userToken}`,
        },
        method: "POST",
        body: JSON.stringify({
          query: `
            query {
              deleteParcel(parcelId: "${id}"){
                parcelName
              }
            }
          `,
        })
      })
        .then((res) => res.json())
        .then((result) => {
          // console.log(result);
        });
    },
    logout() {
      localStorage.removeItem('token')
      this.$router.push("/login");
    },
    updateUser() {
      fetch("https://peak-express.onrender.com/api", {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${userToken}`,
        },
        method: "POST",
        body: JSON.stringify({
          query: `
              mutation{
                updateParcel(parcelInputUpdate:{parcelId:"${this.parcelId}", parcelName:"${this.parcelName}", transportMethod:"${this.transportMethod}", deliveryDate:"${this.deliveryDate}", paymentMethod:"${this.paymentMethod}", insurance: "${this.insurance}", weight:"${this.weight}", numberOfGoods: ${this.numberOfGoods}, 
                }){
                  _id
                  parcelName
                  transportMethod
                }
              }
          `,
        }),
      })
        .then((res) => res.json())
        .then((result) => {
          // console.log(result);
          this.modalShow = false;
        });
    },
    updateInfo() {
      fetch("https://peak-express.onrender.com/api", {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${userToken}`,
        },
        method: "POST",
        body: JSON.stringify({
          query: `
            mutation{
              updateSenderAndRecevicerInfo(updateSenderAndRecevicerInfo:{parcelId:"${this.parcelId}", sendersName:"${this.sendersName}", sendersEmail:"${this.sendersEmail}", sendersAddress:"${this.sendersAddress}", sendersCity:"${this.sendersCity}", sendersCountry:"${this.sendersCountry}", sendersPhone:"${this.sendersPhone}", sendersPostCode:"${this.sendersPostCode}", recevicerName: "${this.recevicerName}", recevicerEmail:"${this.recevicerEmail}", recevicerAddress:"${this.recevicerAddress}", recevicerCity:"${this.recevicerCity}", recevicerCountry:"${this.recevicerCountry}", recevicerPhone:"${this.recevicerPhone}", recevicerPostCode:"${this.recevicerPostCode}", }){
                parcelName
                receiverInfo{
                  name
                  email
                }
                receiverInfo{
                  name
                  email
                }
                _id
              }
            }
          `,
        }),
      })
        .then((res) => res.json())
        .then((result) => {
          // console.log(result);
          this.modalShow2 = false;
        });
    },
    openNav() {
      document.getElementById("mySidepanel").style.width = "300px";
      document.getElementById("closebtn").style.display = "block";
    },
    closeNav() {
      document.getElementById("mySidepanel").style.width = "0";
      document.getElementById("closebtn").style.display = "none";
    },
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins&family=Rubik:wght@900&display=swap");

/* The sidepanel menu */
.sidepanel {
  position: fixed;
  height: 100vh; /* Specify a height */
  width: 300px; /* 0 width - change this with JavaScript */
  z-index: 1; /* Stay on top */
  background-color: #0d0106;
  color: #fbfbff;
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidepanel */
}

/* The sidepanel links */
.sidepanel a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  display: block;
  transition: 0.3s;
  color: #fbfbff;
}
.heading {
  font-size: 30px;
  font-family: "Rubik", sans-serif;
}

/* When you mouse over the navigation links, change their color */
.sidepanel a:hover {
  color: #f1f1f1;
}

/* Position and style the close button (top right corner) */
.sidepanel .closebtn {
  position: absolute;
  top: 0;
  left: 8%;
  font-size: 36px;
  margin-left: 50px;
}

/* Style the button that is used to open the sidepanel */
.openbtn {
  font-size: 20px;
  cursor: pointer;
  background-color: #0d0106;
  color: #fbfbff;
  padding: 10px 15px;
  border: none;
}
.openbtn2 {
  font-size: 14px;
  cursor: pointer;
  background-color: #0d0106;
  color: #fbfbff;
  padding: 10px 15px;
  border: none;
}

.openbtn:hover {
  background-color: #444;
}
.flex-wrap {
  flex-wrap: wrap;
}
input {
  width: 100%;
}
.move-left {
  margin-left: 30px;
}
@media (max-width: 600px) {
  .sidepanel {
    width: 0px;
  }
  .sidepanel .closebtn {
    display: none;
  }
  .sidepanel a {
    padding: 8px 8px 8px 32px;
    font-size: 15px;
  }
}
</style>