module.exports = {
getFrames: getFrames
};

function getFrames (rolls) {
	var frames = [];
	for (var i = 0; i < rolls.length; i++) {
		var newFrame = [];
		var firstRoll = rolls[i];
		if (frames.length === 9) {
			newFrame = rolls.slice(i);
			frames.push(newFrame);
			break;
		}else{
			newFrame.push(firstRoll);
	 		if(firstRoll < 10) {
	 		newFrame.push(rolls[i]);
	 		i++;
			}
		}
		frames.push(newFrame);
	}
	console.log(frames);
	return frames;
}

function getScore(){
	
}

