mmodule.exports = {
    devServer: {
        open: true,
        hot: true,
        hotOnly: true,
        proxy: {
            '/api': 'http://23.237.34.178',
        },
    },
}
