import React, { useState } from 'react';
import TopBanner from '../components/Shared/TopBanner/TopBanner';
import Container from '../components/Container/Container';
import { faqData } from '../constants/faq';
import FaqCollapsedCard from '../components/Shared/FaqCollapsedCard';

const FAQ = () => {
    const [category, setCategory] = useState("healthfrogs")
    return (
        <div>
            <TopBanner
                img="/About/FAQ.png"
                heading={"Frequently Asked Questions"}
            />
            <Container>
                <div className='py-10'>
                    <div className='flex justify-center gap-5'>
                        <button
                            onClick={() => setCategory("healthfrogs")}
                            className={`${category === "healthfrogs" ? "bg-blue-500 text-white" : "bg-white text-blue-500"} border-2 duration-300 w-[250px] rounded-lg py-2`}
                        >
                            HealhFROGS
                        </button>
                        <button
                            onClick={() => setCategory("solutions-partners")}
                            className={`${category === "solutions-partners" ? "bg-blue-500 text-white" : "bg-white text-blue-500"} border-2 duration-300 w-[250px] rounded-lg py-2`}>
                            Solutions Partner
                        </button>
                        <button
                            onClick={() => setCategory("customer")}
                            className={`${category === "customer" ? "bg-blue-500 text-white" : "bg-white text-blue-500"} border-2 duration-300 w-[250px] rounded-lg py-2`}>
                            Customers
                        </button>
                    </div>
                    <div>
                        {
                            faqData.filter(f => f.category === category).map(data => <FaqCollapsedCard key={data.id} data={data} />)
                        }
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default FAQ;