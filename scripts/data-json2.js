var xhr = new XMLHttpRequest();                 // Create XMLHttpRequest object

xhr.onload = function() {                       // When readystate changes
  // The following conditional check will not work locally - only on a server
  //if(xhr.status === 200) {                      // If server status was ok
    responseObject = JSON.parse(xhr.responseText);

    // BUILD UP STRING WITH NEW CONTENT (could also use DOM manipulation)
    var newContent = '';
    for (var i = 0; i < responseObject.events.length; i++) { // Loop through object
      newContent += '<div class="event">';
      newContent += '<img src="' + responseObject.events[i].profilePic + '" width = 225 height = 275 ';
      newContent += 'alt="' + responseObject.events[i].name + '" />';
      newContent += '<p><b>' + responseObject.events[i].name + '</b><br>';
      newContent += responseObject.events[i].aboutMe + '</p><hr>';
      newContent += '<p>' + responseObject.events[i].profiles + '</p>';
      newContent += '<a href="' + responseObject.events[i].github + '" target ="_blank">Github Profile</a>';
      newContent += '<p><br>' + responseObject.events[i].projectInfo + '</p>';
      newContent += '<a href="' + responseObject.events[i].project1 + '" target ="_blank">Jquery Input & Output</a><br>';
      newContent += '<a href="' + responseObject.events[i].project2 + '" target ="_blank">Grocery List</a><hr>';
      newContent += '<p>' + responseObject.events[i].usefulLinks + '</p>';
      newContent += '<p>' + responseObject.events[i].linkDescription + '</p>';
      newContent += '<a href="' + responseObject.events[i].link1 + '" target ="_blank">W3C Schools</a><br>';
      newContent += '<a href="' + responseObject.events[i].link2 + '" target ="_blank">NuChecker</a><br>';
      newContent += '<a href="' + responseObject.events[i].link3 + '" target ="_blank">CodePen.io</a><br>';
      newContent += '<a href="' + responseObject.events[i].link4 + '" target ="_blank">WAVE</a><hr>';
      newContent += '<p>' + responseObject.events[i].newInfo + '</p>';
      newContent += '</div>';
    }

    document.getElementById('contentBio').innerHTML = newContent;

  //}
};

xhr.open('GET', 'data/data1.json', true);        // Prepare the request
xhr.send(null);                                 // Send the request


// When working locally in Firefox, you may see an error saying that the JSON is not well-formed.
// This is because Firefox is not reading the correct MIME type (and it can safely be ignored).

// If you get it on a server, you may need to se the MIME type for JSON on the server (application/JSON).