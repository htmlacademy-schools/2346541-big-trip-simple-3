const getRandom = function(theMin,theMax){
  if(theMin < 0 || theMax <= theMin){
    return 0;
  }
  return Math.floor( Math.random() * (theMax - theMin) + theMin) + 1;
};
export{getRandom};
