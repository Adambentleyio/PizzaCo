import React from 'react';
import useLatestData from '../utils/useLatestData';
import { HomePageGrid } from '../styles/Grids';

function CurrentlySlicing({ slicemasters }) {
  return <h3> Slicing</h3>;
}

function HotSlices() {
  return <h3> Hot Slices</h3>;
}

export default function HomePage() {
  const { slicemasters, hotSlices } = useLatestData();
  return (
    <div className="center">
      <h1>The Best Pizza Downtown</h1>
      <p>Open 11am to 11pm</p>
      <HomePageGrid>
        <CurrentlySlicing slicemasters={slicemasters} />
        <HotSlices hotSlices={hotSlices} />
      </HomePageGrid>
    </div>
  );
}
