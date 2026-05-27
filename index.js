require('dotenv').config()
const express = require("express")
const app = express()
const port = 3000


const gitData = {
  "login": "Blackfinite",
  "id": 118347150,
  "node_id": "U_kgDOBw3Vjg",
  "avatar_url": "https://avatars.githubusercontent.com/u/118347150?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Blackfinite",
  "html_url": "https://github.com/Blackfinite",
  "followers_url": "https://api.github.com/users/Blackfinite/followers",
  "following_url": "https://api.github.com/users/Blackfinite/following{/other_user}",
  "gists_url": "https://api.github.com/users/Blackfinite/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Blackfinite/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Blackfinite/subscriptions",
  "organizations_url": "https://api.github.com/users/Blackfinite/orgs",
  "repos_url": "https://api.github.com/users/Blackfinite/repos",
  "events_url": "https://api.github.com/users/Blackfinite/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Blackfinite/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Chandra Shekhar Bhatt",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 13,
  "public_gists": 0,
  "followers": 3,
  "following": 3,
  "created_at": "2022-11-16T09:15:34Z",
  "updated_at": "2026-05-27T03:04:02Z"
}
app.get('/',(req,res)=>{
    res.send("hello World")
})


app.get('/home',(req,res)=>{
    res.send("Hello this is the home")
})

app.get('/login',(req,res)=>{
    res.send("<h1>Please Do Login</h1>")
})

app.get('/github',(req,res)=>{
    res.json(gitData)
})
app.listen(process.env.PORT,()=>{
    console.log(`Example app listening on the port ${process.env.PORT}`)
})