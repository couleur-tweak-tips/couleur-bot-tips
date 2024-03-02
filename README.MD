# [![](https://cdn.discordapp.com/avatars/817516152996757506/635cdae0369964b4e0115378cefefe5f.webp?size=32)](https://cdn.discordapp.com/avatars/817516152996757506/635cdae0369964b4e0115378cefefe5f.webp?size=4096) couleur bot tips



Discord bot to automate support tickets:

1. is triggered for each new post in [`#🙋⠂support`](https://discord.com/channels/774315187183288411/1020030329790148678)
2. parses the post title, original message (OP) and parses images with [OCR using tesseract.js](https://tesseract.projectnaptha.com/)
3. runs a single string containing the aforementioned text through [`/support-patterns.json`](https://github.com/couleur-tweak-tips/couleur-bot-tips/blob/main/support-patterns.json)
4. the response field is send if pattern matches

You are [welcome to contribute](https://github.com/firstcontributions/first-contributions) new patterns of known problems.