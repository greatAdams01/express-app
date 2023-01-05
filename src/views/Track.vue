<template>
  <div>
    
  <Navbar />
    <main id="main">

  <section class="mt-5 pt-5">
     <div v-if="search === false" class="text-center m-5">
      <input
        v-model="parcelId"
        placeholder="Enter Track ID"
        type="text"
        class="p-2 border"
      />
      <input @click="submit" type="button" class="p-2 btn3" value="TRACK" />
      <!-- <input @click="callServer" type="button" class="p-2 btn3" value="Fire!!" /> -->
    </div>
    <div v-else class="m-lg-5 m-4 d-lg-flex">
      <div>
        <h4 class="py-4">Recent port and destination</h4>
        <ul id="progress">
          <li v-for="(location, index) in progress" :key="index">
            <div class="node green"></div>
            <p>{{ location.location }}</p>
            <ul>
              <li><div class="divider green"></div></li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="m-4">
        <h4 class="my-3">Personal Data</h4>
        <span
          >Below is the personal details and consignment brief information
          retrieved from third party to the receiver.</span
        >
        <div>
          <h6 class="my-3">Senders Information</h6>
          <span>
            <img src="/assets/img/user.png" class="icons mx-1" /> Sender's Full
            Name: {{ this.data.senderInfo.name }} </span
          ><br />
          <span>
            <img src="/assets/img/mail.png" class="icons mx-1" /> Sender's Email
            Address: {{ this.data.senderInfo.email }} </span
          ><br />
          <span>
            <img src="/assets/img/world.png" class="icons mx-1" /> Sender's
            Address: {{ this.data.senderInfo.address }} </span
          ><br />
          <span>
            <img src="/assets/img/world.png" class="icons mx-1" /> Sender's City:
            {{ this.data.senderInfo.city }} </span
          ><br />
          <span>
            <img src="/assets/img/world.png" class="icons mx-1" /> Sender Country:
            {{ this.data.senderInfo.country }}
          </span>
        </div>
        <div class="my-3">
          <h6 class="my-2">Receiver's Information</h6>
          <span>
            <img src="/assets/img/user.png" class="icons mx-1" /> Receiver's Name:
            {{ this.data.receiverInfo.name }} </span
          ><br />
          <span>
            <img src="/assets/img/mail.png" class="icons mx-1" />
            Receiver's Email Address: {{ this.data.receiverInfo.email }} </span
          ><br />
          <span>
            <img src="/assets/img/phone.png" class="icons mx-1" /> Receiver's
            Number: {{ this.data.receiverInfo.phone }} </span
          ><br />
          <span>
            <img src="/assets/img/world.png" class="icons mx-1" /> Delivery
            Address: {{ this.data.receiverInfo.address }} </span
          ><br />
          <span>
            <img src="/assets/img/world.png" class="icons mx-1" /> Delivery City:
            {{ this.data.receiverInfo.city }} </span
          ><br />
          <span>
            <img src="/assets/img/world.png" class="icons mx-1" /> Delivery
            Country: {{ this.data.receiverInfo.country }}
          </span>
          <br />
          <span>
            <img src="/assets/img/world.png" class="icons mx-1" /> Postal Code:
            {{ this.data.receiverInfo.postCode }} </span
          ><br />
          <span
            >Company Seal Logo: Consignment Description and Delivery
            Details</span
          >
        </div>
        <div class="my-3">
          <h6 class="my-2">Delivery Information</h6>
          <span>
            <img src="/assets/img/cargo.png" class="icons mx-1" /> Trasport Method
            {{ this.data.transportMethod }} </span
          ><br />
          <span>
            <img src="/assets/img/cargo.png" class="icons mx-1" /> Cargo Frieght
            Charge: {{ this.data.paymentMethod }} </span
          ><br />
          <span>
            <img src="/assets/img/cargo.png" class="icons mx-1" /> Delivery Date:
            {{ this.data.deliveryDate }} </span
          ><br />
          <span>
            <img src="/assets/img/cargo.png" class="icons mx-1" /> Goods Damage
            Safety: {{ this.data.insurance }} </span
          ><br />
          <span>
            <img src="/assets/img/cargo.png" class="icons mx-1" /> Weight:
            {{ this.data.weight }} </span
          ><br />
          <span>
            <img src="/assets/img/cargo.png" class="icons mx-1" /> Number of
            Consignment: {{ this.data.numberOfGoods }} </span
          ><br />
          <span>
            <img src="/assets/img/cargo.png" class="icons mx-1" /> Delivery Status: Pending </span
          ><br />
        </div>
      </div>
      <div class="mapouter">
        <!-- <div class="gmap_canvas">
          <iframe
            width="600"
            height="500"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=Port%20Rashid,%20Al%20Mina%20-%20Dubai%20-%20United%20Arab%20Emirates&t=&z=17&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe
          ><a href="https://www.whatismyip-address.com"></a><br /><style>
            .mapouter {
              position: relative;
              text-align: right;
              height: 400px;
              width: 330px;
            }</style
          ><a href="https://www.embedgooglemap.net"
            >how to add google map in wordpress</a
          ><style>
            .gmap_canvas {
              overflow: hidden;
              background: none !important;
              height: 400px;
              width: 330px;
            }
          </style>
        </div> -->
      </div>
    </div>
  </section>
  </main>
  
  <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
  export default {
    components: { Navbar, Footer},
  data() {
    return {
      search: false,
      parcelId: "",
      progress: null,
      data: null,
    };
  },
  methods: {
    submit() {
      fetch("https://peak-express.onrender.com/api", {
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
        method: "POST",
        body: JSON.stringify({
          query: `
           query{
              singleParcel(parcelId: "${this.parcelId}"){
                locations{
                  location
                }
                parcelName
                transportMethod
                deliveryDate
                paymentMethod
                insurance
                weight
                numberOfGoods
                senderInfo{
                  name
                  email
                  address
                  city
                  country
                  phone
                  postCode
                }
                receiverInfo{
                  name
                  email
                  address
                  city
                  country
                  phone
                  postCode
                }    
              }
            }
          `,
        }),
      })
        .then((res) => res.json())
        .then((result) => {
          // console.log(result.data.singleParcel);
          this.data = result.data.singleParcel;
          this.progress = result.data.singleParcel.locations;
          this.search = true;
        });
    }
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins&family=Rubik:wght@900&display=swap");
img {
  width: 100%;
  height: 60vh;
}
.services {
  position: relative;
}
.fada {
  font-family: "Poppins", sans-serif;
}
.overlay {
  background: #0d0106;
  opacity: 20%;
  position: absolute;
  top: 0px;
  width: 100%;
  height: 60vh;
  z-index: 2;
}
.overlay-text {
  position: absolute;
  top: 40%;
  width: 50%;
  left: 30%;
  z-index: 2;
  color: #fbfbff;
  font-size: 35px;
  font-family: "Rubik", sans-serif;
}

*,
*:after,
*:before {
  margin: 0;
  padding: 0;
}
#progress{
  position: relative;
}

input[type="button"] {
  margin-top: 20px;
}
.node {
  height: 20px;
  width: 20px;
  border-radius: 50%;
  display: inline-block;
  transition: all 1000ms ease;
}

.activated {
  box-shadow: 0px 0px 3px 2px rgba(194, 255, 194, 0.8);
}

.divider {
  height: 70px;
  width: 2px;
  margin-left: 8px;
  transition: all 800ms ease;
  margin-top: -7px;
}

li p {
  display: inline-block;
  font-family: "Poppins";
  margin-left: 25px;
  font-size: 15px;
  position: absolute;
}

li {
  list-style: none;
  /* line-height: 1px; */
}


.green {
  background-color: rgba(92, 184, 92, 1);
}

.heading {
  font-family: "Rubik", sans-serif;
  font-size: 70px;
  opacity: 30%;
  color: #657ed4;
}
.small-heading {
  color: #fbfbff;
  font-size: 40px;
  font-family: "Rubik", sans-serif;
}
.line {
  width: 80px;
  height: 8px;
  background-color: #0d0106;
}
.caption {
  position: relative;
}
.inner-caption {
  position: absolute;
  top: 20%;
}
span {
  font-size: 13px;
  font-weight: 500;
}
.btn3 {
  background-color: #0d0106;
  color: #fbfbff;
  border: 0px
}
h6,
h4 {
  font-family: "Rubik", sans-serif;
  font-weight: 700;
}
.icons {
  width: 12px;
  height: 12px;
}
@media screen and (max-width: 600px) {
  .overlay-text {
    font-size: 20px;
    width: 50%;
    top: 45%;
  }
  .overlay {
    height: 55vh;
  }
  img {
    height: 55vh;
  }
  .heading {
    font-size: 40px;
  }
  .small-heading {
    font-size: 23px;
  }
  .line {
    width: 80px;
    height: 4px;
    background-color: #0d0106;
  }
  .title {
    font-size: 20px;
  }
  .line {
    display: none;
  }
  .icons {
    width: 16px;
    height: 16px;
  }
}
</style>