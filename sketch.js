let osc, freq, chooseFreq, playButton, stopButton, slider;

function setup() {
  let cnv = createCanvas(100, 100);
  // cnv.mousePressed(playOscillator);
  osc = new p5.Oscillator('sine');
  osc.freq(440);
  osc.amp(1);
  
  slider = createSlider(20, 200, 100);
  slider.position(80, 210);
  slider.size(425);
  slider.style("transform", "rotate(-90deg)");
  let g = 100;
  
  playButton = createButton('play');
  playButton.style('font-size', '60px');
  playButton.style('background-color','#00E938');
  playButton.style('color','#000000');
  playButton.style('padding','1em');
  playButton.position(10,10);
  playButton.mousePressed(function playOscillator(){
    osc.start();
    })
  
  stopButton = createButton('stop');
  stopButton.style('font-size', '60px');
  stopButton.style('background-color','#F80F05');
  stopButton.style('color','#FDFAFA');
  stopButton.style('padding','1em');
  stopButton.position(10,240);
  stopButton.mousePressed(function stopOscillator(){
    osc.stop();
  })
}

function draw(){
  let g = slider.value();
  osc.freq(g);
}