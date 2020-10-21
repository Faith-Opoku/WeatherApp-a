import  React from 'react';


function Home () {
    
const datebuilder = (d) => {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

    let day = days[d.getDay ()];
    let date = d.getDate();
    let year = d.getFullYear();

    
    return `${day} ${date} ${year}`

}
    return (
        <div className="main">
            <p><b>WELCOME TO FAITH'S WEATHER APP </b></p>
            <p>Pleasse feel free and search for the country of your choice.</p>

            <input type="text" placeholder="Search location here" />
            <button class="btn btn-secondary">Search</button>

            <p className="state">Accra Today</p>
            <div className="date">{datebuilder(new Date())}</div>
            <img src="https://cdn3.iconfinder.com/data/icons/luchesa-vol-9/128/Weather-128.png"
             width="100" alt="" />
             <p><b>25<sup>o</sup>c</b></p>
            




            
            </div>
    );
}

export default Home;