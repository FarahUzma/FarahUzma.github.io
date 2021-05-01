
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
  function openItem(item) {
    var x = document.getElementById("pc1");
	var y = document.getElementById("projects");
	var z = document.getElementById("education");
	var w = document.getElementById("experience");
	var p = document.getElementById("interest");
	interest
	switch(item)
	{
		case "projects":x.classList.remove("show");
						x.classList.add("hide");
						z.classList.remove("show");
						z.classList.add("hide");
						w.classList.remove("show");
						w.classList.add("hide");
						y.classList.remove("hide");
						y.classList.add("show");
						break;
		case "education":
			x.classList.remove("show");
		x.classList.add("hide");
		z.classList.remove("hide");
		z.classList.add("show");
		y.classList.remove("show");
		y.classList.add("hide");
		w.classList.remove("show");
						w.classList.add("hide");
		break;
		case "experience":
			x.classList.remove("show");
		x.classList.add("hide");
		w.classList.remove("hide");
		w.classList.add("show");
		z.classList.remove("show");
		z.classList.add("hide");
		y.classList.remove("show");
		y.classList.add("hide");
		break;
		case "interest":
			x.classList.remove("show");
		x.classList.add("hide");
		p.classList.remove("hide");
		p.classList.add("show");
		z.classList.remove("show");
		z.classList.add("hide");
		y.classList.remove("show");
		y.classList.add("hide");
		w.classList.remove("show");
						w.classList.add("hide");
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
  function hideExperience() {
    var x = document.getElementById("pc1");
	var y = document.getElementById("experience");

	y.classList.remove("show");
	y.classList.add("hide");
	x.classList.remove("hide");
	x.classList.add("show");
  }


