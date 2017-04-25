// Given the CSV file "data.csv"
// in the project's "assets" folder:

var table;
var row;
var time;
var sensor;
var room;
var pSensorData;
var img;
var pic;
var pink;
var blue;

var x;
var y;

function preload() {
    //table is comma separated value "csv"
    //and has no header specifying the columns labels
    table = loadTable("assets/datareal.csv", "csv", "noHeader");
    img = loadImage("assets/heart.png");
    pic = loadImage("assets/pheart.png");
    pink = loadImage("assets/pinkh.png");
    blue = loadImage("assets/bheart.png");
}

function setup() {
    //setup look
    createCanvas(1200, 700);
    background(200, 200, 210);

    beginShape(); //line graph starts here
    //iterate thorough all rows of CSV file
    for (var r = 0; r < table.getRowCount(); r++) {
        row = table.getRow(r);
        //print it column by column
        //note: a row is an object, not an array
        time = row.getNum(0);
        sensor = row.getNum(1);

        time = map(time, 30, 450, 40, width-60); //remap the time variable
        sensor = map(sensor, 60, 120, height, 0); //remap the sensor variable

        println(parseInt(time) + " " + parseInt(sensor) + " " + room); //optional but helpful
        noFill();

        //if ((sensor > pSensorData + 40) || (sensor < pSensorData - 40)) { //keeps data from being redundant
            x = time;
            y = sensor;

            //look of ellipses
            //fill(255, 100, time, 220); //time changes the fill color
            strokeWeight(2);

            vertex(x, y);
            imageMode(CENTER);

            //fill(0, 10, 80); //ellipse fill color
            image(img, x, y, (height/y)*(img.width/50), (height/y)*(img.height/50));
            //fill(255); //text color
            textAlign(CENTER);
            textSize(20);
            fill(0);
            sensor = row.getNum(1);
            text(sensor, x, y);
            noFill();
        }
        pSensorData = sensor; //saves current data to compare with next data
    endShape(); //line graph ends here

    beginShape(); //line graph starts here
    //iterate thorough all rows of CSV file
    for (var r = 0; r < table.getRowCount(); r++) {
        row = table.getRow(r);
        //print it column by column
        //note: a row is an object, not an array
        time = row.getNum(2);
        sensor = row.getNum(3);

        time = map(time, 30, 450,40, width-60); //remap the time variable
        sensor = map(sensor, 60, 120, height, 0); //remap the sensor variable

        noFill();

        //if ((sensor > pSensorData + 40) || (sensor < pSensorData - 40)) { //keeps data from being redundant
            x = time;
            y = sensor;

            //look of ellipses
            //fill(255, 100, time, 220); //time changes the fill color
            strokeWeight(2);

            vertex(x, y);
            imageMode(CENTER);

            //fill(0, 10, 80); //ellipse fill color
            image(pic, x, y, (height/y)*(pic.width/35), (height/y)*(pic.height/35));
            //fill(255); //text color
            textAlign(CENTER);
            textSize(20);
            fill(0);
            sensor = row.getNum(3);
            text(sensor, x, y);
            noFill();
        }
        pSensorData = sensor; //saves current data to compare with next data
    endShape(); //line graph ends here


    beginShape(); //line graph starts here
    //iterate thorough all rows of CSV file
    for (var r = 0; r < table.getRowCount(); r++) {
        row = table.getRow(r);
        //print it column by column
        //note: a row is an object, not an array
        time = row.getNum(4);
        sensor = row.getNum(5);

        time = map(time, 30, 450, 40, width-60); //remap the time variable
        sensor = map(sensor, 60, 120, height, 0); //remap the sensor variable

        noFill();

        //if ((sensor > pSensorData + 40) || (sensor < pSensorData - 40)) { //keeps data from being redundant
            x = time;
            y = sensor;

            //look of ellipses
            //fill(255, 100, time, 220); //time changes the fill color
            strokeWeight(2);

            vertex(x, y);
            imageMode(CENTER);

            //fill(0, 10, 80); //ellipse fill color
            image(pink, x, y, (height/y)*(pink.width/10), (height/y)*(pink.height/10));
            //fill(255); //text color
            textAlign(CENTER);
            textSize(20);
            fill(0);
            sensor = row.getNum(5);
            text(sensor, x, y);
            noFill();
        }
        pSensorData = sensor; //saves current data to compare with next data
    endShape(); //line graph ends here

    beginShape(); //line graph starts here
    //iterate thorough all rows of CSV file
    for (var r = 0; r < table.getRowCount(); r++) {
        row = table.getRow(r);
        //print it column by column
        //note: a row is an object, not an array
        time = row.getNum(6);
        sensor = row.getNum(7);

        time = map(time, 30, 450, 40, width-60); //remap the time variable
        sensor = map(sensor, 60, 120, height, 0); //remap the sensor variable

        noFill();

        //if ((sensor > pSensorData + 40) || (sensor < pSensorData - 40)) { //keeps data from being redundant
            x = time;
            y = sensor;

            //look of ellipses
            //fill(255, 100, time, 220); //time changes the fill color
            strokeWeight(2);

            vertex(x, y);
            imageMode(CENTER);

            //fill(0, 10, 80); //ellipse fill color
            image(blue, x, y, (height/y)*(blue.width/6), (height/y)*(blue.height/6));
            //fill(255); //text color
            textAlign(CENTER);
            textSize(20);
            fill(0);
            sensor = row.getNum(7);
            text(sensor, x, y);
            noFill();
            line(time,height-80, time,height-100);
            fill(0);
            text(row.getNum(6), time, height-60);
            noFill();
            fill(0);
            text("Time (minutes)", 600, height -20);
            noFill();
            
        }
        pSensorData = sensor; //saves current data to compare with next data
    endShape(); //line graph ends here

    textSize(45);
    fill(0);
    text("Heart Rate from 8:30 - 3:30 Over 4 Days", 600, height -650); //Visualization Title
    line(40,height-80, 1140,height-80);
}

function draw() {
    //nothing here
}
