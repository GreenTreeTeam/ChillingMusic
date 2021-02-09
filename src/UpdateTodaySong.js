/*!
 * ChillingMusic
 * https://github.com/GreenTreeTeam/ChillingMusic/
 * Licensed MIT © GreenTree Team
 */
const fs = require('fs');
const path = require('path');
const Song = require('./songs');

(async () => {
    const todaySongIDpath = path.join(__dirname, 'todaySongID.js')
    let SongID = require('./todaySongID');
    let NewSongID;

    async function GenSongID(){
        return new Promise(async (r) => {
            NewSongID = Math.floor(Math.random() * Song.length)
            if(NewSongID === SongID)return await GenSongID()
            else if(!Song[NewSongID])return await GenSongID()
            else r()
        })
    }

    await GenSongID()
    fs.writeFileSync(todaySongIDpath, `
/*!
 * ChillingMusic
 * https://github.com/GreenTreeTeam/ChillingMusic/
 * Licensed MIT © GreenTree Team
 */
module.exports = ${NewSongID}`)
})()