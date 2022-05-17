import React, {useEffect, useState } from 'react';
import { Chart } from "react-google-charts";

const options = {
    title: "Video Game Detail Chart",
    legend: { postion: "bottom"},
};

const DisplayPlatformStats = ({videoGames}) => {

   function generateDataFromChart(){   

    //Filter the video games by year

    let filteredGames = videoGames.filter(game => game.year >= 2013);
    //console.log("Filtered Games", filteredGames)

    let platforms = filteredGames.map(game => game.platform)
    //console.log("Platforms", platforms)

       let distinctPlatforms = [...new Set(platforms)]
    //console.log("distinctPlatforms", distinctPlatforms)

    let platformArrays = distinctPlatforms.map(platform => {
        let allGamesForPlatform = filteredGames.filter(game => game.platform === platform)
    let totalsales = platforms.map((game) => {
        return game.globalsales 
    });

    let sum = totalsales
        .reduce((total, currentnum) => total + currentnum, 0)
        .toFixed(2);

        return [platform, parseFloat(sum), "silver"]
    });

    //console.log("Platform Arrays", platformArrays)

    const data = [
        ["Platform", "Sales", { role: "style" }],
        ...platformArrays
        
      ];

      //console.log("data", data)
      return data;

   }
   
    return(
        <div>
            <h1>Platform by Global Sales in Millions</h1>
            <Chart chartType="ColumnChart" width="100%" height="400px" data={generateDataFromChart()} />            
        </div>
    )
}

export default DisplayPlatformStats;

// ["PS3", 8.94, "#b87333"], // RGB value
// ["Silver", 10.49, "silver"], // English color name
// ["Gold", 19.3, "gold"],
// ["Platinum", 21.45, "color: #e5e4e2"], // CSS-style declaration

