
//your parameter variables go here!
let birdFlyX = 20; //moves all birds left or right
let birdFlyY = 10; //moves all birds up or down
let sunRiseY = 60; //lets sun rise or lower
let sunSize = 20; //lets the sun get bigger 
let sandNumber = 200; //creates less or more sand 
let sandWidth = .5 //changes the width of the sand
let sandHight =.5 //changes the hight of the sand
let dayNight = 200; //lets it be night(100+) beach or day(0-99) beach if

//line 88 sand color "let sand = color (242,210,169);"
//line 100 & 101 sky colors "let skyDay = color (157,235,255); let skyNight = color (46,68,130);"
//line 122 & 123 ocean colors "let oceanDay = color (41,164,195); let oceanNight = color (57,80,97);
// line 144 & 145 sun colors "let sunDay = color (255,211,25); let sunNight = color (70,79,97);"
// line 161 & 162 wave colors "let wavesDay = color (41,164,195); let wavesNight = color (57,80,97);"

function setup_wallpaper(pWallpaper) {
  //pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(A3);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 35;
}

function wallpaper_background() {
  background(240, 255, 240); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  //setup - run once when the code is first starts

  sandBackDrop (0);//is inback of sandSpecks so the sandSpecks can be seen
  sandSpecks(sandNumber+400); // gives a total amount for ellipse in the 200x200 area 
  sky (0);
  sun (99,sunRiseY+40,sunSize+80);
  ocean (0);
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
    let x = random(0, 200);//gives random placements 
    let y = random(130, 200);//gives random placements 
    let w = sandWidth+.2;
    let h = sandHight+.4;
    ellipse(x, y, w, h);//draws the ellipse using the x, y, w, h
  }
}

function bird (birdX, birdY) {
//code to make the bird go away at night
 let skyNight = color (46,68,130);

  angleMode(DEGREES);
 if (dayNight > 100) {
    fill (0);
  }
  else{
    fill (skyNight);
  }
//code to make the birds 
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
  vertex (0, 110);//top left 
  vertex (200,110);//top right
  vertex (200,200);//bottom right
  vertex (0,200);//bottom left
endShape(CLOSE);
}

function sky () {
//code to make it change to night and day
  let skyDay = color (157,235,255);
  let skyNight = color (46,68,130);

  if (dayNight > 100) {
    fill (skyDay);
  }
  else{
    fill (skyNight);
  }
  
// fill (sky);
beginShape();
  vertex (0,0);//top left 
  vertex (200,0);//top right
  vertex (200,200-120);//bottom right
  vertex (0,200-120);//bottom left
endShape(CLOSE);

}

function ocean () {
//code to make it change to night and day
let oceanDay = color (41,164,195);
let oceanNight = color (57,80,97);

  if (dayNight > 100) {
    fill (oceanDay);
  }
  else{
    fill (oceanNight);
  }

//code to make the ocean
//middle/top of the ocean
beginShape();
  vertex (0,+80);//top left 
  vertex (200,80);//top right
  vertex (200,200-80);//bottom right
  vertex (0,200-80);//bottom left
endShape(CLOSE);
}

function sun (sunX, sunY, sunW) {
//code to make it change to night and day
let sunDay = color (255,211,25);
let sunNight = color (70,79,97);

  if (dayNight > 100) {
    fill (sunDay);
  }
  else{
    fill (sunNight);
  }

//code to make sun
  angleMode(DEGREES);
arc(sunX, sunY, sunW, 65, 180, 360);
}

function waves(){
//code to make it change to night and day
  let wavesDay = color (41,164,195);
  let wavesNight = color (57,80,97);

  if (dayNight > 100) {
    fill (wavesDay);
  }
  else{
    fill (wavesNight);
  }

//code to make waves
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