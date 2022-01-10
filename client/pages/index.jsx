import Head from 'next/head';
import { React, useEffect, useState } from 'react';
import axios from 'axios';
import { Mynavbar } from './components/Mynavbar.component';

export default function Home() {
  const [result, setResult] = useState('');

  // search for data
  const search = async () => {
    const res = await axios.get('http://localhost:4001');
    // console.log('results', res.data);
    setResult(res.data);
  };

  useEffect(() => {
    search();
  }, []);

  return (
    <div>
      <Head>
        <title>Inventory Tracker</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/truck.png" />
      </Head>

      <Mynavbar />
      <main>
        hi heres a :
        <br />
        {result}
      </main>

    </div>
  );
}
