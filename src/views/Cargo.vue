<template>
  <div class="about">
    
  <Navbar />
      <main id="main">

    <!-- ======= Breadcrumbs ======= -->
    <section id="breadcrumbs" class="breadcrumbs">
      <div class="container">

        <div class="d-flex justify-content-between align-items-center">
          <h2>Cargo</h2>
          <ol>
            <li><a @click="$router.push('/')">Home</a></li>
            <li>Cargo</li>
          </ol>
        </div>

      </div>
    </section><!-- End Breadcrumbs -->

    <section class="intro">
      <div class="container">
        <p>Over the years, Peak express has been organizing international transportation.peak Express delivery is an innovative service and an effective logistics solution for the delivery of small cargo. This service is useful for companies of various scales – from individual traders to mass producers and importers.
</p>
  <p>
    Peak Express delivery is appropriate for small consignments of items from the CIS and within Europe by car. Peak express helps its Clients benefit from all the advantages of fast delivery within Europe and elsewhere. Our employees analyze Clients’ needs and cargo characteristics, formulate optimal routes, and calculate the price. Peak express delivers the cargo strictly according to the agreed terms regardless of the geography of transportation. Close cooperation with reliable logistics companies and other Partners allows us to maintain a flexible and transparent pricing policy and excellent service quality levels.
  </p>
  <p>For Swiss standards in every detail, choose Express Cargo Delivery from AsstrA.</p>
      </div>
    </section>

  <div class="container">
    <div class="row img-txt">
      <div class="col-12 col-md-6">
        <div class="content">
          <img src="https://demo.proteusthemes.com/cargopress/wp-content/uploads/sites/24/2015/04/34.jpg" alt="">
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div class="content">
          <img src="https://demo.proteusthemes.com/cargopress/wp-content/uploads/sites/24/2015/04/23.jpg" alt="">
        </div>
      </div>
    </div>
  </div>

  </main>
  
  <Footer />
  </div>
</template>

<script setup>

import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
</script>


<style>
.img-txt img{
  width: 448px;
  /* height: 48px; */
}
</style>
