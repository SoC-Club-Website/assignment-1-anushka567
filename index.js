let x=0;
document.getElementById("up").onclick = upclick;
function upclick(e)
{
       x++;
    document.querySelector("#count").textContent = x;
}
document.getElementById("down").onclick = downclick;
function downclick(e)
{
       x--;
    document.querySelector("#count").textContent = x;
}

const left = document.querySelector('.left');
const right = document.querySelector('.right');

const slider = document.querySelector('.slider');

const indicatorParent = document.querySelector('.control ul'); 
const indicators = document.querySelectorAll('.control li');
index = 0;

indicators.forEach((indicator, i) => {
  indicator.addEventListener('click', () => {
    document.querySelector('.control .selected').classList.remove('selected');
    indicator.classList.add('selected');
    slider.style.transform = 'translateY(' + (i) * -14.28 + '%)';  
    index = i;
    
  });
});

left.addEventListener('click', function() {
   if(index==0)
  {
  document.querySelector('.control .selected').classList.remove('selected');
  indicatorParent.children[6].classList.add('selected');
  index=6;
  slider.style.transform = 'translateY(' + (index) * -14.28 + '%)';  
  }
  else{
  index = (index > 0) ? index -1 : 0;
  document.querySelector('.control .selected').classList.remove('selected');
  indicatorParent.children[index].classList.add('selected');
  slider.style.transform = 'translateY(' + (index) * -14.28 + '%)';
  }
});

right.addEventListener('click', function() {
  if(index==6)
  {
  document.querySelector('.control .selected').classList.remove('selected');
  indicatorParent.children[0].classList.add('selected');
  index=0;
  slider.style.transform = 'translateY(' + (index) * -14.28 + '%)';  
  }
  else{
  index = (index < 7 - 1) ? index+1 : 6;
  document.querySelector('.control .selected').classList.remove('selected');
  indicatorParent.children[index].classList.add('selected');
  slider.style.transform = 'translateY(' + (index) * -14.28 + '%)';
  }
});

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}


window.onclick = function(event) {
  
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
         openDropdown.classList.remove('show');
      }
    }
  }
}