$(document).ready(function(){
    animateDiv();
    
});

function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 1500;
    var w = $(window).width() - 1500;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}


function animateDiv(){
    var newq = makeNewPosition();
    $('.circle').animate({ top: newq[0], left: newq[1] }, function(){
      animateDiv();        
    });
    
};