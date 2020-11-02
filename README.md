# Youtube playlist to Excel

Back up your youtube playlist by saving all the titles and urls into a nice excel file

(assuming you have node installed)

## Usage Instructions

1. Clone the Repo
2. Run `npm install` to install dependencies
3. Create a `.env` file:

```
   API_KEY = youtube-data-api-key
   CREATOR = your name
```

## Obtaining an API key

To obtain a Youtube api key visit:
https://console.developers.google.com/

- Here create a new project and select youtube
- Then after following the project creation steps copy the api key and add it to the ENV file

## Finishing up

Now you are done with setup simply run the file with
`npm run create`

Upon running you will be prompted to enter the name of the Excel File you want to save
and the ID of the playlist you are scraping.
NOTE: the url will look a little like this: www.youtube.com/playlist?list={list id}
