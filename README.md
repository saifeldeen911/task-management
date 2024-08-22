# Task Management App

## Description

This is a simple Task Management application built using React and Tailwind CSS. The app allows users to create, complete, and delete tasks with a scrollable task list to keep the input form in place. The application also features custom styles for the scrollbar.

## Features

- **Add new tasks**: Easily create and manage tasks.
- **Manage tasks**: Mark tasks as complete or delete them as needed.
- **Scrollable task list**: The task list is scrollable to keep the input form accessible.
- **Custom styled scrollbar**: A customized scrollbar for a better user experience.

## Prerequisites

Ensure you have the following installed:

- **Node.js**: Download from [Node.js official website](https://nodejs.org/).
- **npm**: Node Package Manager (comes with Node.js) or use `yarn`.

## Getting Started

### 1. Clone the Repository

Clone the project to your local machine:

```bash
git clone https://github.com/saifeldeen911/task-management.git
cd task-management
```

### 2. Install Dependencies

Install the required dependencies:

```bash
npm install
```

or

```bash
yarn install
```

### 3. Run the Application

Start the application:

```bash
npm start
```

or

```bash
yarn start
```

Visit `http://localhost:3000/` to see the app in action.

### 4. Build the Application

Create a production build:

```bash
npm run build
```

or

```bash
yarn build
```

## Custom Styling

### Scrollbar Styling

The scrollbar has been customized using CSS. Modify the styles in `App.css` to adjust:

```css
.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 10px;
}
```

## Contributing

Fork the repository and use a feature branch. Pull requests are welcome.

## Contact

If you have any questions, reach out to [saifeldeenkhalaf@gmail.com].

---
