# About

The Songwriter Graph is a personal project of mine with the idea of better connecting music listeners with the people who write their favorite music. 

I love browsing Spotify and checking out the song credits when I run into a song I'm digging. It's fun to see if I can start to recognize songwriters I hadn't heard of before, and checkout other things that they've written. The graph is built with that in mind.

## Architecture

The graph is constructed out of a universe of songs, all co-located around each other based on how they sound. Each songwriter is represented by all of the songs we're able to match to them. 

Songs that are written by multiple writers are represented once for every co-writer. So, a song written by 5 people is represented 5 times on the graph. Normally, those points would all be in the same location, but every songwriter's catalog of songs is normalized to try and retain some kind of uniqueness.

Then, we use an Approximate Nearest Neighbors model to roughly calculate the distance between each song. After, we leverage the model to identify the writers who are most closely related to one another, by counting how frequently other writers appear next to them.

Each songwriter page lists their 5 most frequent sonic neighbors, along with a few high-level stats about their writing style.

## Size & Scope

The nearest neighbors model is built from over 100k tracks pulled from Spotify's API, which has then been matched against song registrations from one of the major US Performing Right Societies (i.e., ASCAP, BMI, SESAC)

These songs are spread across over 10,000 songwriter records. Unfortunately, due to differences in writer names in individual song registrations (or use of pseudonyms), there are a bunch of duplicate songwriter records. I hope this can get cleaned up with time.

## Is it any good?

LOL, of course not 🙃. This is mostly a proof-of-concept right now. I think the newest set of songs within this dataset are from 2018. There's a number of issues on GitHub that we're tracking to shape the future of this project, including:

- Types of tracks to pull from spotify

- Better access to songwriter data

## Who might find this useful?


- Songwriters/Publishers looking for people to write with

- Fans looking to discover new songwriters

- People who love looking at lists

There's probably more use cases here. If you like it, or have thoughts about it, let me know! Pull requests are also welcome.
