function insert()
	{

		var name = document.getElementById("name").value;
		var surname = document.getElementById("surname").value;
		var option = document.getElementById("faculty").value;

		if(name=="", surname==null||name==null, surname==null||name==null, surname=="")
			{
				alert("Please enter full information");
			}
		else
			{
				var parenttbl = document.getElementById("students");
				var newel = document.createElement('tr');
				var elementid = document.getElementsByTagName("tr").length
			 	newel.setAttribute('id',elementid);
			 	newel.innerHTML = "<tr><td>" + name + "</td><td>" + surname + "</td><td><strong>"+option+"</strong></td><tr>";
				parenttbl.appendChild(newel);
			}
	}
