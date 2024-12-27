# Project Specification Document

## Project Name: Aibos Water Billing System

---

### 1. Overview

The **Aibos Water Billing System** is a web-based application designed to manage customer billing, payments, and records for a water utility. The project structure is organized into various components, each dedicated to a specific function, ensuring modularity and ease of maintenance.

---

### 2. Folder Structure and Descriptions

#### 2.1 Root Directory

- **.github**: GitHub configurations and workflow files for CI/CD.
- **node_modules**: Contains all the npm dependencies required by the project.
- **public**: Static files such as HTML files, icons, and images.

---

#### 2.2 `src` Directory

The main source folder, containing all the project's code, assets, and configurations.

---

##### 2.2.1 `api`

- **ApiBaseHelper.ts**: A helper file for setting up the base configurations for API requests.
- **CustomerAPI.ts**: Handles API calls related to customer information.
- **CustomerHistoryAPI.ts**: Manages the API calls related to customer billing history.
- **EmailAPI.ts**: Sends emails for notifications and billing statements.
- **ExportDataAPI.ts**: Exports customer data and other information as required.
- **FeeAdjustmentAPI.ts**: API for handling adjustments to customer fees.
- **LocalGovernmentAPI.ts**: Manages API calls related to local government data for the system.
- **LoginAPI.ts**: Handles user authentication and login requests.
- **nonPaymentAPI.ts**: Deals with APIs for managing non-payment records.
- **SMSAPI.ts**: Manages SMS notifications to customers.

---

##### 2.2.2 `assets`

- **logo.png**: The application’s logo.
- **no_results.webp**: Image shown when no results are found.

---

##### 2.2.3 `components`

This folder contains reusable UI components, organized by feature.

- **customer**
  - **CustomerTable.tsx**: Table component displaying customer data.
  - **Filter.tsx**: Filter component for filtering customer records.
  - **NewTabs.tsx**: Tab component for navigating customer information.
- **customerdetails**
  - **Billing.tsx**: Component for customer billing details.
  - **Details.tsx**: Shows specific customer details.
  - **History.tsx**: Displays customer billing history.
  - **MonthlyReading.tsx**: Component for displaying current monthly water readings.
  - **Receipt.tsx**: Shows customer receipts.
  - **Tabs.tsx**: Tabs for navigating customer detail sections.

---

##### 2.2.4 `data`

- **dummyDataForFeeAdjustment.tsx**: Contains mock data for fee adjustments.
- **nonPaymentFilter.tsx**: Filter component for non-payment records.

---

##### 2.2.5 `forms`

- **AddLocalGovernmentForm.tsx**: Form for adding local government information.
- **FeeAdjustmentForm.tsx**: Form for adjusting local government fees.

---

##### 2.2.6 `layouts`

- **Customerdetails.tsx**: Layout component for displaying detailed customer information.
- **MainLayout.tsx**: The primary layout for the application’s main pages.

---

##### 2.2.7 `modals`

- **SendNoticeModal.tsx**: Modal for sending notices to customers.

---

##### 2.2.8 `pdf`

- **htmlpdf.tsx**: Converts HTML documents to PDF for invoicing and receipts.

---

##### 2.2.9 `security`

- **ProtectedRoute.tsx**: Component to protect certain routes based on user authentication.

---

##### 2.2.10 `sidebar`

- **Sidebar.tsx**: Sidebar navigation for the application.

---

##### 2.2.11 `tables`

- **FeeAdjustmentTable.tsx**: Table for displaying fee adjustments.
- **LocalGovernmentTable.tsx**: Table for local government records.
- **NonPaymentTable.tsx**: Table for non-payment records.

---

##### 2.2.12 `topbar`

- **TopBar.tsx**: Top navigation bar for the application.

---

##### 2.2.13 `constants`

- **AppConstant.ts**: Stores constants used throughout the application.

---

##### 2.2.14 `customHooks`

- **HandleRefresh.ts**: Custom hook for handling data refresh logic.

---

##### 2.2.15 `features`

Handles Redux slices for different features.

- **CustomerHistorySlice.ts**: Manages state related to customer billing history.
- **CustomerSlice.ts**: Manages state related to customer data.
- **ExportDataSlice.ts**: Manages state for data export functionality.
- **FeeAdjustmentSlice.ts**: Manages state for fee adjustments.
- **LocalGovernmentHistorySlice.ts**: Manages state for local government records.
- **LoginSlice.ts**: Manages user login and authentication state.
- **NonPaymentSlice.ts**: Manages non-payment related state.
- **SMS_Slice.ts**: Manages state for SMS notifications.

---

##### 2.2.16 `pages`

Contains pages accessible within the application.

- **AdjustFeePage.tsx**: Page for adjusting fees.
- **CustomerDetailsPage.tsx**: Displays detailed customer information.
- **CustomersPage.tsx**: Lists all customers in the system.
- **Empty.tsx**: Placeholder page for unassigned sections.
- **FeeAdjustmentHistoryPage.tsx**: Shows fee adjustment history.
- **Loading.tsx**: Loading indicator page.
- **LocalGovernmentPage.tsx**: Page for local government details.
- **LoginPage.tsx**: User login page.
- **NonPaymentPage.tsx**: Displays records of non-payments.

---

##### 2.2.17 `store`

- **Store.ts**: Configures the Redux store for the application.

---

##### 2.2.18 `types`

- **EmailData.ts**: Type definitions for email-related data.
- **FeeAdjustment.ts**: Type definitions for fee adjustment data.
- **Invoice.ts**: Type definitions for invoice data.
- **LocalGovernment.ts**: Type definitions for local government records.
- **nonPayment.ts**: Type definitions for non-payment data.

---

##### 2.2.19 `utils`

- **debounce.ts**: Utility for debouncing functions.
- **html2pdf.d.ts**: Type definitions for the HTML-to-PDF utility.

---

#### 2.3 Other Files

- **App.css**: Global styles for the application.
- **App.tsx**: Main component of the application.
- **index.css**: Additional styling for the application.
- **main.tsx**: Entry point for the React application.
- **vite-env.d.ts**: Vite environment type definitions.
- **Dockerfile**: Docker configuration for containerizing the application.
- **eslint.config.js**: ESLint configuration for maintaining code quality.

---

### 3. API Structure

The APIs are organized under the `src/api` folder. Each API file handles a specific part of the application (e.g., Customer API, Fee Adjustment API, SMS API). These APIs interact with the backend server to manage and retrieve data.

### 4. Components Overview

The `src/components` directory includes various reusable components grouped into sub-folders based on the feature they serve (e.g., `customer`, `customerdetails`). These components follow modular design principles for easy integration and maintenance.

### 5. Pages

Each page component in the `src/pages` directory represents a route within the application, ensuring that the application is navigable and organized by functionality.

### 6. State Management

Redux is used for state management, and slices are created for each feature, organized under `src/features`. This enables centralized state management for customer data, fee adjustments, login, and more.

### 7. Utility Functions

Utility functions are stored in `src/utils`, which contain helper functions like `debounce` for optimizing performance, particularly in event handling.

---

### 8. Security

The application has security measures, such as `ProtectedRoute`, to restrict access to certain routes based on user authentication.

---

### 9. Styling

The application styling is divided into two main files, `App.css` and `index.css`. It follows a modular approach, with each component having its own styles when necessary.

### 10. Deployment

- **Dockerfile**: Used to create a Docker container for the application, ensuring consistent deployment across different environments.

---

### 11. Code Quality

- **eslint.config.js**: Linting configuration to maintain code quality and enforce consistent coding standards.



