import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { useLocation } from 'react-router-dom'

const App = () => {
  const [country, setcountry] = useState("in");
  const [progress, setprogress] = useState(0);
  const[CountryName,setCountryName]=useState('India')
  let navigate = useNavigate();
  let location=useLocation();
  const handlecnt = (cnt) => {
    if(location.pathname==="/")
    {
      location.pathname="/general"
    }
   setCountryName(document.getElementById(cnt).innerHTML);
    setcountry(cnt);

    if(location.pathname==="/general")
    {
      navigate('/business')
    }
    else{
      navigate('/general')
    }
  };

  const setProgress = (progress) => {
    setprogress(progress);
  };
  return (
    <div>
      <div>
        <Navbar />
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {CountryName}
          </button>
          <ul class="dropdown-menu scrollable-menu">
            
                  <button className="dropdown-item" id="ae" onClick={()=>{handlecnt('ae')}}> United Arab Emirates</button>
                  <button className="dropdown-item" id="ar" onClick={()=>{handlecnt('ar')}}> Argentina</button>
                  <button className="dropdown-item" id="au" onClick={()=>{handlecnt('au')}}> Australia</button>
                  <button className="dropdown-item" id="be" onClick={()=>{handlecnt('be')}}> Belgium</button>
                  <button className="dropdown-item" id="bg" onClick={()=>{handlecnt('bg')}}> Bulgaria</button>
                  <button className="dropdown-item" id="ca" onClick={()=>{handlecnt('ca')}}> Canada</button>
                  <button className="dropdown-item" id="ch" onClick={()=>{handlecnt('ch')}}> Switzerland</button>
                  <button className="dropdown-item" id="cn" onClick={()=>{handlecnt('cn')}}> China</button>
                  <button className="dropdown-item" id="co" onClick={()=>{handlecnt('co')}}> Colombia</button>
                  <button className="dropdown-item" id="cu" onClick={()=>{handlecnt('cu')}}> Cuba</button>
                  <button className="dropdown-item" id="cz" onClick={()=>{handlecnt('cz')}}> Czech Republic</button>
                  <button className="dropdown-item" id="de" onClick={()=>{handlecnt('de')}}> Germany</button>
                  <button className="dropdown-item" id="eg" onClick={()=>{handlecnt('eg')}}> Egypt</button>
                  <button className="dropdown-item" id="fr" onClick={()=>{handlecnt('fr')}}> France</button>
                  <button className="dropdown-item" id="gb" onClick={()=>{handlecnt('gb')}}> United Kingdom</button>
                  <button className="dropdown-item" id="gr" onClick={()=>{handlecnt('gr')}}> Greece</button>
                  <button className="dropdown-item" id="hk" onClick={()=>{handlecnt('hk')}}> Hong Kong</button>
                  <button className="dropdown-item" id="hu" onClick={()=>{handlecnt('hu')}}> Hungary</button>
                  <button className="dropdown-item" id="id" onClick={()=>{handlecnt('id')}}> Indonesia</button>
                  <button className="dropdown-item" id="ie" onClick={()=>{handlecnt('ie')}}> Ireland</button>
                  <button className="dropdown-item" id="il" onClick={()=>{handlecnt('il')}}> Israel</button>
                  <button className="dropdown-item" id="in" onClick={()=>{handlecnt('in')}}> India</button>
                  <button className="dropdown-item" id="it" onClick={()=>{handlecnt('it')}}> Italy</button>
                  <button className="dropdown-item" id="jp" onClick={()=>{handlecnt('jp')}}> Japan</button>
                  <button className="dropdown-item" id="kr" onClick={()=>{handlecnt('kr')}}> South Korea</button>
                  <button className="dropdown-item" id="lt" onClick={()=>{handlecnt('lt')}}> Lithuania</button>
                  <button className="dropdown-item" id="lv" onClick={()=>{handlecnt('lv')}}> Latvia</button>
                  <button className="dropdown-item" id="ma" onClick={()=>{handlecnt('ma')}}> Morocco</button>
                  <button className="dropdown-item" id="mx" onClick={()=>{handlecnt('mx')}}> Mexico</button>
                  <button className="dropdown-item" id="my" onClick={()=>{handlecnt('my')}}> Malaysia</button>
                  <button className="dropdown-item" id="ng" onClick={()=>{handlecnt('ng')}}> Nigeria</button>
                  <button className="dropdown-item" id="nl" onClick={()=>{handlecnt('nl')}}> Netherlands</button>
                  <button className="dropdown-item" id="no" onClick={()=>{handlecnt('no')}}> Norway</button>
                  <button className="dropdown-item" id="nz" onClick={()=>{handlecnt('nz')}}> New Zealand</button>
                  <button className="dropdown-item" id="ph" onClick={()=>{handlecnt('ph')}}> Philippines</button>
                  <button className="dropdown-item" id="pl" onClick={()=>{handlecnt('pl')}}> Poland</button>
                  <button className="dropdown-item" id="pt" onClick={()=>{handlecnt('pt')}}> Portugal</button>
                  <button className="dropdown-item" id="ro" onClick={()=>{handlecnt('ro')}}> Romania</button>
                  <button className="dropdown-item" id="rs" onClick={()=>{handlecnt('rs')}}> Serbia</button>
                  <button className="dropdown-item" id="ru" onClick={()=>{handlecnt('ru')}}> Russia</button>
                  <button className="dropdown-item" id="se" onClick={()=>{handlecnt('se')}}> Sweden</button>
                  <button className="dropdown-item" id="sg" onClick={()=>{handlecnt('sg')}}> Singapore</button>
                  <button className="dropdown-item" id="sk" onClick={()=>{handlecnt('sk')}}> Slovakia</button>
                  <button className="dropdown-item" id="th" onClick={()=>{handlecnt('th')}}> Thailand</button>
                  <button className="dropdown-item" id="tr" onClick={()=>{handlecnt('tr')}}> Turkey</button>
                  <button className="dropdown-item" id="tw" onClick={()=>{handlecnt('tw')}}> Taiwan</button>
                  <button className="dropdown-item" id="ua" onClick={()=>{handlecnt('ua')}}> Ukraine</button>
                  <button className="dropdown-item" id="us" onClick={()=>{handlecnt('us')}}> United States</button>
                  <button className="dropdown-item" id="ve" onClick={()=>{handlecnt('ve')}}> Venezuela</button>
                  <button className="dropdown-item" id="za" onClick={()=>{handlecnt('za')}}> South Africa</button>
            
          </ul>
        </div>
        <Routes>
          <Route
            excat
            path="/"
            element={
              <News
                setProgress={setProgress}
                key="general"
                pageSize={6}
                country={country}
                category="general"
              />
            }
          ></Route>
          <Route
            excat
            path="/business"
            element={
              <News
                setProgress={setProgress}
                key="business"
                pageSize={6}
                country={country}
                category="business"
              />
            }
          ></Route>
          <Route
            excat
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                key="entertainment"
                pageSize={6}
                country={country}
                category="entertainment"
              />
            }
          ></Route>
          <Route
            excat
            path="/health"
            element={
              <News
                setProgress={setProgress}
                key="health"
                pageSize={6}
                country={country}
                category="health"
              />
            }
          ></Route>
          <Route
            excat
            path="/science"
            element={
              <News
                setProgress={setProgress}
                key="science"
                pageSize={6}
                country={country}
                category="science"
              />
            }
          ></Route>
          <Route
            excat
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                key="sports"
                pageSize={6}
                country={country}
                category="sports"
              />
            }
          ></Route>
          <Route
            excat
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                key="technology"
                pageSize={6}
                country={country}
                category="technology"
              />
            }
          ></Route>
          <Route
            excat
            path="/general"
            element={
              <News
                setProgress={setProgress}
                key="general"
                pageSize={6}
                country={country}
                category="general"
              />
            }
          ></Route>
        </Routes>
      </div>
    </div>
  );
};
export default App;
