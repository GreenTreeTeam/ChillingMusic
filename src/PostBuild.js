/*!
 * ChillingMusic
 * https://github.com/GreenTreeTeam/ChillingMusic/
 * Licensed MIT © GreenTree Team
 */
const fs = require('fs');
const path = require('path');

(async () => {
    fs.readdir(path.join(__dirname, "..", "public"), (err, files) => {
        files.forEach(f => {
            fs.copyFile(path.join(__dirname, "..", "public", f), path.join(__dirname, "..", "dist", f), (err) => {
                if(err)console.error(err)
            })
        })
    })
})()