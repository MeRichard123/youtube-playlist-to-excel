// set up env file 
require("dotenv").config()

// get necessary libraries
const { google } = require('googleapis');
const ExcelJs = require('exceljs')
const fs = require("fs")

// set up excel 
const workbook = new ExcelJs.Workbook()
workbook.creator= process.env.CREATOR
const worksheet = workbook.addWorksheet('My Playlist');

worksheet.columns = [
  { header: 'Title', key: 'title', width: 50,outlineLevel: 1 },
  { header: 'Url', key: 'url', width: 50,outlineLevel: 1 },
]

// Remove current spread sheet if it exists
const file = process.env.FILE_NAME;

fs.access(file, fs.constants.F_OK, (err) => {
    if (err) {
        console.log("File Doesn't Exists")
    } else {
        try {
            fs.unlinkSync(file)
            console.log("Removing File...")
        } catch (err) {
            console.log(err)
        }
    }
});



// function to get names and urls then write to excel
const getPlayListData = async () => {
    // Store the token from each request 
    let token = null
    // while there's a next keep looping  
    while (token !== undefined) {
        // call the youtube data api 
        try {
            const youtube = await google.youtube("v3").playlistItems.list({
                key: process.env.API_KEY,
                part: "snippet",
                playlistId: process.env.LIST_ID,
                maxResults: 50,
                pageToken: token
            })
            // Get the next token else undefined by default
            token = await youtube.data.nextPageToken;
            const videos = await youtube.data.items
            console.log("Writing Excel File")
            // write to excel 
            videos.forEach(video => {
                worksheet.addRow({
                    title: video.snippet.title,
                    url: `https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`
                    })
            })
            
        } catch (err) {
            console.error(err)
        }
    }
    workbook.xlsx.writeFile(file)
    console.log("Done")

}

getPlayListData()

