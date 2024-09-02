import React from 'react';
import TopBanner from '../components/Shared/TopBanner/TopBanner';
import Container from '../components/Container/Container';
import TestimonialCard from '../components/Testimonials/TestimonialCard';

const ClientAndTestimonial = () => {
    const testimonials = [
        {
            id: 2,
            name: "Naveen Balusu",
            designation: "Director, Dilizent",
            testimonial:
                "HealthFROGS helped us in a critical situation with our healthcare customer by providing management consulting support in building customer journey road maps in segments of Hospital Cost Reduction Strategy, Investment in Advanced Medical Equipment, Fraud Detection, and Financial Impact. Also, their Tech team partnership enabled us to meet all KPIs and timelines in providing digital solutions to our end customers.",
            img: "https://t4.ftcdn.net/jpg/03/11/50/27/360_F_311502737_TZ2RJj273mcoaZyKBSHqbdM7QMcb6HfP.jpg",
        },
        {
            id: 2,
            name: "Phani Penmatsa",
            designation: "President Epicize",
            testimonial:
                "We pride ourselves on collaborating with HealthFROGS to assist our customers in the Healthcare segment. At the very need of security and authenticity of patient and critical data, HealthFROGS assembled a quick team of experts to achieve the key milestones with our customers. ",
            img:"https://media.licdn.com/dms/image/C4E03AQGH2XhK-l5g2A/profile-displayphoto-shrink_400_400/0/1561928039839?e=1709769600&v=beta&t=d1umcH1GPrHcFRWixQ9NUDebIbA1wuw__1wh8ObIrs4",
        },
        {
            id: 2,
            name: "Nadh",
            designation: "Vice President, RavSol",
            testimonial:
                "We desperately sought a business development partner to extend our non-healthcare products and services to the Healthcare vertical. That is when HealthFROGS chimed in, providing us with functional healthcare knowledge that helped us customize our solutions for Healthcare customers. HeathFROGS' digital marketing and sales development expertise lined us with a good number of customer meetups. ",
            img:"https://randomuser.me/api/portraits/men/75.jpg",
        },
    ];
    return (
        <div>
            <TopBanner img={'/Team/team.png'} heading={"Client And Testimonials"} />
            <Container>
                <div className='py-20'>
                    {
                        testimonials.map(review => <TestimonialCard key={review.id} review={review}/>)
}
                </div>
            </Container>
        </div>
    );
};

export default ClientAndTestimonial;
