var guestnames = [];
function submit()
{
    var names = document.getElementById("names").value;
    guestnames.push(names);
    document.getElementById("submitguest").innerHTML = guestnames;
    console.log(guestnames);
    document.getElementById("names").value = "";
}
function show()
{
    var i=guestnames.join("<br>")
    console.log(i);
    document.getElementById("showguest").innerHTML=i;
}
function sorting()
{
    guestnames.sort();
    var i=guestnames.join("<br>")
    console.log(i);
    document.getElementById("sortguest").innerHTML=i;
}