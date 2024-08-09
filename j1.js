function f1()
{
    // Declarations

    var n=document.getElementById("name");

    var roll=document.getElementById("rollno");
    var roll_format= /^([0-9]{2})([a-zA-Z]{2,3})([0-9]{2})$/;

    var add=document.getElementById("address");

    var ins=document.getElementById("institute").value;

    var st=document.getElementById("state").value;

    var caste_selected= "";
    var a=document.getElementById("caste");
    var caste_selected=a.options[a.selectedIndex].value;

    var em=document.getElementById("email");
    var em_format= /^([a-z0-9\.-]+)@([a-z0-9-]+)\.([a-z]+)(\.[a-z]+)?$/;

    var pass=document.getElementById("password");
    var pass_format=/^([a-zA-Z]{8})([0-9]{2})([!@#$%&*\.]{1})$/;

    var date=document.getElementById("dob");

    var branch_selected= "";
    var x= document.getElementsByName("branch");
    for(var i=0;i<x.length;i++)
    {
        if(x[i].checked==true)
        {
            branch_selected=x[i].value;
        }
    }

    var lan_selected= "";
    var y= document.getElementsByName("language");
    for(var i=0;i<y.length;i++)
    {
        if(y[i].checked==true)
        {
            lan_selected=lan_selected+" "+y[i].value;
        }
    }

    // Validations

    if(n.value.trim()=="")
    {
        alert("Please enter your Name");
        return false;
    }

    else if(roll.value.trim()=="")
    {
        alert("Please enter your Roll no.");
        return false;
    }

    else if(roll_format.test(roll.value)==false)
    {
        alert("Invalid Roll no.");
        return false;
    }

    else if(add.value.trim()=="")
    {
        alert("Please enter your Address");
        return false;
    }

    else if(caste_selected=="")
    {
        alert("Select your Caste");
        return false;
    }

    else if(em.value.trim()=="")
    {
        alert("Please enter your Email address");
        return false;
    }

    else if(em_format.test(em.value)==false)
    {
        alert("Invalid Email address");
        return false;
    }

    else if(pass.value.trim()=="")
    {
        alert("Password cannot be empty");
        return false;
    }

    else if(pass_format.test(pass.value)==false)
    {
        alert("Password must contain atleast 8 characters, 2 numbers and 1 special character");
        return false;
    }

    else if(date.value=="")
    {
        alert("Please enter your DOB");
        return false;
    }

    else if(branch_selected=="")
    {
        alert("Please select your Branch");
        return false;
    }

    else if(lan_selected=="")
    {
        alert("Please select the Languages known to you");
        return false;
    }


    // Print

    else
    {
        alert("Form validated successfully");
        document.write("Name: "+n.value+"<br>");
        document.write("Roll No.: "+roll.value+"<br>");
        document.write("Address: "+add.value+"<br>");
        document.write("Institute Name: "+ins+"<br>");
        document.write("State: "+st+"<br>");
        document.write("Caste: "+caste_selected+"<br>");
        document.write("DOB: "+date.value+"<br>");
        document.write("Branch Selected: "+branch_selected+"<br>");
        document.write("Languages Known: "+lan_selected+"<br>");
        return true;
    }
}