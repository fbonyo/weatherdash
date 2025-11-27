## ✨ WeatherDash – Dashboard Page Documentation

### 1. ⚙️ Header and Global Controls

The header provides essential app context and global controls, remaining persistent across dashboard views.

* **Header Controls:** Features the page title, quick unit toggles  and a theme switch (light/dark mode icon).
* **Search and Status:** An integrated Search Bar for changing locations, a "Back to search" link, and a status area showing "Live Updates" and a notifications bell.

### 2. 🧭 Sidebar Navigation

The persistent sidebar serves as the application's main routing center, accessible via the collapsible layout.

* **Navigation Links:** Provides immediate access to core features: Dashboard, Weather Map, Favorites, Alerts, and Settings.
* **User Information:** Displays the active user profile (e.g., John Doe), visually confirming the active user session.

### 3. ☀️ Current Conditions Summary

The dashboard's central focus is a powerful visualization of the immediate weather situation for the selected location (e.g., San Francisco).

* **Primary Card:** A visually impactful display of the current temperature conditions (Partly Cloudy, Feels Like), and the precise time/date. Includes the **"Last updated" timestamp**.
* **Location:** Clearly identifies the current city and country (e.g., San Francisco, CA).

### 4. 💨 Detailed Current Metrics

This section provides critical, non-temperature-related weather data at a glance.

* **Wind Speed:** Speed (12 mph or 12 km/h) and direction (Northwest).
* **Humidity:** Percentage (65%) and a qualitative assessment (Normal).
* **Visibility:** Distance (10 km) and quality (Excellent).
* **Pressure:** Reading (1013 hPa) and trend (Steady).
* **Sun Times:** Precise Sunrise and Sunset times.

### 5. 🗓️ Forecasts and History

Widgets dedicated to short-term planning and user convenience.

* **Hourly Forecast:** A scrollable widget providing granular predictions for the "Next 8 hours," detailing temperature and probability of rain.
* **4-Day Forecast:** A concise vertical listing of the medium-term forecast, showing the day, weather icon, and corresponding Low/High temperatures.
* **Recent Searches:** Streamlines navigation by providing a clickable history of previously viewed cities.
* **Saved Locations:** Lists quick-access cards for cities marked as favorites, showing their current conditions and temperature.

### 6. 📉 Trend Analysis & Health

Advanced analytical tools for deeper insight into environmental data.

* **Temperature Trend Chart:** A 24-hour graph comparing actual Temperature versus "Feels Like" temperature fluctuations.
* **Air Quality Monitor:** Reports the current **AQI** (e.g., 42, rated "Good"), alongside a breakdown of **Main Pollutants** with concentrations and visual health indicators.

### 7. 🗺️ Interactive Weather Map

An embedded tool for advanced meteorological visualization.

* **Map Display:** Shows Radar & precipitation data with a **Precipitation Legend** .
* **Controls:** Includes icons for switching map layers and entering full-screen, along with bottom **Layer Toggles** (Temperature, Wind, Radar) for dynamic data selection.

### 8. 📜 Footer

The base of the page providing application context and attribution.

* **Attribution:** Contains copyright information and the technology stack ("Made with React").
* **Data Source:** Transparently credits the external data provider ("Powered by OpenWeatherMap").
