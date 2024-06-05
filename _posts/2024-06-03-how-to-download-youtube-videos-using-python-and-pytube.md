---
title: How to Download YouTube Videos Using Python and PyTube
layout: post
post-image: https://repository-images.githubusercontent.com/3757435/589b0580-62e8-11e9-82b3-ab4b3fe50e60
description: Guide to write a python script that downloads youtube videos and audio
tags:
- python
- pytube
- youtube
---

Welcome to my first blog post! Today, I'll guide you through creating a simple Python program to download YouTube videos using the pytube library. Whether you're a beginner or an experienced programmer, this tutorial will help you get started with PyTube.

### What is PyTube?
PyTube is a lightweight, Pythonic library for downloading YouTube videos. It's easy to use and can be installed quickly with pip.<br>

**Step 1: Install PyTube**<br>
First, ensure you have Python installed on your system. You can download it from python.org. Next, open your terminal or command prompt and install the pytube library using pip:

```python
pip install pytube 
```
<br>
**Step 2: Write the Download Script**<br>
Create a new Python file (e.g., download_video.py) and open it in your favorite code editor. We'll start by importing the necessary modules and defining a function to download the video.

```python
from pytube import YouTube

def download_video(url):
    try:
        yt = YouTube(url)
        stream = yt.streams.get_highest_resolution()
        stream.download()
        print(f"Downloaded: {yt.title}")
    except Exception as e:
        print(f"An error occurred: {e}")
```
<br>
**Step 3: Get the YouTube Video URL**<br>
Prompt the user to input the YouTube video URL. We'll use Python's built-in input function for this.<br>

**Step 4: Run the Script**<br>
Save the download_video.py file and run it from your terminal or command prompt:<br>

```python
python download_video.py
```
<br>
When prompted, paste the YouTube video URL and press Enter. The script will download the video to your current directory.<br>

### Full Code

Here's the complete code for the script:<br>

```python
from pytube import YouTube

def download_video(url):
    try:
        yt = YouTube(url)
        stream = yt.streams.get_highest_resolution()
        stream.download()
        print(f"Downloaded: {yt.title}")
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    url = input("Enter the YouTube video URL: ")
    download_video(url)
```
<br>
<br>

That's it! You've just created a Python program to download YouTube videos using the PyTube library. This script downloads the highest resolution available for the given video URL. You can expand this script by adding more features, such as downloading specific resolutions or handling multiple URLs.<br>

Thank you for following along with my first blog post. I hope you found it helpful. Stay tuned for more tutorials and tech tips! If you have any questions or run into issues, feel free to leave a comment below.<br>