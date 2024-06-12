import { IoIosSearch } from "react-icons/io";
import "./HomeService.css";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ListStarWars from "../List-StarWars/ListStarWars";
import { useState, useEffect } from "react";
import Credits from "../Credits/Credits";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const HomeService = ({ data }) => {
  const [value, setValue] = useState(0);
  const [graphQLData, setGraphQLData] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    const filterData = () => {
      if (!searchTerm) {
        setFilteredData(graphQLData);
      } else {
        const filtered = {
          ...graphQLData,
          allPeople: {
            ...graphQLData.allPeople,
            edges: graphQLData.allPeople.edges.filter(({ node }) =>
              node.name.toLowerCase().includes(searchTerm.toLowerCase())
            ),
          },
        };
        setFilteredData(filtered);
      }
    };

    filterData();
  }, [searchTerm, graphQLData]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="home-section-container">
      <img src="https://s3-alpha-sig.figma.com/img/dc56/e251/698e0894fe7050eec598f9a077d78031?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XaiE7bd3QaYqcvJ37VmZHS782J5Hv4amqK9dEtDLnTzuTenXcigQ2dptsOfjCNhdb3tst5VPdGExXtX9iWQ-hZdvFkCrLWDcmkbZ7iKQGhHDZeBqKIztA2glBAQ1xKmCJ~8okkkwR4aOMaATQOnZoFDQBaJe4HOzgxJViTaCjM0M3F0Heu~emxQs4LiqtKvh5HNQgvGlJkiXbQBFRfAk2kdKVJHR9Ne0K771BqnJmLVszKdCwNBe5wHzQ54krCPYUxHk9PpNVdZkwzLTgUElSfFD169oGUER3Mo8omqRflF22ol27o5QLpmojDN7sOWa9Q0V9WjNmQYzfDvZ7uyuqg__" />
      <div>
        <IoIosSearch className="search-icon" />
        <input
          className="search-input"
          placeholder="Buscar personaje..."
          value={searchTerm}
          onChange={handleSearchChange}
        ></input>
      </div>
      <Box sx={{ width: "100%" }} className="tabs-container">
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Todos" {...a11yProps(0)} />
            <Tab label="Creditos" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <ListStarWars graphQLData={filteredData} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Credits />
        </CustomTabPanel>
      </Box>
    </div>
  );
};

export default HomeService;
