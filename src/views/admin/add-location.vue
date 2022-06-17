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
      <button class="openbtn" @click="openNav">&#9776;</button>
      <div>
        <div class="heading my-4">Add Location</div>
        <div class="d-lg-flex w-100">
          <div class="m-2 w-100">
            <input
              type="text"
              class="p-2 border"
              placeholder="Parcel Id"
              v-model="parcelId"
            />
          </div>
          <div class="m-2 w-100">
            <input
              type="text"
              class="p-2 border"
              placeholder="Location"
              v-model="location"
            />
          </div>
        </div>
        <div class="d-lg-flex w-100">
          <div class="m-2 w-100">
            <input
              type="text"
              class="p-2 border"
              placeholder="Time"
              v-model="time"
            />
          </div>
          <div class="m-2 w-100">
            <input
              type="date"
              class="p-2 border"
              placeholder="Date"
              v-model="date"
            />
          </div>
        </div>
        <div>
          <input
            @click="submit"
            type="button"
            value="SUBMIT"
            class="p-2 m-2 btn3"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { mapMutations } from "vuex";
const token = localStorage.getItem('token')
const userToken = JSON.parse(token)
export default {
  // middleware: "authenticated",
  data() {
    return {
      parcelId: "",
      location: "",
      time: "",
      date: "",
    };
  },
  methods: {
    // ...mapMutations(["userLoggedOut"]),
    logout() {
      // this.userLoggedOut();
      localStorage.removeItem('token')
      this.$router.push("/login");
    },
    submit() {
      fetch("https://ontime-shipping.herokuapp.com/api", {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${userToken}`,
        },
        method: "POST",
        body: JSON.stringify({
          query: `
              mutation{
                addLocation(addParcelInput:{parcelId:"${this.parcelId}", location:"${this.location}", date: "${this.date}",  time:"${this.time}"}){
                  parcelName
                  _id
                  locations{
                    location
                  }
                }
              }
          `,
        }),
      })
        .then((res) => res.json())
        .then((result) => {
          // console.log(result);
          this.$router.push("/admin");
        });
    },
    openNav() {
      document.getElementById("mySidepanel").style.width = "300px";
      document.getElementById("closebtn").style.display = "block";
    },
    /* Set the width of the sidebar to 0 (hide it) */
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
.btn3 {
  background-color: #0d0106;
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
input {
  width: 100%;
}
.openbtn:hover {
  background-color: #444;
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
