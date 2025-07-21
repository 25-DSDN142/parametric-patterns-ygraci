//your parameter variables go here!
let backDropLeft = 0 
let backDropRight = 200


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


  backDrop (0);
  waves (0);
}

function backDrop() {
  noStroke();

//sand
let sand = color (242,210,169);
  fill (sand);
beginShape();
  vertex (backDropLeft,110);//top left 
  vertex (backDropRight,110);//top right
  vertex (backDropRight,200);//bottom right
  vertex (backDropLeft,200);//bottom left
endShape(CLOSE);

//sky
  var sky = color (157,235,255);
fill (sky);

beginShape();
  vertex (backDropLeft,0);//top left 
  vertex (backDropRight,0);//top right
  vertex (backDropRight,80);//bottom right
  vertex (backDropLeft,80);//bottom left
endShape(CLOSE);


//sun
  var sun = color (255,211,25);
fill (sun);
arc(99, 80, 80, 65, PI, 0);

//ocean
  var ocean = color (41,164,195);
fill (ocean);

//middle/top of the ocean
beginShape();
  vertex (backDropLeft,80);//top left 
  vertex (backDropRight,80);//top right
  vertex (backDropRight,120);//bottom right
  vertex (backDropLeft,120);//bottom left
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

