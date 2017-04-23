
function generateData()
{
var lakenames = ["Trinity Lake","Lake Shasta", "Lake Oroville","Folsom Lake","New Melones Lake","Don Pedro Reservoir","Exchequer Reservoir","San Luis Reservoir","Millerton Lake","Pine Flat Rservoir","Perris Lake","Castaic Lake"];

   // var sensortype = ["Temperature","Pressure","Humidity","Sea Level", "Wind Speed"];
    var info = [];

    for (var i = 0; i < lakenames.length; i++)
    {
        var min = 10;
        var max = 100;
        var randomcap = Math.floor(Math.random() * (max - min + 1)) + min;
        var randomhistory = Math.floor(Math.random() * (max - min + 1)) + min;

        var val =
            {
                "lakename" : lakenames[i],
                "capacity" : randomcap,
                "history"  : randomhistory
            };
        info.push(val);
    }
    console.log(info);
}
