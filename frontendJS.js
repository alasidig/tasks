/*
Todo: define a function that checks if a given date is before today. It compares the input date with today's date after setting both dates' time to midnight. If the input date is before today, the function returns true; otherwise, it returns false.
*/

function isBeforeToday(dateObj){

}

let tasks = [];
/*
Todo: define a function called validate that is used to validate a form submission event. It checks if the due date selected by the user is before today, and if so, it prevents the form submission and alerts the user. If the due date is valid, it adds a new task to an array, resets the form, saves the tasks to local storage, and renders the tasks.

*/
function validate(event) {
    //TODO: find the due date
    
    const dueDateObj = null;

    if (isBeforeToday(dueDateObj)) {
        alert('You cannot select a date before today!');
        //TODO: prevent the form from being submitted
        
    }
    else{
    //TODO: Add the new task to the tasks array set the done status to false and dondeDate to null
    tasks.push({
        id: Date.now(),// generate a unique id
        title: '',
        dueDate: dueDateObj,
        done: false,
        doneDate: null
    })
    //TODO: stop the form from being submitted

    console.log(tasks);
    //reset the form
    //save tasks to local storage
    //render tasks
   
    
}
}
// TODO: add event listener to the form to call the validate function when the form is submitted

/*
TODO: define a function that saves the 'tasks' array to the browser's local storage by converting it to a JSON string.
*/
function saveTasksToLocalStorage() {
    
}
/* TODO: define a function that retrieves tasks from the browser's local storage. It checks if there are tasks stored, and if so, it parses the JSON data, converting date keys to Date objects, and then returns the tasks. If there are no tasks, it returns an empty array.
*/


function getTasksFromLocalStorage() {
  }

// TODO: call the getTasksFromLocalStorage function when the page loads


/*
TODO: define a function renderTasks that updates the HTML of a section with id "tasks" based on the tasks data. It iterates through each task, creates an HTML template for the task, and appends it to the tasks section.

*/
function renderTasks() {
    
}

/*
TODO: define a function markTaskAsDone that takes a taskId as a parameter. It finds the task with the matching taskId from the tasks array, marks it as done with the current date, saves the updated tasks to local storage, and then re-renders the tasks.

*/
function markTaskAsDone(taskId) {
 }

/*
TODO: define a function called deleteTask that removes a task with the given taskId from the tasks array, saves the updated tasks to local storage, and then re-renders the tasks.

*/
function deleteTask(taskId) {
  
}