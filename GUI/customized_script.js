function hideSection(doc_id)
{
	document.getElementById(doc_id).style.display = "none";
	return true;
}

function showSection(doc_id)
{
	document.getElementById(doc_id).style.display = "";
	return true;
}
function toggleId(id) 
{
	if (document.getElementById(id).style.display == "none") 
	{
		// DISPLAY DETAILS
		showSection(id);
	} 
	else 
	{
		// HIDE DETAILS
		hideSection(id);
	}
	return true;
}
