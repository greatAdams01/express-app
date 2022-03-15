<template>
  <div class="about">
    
  <Navbar />
      <main id="main">

    <!-- ======= Breadcrumbs ======= -->
    <section id="breadcrumbs" class="breadcrumbs">
      <div class="container">

        <div class="d-flex justify-content-between align-items-center">
          <h2>Logistic Service</h2>
          <ol>
            <li><a @click="$router.push('/')">Home</a></li>
            <li>Logistic Service</li>
          </ol>
        </div>

      </div>
    </section><!-- End Breadcrumbs -->

    <section class="intro">
      <div class="container">
        <p>We offer the full range of courier services at competitive prices: sameday couriers, on-demand and scheduled, overnight and international deliveries, logistics and distribution solutions. We recognise that a high-quality courier service requires maximum efficiency and dedication to customer service.</p>
  <p>
    Our flexible and personalised approach means that the requirements of your business are always at the forefront of our work.
With our money back guarantee, unrivalled customer care and extensive GPS enabled fleet with fully-trained couriers, we guarantee the most effective delivery solution for your business.
  </p>
  <!-- <p>For Swiss standards in every detail, choose Express Cargo Delivery from AsstrA.</p> -->
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
