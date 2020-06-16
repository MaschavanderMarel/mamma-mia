# Implementation Plan

To keep track of our implementation plan and how everything on it was going, we used a Trello Board. 

The below table summarised our deadlines for the group, and on every day on which we had a deadline we had a meeting at the end of the day to reflect on how the progress had gone as well as to set the work for the next deadline. 

| Group member |Wednesday|Friday|Monday|Tuesday|
|--|--|--|--|--|
| Johanna | HTML video-screen|Song selection screens|Update video-screen video, recording pop-up|Polish final details CSS, implementation reflection|
| Mascha | HTML first screen | Breakdown screen, notifications settings|JS returning to same position in video, JS to get to finished-dance screen, README|Submit assignment|
| Thea | Balsamiq mock-ups|General settings screen, account settings, sharing settings|Finished-dance screen, layout consistency settings|Presentation|

Our implementation plans for the individual screens and how they link together are the Balsamiq mock-ups. 

# Implementation changes

Whilst most of what we implemented was close to the Balsamiq mock-ups, there were a few points where we deviated from our original planning. 

The main changes are in the notification settings menu. Here the Balsamiq mock-ups have pop-up screens for the selection. We did not implement this as HTML already has direct support for selecting time. 

Another change we made was to wrap the song image as well as title in a border so that it was clear what is part of the button and what isn't. Next to that, we include the artist of the song as multiple songs by different artists can have the same name. 

In the song breakdown screen, we opted to make one video from a time-interval forward rather than break it down into several smaller videos from there. 

Lastly, we only implemented the front-end, with the back-end not existing. We hard-coded only one song to be able to danced to, as well as each streching time having the same video. The "recording" that is showed after you complete a work-out is also fixed, as no actual camera data is captured. The settings in the settings menu are completely clickable and you can interact with them, but they do not change any actual settings or data. 
