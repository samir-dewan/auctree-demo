//assume that there is a filter with the following asks:
// 2-3 bedroom house between 500k and 700k
// with a school a 15 minute walk away and access to Bank in 45 minutes
// let's start with that.

// first you want to use google place api
// identify the longitude and latitude of whatever filters are available and create a polygon of their largest distance
// once that's done, use the zoopla api to filter all places that are within that polygon that are 2-3 beds and are between 500k and 700k
// if you receive no responses then go onto the next 

//use one filter poi as a base.
//create a radius around that filter that's equivalent to the amount of minutes that they've asked.
//then search for any place poi within that radius.
//if you find one, and there are more filters, then  

//foreach filter in our poilist
//convert the time * method into a pure distance

//pure distance calculation (probably use a decent approximate on this.)
//if it's walking this is easy, we take an average walking speed with the time as our distance
//if it's a car same thing, just take an average car speed but potentially need to add into London out of London filters
//if it's public transport, then calculate the walk to the nearest stop in time and then the relevant public transport average distance
// return a distance.

//sort all of the filter distances in the poilist from largest to smallest
// then with the largest filter I take the distance and calculate a circular area around poifilter point p with radius r (the distance)

// Once I have that circle, I look at all places within that circle that have the poifilter with the second largest distance
// I create a circle of radius r with point p where r is that pure distance and point p is the poifilter.

//I repeat that with the next largest, and the next largest, leaving me with a list of areas.

//I then search for all rental or buyable properties within those areas via Zoopla. Once I've found all I can in those areas, I then go to the next (if available) of the largest pois in the list.
