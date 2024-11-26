# TechnicalChallenge
# User Story
As a user, I should be able to manage my todos effectively at https://todomvc.com/examples/react/dist/

# Acceptance Criteria 
1. Add a New Todo:
    When the user types a task description into the input field and presses "Enter" or clicks the "Add" button, the new task should be added to the list of todos.
    The newly added todo should appear as the last item in the list and should be unchecked by default.

2. Mark Todo as Completed:
    The user should be able to click a checkbox next to a todo to mark it as completed.
    When a todo is marked as completed, its appearance should change (e.g., a strikethrough on the text).
    The user should be able to uncheck a completed todo, reverting it to an incomplete state.

3. Delete a Todo:
    The user should be able to delete a todo by clicking a delete button/icon next to the todo.
    The deleted todo should be removed from the list immediately.

4. View Active and Completed Todos:
    The user should be able to toggle between "All," "Active," and "Completed" views using filter buttons.
    All View: Displays all todos regardless of their status.
    Active View: Displays only incomplete todos.
    Completed View: Displays only completed todos.

5. Clear Completed Todos:
    The user should have a "Clear Completed" button that removes all completed todos from the list.
    This button should only be visible or enabled if there are completed todos.

6. Item Counter:
    The user should see a counter displaying the number of active (incomplete) todos.
    The counter should update dynamically as todos are added, completed, or deleted.


# Testing Strategy Agile Development

## Objective
To ensure each user story is thoroughly tested and meets quality standards before deployment through a combination of manual testing, automation, and continuous integration.

## Test Approach
### Manual Testing:
For each user story, manual test cases are created based on the acceptance criteria.
These test cases validate functional requirements, edge cases, and any business logic.
Manual testing is conducted in parallel with development to identify defects early.

### Automation Testing:
Test automation scripts are developed for each user story as part of the sprint.
Automated test scripts are designed using playwright.
Automated test scripts are integrated into the CI/CD pipeline to enable continuous testing.
Upon every build deployment (specific to the user story), automated tests are executed.
Only builds that pass these automated tests are promoted to subsequent environments.


# Automation Setup Instructions:

1. Install Visual Studio Code
    Download and install VS Code from the official website: https://code.visualstudio.com/download

2. Install Node.js
    Ensure you have Node.js installed on your machine: https://nodejs.org/en

3. Install Playwright
    Open a terminal in VS Code and run the following command to set up a new Playwright project:

    npm init playwright@latest

    This command will guide you through the Playwright setup process and install all the necessary dependencies.

4. Running Tests:
    Copy the todo.spec.ts under "Tests" folder
    To execute your Playwright tests, run:

    npx playwright test

5. To view the detailed HTML report after running your tests, use:

    npx playwright show-report
