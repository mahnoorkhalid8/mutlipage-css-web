import React from 'react'
import Link from 'next/link'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <section className="contact">
        <h2 className='fade-in'>Contact Us</h2>
        <form>
          <input type="text" placeholder='Enter your Name' required />
          <input type="email" placeholder='Enter your Email' required />
          <input type="text" placeholder='Enter you Contact Number'/>
          <textarea placeholder="How can we assisst you?" rows={8} required></textarea>
          <button type="submit">Send</button>
        </form>
      </section>
      <section className='follow-us'>
        <h3 className='fade-in'>Follow Us</h3>
        <div className='account'>
        <FaFacebookF /> <Link href="#">Facebook</Link> <br />
        <FaTwitter /> <Link href="#">Twitter</Link> <br />
        <SiInstagram /> <Link href="#">Instagram</Link> <br />
        <FaLinkedinIn /> <Link href="#">LinkedIn</Link> <br />
        </div>
      </section>
    </div>
  )
}

export default Contact
