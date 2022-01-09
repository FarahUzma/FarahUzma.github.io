
function myFunction(id) {
	if(document.getElementById(id).classList.contains('open'))
	{
		document.getElementById(id).classList.remove('open');
	}
	else
	{
		document.getElementById(id).classList.add('open');
	}
}
async function load_home(){
  content.innerHTML = await (await fetch('roadmap.html')).text();
}

  function openItem(item) {
    var x = document.getElementById("pc1");
	var y = document.getElementById("projects");
	switch(item)
	{
		case "projects":x.classList.remove("show");
						x.classList.add("hide");
						y.classList.remove("hide");
						y.classList.add("show");
						break;
	}
    
  }

  function hideProjects() {
    var x = document.getElementById("pc1");
	var y = document.getElementById("projects");
	y.classList.remove("show");
	y.classList.add("hide");
	x.classList.remove("hide");
	x.classList.add("show");
  }
  function hideEducation() {
    var x = document.getElementById("pc1");
	var y = document.getElementById("education");
	y.classList.remove("show");
	y.classList.add("hide");
	x.classList.remove("hide");
	x.classList.add("show");
  }


