const baseUrl = process.env.TMDB_BASE_URL
const key = process.env.TMDB_KEY

// Quản lí method curl, đường dẫn trả ra
const getUrl = (endpoint, params) => {
    const qs = new URLSearchParams(params)

    return `${baseUrl}${endpoint}?api_key=${key}&${qs}`
}

export default { getUrl }