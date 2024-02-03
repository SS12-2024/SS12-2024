

# Team One: CSUN Hackathon Project

## Geometry Dash - Accessible Edition

## Overview
This project aims to create an accessible version of the popular game "Geometry Dash" with enhanced accessibility features using voice input, audio feedback, and vibrations.

## Inputs
- **Voice:** Players can use voice commands for interacting with the game.

## Outputs
- **Audio:** Auditory cues and feedback for in-game events.
- **Vibrations:** Haptic feedback to enhance the gaming experience.

## Project Components
1. **Constant Movement:** Player character moves continuously.
2. **Random Obstacles:** Dynamic placement of obstacles for increased challenge.
3. **Color/Sound-Based Obstacles:** Obstacles associated with input, providing a multi-sensory experience.
4. **Vibration (Loss):** Haptic feedback on collision or loss.
5. **Leaderboard:** Track and display high scores.
6. **Announcements:** Audio announcements for important game events.
7. **Progressive Difficulty:** Game difficulty increases as the player progresses.

## Requirements
- Game compatible with desktop/android/iOS platforms.
- Integration with OS-level accessibility APIs.
- Save progress at any point.
- Leaderboards to track high scores.
- Multiple levels with varying difficulties.
- Auditory cues linked to in-game decisions.
- Compliance with ADA standards.

## APIs Used
1. [Speech Recognition](https://docs.expo.dev/versions/latest/sdk/speech/): Convert voice input to game commands.
2. [Vibration API](https://docs.expo.dev/versions/latest/sdk/vibration/): Provide haptic feedback during gameplay.
3. [Text to Speech](https://docs.expo.dev/versions/latest/sdk/speech/): Convert text announcements to speech.
4. [Accelerometer and Gyroscope](https://docs.expo.dev/versions/latest/sdk/accelerometer/): Utilize device motion for interactive gameplay.
5. [Speakers](https://docs.expo.dev/versions/latest/sdk/audio/): Output audio cues and announcements.
6. [Gesture Handler API](https://docs.expo.dev/versions/latest/sdk/gesture-handler/): Enhance interactive gameplay with advanced gesture recognition capabilities.


## Game Engine
The project utilizes the [React Native Game Engine](https://github.com/bberak/react-native-game-engine) for game development.

## Getting Started
1. Clone the repository.
2. Install dependencies with `npm install`.
3. Follow Expo documentation for [setting up the project](https://docs.expo.dev/).
4. Integrate the mentioned APIs following Expo documentation.
5. Run the project using `expo start`.

Feel free to explore each API documentation for detailed integration instructions and examples.

Happy hacking! 🚀✨

Certainly! Here's the added line for the Gesture Handler API in your README: