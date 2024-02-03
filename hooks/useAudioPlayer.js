import { useState, useEffect } from 'react';
import { Audio } from 'expo-av';

function useAudioPlayer(audioAsset) {
    /* -------- STATES AND HOOKS -------- */
    const [sound, setSound] = useState(null);

    useEffect(() => {
        // Asynchronously load and prepare the audio file
        const initAudio = async () => {
            // Only create a new sound object if one does not already exist
            if (!sound) {
                const { sound: newSound } = await Audio.Sound.createAsync(audioAsset, { shouldPlay: false });
                setSound(newSound);
            }
        };

        initAudio();

        return () => {
            // Uncommenting this would make the audio unload after play
            // sound?.unloadAsync(); 
        };

        // Remove 'sound' from dependency array if 
        // you don't want to reload the audio for every sound change
    }, [audioAsset, sound]);

    /* -------- AUDIO CONTROLS -------- */
    const playAudio = async () => {
        if (sound) {
            const status = await sound.getStatusAsync();
            if (!status.isPlaying) {
                await sound.playAsync();
            }
        }
    };

    const pauseAudio = async () => {
        if (sound) {
            await sound.pauseAsync();
        }
    };

    const stopAudio = async () => {
        if (sound) {
            await sound.stopAsync();
        }
    };

    const playKeepLoad = async () => {
        if (sound) {
            await sound.stopAsync();
            await sound.setPositionAsync(0); // Rewind to the beginning
            await sound.playAsync();
        }
    };

    return { playAudio, pauseAudio, stopAudio, playKeepLoad };
};

export default useAudioPlayer;

/**
 * @module useAudioPlayer
 * Custom hook for managing audio playback using expo-av in a React component.
 * @param {string} audioAsset - The audio asset URI to be played.
 * @returns {Object} An object containing functions for controlling audio playback.
 */