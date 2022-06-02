import Link from 'next/link';
import React, {useEffect, useState} from 'react';
import CircularDonationCard from "../../components/CircularDonationCard";

const Projects = ({donations}) => {

    return(<>
    <section className="bg-white w-full">
            <div className="w-full max-w-7xl mx-auto py-10 px-3 lg:px-0">
              {/* <h5 className="w-full block text-center text-base md:text-lg text-gray-800">
              Give a hand to make
            </h5> */}
            <div className='heading-2'>
              <h2 className="mt-5 text-3xl md:text-5xl font-title text-gray-800  sm:w-auto  mx-auto block text-left font-bold pull-left">
                The smallest donation can change someone’s life.
              </h2>
              <div className='viewAll'><Link href={'/donation/upcoming-projects/1'}>View All</Link></div>
              <div className='clear-both'></div>
            </div>

              {/* <h2 className="mt-5 text-3xl md:text-5xl font-title text-gray-800 w-3/4 sm:w-auto  mx-auto block text-left font-bold heading-2">
                The smallest donation can change someone’s life. <br />
              </h2> */}

              {donations && donations.length > 0 && (
                // <div className="mt-10 w-full md:w-auto flex flex-col md:flex-row items-baseline justify-center gap-4">
                <div className="mt-10 w-full md:w-auto grid grid-cols-1 md:grid-cols-3 justify-center gap-4">
                  {donations.map((donation) => (
                    <CircularDonationCard
                      slug={donation.slug}
                      title={donation.title}
                      thumbnail={donation.thumbnail}
                      raised={parseInt(donation.reached)}
                      goal={parseInt(donation.goal)}
                      subtitle={donation.subtitle}
                    />
                  ))}
                </div>
              )}
            </div>
          </section>
    </>);
}

export default Projects;