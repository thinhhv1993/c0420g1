{re=/^\d{1,2}\/\d{1,2}\/\d{4}$/;
if(form.startdate.value!=''&&!form.startdate.value.match(re)){alert("Invalid date format: "+form.startdate.value);
form.startdate.focus();return false;}
    if(form.enddate.value!=''&&!form.enddate.value.match(re)){alert("Invalid date format: "+
        form.enddate.value);form.enddate.focus();return false;}
    re=/^\d{1,2}:\d{2}([ap]m)?$/;if(form.starttime.value!=''&&!form.starttime.value.match(re)){alert("Invalid time format: "
    +form.starttime.value);form.starttime.focus();return false;}