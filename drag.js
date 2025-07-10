window.onload = function() {
    // find the element that you want to drag.
    var box = document.getElementById('box');
    var dest = document.getElementById('destino');
    /* listen to the touchMove event,
    every time it fires, grab the location
    of touch and assign it to box */
    
    box.ondragstart = iniciaDrag;
    dest.ondragover = overDrag;

    let idelement =""
    function iniciaDrag(ev){
      idelement =  ev.target.id;
    }

    function overDrag(ev){
      ev.preventDefault();
    }

    function fimDrag(ev){
      ev.preventDefault();
      ev.target.appendChild(document.getElementById(idelement));
    }

    box.addEventListener('touchmove', function(e) {
      iniciaDrag(e);
      // grab the location of touch
      var touchLocation = e.targetTouches[0];
      console.log(box.style.width);
      // assign box new coordinates based on the touch.
      box.style.left = (touchLocation.pageX - 50) + 'px';
      box.style.top = (touchLocation.pageY -50) + 'px';
    })
    
    /* record the position of the touch
    when released using touchend event.
    This will be the drop position. */
    
    box.addEventListener('touchend', function(e) {
      // current box position.
      var x = parseInt(box.style.left);
      var y = parseInt(box.style.top);
      if(x > dest.style.left and y > dest.style.top){
          alert('ok');
      }
    })
    
  }
