import React from 'react';
import Layout from '../global/Layout';
import NavBar from '../components/NavBar/NavBar';
import HeaderNavBar from '../components/HeaderNavBar/HeaderNavBar';
import Footer from '../components/Footer/Footer';
import DatePicker from '../components/DatePicker/DatePicker';


const AppointmentPage = () => (
  <Layout>
    <HeaderNavBar />
    <NavBar />
    <p>book-appointment page. this sign is for testing purposes</p>
    <DatePicker label="Requested Date*" name="Requested Date" />
    {/* <SelectDropdown /> does not work */}
    {/* <TextInput />
    <form
      name="first name"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input name="first name" placeholder="First name" type="text" />
      <button>NAme</button>
    </form> */}
    <Footer />
  </Layout>
);

export default AppointmentPage;
