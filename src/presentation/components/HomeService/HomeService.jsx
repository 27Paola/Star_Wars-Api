import { IoIosSearch } from "react-icons/io";
import "./HomeService.css";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import FavoriteCharacters from "../Favorite-characters/FavoriteCharacters";
import ListStarWars from "../List-StarWars/ListStarWars";
import { useState } from "react";
import { useEffect } from "react";


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
  const [value, setValue] = React.useState(0);

  const [graphQLData] = React.useState(data);

  const [searchTerm, setSearchTerm] = useState("");

  const filterData = graphQLData?.allPeople?.edges?.filter((item) => {
    item?.name?.toLowerCase().includes(searchTerm?.toLowerCase())
  });

  useEffect(() => {
    if(searchTerm === ""){setSearchTerm(graphQLData)}
    
  }, [])
  

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="home-section-container">
      <img src="https://s3-alpha-sig.figma.com/img/dc56/e251/698e0894fe7050eec598f9a077d78031?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XaiE7bd3QaYqcvJ37VmZHS782J5Hv4amqK9dEtDLnTzuTenXcigQ2dptsOfjCNhdb3tst5VPdGExXtX9iWQ-hZdvFkCrLWDcmkbZ7iKQGhHDZeBqKIztA2glBAQ1xKmCJ~8okkkwR4aOMaATQOnZoFDQBaJe4HOzgxJViTaCjM0M3F0Heu~emxQs4LiqtKvh5HNQgvGlJkiXbQBFRfAk2kdKVJHR9Ne0K771BqnJmLVszKdCwNBe5wHzQ54krCPYUxHk9PpNVdZkwzLTgUElSfFD169oGUER3Mo8omqRflF22ol27o5QLpmojDN7sOWa9Q0V9WjNmQYzfDvZ7uyuqg__" />
      <div>
        <IoIosSearch className="search-icon" />
        <input
          className="search-input"
          placeholder="Buscar personaje..."
          onChange={(e) => {setSearchTerm(e.target.value);} }
          
        ></input>
      </div>
      <Box sx={{ width: "100%" }} className="tabs-container">
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Todos" {...a11yProps(0)} />
            <Tab label="Favorito" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <ListStarWars graphQLData={graphQLData} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <FavoriteCharacters />
        </CustomTabPanel>
      </Box>
    </div>
  );
};

export default HomeService;
