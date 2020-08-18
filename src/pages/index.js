import React from "react"
import { Link } from "gatsby"
import { Swiper, SwiperSlide } from 'swiper/react';
import _ from "lodash"
import axios from 'axios'
import chalk from 'chalk'
import { Swiper, SwiperSlide } from 'swiper/react';

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const a = _.debounce(() => { console.log('hello') })
a()

async function getUser() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

getUser()

const IndexPage = () => {
  console.log(chalk.blue('Hello world!'));
  
  return (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gasdasatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)}

export default IndexPage
