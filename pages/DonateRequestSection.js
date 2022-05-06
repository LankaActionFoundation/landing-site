import React from 'react';
import FilledButton from "../components/buttons/FilledButton";

const DonateRequestSection = () => {

    return(<>
    <section className="bg-white w-full" style={{position: 'relative'}}>
        <div className="relative backgroundTopRight w-full fullHeight backgroundCover" style={{backgroundImage: "linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 150, 0.3)),url('https://firebasestorage.googleapis.com/v0/b/donation-admin-bec44.appspot.com/o/static%2FdonateRequest%2Fdonate.jpg?alt=media&token=af7e8a34-2aba-4326-9740-e729611230bc')"}}>
        <div className="absolute top-0 bottom-0 inset-x-0 z-30 md:w-1/2 p-2 md:p-20" >
                <div
                  className="absolute md:pb-0 md:flex-none flex flex-col justify-end py-3 px-3 xl:py-3 max-w-6xl mx-auto"
                  style={{top:'50%', transform: 'translateY(-50%)'}}
                >
                  

                  <h2 className="mt-2 mb-7 text-3xl md:text-5xl tracking-wide leading-loose text-white" style={{textWrap:'break-word'}}>
                  Sri Lanka has the highest rate of SUICIDE in South Asia
                  </h2>
                  
                  <div className='relative w-32 align-center invisible md:visible'>
                  <a
              target="_blank"
              href="https://www.gofundme.com/f/help-sri-lanka-free-them-from-labour?utm_source=customer&utm_medium=copy_link_all&utm_campaign=p_cp+share-sheet"
            >
              <FilledButton color="yellow">
                <span className="text-black">Donate now</span>
              </FilledButton>
            </a>
                  </div>
                  {/* card */}

                  {/* end of card */}
                </div>
        </div>
        </div>
    </section>
    </>);
}

export default DonateRequestSection;