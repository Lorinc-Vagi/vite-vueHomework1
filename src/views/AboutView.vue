<template>
    <div>
      <header class="bg-blue-500 text-white p-4 flex justify-between">
        <h1>About</h1>
        <nav>
          <router-link to="/" class="mr-4">Go to Home</router-link>
          <router-link to="/about">Go to About</router-link>
        </nav>
      </header>
      
      <main class="p-8">
        <section class="text-center mb-8">
          <h2 class="text-3xl font-bold mb-4">Who We Are</h2>
          <p>We are a team of passionate developers and designers dedicated to building great products.</p>
        </section>
        
        <section class="text-center bg-blue-100 p-6 mb-8">
          <h2 class="text-2xl font-bold mb-4">Our Vision</h2>
          <p>We believe in the power of technology to bring positive change.</p>
          <div class="w-full h-80 bg-gray-300 mt-4"></div>
        </section>
        
        <section class="grid grid-cols-3 gap-4">
          <div class="bg-blue-100 p-4 text-center">
            <h3 class="font-bold">Innovation</h3>
            <p>We focus on bringing innovative ideas to life.</p>
          </div>
          <div class="bg-blue-100 p-4 text-center">
            <h3 class="font-bold">Collaboration</h3>
            <p>We value collaboration and believe great things happen together.</p>
          </div>
          <div class="bg-blue-100 p-4 text-center">
            <h3 class="font-bold">Integrity</h3>
            <p>Integrity is at the heart of everything we do.</p>
          </div>
        </section>
        
        <section class="text-center bg-blue-100 p-6 mt-8">
          <h2 class="text-2xl font-bold mb-4">Want to Work With Us?</h2>
          <p class="mb-2">We are always looking for new opportunities to collaborate.</p>
          <button class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 bg-blue-500 text-white py-2 px-4 rounded">Contact Us</button>
        </section>
      </main>
      
      <footer class="bg-blue-800 text-white text-center p-4">
        © 2024 Your Company. All rights reserved.
      </footer>
    </div>
  </template>
  