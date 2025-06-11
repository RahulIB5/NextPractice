import Link from 'next/link';
import React from 'react'

export const metadata = {
  title: 'About Page',
};

const About = () => {
  const aboutid = 100; // This can be dynamic or fetched from props or state
  return (
    <main>
      <h1>About me</h1>
      <h1>
        <Link href="/about/1">about 1</Link>
      </h1>
      <h3>
        <Link href={`/about/${aboutid}`}>about {aboutid}</Link>
      </h3>
    </main>
  );
}       


export default About