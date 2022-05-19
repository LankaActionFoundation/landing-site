import React from 'react';
import ImpactCard from './ImpactCard';

const ImpactSection = () => {

    return(<>
    <section className="bg-brandLightBlue  w-full">
            <div className="w-full max-w-6xl mx-auto py-10 px-3 lg:px-0">
                <h2 className="mt-5 text-3xl md:text-4xl font-title text-gray-800 w-full max-w-lg xl:max-w-none mx-auto block text-center font-bold">
                The impact of your donation
                </h2>

                  <div className="mt-10 w-full md:w-auto flex flex-col md:flex-row items-baseline justify-center gap-14">
                    <ImpactCard 
                        title={'1. DONATIONS'}
                        description={'Good people donate $ and £ to Lanka Vision Action Foundation.'}
                        thumbnail={'https://firebasestorage.googleapis.com/v0/b/donation-admin-bec44.appspot.com/o/static%2Fimpact%2Fimpact1.jpg?alt=media&token=2336ca78-9538-48a6-9ebe-b7cb0cfc9e59'}
                    />
                  


                  
                    <ImpactCard 
                        title={'2. EDUCATION'}
                        description={'Our staff team, run our educational programmes for children and young people.'}
                        thumbnail={'https://firebasestorage.googleapis.com/v0/b/donation-admin-bec44.appspot.com/o/static%2Fimpact%2Fimpact2.jpg?alt=media&token=687b01af-d525-4cc2-8051-8cd77c3da180'}
                    />
                  

                  
                    <ImpactCard 
                        title={'3. YOUTH BECOME LEADERS'}
                        description={'Young people succeed in employment out of the tea estates and lift their families out of extreme poverty.'}
                        thumbnail={'https://firebasestorage.googleapis.com/v0/b/donation-admin-bec44.appspot.com/o/static%2Fimpact%2Fimpact3.jpg?alt=media&token=ed9a539d-9bb9-4c89-9245-9045695b8042'}
                    />
                  

                  
                    <ImpactCard 
                        title={'4. EVALUATE & IMPROVE'}
                        description={'We monitor, evaluate, learn and improve our programmes.'}
                        thumbnail={'https://firebasestorage.googleapis.com/v0/b/donation-admin-bec44.appspot.com/o/static%2Fimpact%2Fimpact4.jpg?alt=media&token=f40e9cda-42b2-43a6-a5e9-ccd31ab8c07c'}
                    />
                  </div>

            </div>
          </section>
    </>);
}

export default ImpactSection