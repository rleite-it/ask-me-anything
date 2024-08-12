# AskMeAnything Application

![React](https://img.shields.io/badge/React-v19-61DAFB?logo=react)
![Go](https://img.shields.io/badge/Go-1.19-blue?logo=go)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-13-blue?logo=postgresql)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-2.2-06B6D4?logo=tailwindcss)
![Docker](https://img.shields.io/badge/Docker-20.10.7-blue?logo=docker)

## 🚀 Concept

**AskMeAnything** is a real-time Q&A application where users can create rooms, ask questions, and upvote others' questions. All interactions are synchronized in real-time across all connected users through WebSocket connections.

### Key Features:
- **Room Creation:** Generate a unique room with a UUID.
- **Native Sharing:** Share the room URL via the native share API or clipboard.
- **Question Management:** Add questions and upvote them; questions are ordered by upvotes.
- **Real-Time Updates:** WebSocket-powered live updates across all user sessions.

## 🛠️ Backend

- **Language:** Go
- **Database:** PostgreSQL
- **Monitoring:** pgAdmin
- **Containerization:** Docker

## 🌐 Frontend

- **Framework:** React (v19)
- **State Management:** React Query
- **Styling:** TailwindCSS

## 📝 Setup Instructions

Follow these steps to run the application locally:

### 1. Clone the Repository

```bash
git clone https://github.com/rleite-it/ask-me-anything.git
cd ask-me-anything
```
### 2. Backend Setup

1. Navigate to the server folder:
    ```bash
    cd server
    ```
2. Create a `.env` file and configure your environment variables needed for the database connection. Use the file `internal/store/pgstore/migrations/tern.conf` as a reference for the variable names.
3. Start the backend services using Docker:
    ```bash
    docker compose start
    ```
4. Run the Go application:
    ```bash
    go run cmd/ws/main.go
    ```
### 3. Frontend Setup

1. Navigate to the client folder:
    ```bash
    cd ../client
    ```
2. Install the dependencies (since React v19 is in beta, force the installation):
    ```bash
    npm install -f
    ```
3. Start the development server:
    ```bash
    npm run dev
    ```

### 4. Access the Application

Once both the backend and frontend are up and running, you can access the application by navigating to the provided local URL (typically `http://localhost:5173`).

## 📜 License

This project is licensed under the MIT License. You are free to use, modify, and distribute this software for both personal and commercial purposes.

See the [LICENSE](LICENSE) file for more details.

