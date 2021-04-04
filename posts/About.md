# About

The Songwriter Graph is a personal project of mine with the idea of better connecting music listeners with the people who write their favorite music. 

TK - Something about how underappreciated they are

Songwriter's are profiled using Spotify's API, and represented ...effectively, it shows us how similar / different songwriters write from one another.

## Architecture

The graph is constructed out of a universe of songs, all co-located around each other based on how they sound. Each songwriter is represented by all of the songs we're able to match to them. 

- ILLUSTRATION OF SONG UNIVERSE WITH HIGHLIGHTS OF 10 SONGS

Songs that are written by multiple writers are represented once for every co-writer. So, a song written by 5 people is represented 5 times on the graph. Of course, those points would all be in the same location, but we normalize every songwriter's catalog of songs, to try and capture their uniqueness. 

- ILLUSTRATIONS IN A CAROUSEL?
  - DOT BEING SPLIT INTO MULTIPLE DOTS
  - DOTS ON TOP OF ONE ANOTHER
  - NORMALIZATION (DOTS MOVING INWARD IN GRAPH?)

Then, we use an Approximate Nearest Neighbors model to roughly calculate the distance between each song. After, we leverage the model to identify the writers who are most closely related to one another, by counting how frequently other writers appear next to them.

- ILLUSTRATION OF A FEW DIFFERENT WRITERS AS NEIGHBORS TO ANOTHER

Each songwriter page lists their 5 most frequent sonic neighbors, along with a few high-level stats about their writing style.

- IMAGE OF WRITER PAGE

## Size & Scope

The nearest neighbors model is built from over 100k tracks pulled from Spotify's API, which has then been matched against song registrations from one of the major US Performing Right Societies (i.e., ASCAP, BMI, SESAC)

These songs are spread across over 10,000 songwriter entities. Unfortunately, due to differences in writer names in individual song registrations (or use of pseudonyms), there are duplicate songwriter records. I hope this can get cleaned up with time.

## Who might find this useful?

- Songwriters/Publishers looking for people to write with
- Fans looking to discover new songwriters
- People who love looking at lists

## FAQ

### Why Approximate Nearest Neighbors and not Brute Force?

TK

## What's Next

¯\\_(ツ)_/¯