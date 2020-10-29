

String.prototype.formatUnicorn = String.prototype.formatUnicorn ||
  function () {
    "use strict";
    var str = this.toString();
    if (arguments.length) {
      var t = typeof arguments[0];
      var key;
      var args = ("string" === t || "number" === t) ?
        Array.prototype.slice.call(arguments)
        : arguments[0];

      for (key in args) {
        if (args[key]) {
          str = str.replace(new RegExp("\\{" + key + "\\}", "gi"), args[key]);
        }
        str = str.replace(new RegExp("\\{" + key + "\\}", "gi"), " ");
      }
    }

    return str;
  };



document.getElementById('form').addEventListener('submit', function (evt) {
  evt.preventDefault();
  console.log("Form submited");


  chrome.notifications.create({
    type: 'list',
    iconUrl: '/assets/img/github-box.svg',
    title: 'John Extension',
    message: 'Cool\' Notification\'!',
    buttons: [
      { title: 'Keep it Rocking.' }
    ],
    items: [{ title: 'JonhExtension', message: 'Hey' }],


    priority: 0
  });

})





fetch('https://api.github.com/users/Joaosilgo')
  .then((response) => {
    if ((response.status == 404) || (response.status == 0)) {
      console.log(response.status);
    }
    else {
      return response.json()
    }
  })
  .then((data) => {
    // Work with JSON data here
    if (data != null) {
      console.log(data)

      // document.getElementById("login").innerText = data.login;
      get_git_user_info(data);
    }
  })
  .catch((err) => {
    // Do something for an error here
    console.log(err)
  })



function get_git_user_info(data) {

  // var statusHTML = '';
  console.log(data);


  document.getElementById("login").innerText = data.login;
  document.getElementById("avatar").innerHTML = '<img class="avatar" src="{avatar_url}"></img>'.formatUnicorn(data);;
  document.getElementById("href").setAttribute("href", data.html_url);

}




