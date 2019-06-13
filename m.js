'use strict';
$(document).ready(function() {
	if ($('.directors-plus-template-default').length > 0) {
		var totalVideos = document.getElementById('videos-length').getAttribute('data-length'),
		videosWatched = [],
		end = false,
		bg = document.getElementById('modal-bg'),
		modal = document.getElementById('modal'),
		modalVid = 	document.getElementById('real-video'),
		prevArrow = document.getElementById('prev-arrow'),
		nextArrow = document.getElementById('next-arrow'),
		videos = document.querySelectorAll('.video');
		const targetLock = document.querySelector('.mfp-content');




		var attachListeners;
		(attachListeners = function() {
			modalVid.addEventListener('ended', function () {
					 next();
				})




			//click events
			var i;
			for ( i = 0; i < videos.length; i++ ) {
				videos[i].querySelector('video').classList.add('video-' + i); //give videos a unique class
				videos[i].addEventListener('click', function() {
					var vid = this.querySelector('video');
					modal.classList.remove('hidden');
					bg.classList.remove('hidden');
					bodyScrollLock.disableBodyScroll(targetLock);

					swapVideo(vid);

				})
			}


			document.querySelector('.mfp-close').addEventListener('click', function() {
				removeModal();
			});

			prevArrow.addEventListener('click', function() {
				prev();
			});
			nextArrow.addEventListener('click', function() {
				next();
			})


		//end click events 

		})();


		document.onkeydown = function(evt) {
	    	evt = evt || window.event;
	    	if (evt.keyCode == 27) {
	    		removeModal();
	    	}
		};


		function swapVideo(vid) {
				modalVid.src = vid.src;

				loopCheck(vid);
				if (! modal.classList.contains('hidden') ) {

					modalVid.id = vid.classList[vid.classList.length - 1];
					modalVid.play();

				}
		}





		function removeModal() {
				modal.classList.add('hidden');
				bg.classList.add('hidden');

				modalVid.pause();
				videosWatched = [];
					bodyScrollLock.enableBodyScroll(targetLock);
		}




		function loopCheck(vid) {
			if (videosWatched.includes(vid.src)) {
				if(videosWatched.length == videos.length) removeModal();			
			} else {
				videosWatched.push(vid.src);
			}
		}




		function next() {
			var index = modalVid.id.match(/\d+/g);
			if ( index == videos.length - 1 ) {
				var newVid = videos[0].querySelector('video');

				swapVideo(newVid);

				
			} else {
				index++;
				var newVid = videos[index].querySelector('video');
				swapVideo(newVid);
			}
		}




		function prev() {
			var index = parseInt(modalVid.id.match(/\d+/g));
			if ( index == 0 ) {
				var newVid = videos[videos.length - 1].querySelector('video');
				swapVideo(newVid);

				
			} else {
				var newVid = videos[index-1].querySelector('video');
				swapVideo(newVid);
			}
		}

	
	} //end original conditional


});