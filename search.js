let search = document.querySelector('#searchbar');
		// let searchbutton = document.querySelector('#searchbutton');
		let page = search.value;
		search.addEventListener("keydown",function(event){
			if (event.keyCode === 13) {
   				event.preventDefault();
   				getPage();
		}});
		
		function getPage(){
			page = search.value;
			console.log(page)
			if(page=="home" || page=="Home")
			{
				document.location.href= 'index.html';
			}

			if(page=="disasters" || page=="Disasters")
			{
				document.location.href= 'disasters.html';
			}
			if(page=="weather" || page=="Weather")
			{
				document.location.href= 'weather.html';
			}
			if(page=="content" || page=="Content"|| page=="hurricanes" || page=="earthquakes" || page=="tsunami" || page=="volcanoes")
			{
				document.location.href= 'content.html';	
			}
			if(page=="images" || page=="Images")
			{
				document.location.href= 'images.html';
			}
			if(page=="videos" || page=="Videos")
			{
				document.location.href= 'videos.html';
			}
			if(page=="stories" || page=="Stories")
			{
				document.location.href= 'stories.html';
			}
			if(page == "shelters")
			{
				document.location.href= 'disasters.html';
				alert("Scroll to bottom for shelters");
			}

		}
