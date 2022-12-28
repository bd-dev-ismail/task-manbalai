import React, { useEffect, useState } from 'react';
import './Custom.css';
import { BsSearch} from "react-icons/bs";
import DisplayItem from './DisplayItem';
import { useDebounce } from 'use-debounce';
const SearchItem = () => {
    const[search, setSearch] = useState('');
    const [country, setCountry] = useState([]);
    const [abb, setAbb] = useState([]);
     const [value] = useDebounce(search, 500);
    const [visible, setVisible] = useState(5);
    console.log(search);
    useEffect(()=> {
        fetch("country.json")
          .then((res) => res.json())
          .then((data) => setCountry(data));
    },[]);
    useEffect(() => {
      fetch("abbreviation.json")
        .then((res) => res.json())
        .then((data) => setAbb(data));
    }, []);
    // console.log(country.filter(user => user.country.toLowerCase().includes("bangladesh")));
    return (
      <div>
        <div className="text-center">
          <p className="mb-3">Search Your Country</p>
          <div className="d-flex justify-content-center align-content-center">
            <div
              style={{ border: "0px" }}
              className="text-center position-relative"
            >
              <BsSearch
                className="text-white position-absolute"
                style={{ top: "12px", left: "20px" }}
              />
              <input
                style={{ paddingLeft: "50px" }}
                className="custom-btn text-white mb-5"
                type="text"
                placeholder="Search"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          <div className="py-5">
            <DisplayItem
              country={country}
              value={value}
              visible={visible}
              setVisible={setVisible}
              setAbb={setAbb}
              abb={abb}
            />
          </div>
        </div>
      </div>
    );
};

export default SearchItem;