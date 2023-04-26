import Button from "./Button"
import axios from "axios";
import OneResult from "./OneResult";
import { useState } from "react";

const Find = () => {

  const [searchedName, setSearchedName] = useState("");
  const [searchedResults, setSearchedResults] = useState([]);

  const onSearch = (e) => {      

  const fetchGithubInfo = async () => {
  const url = `https://api.github.com/search/users?q=${searchedName}`;

  const response = await axios.get(url);
  setSearchedResults(response.data.items);
  console.log(searchedResults);
  };

  if (searchedName !== "") fetchGithubInfo();
  };

    return (
      <div>
        <label id = "heading">GitHub - Search more than 112M users</label>
        <div>
          <center>
           <input id = "bar" type = "text" value={searchedName} onChange={(e) => setSearchedName(e.target.value)} placeholder="Search Github - Type the username you want to search for"/>
           <Button text = "Search" action = {onSearch}/>
          </center>
        </div>
        <div className="base">
        {searchedResults.map((user, i) => (
          <div className="results" key={i}>
            <OneResult name={user.login} avatar={user.avatar_url} myurl={user.html_url} />
          </div>
        ))}
        </div>
      </div>
    )
}

export default Find