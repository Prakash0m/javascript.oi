const displayMsg = (msg, id, colorName) => {
  document.getElementById(id).innerHTML = msg;
  document.getElementById(id).style.color = colorName;
};

const fnameValidate = () => {
  const first_name = document.getElementById("fname").value;
  if (first_name == "") {
    displayMsg("Must provide firstname", "fnameMsg", "red");
    return false;
  } else if (first_name.length < 3) {
    displayMsg("Must be more than 2 character", "fnameMsg", "red");
    return false;
  } else if (first_name.match(/^([a-zA-Z])+$/)) {
    displayMsg("Contain only alphabets", "fnameMsg", "red");
    return false;
  } else {
    displayMsg("Valid First Nmae", "fnameMsg", "green");
    return true;
  }
};
