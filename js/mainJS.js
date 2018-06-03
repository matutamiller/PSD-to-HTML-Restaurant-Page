const rightArrow = document.querySelector('.rightArrow');
const leftArrow = document.querySelector('.leftArrow');
const slider = document.querySelectorAll('.slides img');
let move = 0;

rightArrow.addEventListener('click', function(){
	move += 130
	slider.forEach(function(img){
		if(move < 520){
			img.style.transform = 'translate(' + -move + 'px' + ')';
		} else{
			move = 0;
			img.style.transform = 'translate(' +  move + 'px' + ')';
		}
	});
});

leftArrow.addEventListener('click', function(){
	move = move - 130;
	slider.forEach(function(img){
		if(move >= 0 && move < 520){
			img.style.transform = 'translate(' + -move + 'px' + ')';
		} else{
			move = 390;
			img.style.transform = 'translate(' + -move + 'px' + ')';
		}
	});
});

