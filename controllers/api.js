const path=require('path');

exports.jquery = (req, res) => {
    const version = req.path.match(/jquery\/(\d+\.\d+\.\d+)\/jquery.min.js/)[1];
    var file = path.resolve(__dirname,`../cdn/jquery-${version}.min.js`);
    res.download(file);
};