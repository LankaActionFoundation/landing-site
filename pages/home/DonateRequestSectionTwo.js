import React from 'react';
import FilledButton from "../../components/buttons/FilledButton";

const DonateRequestSectionTwo = () => {

    return(<>
    <section className="bg-white w-full" style={{position: 'relative'}}>
        <div className="relative backgroundTopRight w-100 fullHeight backgroundCover homeSectionSliced2" style={{backgroundImage: "linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 150, 0.3)),url('https://firebasestorage.googleapis.com/v0/b/donation-admin-bec44.appspot.com/o/static%2FdonateRequest%2Fdonate.jpg?alt=media&token=6efa6a85-6d91-41eb-ab67-65446ad1092d')"}}>
        <div className="absolute top-0 bottom-0 right-0 inset-x-100 z-30 w-full md:w-1/4 p-2 md:p-20 " 
                  style={{}}>
                <div
                  className="absolute right-0 md:pb-0 md:flex-none flex flex-col justify-end py-3 px-3 xl:py-3 max-w-6xl mx-auto homeTextCont"
                >
                  

                  <h2 className="mt-2 mb-7 text-xl md:text-2xl tracking-wide leading-loose text-white" style={{textWrap:'break-word'}}>
                  We can all make a difference in the lives of others, because it is the most simple of gestures that make the most significant of differences.
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

export default DonateRequestSectionTwo;