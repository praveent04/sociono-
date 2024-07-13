
# Sociono-: A Social Media Post Generator Bot

## Overview

Sociono- is a versatile Telegram bot designed to generate social media posts for various platforms, including Instagram, LinkedIn, and Twitter. It allows users to input prompts throughout the day and, upon command, generates three distinct posts tailored for each social media platform. This bot leverages the OpenAI API for content generation, Telegraf API for Telegram bot functionality, and MongoDB for data storage.

########################## Not published on telegram yet will do it soon ####################################

## Features

- **Prompt Collection:** Users can input prompts at any time of the day.
- **Post Generation:** Generates three unique posts for Instagram, LinkedIn, and Twitter based on the provided prompts.
- **OpenAI Integration:** Utilizes OpenAI's API to generate creative and engaging content.
- **Telegraf API:** Manages Telegram bot interactions.
- **MongoDB Storage:** Stores user prompts and other relevant data securely.

## Installation

### Prerequisites

- Node.js
- MongoDB
- A Telegram bot token (you can create one using BotFather on Telegram)
- OpenAI API key

### Steps

1. **Clone the repository:**

   ```sh
   git clone https://github.com/praveent04/sociono-.git
   cd sociono-
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory of the project and add your credentials:

   ```env
   TELEGRAM_BOT_TOKEN=your_telegram_bot_token
   OPENAI_API_KEY=your_openai_api_key
   MONGO_URI=your_mongodb_connection_string
   ```

4. **Start the bot:**

   ```sh
   npm start
   ```

## Usage

1. **Start the bot on Telegram:**
   - Find your bot on Telegram using its username and start a conversation.

2. **Input prompts:**
   - Send any text prompts throughout the day. The bot will store these prompts in the database.

3. **Generate posts:**
   - When ready, use the command `/generate` to instruct the bot to generate social media posts.
   - The bot will create and return three posts suitable for Instagram, LinkedIn, and Twitter.

## Technologies Used

- **Node.js:** JavaScript runtime environment.
- **Telegraf API:** Framework for Telegram bot development.
- **OpenAI API:** Provides AI models for text generation.
- **MongoDB:** NoSQL database for storing prompts and user data.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## Author

**Praveen Tiwari**
# feel free to customize it and update it 
