import React, { useState } from "react";
import "./Filter.css";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { IoIosArrowDown } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import Slider from "@mui/material/Slider";

const Filter = () => {
  const [value, setValue] = useState([5000, 100000]);

  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedEngines, setSelectedEngines] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [brandsData] = useState([
    { name: "Toyota", count: 122 },
    { name: "BMW", count: 87 },
    { name: "Mercedes", count: 96 },
    { name: "Audi", count: 54 },
    { name: "Volkswagen", count: 45 },
    { name: "Ford", count: 73 },
    { name: "Kia", count: 38 },
  ]);

  const handleColorChange = (color) => {
    setSelectedColors((prevColors) =>
      prevColors.includes(color)
        ? prevColors.filter((c) => c !== color)
        : [...prevColors, color]
    );
  };

  const handleEngineChange = (engine) => {
    setSelectedEngines((prev) =>
      prev.includes(engine)
        ? prev.filter((e) => e !== engine)
        : [...prev, engine]
    );
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const filteredBrands = brandsData.filter((brand) =>
    brand.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filterCategories = [
    "Sedan",
    "SUV",
    "Hatchback",
    "Convertible",
    "Pickup",
    "Coupe",
    "Van",
    "Wagon",
    "Crossover",
    "Electric",
  ];

  const filterColors = [
    "#000000", // Black
    "#FFFFFF", // White
    "#C0C0C0", // Silver
    "#FF0000", // Red
    "#0000FF", // Blue
    "#008000", // Green
    "#808080", // Gray
    "#FFFF00", // Yellow
    "#800080", // Purple
    "#FFA500", // Orange
  ];

  const engineSizes = ["1.0L", "1.5L", "2.0L", "2.5L", "3.0L", "4.0L+"];

  return (
    <div>
      <div className="filterSection">
        <div className="filterCategories">
          <Accordion defaultExpanded disableGutters elevation={0}>
            <AccordionSummary
              expandIcon={<IoIosArrowDown size={20} />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{ padding: 0, marginBottom: 2 }}
            >
              <h5 className="filterHeading">Car Types</h5>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: 0 }}>
              {filterCategories.map((category, index) => (
                <p key={index}>{category}</p>
              ))}
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="filterColors">
          <Accordion defaultExpanded disableGutters elevation={0}>
            <AccordionSummary
              expandIcon={<IoIosArrowDown size={20} />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{ padding: 0, marginBottom: 2 }}
            >
              <h5 className="filterHeading">Color</h5>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: 0 }}>
              <div className="filterColorBtn">
                {filterColors.map((color, index) => (
                  <button
                    key={index}
                    className={`colorButton ${
                      selectedColors.includes(color) ? "selected" : ""
                    }`}
                    style={{
                      backgroundColor: color,
                    }}
                    onClick={() => handleColorChange(color)}
                  />
                ))}
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="filterSizes">
          <Accordion defaultExpanded disableGutters elevation={0}>
            <AccordionSummary
              expandIcon={<IoIosArrowDown size={20} />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{ padding: 0, marginBottom: 2 }}
            >
              <h5 className="filterHeading">Engine Size</h5>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: 0 }}>
              <div className="sizeButtons">
                {engineSizes.map((engine, index) => (
                  <button
                    key={index}
                    className={`sizeButton ${
                      selectedEngines.includes(engine) ? "selected" : ""
                    }`}
                    onClick={() => handleEngineChange(engine)}
                  >
                    {engine}
                  </button>
                ))}
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="filterBrands">
          <Accordion defaultExpanded disableGutters elevation={0}>
            <AccordionSummary
              expandIcon={<IoIosArrowDown size={20} />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{ padding: 0, marginBottom: 2 }}
            >
              <h5 className="filterHeading">Car Brands</h5>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: 0 }}>
              {/* Search bar */}
              <div className="searchBar">
                <BiSearch className="searchIcon" size={20} color={"#767676"} />
                <input
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Brand list */}
              <div className="brandList">
                {filteredBrands.length > 0 ? (
                  filteredBrands.map((brand, index) => (
                    <div className="brandItem" key={index}>
                      <input
                        type="checkbox"
                        name="brand"
                        id={`brand-${index}`}
                        className="brandRadio"
                      />
                      <label htmlFor={`brand-${index}`} className="brandLabel">
                        {brand.name}
                      </label>
                      <span className="brandCount">{brand.count}</span>
                    </div>
                  ))
                ) : (
                  <div className="notFoundMessage">Not found</div>
                )}
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="filterPrice">
          <Accordion defaultExpanded disableGutters elevation={0}>
            <AccordionSummary
              expandIcon={<IoIosArrowDown size={20} />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{ padding: 0, marginBottom: 2 }}
            >
              <h5 className="filterHeading">Price Range</h5>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: 0 }}>
              <Slider
                getAriaLabel={() => "Price range"}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                valueLabelFormat={(value) => `$${value}`}
                sx={{
                  color: "black",
                  "& .MuiSlider-thumb": {
                    backgroundColor: "white",
                    border: "2px solid black",
                    width: 18,
                    height: 18,
                  },
                }}
              />

              <div className="filterSliderPrice">
                <div className="priceRange">
                  <p>
                    Min Price: <span>${value[0]}</span>
                  </p>
                  <p>
                    Max Price: <span>${value[1]}</span>
                  </p>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Filter;
