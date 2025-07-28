# 🚀 React Admin Dashboard

<p align="center">
  <img src="https://img.shields.io/badge/React-18-blue?logo=react" alt="React 18"/>
  <img src="https://img.shields.io/badge/Syncfusion-Licensed-orange" alt="Syncfusion"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-Latest-38B2AC?logo=tailwind-css" alt="Tailwind CSS"/>
  <img src="https://img.shields.io/badge/License-MIT-green" alt="License"/>
</p>

<p align="center">
 <a href="https://shopify021.netlify.app/">Dashboard Preview<a/>
</p>

> A modern, fully responsive admin dashboard application built with React, featuring light/dark mode, multiple charts, data tables, kanban board, rich text editor and more!

## ✨ Features

| 📊 Data Visualization | 🛠️ Applications | 🧩 Pages |
| --- | --- | --- |
| Line Charts | Kanban Board | Orders |
| Area Charts | Rich Text Editor | Employees |
| Bar Charts | Calendar | Customers |
| Pie Charts | Color Picker | eCommerce |
| Financial Charts |  |  |
| Color Mapping |  |  |
| Pyramid Charts |  |  |
| Stacked Charts |  |  |

- 🌓 **Enhanced Theme System**: Refined dark mode implementation with HTML class-based toggling
- 🎛️ **Theme Settings Panel**: New dedicated ThemeSideBar component for theme customization
- 📱 **Responsive Layout**: Improved responsive design with dynamic sidebar handling
- 🎨 **Color Theming**: Dynamic color application throughout the UI
- 🔍 **Search Functionality**: Quickly find what you need
- 📈 **Real-time Data**: Simulated real-time data updates

## 🖥️ Recent Updates

- **Dark Mode Enhancement**: Improved dark mode implementation that now applies classes directly to the HTML element
- **Theme Settings**: Added a floating settings button that toggles a comprehensive theme settings sidebar
- **Layout Improvements**: Better responsive handling with conditional sidebar display
- **UI Consistency**: Ensured consistent styling between light and dark themes



## 🛠️ Technologies Used

- **React** - Frontend library
- **React Router** - Navigation
- **Tailwind CSS** - Styling with dark mode support
- **React Icons** - Icon library
- **MUI Components** - For tooltips and UI enhancements
- **Context API** - State management for theme and layout preferences

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14.x or later)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/dashboard.git
cd Dashboard
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Charts/           # Chart components
│   ├── Header/           # Header components
│   └── Sidebar/          # Sidebar navigation
├── contexts/             # React context providers
│   └── ContextProvider.jsx  # Main context provider
├── data/                 # Mock data and constants
│   └── dummy.jsx         # Sample data for charts, tables, etc.
├── pages/                # Application pages
│   ├── Calendar.jsx      # Calendar page
│   ├── Charts/           # Various chart pages
│   ├── ColorPicker.jsx   # Color picker page
│   ├── Dashboard.jsx     # Main dashboard
│   ├── Editor.jsx        # Rich text editor
│   ├── Employees.jsx     # Employees data page
│   ├── Kanban.jsx        # Kanban board
│   └── Orders.jsx        # Orders data page
├── App.jsx               # Main application component
└── main.jsx              # Entry point for the application
```

## 📸 Screenshots

<div align="center">
  <p>Dashboard - Light Mode</p>
  <img src="./screenshots/dashboard-light.png" alt="Dashboard Light Mode" width="80%"/>
  
  <p>Dashboard - Dark Mode</p>
  <img src="./screenshots/dashboard-dark.png" alt="Dashboard Dark Mode" width="80%"/>
  
  <p>Kanban Board</p>
  <img src="./screenshots/kanban.png" alt="Kanban Board" width="80%"/>
</div>

> Note: Replace the screenshot placeholders with actual screenshots of your application.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/dashboard/issues).

## 📝 License

This project is [MIT](./LICENSE) licensed.

## 👨‍💻 Author

**Your Name**

- GitHub: [@ankit0318](https://github.com/ankit0318)
- LinkedIn: [Ankit Sharma](https://linkedin.com/in/yourprofile)

---


