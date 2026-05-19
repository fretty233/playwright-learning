# Playwright Automation Testing Project

This project contains automation test scripts built using Playwright with JavaScript.

## Project Overview

The purpose of this project is to practice web UI automation and API testing using Playwright.

Test scenarios include:
- Login
- Logout
- Add to cart
- Checkout
- API testing

## Tech Stack

- Playwright
- JavaScript
- Node.js
- VS Code

## Project Structure

```bash
playwright-learning/
├── tests/
├── pages/
├── utils/
├── fixtures/
├── playwright.config.js
├── package.json
```

## Installation

Clone repository:

```bash
git clone https://github.com/fretty233/playwright-learning.git
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

## Run Test

Run all tests:

```bash
npx playwright test
```

Run single test:

```bash
npx playwright test -g "login valid"
```

Open report:

```bash
npx playwright show-report
```

## Test Cases

### UI Automation
- Valid login
- Invalid login
- Logout
- Add product to cart
- Remove product
- Checkout product

### API Automation
- GET API
- POST API
- PUT API
- DELETE API

## Learning Purpose

This repository is created for learning QA automation testing and building portfolio for automation engineer role.

## Author
_Fretty_
