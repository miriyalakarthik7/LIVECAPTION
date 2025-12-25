import sounddevice as sd
import whisper
from scipy.io.wavfile import write
import os

# Load Whisper model ONCE (important)
model = whisper.load_model("base")

def get_text():
    fs = 16000        # sample rate
    seconds = 5       # recording duration

    print("Speak now...")
    audio = sd.rec(int(seconds * fs), samplerate=fs, channels=1)
    sd.wait()

    # Save recorded audio to file
    filename = "temp.wav"
    write(filename, fs, audio)

    # Convert speech to text
    result = model.transcribe(filename)

    # Optional: delete temp file
    if os.path.exists(filename):
        os.remove(filename)

    return result["text"]

# For testing only
if __name__ == "__main__":
    text = get_text()
    print("Recognized Text:", text)
