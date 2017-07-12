function init(){
   document.getElementById('banner').className = 'is-visible';
   console.log('Banner Initialized');
}


/**************************
	Rollover


var ctaEm = document.getElementById('roll-cta');
ctaEm.addEventListener('mouseover', ctaHandler);
ctaEm.addEventListener('mouseout', ctaHandler1);

function ctaHandler(){
  document.getElementById('legal').className = 'legal-anim-in';
  document.getElementById('all-animation').classList.add('all-anim-stop');
  
  clearInterval(loop);

};

function ctaHandler1(){
  document.getElementById('legal').className = 'legal-anim-out';
  document.getElementById('all-animation').classList.remove('all-anim-stop');

   
  setTimeout(function(){
    changeHtml();
    loopControll();
  },3000);
};

**************************/
/**************************
	Looping
**************************/
var totalDuration = 15;
var totalLoop = 1;
var currentLoop = 1;
var _banner = document.getElementById('banner');
var _bannerHtml = _banner.innerHTML;
var loop;

var loopControll = function(){
  loop = setInterval(function(){
  
    if(currentLoop < totalLoop){
      changeHtml();
    }else {
      clearInterval(loop);
    }
    
  },totalDuration*1000);
};

var changeHtml = function(){
  if(currentLoop < totalLoop){
    _banner.innerHTML = _bannerHtml;

    ctaEm = document.getElementById('roll-cta');
    ctaEm.addEventListener('mouseover', ctaHandler);
    ctaEm.addEventListener('mouseout', ctaHandler1);
    
    currentLoop++;
    console.log('loop');
  }
};

window.onload = function(){
  init();
  loopControll();
};
