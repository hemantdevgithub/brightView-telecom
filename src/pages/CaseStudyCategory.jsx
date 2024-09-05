import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Container from "../components/Container/Container";
import { caseStudies } from "../constants/caste-study";

const CaseStudyCategory = () => {
  const { category } = useParams();
  const categories = [
    { id: 1, label: "Finance", redirect: "finance" },
    { id: 2, label: "Regulation & Compliance", redirect: "regulations" },
    { id: 3, label: "Operations & Supply Management", redirect: "operations" },
    { id: 4, label: "Growth - Business Development", redirect: "growth" },
    { id: 5, label: "Strategy", redirect: "strategy" },
  ];

  const navigate = useNavigate();

  const handleCategoryChange = (selectedCategory) => {
    // Redirect to the selected category
    navigate(`/insights/${selectedCategory}`);
  };

  return (
    <div className="bg-gray-100">
      <Container>
        <div className="py-10 font-poppins space-y-10">
          <div className="py-3 bg-white rounded-md flex items-center justify-between px-5">
            <p className="text-lg">Filter By :</p>
            <div className="h-full flex gap-3">
              <DropDownMenu
                category={categories}
                selectedCategory={category}
                onCategoryChange={handleCategoryChange}
              />
              <DropDownMenu
                category={categories}
                selectedCategory={category}
                onCategoryChange={handleCategoryChange}
              />
              <DropDownMenu
                category={categories}
                selectedCategory={category}
                onCategoryChange={handleCategoryChange}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {caseStudies
              // .filter(studies => studies.category.toLowerCase() === category)
              .map((caseStudy) => (
                <Link
                  to={`/insights-details/${caseStudy.id}`}
                  className="font-poppins space-y-3 group w-full"
                >
                  <div className="overflow-hidden w-full">
                    <img
                      src={caseStudy.thumbnail}
                      className="h-[230px] group-hover:scale-105 w-full duration-300 object-cover"
                      alt="case study images"
                    />
                  </div>
                  <h4 className="text-lg text-gray-600 font-semibold group-hover:text-primary duration-300">
                    {caseStudy.title}
                  </h4>
                  <p className="text-sm text-gray-600">{caseStudy.date}</p>
                  <hr className="border" />
                </Link>
              ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

const DropDownMenu = ({ category, selectedCategory, onCategoryChange }) => {
  return (
    <select
      className="w-full lg:w-[300px] h-[45px] bg-[#eff0f6] outline-none px-6 focus:outline-dashed focus:outline-blue-600 rounded-md text-black"
      value={selectedCategory}
      onChange={(e) => onCategoryChange(e.target.value)}
    >
      <option value="" disabled>
        Category
      </option>
      {category.map((c) => (
        <option key={c.id} value={c.redirect}>
          {c.label}
        </option>
      ))}
    </select>
  );
};

export default CaseStudyCategory;
