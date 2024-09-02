import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../components/Container/Container';
import LogoText from '../components/Shared/LogoText/LogoText';
import SubHeading from '../components/Shared/SubHeading';
import TopBanner from '../components/Shared/TopBanner/TopBanner';
import { businessChallenges } from '../constants/business-challenges';

const BusinessChallenges = () => {
    const [category, setCategory] = useState("finance")
    const [filteredChallenges, setFilteredChallenges] = useState([]);
    const navigate = useNavigate()
    const categories = [
        { id: 1, label: "Finance", category: 'finance' },
        { id: 2, label: "Regulation & Compliance", category: 'regulations' },
        { id: 3, label: "Operations & Supply Management", category: 'operations' },
        { id: 4, label: "Growth - Business Development", category: 'growth' },
        { id: 5, label: "Strategy", category: 'strategy' }
    ];
    useEffect(() => {
        const filteredChallenges = businessChallenges.filter(b => b.category.toLowerCase() === category)
        setFilteredChallenges(filteredChallenges)
    }, [category]);

    return (
        <div>
            <TopBanner
                heading={"Solution Partners"}
                img="/About/Partner.png"
            />
            <Container>
                <div className='py-10 space-y-10'>
                    <p className='flex justify-center gap-3 text-xl text-primary'>
                        <LogoText /> helps customers connect with solution partners who are proven in the field to solve challenges
                    </p>
                    <div className='flex flex-col lg:flex-row items-center justify-between'>
                        <SubHeading text={"Our Solution Partners"} />
                        <div className='flex flex-col lg:flex-row items-center gap-5 justify-between'>
                            <div className='flex flex-col lg:flex-row lg:items-center justify-end gap-3 w-full'>
                                <p className='text-lg'>Filter By :</p>
                                <DropDownMenu category={category} setCategory={setCategory} options={categories} />
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-5 gap-5'>
                        {
                            Array.from({ length: 10 }).map(x => (
                                <div className='p-5 border rounded-xl bg-gray-50 space-y-3 cursor-pointer'>
                                    <h5 className='font-syne'>Notion</h5>
                                    <img
                                        className='size-[80px] mx-auto'
                                        src="https://images.g2crowd.com/uploads/product/hd_favicon/43bf53de40136acd6c0aed67eb459fcd/notion.svg"
                                        alt=""
                                    />
                                </div>
                            ))
                        }
                    </div>
                    <div className='flex justify-center'>
                        <button
                            onClick={() => navigate("/user-profile")}
                            className='text-xl font-syne bg-softBlue text-white px-14 py-3 rounded-md'
                        >
                            Join As Solution Partner
                        </button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

const DropDownMenu = ({ options, category, setCategory }) => {
    return (
        <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className='w-full lg:w-[300px] h-[45px] bg-[#eff0f6] outline-none px-6 focus:outline-dashed focus:outline-blue-600 rounded-md text-black'>
            <option value="" selected disabled>Category</option>
            {
                options.map(o => <option value={o.category} >{o.label}</option>)
            }
        </select>
    )
}

export default BusinessChallenges;