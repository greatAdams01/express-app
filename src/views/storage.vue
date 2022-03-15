<template>
  <div class="about">
    
  <Navbar />
      <main id="main">

    <!-- ======= Breadcrumbs ======= -->
    <section id="breadcrumbs" class="breadcrumbs">
      <div class="container">

        <div class="d-flex justify-content-between align-items-center">
          <h2>Storage</h2>
          <ol>
            <li><a @click="$router.push('/')">Home</a></li>
            <li>Storage</li>
          </ol>
        </div>

      </div>
    </section><!-- End Breadcrumbs -->

    <section class="intro">
      <div class="container">
        <p>We take pride in catering to a broad range of clientele throughout the country with our warehousing services, which is comprehensive, reliable and flexible – qualities that are essential to help businesses in this market. Our experienced experts design a supply chain flowchart tailored to meet your business and logistic needs, which focuses on not only increasing efficiency, but cutting down costs. With our vast network of warehouses and distribution centers spread throughout the country, it becomes much easier to cater to a audience in a record response time, which is the key factor in winning the hearts of the customer and having an edge over the competitors.</p>
  <p>Team of logistic experts are always available to help you with any queries you might have, or if you want to consult in length your logistic requirements. We would study your requirements and provide you with a quote that would not only suit your budget, but would also save you considerable amount of money in the long term. Our company has through years of experience in this industry has been able to create a network of associates across the length and breadth of country, with our own logistic centers spread throughout the country, which helps us to provide safe, reliable, economical and customized logistic solutions to our clients and partners.</p>
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
