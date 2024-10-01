<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->


<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h1 
  onclick="location.href='/'" 
  class="hidden md:block cursor-pointer text-3xl font-bold" 
  style="font-family: Arial, sans-serif; color: #0078d4;"
>
  SharePoint
</h1>


<h3 align="center">SharePoint</h3>

  <p align="center">
    
Introducing an innovative web application that allows users to rent anything they need with ease. The platform is built with the latest technologies, including Next.js 13 App Router, React, Tailwind, Prisma, MongoDB, NextAuth, and cloudinary for image uploading, ensuring a seamless and user-friendly experience.
<br/>

With advanced search and filter options, users can easily find the perfect item to rent for any occasion. The reliable and secure booking system ensures a hassle-free rental process. Plus, with the cloudinary integration, it's easy to upload and manage images, so users can see exactly what they're renting.
<br/>

This web application is perfect for those looking to rent a tool for a DIY project, a costume for a special event, or a car for a weekend getaway. The convenience and affordability of renting through this platform cannot be beat.
<br />
<br />
<a href="">View Demo</a>

</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li>
      <a href="#features">Features</a>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#special-thanks">Special Thanks</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## Built With

<ul>
  <li><a href="https://nextjs.org/">Next.js 13</a></li>
  <li><a href="https://reactjs.org/">React</a></li>
  <li><a href="https://www.mongodb.com/">MongoDB</a></li>
  <li><a href="https://nodejs.org/en/">Node</a></li>
  <li><a href="https://tailwindcss.com/">Tailwind CSS</a></li>
  <li><a href="https://www.prisma.io/">Prisma</a></li>
  <li><a href="https://next-auth.js.org/">NextAuth.js</a></li>
</ul>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

1. Make sure you have latest version of npm installed
   - npm
     ```sh
     npm install npm@latest -g
     ```
2. Make sure you have your accounts set up on MongoDB, GCP and Cloudinary

### Installation

1. Cloning the repository

  ```shell
  git clone 
  ```

2. Install packages

  ```shell
  npm i
  ```

3. Setup .env file

  ```js
  DATABASE_URL=
  GOOGLE_CLIENT_ID=
  GOOGLE_CLIENT_SECRET=
  GITHUB_ID=
  GITHUB_SECRET=
  NEXTAUTH_SECRET=
  ```

4. Setup Prisma

  ```shell
  npx prisma db push

  ```

5. Start the app

  ```shell
  npm run dev
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Features

- Tailwind design
- Tailwind animations and effects
- Full responsiveness
- Credential authentication
- Google authentication
- Github authentication
- Image upload using Cloudinary CDN
- Client form validation and handling using react-hook-form
- Server error handling using react-toast
- Calendars with react-date-range
- Page loading state
- Page empty state
- Booking system
- Customer booking cancellation
- Owner booking cancellation
- Creation and deletion of items
- Pricing calculation
- Favorites system
- Shareable URL filters


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->



