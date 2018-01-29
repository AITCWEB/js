document.getElementById("issueInputForm").addEventListener("submit", saveIssue);

function saveIssue(e) {
  const issueDesc = document.getElementById("issueDescInput").value;
  const issueSeverity = document.getElementById("issueSeverityInput").value;
  const issueAssignedTo = document.getElementById("issueAssignedToInput").value;
  const issueId = chance.guid();
  const issueStatus = "Open";
  let issue = {
    id: issueId,
    description: issueDesc,
    severity: issueSeverity,
    assignedTo: issueAssignedTo,
    status: issueStatus
  };

  if (localStorage.getItem("issues") === null) {
    let issues = [];
    issues.push(issue);
    localStorage.setItem("issues", JSON.stringify(issues));
  } else {
    let issues = JSON.parse(localStorage.getItem("issues"));
    issues.push(issue);
    localStorage.setItem("issues", JSON.stringify(issues));
  }

  document.getElementById("issueInputForm").reset();
  fetchIssues();
  e.preventDefault();
}

function setStatusClosed(id) {
  var issues = JSON.parse(localStorage.getItem("issues"));
  for (let i = 0; i < issues.length; i += 1) {
    if (issues[i].id === id) {
      issues[i].status = "Closed";
    }
  }
  localStorage.setItem("issues", JSON.stringify(issues));
  fetchIssues();
}
function deleteIssue(id) {
  var issues = JSON.parse(localStorage.getItem("issues"));
  for (let i = 0; i < issues.length; i += 1) {
    if (issues[i].id === id) {
      issues.splice(i, 1);
    }
  }
  localStorage.setItem("issues", JSON.stringify(issues));
  fetchIssues();
}
function fetchIssues() {
  const issues = JSON.parse(localStorage.getItem("issues"));
  const issuesList = document.getElementById("issuesList");
  issuesList.innerHTML = "";
  for (let i = 0; i < issues.length; i += 1) {
    const id = issues[i].id;
    const desc = issues[i].description;
    const severity = issues[i].severity;
    const assignedTo = issues[i].assignedTo;
    const status = issues[i].status;

    //es6 version
    issuesList.innerHTML += `
    <div class="card mb-5">
        <div class="card-body">
        <h5 class="card-title">Issue ID: ${id}</h5>
        <h6 class="card-subtitle mb-2 text-info"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
        ${status}</h6>
        <p class="card-text">${desc}</p>
        <span class="card-subtitle text-danger"><i class="fa fa-clock-o" aria-hidden="true"></i>
        ${severity}</span><br/>
        <span class="card-subtitle text-success"><i class="fa fa-user" aria-hidden="true"></i> ${assignedTo}</span>
        <br></br>
        <div class="mt-3">
        <a onclick="setStatusClosed('${id}')" class="btn btn-outline-info">Close</a>
        <a onclick="deleteIssue('${id}')" class="btn btn-outline-danger">Delete</a>
        </div>
        </div>
    </div>
    `;
  }
}

fetchIssues();
