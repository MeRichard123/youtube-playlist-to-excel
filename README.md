# Youtube playlist to Excel

Back up your youtube playlist but saving all the titles and urls into a nice excel file

(assuming you have node installed)

## Usage Instructions

1. Clone the Repo
2. Run `npm install` to install dependencies
3. Create a `.env` file (NOTE we will add the api key later):
```   
   API_KEY = youtube-data-api-key
   LIST_ID = id-of-playlist
   CREATOR = your name
   FILE_NAME = name-of-file-you-want-to-save-to.xlsx
```
NOTE: the url will look a little like this: https://www.youtube.com/playlist?list={list id}
Grab the ID and add it in the ENV file

## Obtaining an API key

To obtain a Youtube api key visit:
https://console.developers.google.com/

- Here create a new project and select youtube
- Then after following the project creation steps copy the api key and add it to the ENV file

## Finishing up

Now you are done with setup simply run the file with
`npm run create`
