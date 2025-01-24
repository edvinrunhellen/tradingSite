import { useState } from 'react'
import './App.css'
import Navbar from './assets/Navbar'
import Footer from './assets/Footer'
import Card from './assets/Card'

function App() {

  const data = [
    {
      title: 'Card with paragraph',

      children: <p>I am a paragraph</p>,
    },

    {
      title: 'Card with div',

      children: <div>I am a div</div>,
    },

    {
      title: 'Card with button',

      children: <button>I am a button</button>,
    },
  ];

  const lushCardData = [
    { background: '#F5EDCE', title: 'G-design', paragraph: 'Lorem ipsum dolar' },
    {
      background: '#89C4E1',
      title: 'Blue ocean',
      paragraph: 'consectetur adipiscing elit',
    },
    { background: '#58287F', title: 'Pr plume', paragraph: 'x ea commodo' },
    {
      background: '#000000',
      title: 'Dark Knight',
      paragraph: 'Duis aute irure dol',
    },
    { background: '#F5EDCE', title: 'S-design', paragraph: 'Lorem ipsum dolar' },
    {
      background: '#89C4E1',
      title: 'Blue ocean delux',
      paragraph: 'consectetur adipiscing elit',
    },
    { background: '#58287F', title: 'Pr plume epic', paragraph: 'x ea commodo' },
    {
      background: '#000000',
      title: 'Dark Knight rise',
      paragraph: 'Duis aute irure dol',
    },
    { background: '#F5EDCE', title: 'U-design', paragraph: 'Lorem ipsum dolar' },
    {
      background: '#89C4E1',
      title: 'Blue ocean supreme',
      paragraph: 'consectetur adipiscing elit',
    },
    { background: '#58287F', title: 'Pr plume', paragraph: 'x ea commodo' },
    { background: '#000000', title: 'Batman', paragraph: 'Duis aute irure dol' },
  ];


  const Cards = { url: '/Cards', text: 'Cards' }
  const Checkout = { url: '/Checkout', text: 'Checkout' }
  const Info = { url: '/contact', text: 'Contact' }
  const links = [Cards, Checkout, Info]

  const navbarProps = {
    logo: './logo.png',
    listOfLinks: links
  }


  return (
    <div className="App" >
      <Navbar {...navbarProps} />
      <Card />
      <Footer />
    </div >
  )
}

export default App
