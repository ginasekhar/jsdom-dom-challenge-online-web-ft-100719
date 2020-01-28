document.addEventListener("DOMContentLoaded", () => {
    // your code here

    let counter = document.getElementById('counter');
    my_func = setInterval(incrementCounter, 1000);
    
    const minus = document.getElementById('minus');
    minus.addEventListener('click', decrementCounter);
    const plus = document.getElementById('plus');
    plus.addEventListener('click', incrementCounter);
    const like = document.getElementById('heart');
    like.addEventListener('click', addLike);
    const pause = document.getElementById('pause');
    pause.addEventListener('click', togglePause);
    
  });
  
  function incrementCounter() {
    counter.innerText++;
  }

  function decrementCounter() {
    return counter.innerText--;
  }

  function addLike() {
        let likedNum = document.getElementById('counter');
        
        let newLI = document.createElement('li');
        newLI.innerText = likedNum.innerText;
        likedList = document.querySelector('.likes');
        likedList.appendChild(newLI);
  }

  function togglePause() {
    
    
        p = document.getElementById("pause");
        
        if (p.innerText === "pause")
        {
            clearInterval(my_func);
            p.innerText = "resume";
        }
        else
        {   my_func = setInterval(incrementCounter, 1000);
            p.innerText = "pause";
        }
        
        m = document.getElementById("minus")
        m.disabled = !m.disabled;
        h = document.getElementById("heart")
        h.disabled = !h.disabled;
        pl = document.getElementById("plus")
        pl.disabled = !pl.disabled;

  }