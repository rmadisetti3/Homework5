const employeeList = [
  {
    name: "Jan",
    officeNum: 1,
    phoneNum: "222-222-2222"
  },
  {
    name: "Juan",
    officeNum: 304,
    phoneNum: "489-789-8789"
  },
  {
    name: "Margie",
    officeNum: 789,
    phoneNum: "789-789-7897"
  },
  {
    name: "Sara",
    officeNum: 32,
    phoneNum: "222-789-4654"
  },
  {
    name: "Tyrell",
    officeNum: 3,
    phoneNum: "566-621-0452"
  },
  {
    name: "Tasha",
    officeNum: 213,
    phoneNum: "789-766-5675"
  },
  {
    name: "Ty",
    officeNum: 211,
    phoneNum: "789-766-7865"
  },
  {
    name: "Sarah",
    officeNum: 345,
    phoneNum: "222-789-5231"
  }
];

const $ = function(sel) {
  const nodeList = document.querySelectorAll(sel);
  const on = function(action, cb) {
    nodeList.forEach(e => e.addEventListener(action, cb));
  };
  const val = function(content) {
    switch (content) {
      case undefined:
      return nodeList[0].value;
      break;
      default:
      nodeList[0].value = content;
    }
  };
  const empty = function() {
    nodeList.forEach(e => e.innerHTML = []);
  }
  const print = function() {
    $("#content").empty();
    employeeList.forEach(function(e) {
      render(e.name);
      render(e.officeNum);
      render(e.phoneNum);
    })};
  
  const verify = function() {
    $("#content").empty();
    const inputName = $("#search-input").val();
    let count = 0;
    const nameElement = employeeList.filter(e => e.name === inputName);
    count = nameElement.length;
    switch (count) {
      case 1:
      render("Employee Found");
      break;
      case 0:
      render('Employee Not Found');
      break;
    }
  };
  
  const lookup = function() {
    $("#content").empty();
    const inputName = $("#search-input2").val();
    index = employeeList.findIndex(e => e.name === inputName);
    switch (index) {
      case -1:
      render("Employee Not Found");
      break;
      default:
      render(employeeList[index].name);
      render(employeeList[index].officeNum);
      render(employeeList[index].phoneNum);
      break; 
    }
  };
  const contains = function() {
    $("#content").empty();
    const inputStr = $("#search-input3").val();
    const filterArr = employeeList.filter(e => e.name.includes(inputStr.toLowerCase()));
    const lengArr = filterArr.length;
    switch (lengArr) {
    case 0:
    render("Employees Not Found");
    break;
    default:
    filterArr.forEach(function(e) {
      render(e.name);
      render(e.officeNum);
      render(e.phoneNum);
    });
    break;
  }
  };
  const update = function() {
    $("#content").empty();
    const inputName = $("#search-input4").val();
    const inputOffice = $("#search-input5").val();
    const inputPhone = $("#search-input6").val();
    index = employeeList.findIndex(e => e.name === inputName);
    employeeList[index].name = inputName;
    employeeList[index].officeNum = inputOffice;
    employeeList[index].phoneNum = inputPhone;
    render(employeeList[index].name);
    render(employeeList[index].officeNum);
    render(employeeList[index].phoneNum);
  };
  
  const addName = function() {
    $("#content").empty();
    const inputName = $("#search-input7").val();
    const inputOffice = $("#search-input8").val();
    const inputPhone = $("#search-input9").val();
    leng = employeeList.length;
    newObj = [];
    employeeList.push(newObj);
    newObj.name = inputName;
    newObj.officeNum = inputOffice;
    newObj.phoneNum = inputPhone;
    render(employeeList[leng].name);
    render(employeeList[leng].officeNum);
    render(employeeList[leng].phoneNum);
  };
  
  const deleteName = function() {
    $("#content").empty();
    const inputName = $("#search-input10").val();
    index = employeeList.findIndex(e => e.name === inputName);
    switch (index) {
      case -1:
      render("Employee Not Found");
      break;
      default:
      render(employeeList[i].name);
      render(employeeList[i].officeNum);
      render(employeeList[i].phoneNum);
      break;
    }
  };
  const publicAPI = {
    on: on,
    val: val,
    empty: empty,
    print: print,
    verify: verify,
    lookup: lookup,
    contains: contains,
    update: update,
    addName: addName,
    deleteName: deleteName
  };

  return publicAPI;
};

//function to show each page specific to each command
function showPrint() {
  document.getElementsByClassName("h1").style.visibility = "hidden";
}
function showVerify() {
  document.getElementById("ver").style.visibility = "visible";
  document.getElementsByClassName("h1").style.visibility = "hidden";
}
function showLookup() {
  document.getElementById("look").style.visibility = "visible";
  document.getElementsByClassName("h1").style.visibility = "hidden";
}
function showContains() {
  document.getElementById("cont").style.visibility = "visible";
  document.getElementsByClassName("h1").style.visibility = "hidden";
}
function showUpdate() {
  document.getElementById("up").style.visibility = "visible";
  document.getElementsByClassName("h1").style.visibility = "hidden";
}
function showAdd() {
  document.getElementById("ad").style.visibility = "visible";
  document.getElementsByClassName("h1").style.visibility = "hidden";
}
function showDelete() {
  document.getElementById("del").style.visibility = "visible";
  document.getElementsByClassName("h1").style.visibility = "hidden";
}

//call buttons to each function
$("#print").on("click", $().print);
$("#verButton").on("click", $().verify);
$("#lookButton").on("click", $().lookup);
$("#contButton").on("click", $().contains);
$("#upButton").on("click", $().update);
$("#addButton").on("click", $().addName);
$("#delButton").on("click", $().deleteName);
