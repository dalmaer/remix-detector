document.addEventListener("DOMContentLoaded", function () {
  // Use chrome.storage.local.get with no parameters to get all stored data
  chrome.storage.local.get(null, function (result) {
    // Create an unordered list element to display the keys
    const list = document.createElement("ul");

    // Loop through the result object's keys and create list items
    for (const key in result) {
      if (result.hasOwnProperty(key)) {
        const listItem = document.createElement("li");

        const link = document.createElement("a");
        link.href = key;
        link.target = "_blank";
        link.appendChild(document.createTextNode(key));

        listItem.appendChild(link);

        list.appendChild(listItem);
      }
    }

    // If no keys were found, show an appropriate message
    if (list.childElementCount === 0) {
      list.innerText = "No keys found.";
    }

    // Append the list to the info-container
    document.getElementById("info").appendChild(list);
  });
});
