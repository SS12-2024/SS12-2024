

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
* Constant movement
* Random obstacles
* Color/sound based obstacles (associated with input)
* Vibration (loss)
* Leaderboard
* Announcments
* Gets harder

## Requirements 

* Game for either desktop/android/iOS ​
* Using and integrating with OS level a11y APIs ​
* Way to save progress at any given point ​
* Leaderboards ​
* Multiple levels and difficulties ​
* Auditory cues attached to decisions/moves/options selected ​
* Follow ADA compliance ​

## What APIs do we need?

* Speech Recognition
* Vibration API
* Text to Speech
* Accelerators and Gyroscopes
* Speakers
* Ally

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
6. [Accessibility (Ally)](https://docs.expo.dev/versions/latest/sdk/accessibility/): Ensure compliance with accessibility standards.

## Getting Started
1. Clone the repository.
2. Install dependencies with `npm install`.
3. Follow Expo documentation for [setting up the project](https://docs.expo.dev/).
4. Integrate the mentioned APIs following Expo documentation.
5. Run the project using `expo start`.
