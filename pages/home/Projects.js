import React, {useEffect, useState} from 'react';
import CircularDonationCard from "../../components/CircularDonationCard";

const Projects = ({donations}) => {

    return(<>
    <section className="bg-white w-full">
            <div className="w-full max-w-6xl mx-auto py-10 px-3 lg:px-0">
              {/* <h5 className="w-full block text-center text-base md:text-lg text-gray-800">
              Give a hand to make
            </h5> */}

              <h2 className="mt-5 text-3xl md:text-4xl font-title text-gray-800 w-full max-w-lg xl:max-w-none mx-auto block text-center font-bold">
                The smallest donation can change someone’s life. <br />
              </h2>

              {donations && donations.length > 0 && (
                <div className="mt-10 w-full md:w-auto flex flex-col md:flex-row items-baseline justify-center gap-14">
                  {donations.map((donation) => (
                    <CircularDonationCard
                      slug={donation.slug}
                      title={donation.title}
                      thumbnail={donation.thumbnail}
                      raised={parseInt(donation.reached)}
                      goal={parseInt(donation.goal)}
                    />
                  ))}
                </div>
              )}
            </div>
          </section>
    </>);
}

export default Projects;