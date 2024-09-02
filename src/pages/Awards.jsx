import React from 'react';
import Container from '../components/Container/Container';
import TopBanner from '../components/Shared/TopBanner/TopBanner';

const Awards = () => {
  return (
    <div>
      <TopBanner pageName={"Our Awards"} img={"/Banners/award.jpg"} heading={"Awards"} />
      <Container>
        <div className='py-10 grid grid-cols-3 gap-5  mx-auto'>
          {
            Array.from({ length: 10 }).map(x => (
              <div className='border rounded-xl overflow-hidden '><img className='h-[300px] w-full object-cover' src="https://supportbrightviewtelecom.netlify.app/img/certificate2.jpg" alt="" />
                <div className='p-3 flex flex-col justify-center items-center gap-3 text-center'>
                  <h3 className='text-xl'>Award Title</h3>
                  <p className='text-gray-600 text-sm'>Description of the award or achievement. Highlight the significance of the award and its impact on your company.</p>
                </div>
              </div>
            ))
          }
        </div>
      </Container>
    </div>
  );
};

export default Awards;