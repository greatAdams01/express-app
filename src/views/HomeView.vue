<script setup>

import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
  <div>
    
  <Navbar />
    <section id="hero">
    <div id="heroCarousel" data-bs-interval="5000" class="carousel slide carousel-fade" data-bs-ride="carousel">

      <ol class="carousel-indicators" id="hero-carousel-indicators"></ol>

      <div class="carousel-inner" role="listbox">

        <!-- Slide 1 -->
        <div class="carousel-item active" style="background-image: url(/assets/img/gabriel-santos-GBVDilE8yvI-unsplash.jpg)">
          <div class="carousel-container">
            <div class="container">
              <h2 class="animate__animated animate__fadeInDown">Welcome to <span>PeakExpress</span></h2>
              <p class="animate__animated animate__fadeInUp">We offer rapid and flexible delivery to your doorstep</p>
              <!-- <a href="#about" class="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a> -->
            </div>
          </div>
        </div>

      </div>

    </div>
  </section><!-- End Hero -->

  <main id="main">

    <!-- ======= About Section ======= -->
    <section id="about" class="about">
      <div class="container">

        <div class="row content">
          <div class="col-lg-6">
            <h2>Taking Delivery to it's peak</h2>
            <h3>We operate at the premium end of the parcels market, and do everything we can to satisfy the needs of our customers i.e being reliable, being available, and in the event that things go wrong; being willing to go the extra mile to resolve the issue. With great management our progress over the years has been a successive rise, We've kept the records straight as our client base spanned across the globe. We've maintain a concrete security system, to ensure the safety of parcels.</h3>
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0">
            <p>
              Over 25 years in the making we have a long history as part of the Royal Mail Group, but in 1986 Royal Mail created a separate parcel function forming the foundations of the business we know today. In 1990 Royal Mail Parcels was rebranded to fiduciaryexpress, along with a massive investment in IT and infrastructure with the introduction of online tracking and the construction of our National and International sorting hubs.
            </p>
            <ul>
              <li><i class="ri-check-double-line"></i> Speedy Delivery</li>
              <li><i class="ri-check-double-line"></i> Safe warehousing</li>
              <li><i class="ri-check-double-line"></i> PACKAGING</li>
            </ul>
            <p class="fst-italic">
              Our mission is to provide trouble free courier service on a consistent basis. We show care and respect for each other and we show care and respect for each package we handle.
            </p>
          </div>
        </div>

      </div>
    </section><!-- End About Section -->

    <!-- ======= Clients Section ======= -->
    <section id="clients" class="clients section-bg">
      <div class="container">

        <div class="row">

          <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src="/assets/img/clients/client-1.png" class="img-fluid" alt="">
          </div>

          <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src="/assets/img/clients/client-2.png" class="img-fluid" alt="">
          </div>

          <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src="/assets/img/clients/client-3.png" class="img-fluid" alt="">
          </div>

          <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src="/assets/img/clients/client-4.png" class="img-fluid" alt="">
          </div>

          <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src="/assets/img/clients/client-5.png" class="img-fluid" alt="">
          </div>

          <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src="/assets/img/clients/client-6.png" class="img-fluid" alt="">
          </div>

        </div>

      </div>
    </section><!-- End Clients Section -->

    <!-- ======= Services Section ======= -->
    <section id="services" class="services">
      <div class="container">

        <div class="row">
          <div class="col-md-6">
            <div class="icon-box">
              <i class="bi bi-house-fill"></i>
              <h4><a href="#">DOOR-TO-DOOR DELIVERY</a></h4>
              <p>Do you need something delivered? We are what you are looking for!</p>
            </div>
          </div>
          <div class="col-md-6 mt-4 mt-md-0">
            <div class="icon-box">
              <i class="bi bi-globe"></i>
              <h4><a href="#">WORLDWIDE TRANSPORT</a></h4>
              <p>We can transport your things anywhere in the world.</p>
            </div>
          </div>
          <div class="col-md-6 mt-4 mt-md-0">
            <div class="icon-box">
              <i class="bi bi-truck"></i>
              <h4><a href="#">CARGO</a></h4>
              <p>Let us transport your things from point A to point B fast and securely.</p>
            </div>
          </div>
          <div class="col-md-6 mt-4 mt-md-0">
            <div class="icon-box">
              <i class="bi bi-archive-fill"></i>
              <h4><a href="#">WAREHOUSING</a></h4>
              <p>We have top notch security and loads of space. Store your stuff at our warehouse.</p>
            </div>
          </div>
          <div class="col-md-6 mt-4 mt-md-0">
            <div class="icon-box">
              <i class="bi bi-box-seam"></i>
              <h4><a href="#">PACKAGING AND STORAGE</a></h4>
              <p>We can package and store your things.</p>
            </div>
          </div>
          <div class="col-md-6 mt-4 mt-md-0">
            <div class="icon-box">
              <i class="bi bi-signpost-split"></i>
              <h4><a href="#">GROUND TRANSPORT</a></h4>
              <p>Transport your things with our super moving vans.</p>
            </div>
          </div>
        </div>

      </div>
    </section><!-- End Services Section -->

    <section class="cards">
      <div class="container">
        <h2 class="section-title">Our Services</h2>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card">
              <img src="https://demo.proteusthemes.com/cargopress/wp-content/uploads/sites/24/2015/04/32-360x240.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Cargo</h5>
                <p class="card-text">Already for 25 years, PeakExpress has been organizing international transportation. Express delivery is an innovative service and an effective logistics solution for the delivery of small cargo. This service is useful for companies of various</p>
                <p class="link-it" @click="$router.push('/cargo')">Read more</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="https://demo.proteusthemes.com/cargopress/wp-content/uploads/sites/24/2015/04/30-360x240.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Logistic Service</h5>
                <p class="card-text">We offer the full range of courier services at competitive prices: sameday couriers, on-demand and scheduled, overnight and international deliveries, logistics and distribution solutions. We recognise that a high-quality courier service requires…</p>
                <p @click="$router.push('/logistic')" class="link-it">Read more</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="https://demo.proteusthemes.com/cargopress/wp-content/uploads/sites/24/2015/04/4-360x240.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Storage</h5>
                <p class="card-text">We take pride in catering to a broad range of clientele throughout the country with our warehousing services, which is comprehensive, reliable and flexible – qualities that are essential to help businesses in this market. Our experienced experts …</p>
                <p @click="$router.push('/storage')" class="link-it">Read more</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="container-fluid our-values text-center">
      <div class="content">
        <h2>OUR CORE VALUES</h2>
        <p>WRITTEN BY PeakExpress CEO</p>
        <hr>
        <p>Over the years we have done so much by synergy of intellects by different people. I am so much grateful to my team of staff who relentlessly worked hard to make this brand a success. The last decade has seen us move into the express parcels market with further investment in technology which enables us to provide our exceptional quality of service. In 2013 we continued investing in the future of our business, enabling us to further enhance our network with 12 new and improved depots.. All are the total efforst of my team.</p>
      </div>
    </section>

  </main><!-- End #main -->
  
  <Footer />
  </div>
</template>

<style>
.link-it {
  cursor: pointer;
}
</style>
