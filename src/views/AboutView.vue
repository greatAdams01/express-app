<template>
  <div class="about">
    
  <Navbar />
      <main id="main">

    <!-- ======= Breadcrumbs ======= -->
    <section id="breadcrumbs" class="breadcrumbs">
      <div class="container">

        <div class="d-flex justify-content-between align-items-center">
          <h2>About</h2>
          <ol>
            <li><a @click="$router.push('/')">Home</a></li>
            <li>About</li>
          </ol>
        </div>

      </div>
    </section><!-- End Breadcrumbs -->

    <section class="intro">
      <div class="container">
        <p>Over 25 years in the making we have a long history as part of the Royal Mail Group, but in 1986 Royal Mail created a separate parcel function forming the foundations of the business we know today. In 1990 Royal Mail Parcels was rebranded to PeakExpress, along with a massive investment in IT and infrastructure with the introduction of online tracking and the construction of our National and International sorting hubs. Then in 1998 the business was rebranded to PeakExpress Worldwide. The last decade has seen us move into the express parcels market with further investment in technology which enables us to provide our exceptional quality of service. In 2013 we continued investing in the future of our business, enabling us to further enhance our network with 12 new and improved depots. Along with building a brand new processing center in the North West with industry-leading technology; ensuring that we can continue to handle your parcels with greater speed and precision, so we are best placed to meet the rapid growth in demand within the express parcels market.</p>
      </div>
    </section>

    <section class="key-facts ">
      <div class="container">
        <h2 class="text-center">Key Facts</h2>
        <p class="text-center">We operate a hub and spoke collection and delivery system with 54 depots across the UK feeding three highly automated tracking and sorting centres (two of which are in the Midlands and one in the North West).</p>
        <div class="row pt-4">
          <div class="col-12 col-md-6">
            <div class="content">
              <h3>The National Centre</h3>
              <ul>
                <li>Covers 24,000 square metres and is a quarter of a mile in length</li>
                <li>Designed to handle 58,500 parcels per hour</li>
                <li>Scanning technology offering 270 degree bar code reading stations</li>
                <li>At peak times we take delivery of a fully loaded vehicle every 45 seconds</li>
                <li>On site learning resource centre adds to the development of our staff</li>
              </ul>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="content">
              <h3>The International Centre</h3>
              <ul>
                <li>Covers 12,500 square metres</li>
                <li>Processes 35,000 parcels (import and export) per day to 240 countries and territories worldwide</li>
                <li>Handles more than 7 million parcels every year</li>
                <li>Overhead scanners and volumetric measuring technology assist staff in efficient sortation and fast processing</li>
                <li>A dedicated Inbound Customs Clearance team</li>
                <li>11 'rapidscan' x-ray machines ensure that international regulations and tight security are always maintained</li>
              </ul>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="content">
              <h3>The North West Processing Centre</h3>
              <ul>
                <li>A 14 acre site with room to expand</li>
                <li>Using the latest Vanderlande cross belt sorting equipment</li>
                <li>Designed to handle 13,800 parcels per hour</li>
                <li>Advanced camera technology for scanning, video coding and optical character recognition</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

  </main>
  
  <Footer />
  </div>
</template>

<script setup>

import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
</script>


<style>

</style>
