# DJ Condescension Backend - API

This repository contains the backend services for **DJ Condescension**, providing the necessary API endpoint for Eleven Labs.
It is a very simple backend, but necessary for one of the core functionalities of the app.

## Features
- **Eleven Labs REST API**: Gets Eleven Labs audio and sends the binary back to the client

## Getting Started

These instructions will help you get the backend up and running on your local machine for development and testing purposes.

### Prerequisites
- Node.js (v16+)
- npm (v7+) or Yarn
- Eleven Labs API key

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-github-profile/dj-condescension-backend.git
   ```

2. Navigate to the project directory:
   ```bash
   cd dj-condescension-backend
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory to store your environment variables. Include the following:
   ```env
   ELEVEN_LABS_API_KEY=your_eleven_labs_api_key
   ELEVEN_LABS_VOICE_ID=your_eleven_labs_voice_id
   ELEVEN_LABS_URI = endpoint_for_eleven_labs_text_to_speech
   ```

### Running the Server
To start the backend server:
```bash
npm run start
```
The server will be available at `http://localhost:3000`.

### API Endpoints
- **`POST /generateTTS`**: Generate text-to-speech for DJ commentary.

### Directory Structure
- **./**: Only includes the server.js file. 

## Key Technologies
- **Node.js**: JavaScript runtime for the backend.
- **Express**: Web framework for creating RESTful APIs.

## Contributing
We welcome contributions! Please create a new branch for your feature or bug fix, and submit a pull request.

### Development Guidelines
- Follow [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript).
- Write unit tests for new features and services.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments
- **Eleven Labs** for providing the API and resources.

## Contact
If you have any questions or suggestions, please feel free to open an issue or reach out to me on [GitHub](https://github.com/tjaung).
