# E-Commerce Product Page


This is a simple e-commerce product page built upsing **React**, **JavaScript**, **HTML**, and **CSS**. It provides a learning opportunity for developers by intentionally introducing bugs and challenges that need to be fixed to create a fully functioning product page.

## Table of Contents
1. [Project Overview](#project-overview)
2. [Setup Instructions](#setup-instructions)
3. [Project Structure](#project-structure)
4. [Contributing Guidelines](#contributing-guidelines)
5. [License](#license)

---

## Project Overview

This project simulates an e-commerce product page where users can:
- View products with details like name, price, and image.
- Add items to thier shopping cart.
- Update the quantity of items in the cart.
  
However, the project contains **intentional bugs** that provide a good learning opportunity for new developers. Debugging these will hlep you improve your problem-solving, DOM manipulation, and responsive desgn skills.

---

## Setup Instructions

### Prerequisites:
- Node.js and npm installed. If you don't have them, download and install [Node.js](https://nodejs.org/).

### Steps:
1. Fork [this](https://github.com/cn10xdev/ECommerce_Product_Page) repository.

2. Clone the forked repository:
    ```bash
    git clone https://github.com/<your-username>/ecommerce-product-page.git
    ```

3. Navigate to the project directory:
    ```bash
    cd ecommerce-product-page
    ```

4. Create a new branch:
    ```bash
    git checkout -b <your_branch_name>
    ```

5. Install the required dependencies:
    ```bash
    npm install
    ```

6. Start the development server:
    ```bash
    npm start
    ```
    This will run the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

7. Make changes.

9. Stage your changes and commit:
    ```bash
    git add .
    git commit -m "<your_commit_message>"
    ```

10. Push your local commits to the remote repo:
    ```bash
    git push -u origin <your_branch_name>
    ```

11. Create a `Pull-Request` to develop!

---

## Project Structure

```plaintext
ecommerce-product-page/
│
├── public/
│   ├── index.html          # HTML template for the app
│
├── src/
│   ├── components/
│   │   ├── ProductCard.js   # Component for displaying a single product
│   │   ├── Cart.js          # Component for displaying the shopping cart
│   │
│   ├── App.js               # Main app component
│   ├── index.js             # Entry piont for the app
│   ├── styles.css           # Styling for the components
│
├── package.json             # Project configuration and dependencies
└── README.md                # Documentation for the project

```
---

## Contributing Guidelines

Kindly follow [CONTRIBUTING.md](https://github.com/cn10xdev/ECommerce_Product_Page/blob/main/CONTRIBUTING.md) for contributing to the repo.

## License

This project is licensed under the MIT License. You are free to use, modify, and distribute this code.

---
