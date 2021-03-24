# Scrolling Storymap of Stanley Park

![image](https://user-images.githubusercontent.com/77645885/112242428-13d12500-8c09-11eb-8e28-a4f797022d75.png)
Please find the full map at https://blagee.github.io/interactive/

### Sources

This map was created using a Mapbox storymap template made by John Branigan. https://github.com/mapbox/storytelling

## Reflective Analysis

This map was created as a prelude to my final project for this course where my group will be telling the story of the Southern Resident Orcas and their movement and experience with captivity over the years.

This map of the Stanley Park seawall was created with tourists/general population in mind. The purpose is to provide the audience with a simple guide of the seawall and introduce some activities and landmarks that can be found along the path. It is by no means a comprehensive guide, but rather an introduction to the main features that people are sure to come across if they choose to cycle the seawall. In terms of utility, this map can also help visitors plan their day at Stanley Park.

In the design of the map, the scrollmap presentation format was taken from John Branigan who created a storymap template that allowed me to build a cartographic journey through my place of choice. Javascript was the main coding language used to configure the data and create the actual content, while the hosting site itself is written in HTML and formatted with very basic CSS. The map was created as a variation of Mapbox's outdoor v11 map style. Points of interest were created as polygons, polylines, and points using geoJSON.io and were uploaded to Mapbox as unique layers. Having each feature remain as its own layer allowed for the greatest control when determining which features would appear at certain points in the storymap. 
