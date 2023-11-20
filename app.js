const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const fs = require('fs');
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Static server for static files
app.use(express.static('public'));

// Socket.io connection
io.on('connection', (socket) => {
  console.log('Logged in user');

  // Publishing initial board status to the client
  socket.emit('init', getBoardState());

  // Handling drawing events from the client
  socket.on('draw', (data) => {
    updateBoardState(data);
    io.emit('draw', data);
  });

  // Handle cleaning the board
  socket.on('clear', () => {
    clearBoardState();
    io.emit('clear');
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

// board state
let boardState = {};

// File path for storing the board state
const boardStateFilePath = 'boardState.json';

// Load the board state from file
function loadBoardState() {
  try {
    const data = fs.readFileSync(boardStateFilePath, 'utf8');
    boardState = JSON.parse(data);
  } catch (err) {
    console.error('Error loading board state:', err);
  }
}

// Save the board state to file
function saveBoardState() {
  try {
    const data = JSON.stringify(boardState);
    fs.writeFileSync(boardStateFilePath, data, 'utf8');
  } catch (err) {
    console.error('Error saving board state:', err);
  }
}

// Gets the current board state
function getBoardState() {
  return boardState;
}

// Updates the board state with the new drawing data
function updateBoardState(data) {
  boardState[data.id] = data;
  saveBoardState(); // Save the board state after each update
}

// Clears the state of the board
function clearBoardState() {
  boardState = {}; // Clear the board state in memory
  saveBoardState(); // Save the empty board state
}

// Load the board state when the server starts
loadBoardState();

// starts the server
const port = 3000;
server.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}`);
});

