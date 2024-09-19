require('dotenv').config()
const express = require('express')
const app = express()

const PORT = process.env.PORT

const githubData = {
  "login": "Adityasingh9958",
  "id": 105357367,
  "node_id": "U_kgDOBkegNw",
  "avatar_url": "https://avatars.githubusercontent.com/u/105357367?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Adityasingh9958",
  "html_url": "https://github.com/Adityasingh9958",
  "followers_url": "https://api.github.com/users/Adityasingh9958/followers",
  "following_url": "https://api.github.com/users/Adityasingh9958/following{/other_user}",
  "gists_url": "https://api.github.com/users/Adityasingh9958/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Adityasingh9958/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Adityasingh9958/subscriptions",
  "organizations_url": "https://api.github.com/users/Adityasingh9958/orgs",
  "repos_url": "https://api.github.com/users/Adityasingh9958/repos",
  "events_url": "https://api.github.com/users/Adityasingh9958/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Adityasingh9958/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Aditya Singh",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": "SinghAditya2511",
  "public_repos": 5,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2022-05-11T10:34:01Z",
  "updated_at": "2024-09-18T18:03:02Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req , res)=>{
    res.send("aditya.singh93014@gmail.com")
})

app.get('/login',(req , res)=>{
    res.send("<h1>please login at chai aur code</h1>")
})

app.get('/youtube',(req , res)=>{
    res.send("<h2>Chai aur code</h2>")
})

app.get('/github',(req , res)=>{
  res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})