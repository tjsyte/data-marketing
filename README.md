# Marketing Dashboard

A React-based marketing dashboard with features including a table for managing product data, charts for visualizing sales performance, and review cards for customer feedback. The project uses React Router for navigation and includes animations using `animate.css`.

## Features

- **Welcome Message**: Animated welcome section with a greeting and a brief description of the dashboard's purpose.
- **Product Table**: A searchable and paginated table for managing product data (ID, name, price, sales).
- **Charts**: Visualization of product sales data in bar, pie, and line chart formats.
- **Product Reviews**: Display of 8 review cards with sample product reviews, images, and ratings.
- **Data Persistence**: Product data is stored in `localStorage` for persistence across sessions.
- **Modal**: A modal popup for adding and editing products.

## Tech Stack

- **React**: JavaScript library for building user interfaces.
- **React Router**: For handling routing within the app.
- **Chart.js**: For rendering the bar, pie, and line charts.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Animate.css**: CSS library for animations.

## Components

### 1. `App.js`

This is the main component that sets up the routes and passes data to child components.

- **State Management**: The product data is managed in the state and stored in `localStorage`.
- **Router**: `React Router` is used to switch between different views (Table, Charts, Welcome Message).

### 2. `Table.js`

Handles the display and management of product data.

- **Pagination**: Displays 5 items per page.
- **Search**: Users can search for products by name.
- **Edit/Delete**: Buttons for editing and deleting products.

### 3. `Charts.js`

Renders the sales data in three different charts using `Chart.js`:

- **Bar Chart**: Comparison of sales by product.
- **Pie Chart**: Distribution of sales across products.
- **Line Chart**: Trend of sales over time.

### 4. `ReviewCard.js`

Displays individual product reviews with:

- **Product name**
- **Review content**
- **Rating (1-5 stars)**
- **Product image**

### 5. `WelcomeMessage.js`

Displays an animated welcome message and renders the grid of product reviews.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/tjsyte/data-marketing.git

2. Navigate to the project directory:
   ```bash
   cd marketing-dashboard

3. Install dependencies:
   ```bash
   npm install

4. Start the development server:
   ```bash
   npm start
