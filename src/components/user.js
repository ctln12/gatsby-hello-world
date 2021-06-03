import React from "react"
import { user, avatar, description, username, excerpt } from "./layout.module.css"

export default function User(props) {
  return(
    <div className={user}>
      <img src={props.avatar} className={avatar} alt="" />
      <div className={description}>
        <h2 className={username}>{props.username}</h2>
        <p className={excerpt}>{props.excerpt}</p>
      </div>
    </div>
  )
}
