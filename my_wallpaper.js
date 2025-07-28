


//your parameter variables go here!
let backDropLeft = 0;
let backDropTop = 0;
let backDropRight = 200;
let backDropBottom = 200;
let birdFlyX = 20;
let birdFlyY = 10;
let colourChanger = 1;

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  //pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 0;
}

function wallpaper_background() {
  background(240, 255, 240); //light honeydew green colour
}


function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  //setup - run once when the code is first starts


  sandBackDrop (0);//is inback of sandSpecks so the sandSpecks can be seen
  //can change the arangement of the sand each time you refresh 
  sandSpecks(10000); // 10000 there is a total of 50000 ellipse in the 200x200 area 
  backDrop (0);
  waves (0);
  bird(birdFlyX+70,birdFlyY+2);
  bird(birdFlyX+1,birdFlyY+20);
  bird(birdFlyX+80,birdFlyY+15);

}
function sandSpecks(count){
  fill (0)
  for (let i = 0; i < count; i++) { 
    //i=0 means it starts with 0
    //i<count means it will have that many shapes 
    let x = random(width);
    let y = random(height);
    //lets the placement be random 
    let w = random(0.2, .5);
    let h = random(0.2, .9);
    //lets the size be random
    ellipse(x, y, w, h);
    //draws the ellipse using the x, y, w, h
  }
}


function bird (birdX, birdY) {
  angleMode(DEGREES);
fill (0);

//left wing
  arc (birdX+23, birdY+9.5, 30, 19, 290, 350, CHORD);

//middle part 
  ellipse (birdX+36.4, birdY+5.5, 2.1, 2.2);

//right wing
  arc (birdX+50, birdY+7, 29, 17, 180, 230, CHORD);
}
  

function sandBackDrop () {
noStroke();
let sand = color (242,210,169);
  fill (sand);
beginShape();
  vertex (backDropLeft, backDropTop+110);//top left 
  vertex (backDropRight,backDropTop+110);//top right
  vertex (backDropRight,backDropBottom);//bottom right
  vertex (backDropLeft,backDropBottom);//bottom left
endShape(CLOSE);
}


function backDrop () {
//sky
  let skyDay = color (157,235,255);
  let skyNight = color (46,68,130);

  if (colourChanger == 0) {
    fill (skyDay);
  }
  else{
    fill (skyNight);
  }
  
// fill (sky);

beginShape();
  vertex (backDropLeft,backDropTop);//top left 
  vertex (backDropRight,backDropTop);//top right
  vertex (backDropRight,backDropBottom-120);//bottom right
  vertex (backDropLeft,backDropBottom-120);//bottom left
endShape(CLOSE);


//sun
angleMode(DEGREES);
  var sun = color (255,211,25);
fill (sun);
arc(99, 80, 80, 65, 180, 360);

//ocean
let oceanDay = color (41,164,195);
  let oceanNight = color (57,80,97);

  if (colourChanger == 0) {
    fill (oceanDay);
  }
  else{
    fill (oceanNight);
  }
//middle/top of the ocean
beginShape();
  vertex (backDropLeft,backDropTop+80);//top left 
  vertex (backDropRight,backDropTop+80);//top right
  vertex (backDropRight,backDropBottom-80);//bottom right
  vertex (backDropLeft,backDropBottom-80);//bottom left
endShape(CLOSE);
}


function waves(){

//1st waves
beginShape();
  curveVertex(0,110); //top left point
  curveVertex(0,110); //makes line to next point
  curveVertex(0,150); //1st left curve part of wave
  curveVertex(25,165); //bottom of wave (left side)
  curveVertex(60,140); //3rd right curve of wave
  curveVertex(50,90); //top right point
  curveVertex(50,90); //makes line to the whole thing
endShape();

//2nd wave arc(60, 110, 100, 140, 0, PI);
beginShape();
  curveVertex(40,110); //top left point
  curveVertex(40,110); //makes line to next point
  curveVertex(40,150); //1st left curve part of wave
  curveVertex(80,175); //bottom of wave (left side)
  curveVertex(115,150); //3rd right curve of wave
  curveVertex(115,110); //top right point
  curveVertex(115,110); //makes line to the whole thing
endShape();

//3rd wave arc(120, 110, 140, 140, 0, PI);
beginShape();
  curveVertex(100,110); //top left point
  curveVertex(100,110); //makes line to next point
  curveVertex(115,150); //1st left curve part of wave
  curveVertex(145,165); //bottom of wave (left side)
  curveVertex(180,150); //3rd right curve of wave
  curveVertex(200,110); //top right point
  curveVertex(200,110); //makes line to the whole thing
endShape();

//4th wave arc(200, 90, 160, 140, 0, PI);
beginShape();
  curveVertex(175,110); //top left point
  curveVertex(175,110); //makes line to next point
  curveVertex(200,150); //1st left curve part of wave
  curveVertex(200,140); //bottom of wave (left side)
  curveVertex(200,110); //top right point
  curveVertex(200,110); //makes line to the whole thing
endShape(); 
}