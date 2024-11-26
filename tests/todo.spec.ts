const { test, expect } = require('@playwright/test');

test.describe('As a user, I should be able to manage my todos effectively', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the TodoMVC app before each test
    await page.goto('https://todomvc.com/examples/react/dist/');
  });

  test('User can add a new todo', async ({ page }) => {
    const todoInput = page.locator('.new-todo');
    await todoInput.fill('Test case 1');
    await todoInput.press('Enter');
    const todoItem = page.locator('.todo-list li');
    await expect(todoItem).toHaveText('Test case 1');
    await expect(todoItem.locator('.toggle')).not.toBeChecked();
  });

  test('User can mark a todo as completed and unmark it', async ({ page }) => {
    const todoInput = page.locator('.new-todo');
    await todoInput.fill('Test case 2');
    await todoInput.press('Enter');

    const toggleCheckbox = page.locator('.todo-list li .toggle');
    await toggleCheckbox.click();
    const todoItem = page.locator('.todo-list li');
    await expect(todoItem).toHaveClass(/completed/);

    // Unmark the todo
    await toggleCheckbox.click();
    await expect(todoItem).not.toHaveClass(/completed/);
  });

  

  test('User can delete a todo', async ({ page }) => {
    const todoInput = page.locator('.new-todo');
    await todoInput.fill('Test case 3');
    await todoInput.press('Enter');

    const deleteButton = page.locator('.todo-list li .destroy');
    await page.hover('.todo-list li');
    await deleteButton.click();

    await expect(page.locator('.todo-list li')).toHaveCount(0);
  });

  test('User can view active, completed, and all todos', async ({ page }) => {
    const todoInput = page.locator('.new-todo');
    await todoInput.fill('Task 1');
    await todoInput.press('Enter');
    await todoInput.fill('Task 2');
    await todoInput.press('Enter');

    const toggleCheckbox = page.locator('.todo-list li .toggle');
    await toggleCheckbox.nth(1).click(); // Mark the second todo as completed

    const filters = page.locator('.filters a');

    // Active view
    await filters.locator('text=Active').click();
    await expect(page.locator('.todo-list li')).toHaveCount(1);
    await expect(page.locator('.todo-list li')).toHaveText('Task 1');

    // Completed view
    await filters.locator('text=Completed').click();
    await expect(page.locator('.todo-list li')).toHaveCount(1);
    await expect(page.locator('.todo-list li')).toHaveText('Task 2');

    // All view
    await filters.locator('text=All').click();
    await expect(page.locator('.todo-list li')).toHaveCount(2);
  });

  test('User can clear completed todos', async ({ page }) => {
    const todoInput = page.locator('.new-todo');
    await todoInput.fill('Task 1');
    await todoInput.press('Enter');
    await todoInput.fill('Task 2');
    await todoInput.press('Enter');

    const toggleCheckbox = page.locator('.todo-list li .toggle');
    await toggleCheckbox.nth(1).click(); // Mark the second todo as completed

    const clearCompleted = page.locator('.clear-completed');
    await clearCompleted.click();

    await expect(page.locator('.todo-list li')).toHaveCount(1);
    await expect(page.locator('.todo-list li')).toHaveText('Task 1');
  });

  test('User sees active todo count dynamically update', async ({ page }) => {
    const todoInput = page.locator('.new-todo');
    await todoInput.fill('Task 1');
    await todoInput.press('Enter');
    await todoInput.fill('Task 2');
    await todoInput.press('Enter');

    const toggleCheckbox = page.locator('.todo-list li .toggle');
    await toggleCheckbox.nth(1).click(); // Mark the second todo as completed

    const itemCount = page.locator('.todo-count');
    await expect(itemCount).toHaveText('1 item left!');

    // Unmark the completed todo
    await toggleCheckbox.nth(1).click();
    await expect(itemCount).toHaveText('2 items left!');
  });
 
});
