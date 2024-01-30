Todo list 

Please follow the below instructions:


2) Header section with a heading (h1) Todo and a subheading that should be today’s date in the following format.

    new Date().toLocaleDateString("en-us", { weekday: "long", year: "numeric", month:"short", day: "numeric" })

3) Main section with 3 sections:

     -Form with an input and a button to submit the form

     -A clear all button to delete all the Todos

     -An unordered list that will have all todos as list items. 

4) You can use the input-group bootstrap class on form and form-control on input to style them as shown in the screenshot. Also, require some margin in the y direction.

5) Hitting enter or clicking on the '+' button should add a new To do to the bottom of the list. It should also clear out the input and focus back on it.

6) ‘Clear All’ button after the form should be right aligned and delete all the to-dos.

7) Each to-do can be marked done by clicking on the checkbox which also strikes through the label.

 
Sample HTML for ul for reference:
<ul id="todo-list" class="list-group border">
  <li class="list-group-item p-3">
      <input class="form-check-input me-1" id="todo-1" type="checkbox">
      <label class="form-check-label" for="todo-1">
              <strike>Complete QTripDynamic</strike>
      </label>
  </li>
  <li class="list-group-item p-3">
       <input class="form-check-input me-1" id="todo-2" type="checkbox">
       <label class="form-check-label" for="todo-2">
              Complete FE-2 Challenge
       </label>
   </li>
</ul>
 
OPTIONAL
8) Store your to-do list in local storage so that whenever you reopen the web application your list gets reloaded in the same state as before you closed the tab.

 

PS: Only custom styling is

body {
	  background: linear-gradient(
         to right,
         rgb(75, 121, 161),
         rgb(40, 62, 81)
       );
     }