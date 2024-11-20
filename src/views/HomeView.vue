<template>
    <div>
    <header class="bg-blue-500 text-white p-4 flex justify-between">
        <h1>Home</h1>
        <nav>
        <router-link to="/" class="mr-4">Go to Home</router-link>
        <router-link to="/about">Go to About</router-link>
        </nav>
    </header>
    
    <main class="p-8">
        <section class="text-center mb-8">
        <h2 class="text-3xl font-bold mb-4">Meet Our Team</h2>
        <p class="mb-6">Our team is a mix of talented individuals who bring unique skills and perspectives to the table.</p>
        <div class="flex justify-center gap-8">
            <div class="text-center">
            <div class="w-40 h-40 bg-gray-200 rounded-full mb-2"></div>
            <!-- <img src="../assets/abstract-user-flat-4.png" alt=""> -->
            <h3 class="font-bold">John Doe</h3>
            <p>Lead Developer</p>
            </div>
            <div class="text-center">
            <div class="w-40 h-40 bg-gray-200 rounded-full mb-2"></div>
            <!-- <img src="../assets/abstract-user-flat-4.png" alt=""> -->
            <h3 class="font-bold">Jane Smith</h3>
            <p>UI/UX Designer</p>
            </div>
            <div class="text-center">
            <div class="w-40 h-40 bg-gray-200 rounded-full mb-2"></div>
            <!-- <img src="../assets/abstract-user-flat-4.png" alt=""> -->
            <h3 class="font-bold">Samuel Lee</h3>
            <p>Product Manager</p>
            </div>
        </div>
        </section>
        
        <section class="text-center mb-8">
        <div class="w-full h-80 bg-gray-300 mb-4"></div>
        <p>A beautiful placeholder image to showcase design.</p>
        </section>
        
        <section class="text-center bg-blue-100 p-6">
        <h2 class="text-2xl font-bold mb-4">Get in Touch</h2>
        <p class="mb-4">Have questions or want to know more? Feel free to reach out to us.</p>
        <button class="bg-blue-500 text-white py-2 px-4 rounded">Contact Us</button>
        </section>
        
        <section class="grid grid-cols-3 gap-4 mt-8">
        <div class="bg-blue-100 p-4 text-center">
            <h3 class="font-bold">Feature 1</h3>
            <p>Detailed description of feature 1.</p>
        </div>
        <div class="bg-blue-100 p-4 text-center">
            <h3 class="font-bold">Feature 2</h3>
            <p>Detailed description of feature 2.</p>
        </div>
        <div class="bg-blue-100 p-4 text-center">
            <h3 class="font-bold">Feature 3</h3>
            <p>Detailed description of feature 3.</p>
        </div>
        </section>
    </main>
    
    <footer class="bg-blue-800 text-white text-center p-4">
        © 2024 Your Company. All rights reserved.
    </footer>
    </div>
</template>
