
# Task Manager

This project is a simple **Task Manager** application built using React. It allows users to add, edit, search, and delete tasks, as well as toggle task completion. The application persists tasks between page reloads using local storage and includes responsive design for mobile and desktop views.

## Features

- **Add/Edit Tasks**: Users can add new tasks and edit existing tasks.
- **Task Priorities**: Tasks can be assigned priorities: High, Medium, or Low.
- **Search**: A search bar is provided to filter tasks by title or description.
- **Task Completion**: Users can mark tasks as complete/incomplete.
- **Local Storage**: Tasks are persisted between page reloads using local storage.
- **Responsive Design**: The application is fully responsive, making it usable on both desktop and mobile devices.

## Setup Instructions

Follow the steps below to set up and run the project locally:

### Prerequisites

Make sure you have the following installed:

- **Node.js** (v12+)
- **npm** or **yarn**

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/task-manager.git
   cd task-manager
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

   or if you're using Yarn:

   ```bash
   yarn install
   ```

### Running the Application

3. Start the development server:

   ```bash
   npm run dev
   ```

   or with Yarn:

   ```bash
   yarn dev
   ```

4. Open the app in your browser:

   Navigate to [http://localhost:3000](http://localhost:3000) in your web browser.

### Build for Production

To create a production-ready build of the application, run:

```bash
npm run build
```

This will generate optimized static files in the `build` directory.

## Approach for Sorting Tasks by Priority

The tasks in the application are sorted based on their assigned priority (High, Medium, or Low). Here's how the sorting is handled:

1. **Priority Definition**:
   Each task has a `priority` field, which can be either **High**, **Medium**, or **Low**.

2. **Sorting Algorithm**:
   When displaying the task list, the tasks are sorted by priority before rendering. This is done by creating an order of priority (`High` > `Medium` > `Low`) and comparing tasks accordingly.

   Here's the code that implements the sorting logic:

   ```javascript
   const sortedTasks = tasks.slice().sort((a, b) => {
     const priorityOrder = { high: 1, medium: 2, low: 3 };
     return priorityOrder[a.priority] - priorityOrder[b.priority];
   });
   ```

   The `priorityOrder` object is used to map priority values to a numeric scale (`high = 1`, `medium = 2`, `low = 3`), making it easy to sort tasks in ascending order. Tasks with higher priority appear first in the list.

3. **Rendering Sorted Tasks**:
   The sorted list of tasks is then rendered in the task list component, ensuring that tasks with the highest priority always appear at the top.

