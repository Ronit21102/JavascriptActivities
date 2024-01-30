

1)  WhenEver we are taking input after getting the value make it to empty string
    ***taskInput.value=''***
    After the user adds a task, clearing the input field provides immediate visual feedback.



 2) <!-- list.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        // If the clicked element is an <li> (list item)
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        // If the clicked element is a <span>
        e.target.parentElement.remove();
        saveData();
    }
    }); -->

    Here's what happens:

If the element that was clicked (e.target) already has the "checked" class, calling toggle("checked") removes the class.

If the element doesn't have the "checked" class, calling toggle("checked") adds the class.

This is often used in to-do list applications to visually mark or unmark tasks as completed.
