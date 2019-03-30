document.addEventListener("DOMContentLoaded", function() {
  function deleteSong() {
    let deleteInput = confirm(
      "Are you sure you want to delete? it cannot be undone!"
    );
    alert(deleteInput);
  }

  let deleteButtons = document.querySelectorAll(".delete");

  deleteButtons.forEach(button => {
    button.addEventListener("click", function() {
      let doubleCheck = confirm(
        "are you sure you want to delete the song? It cannot be undone!"
      );
      console.log(doubleCheck);

      if (doubleCheck) {
        let id = this.dataset.id;
        console.log(id);
        fetch(`/songs/${id}/delete`, {
          method: "DELETE",
          cahce: "reload"
        })
          .then(res => res.text())
          .then(response => console.log(response))
          .catch(error => console.error("Error:", error));
      }
      location.reload()
    });
  });
});
