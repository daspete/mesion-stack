export default (req, res, next) => {
    if(req.originalUrl.startsWith('/_nuxt/') || req.originalUrl.startsWith('/_loading/')) return next()
    
    console.log(`[${ new Date().toLocaleString('de-DE') }] ${ req.originalUrl }`)

    next()
}