from moviepy.editor import VideoFileClip, AudioFileClip, concatenate_videoclips
import os

# Get the desired video title
title = input("Enter a title: ")

video_file_name = "D:\\SVN_Repo\\NonSVN\\Becker_automation_final_steps\\downloads\\videos\\70a53e60.mp4"
audio_file_name = "D:\\SVN_Repo\\NonSVN\\Becker_automation_final_steps\\downloads\\audios\\9d23bf20.mp3"

# Open the video and audio
video_clip = VideoFileClip(video_file_name)
audio_clip = AudioFileClip(audio_file_name)

# Concatenate the video clip with the audio clip
final_clip = video_clip.set_audio(audio_clip)

# Export the final video with audio
final_clip.write_videofile(title + ".mp4")