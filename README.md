# 🚗 Uber Clone

A simplified Uber clone built with React and Vite, featuring real-time location tracking and ride booking functionality.

## ✨ Features

- **User Authentication**
  - Login/Signup functionality
  - User profile management
  - Session management

- **Ride Booking**
  - Set pickup location
  - Set destination
  - Fare calculation based on distance

- **Real-time Tracking**
  - Live location tracking using Google Maps API
  - Driver's current location

- **Payment System**
  - Cash payment option only
  - Fare calculation

## 🛠️ Tech Stack

- **Frontend:**
  - React.js
  - Vite
  - Tailwind CSS
  - React Router
  - @react-google-maps/api

- **Location Services:**
  - Google Maps API
  - Geolocation API

## 📦 Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/aryan091/uber-clone.git
    cd uber-clone
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add your Google Maps API key:
    ```env
    VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
    ```

4. Start the development server:
    ```bash
    npm run dev
    ```

5. Open your browser and navigate to `http://localhost:3000`.

## 📁 Project Structure
uber-clone/ ├── public/ ├── src/ │ ├── assets/ │ │ ├── Car.jpg │ │ ├── Moto.jpg │ │ └── Auto.jpg │ ├── components/ │ │ ├── LiveTracking.jsx │ │ ├── WaitingforDriver.jsx │ │ └── [other components] │ ├── constants.js │ ├── App.jsx │ ├── index.jsx │ └── [other files] ├── .env ├── package.json └── README.md



## 🚀 Usage

1. **Sign Up / Log In**: Create an account or log in with your existing account.
2. **Book a Ride**: Enter your pickup and drop-off locations to book a ride.
3. **Track Your Ride**: View the driver's location in real-time on the map.
4. **Pay for the Ride**: Pay the fare using cash.
5. **View Ride History**: Check the history of your past rides.


## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## 📄 License

This project is licensed under the MIT License.

---

*Note: Replace `yourusername` and `your_google_maps_api_key` with your actual GitHub username and Google Maps API key, respectively.*
