import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../../redux/slices/rockets/rocketSlice';
import Rocket from '../Rocket';

const rocketsUrl = 'https://api.spacexdata.com/v3/rockets';
const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);

  useEffect(() => {
    dispatch(fetchRockets(rocketsUrl));
  }, [dispatch]);
  return (
    <main className="py-10">
      <section className="border-t px-4 md:px-20 pt-8 space-y-8 md:space-y-4">
        {rockets.map((rocket) => (
          <Rocket key={rocket.id} rocket={rocket} />
        ))}
      </section>
    </main>
  );
};

export default Rockets;
