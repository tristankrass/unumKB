# KB (Knowledde base) for enterprise


---
Users of the app should be able to find, create, read and update the knowledge base.

Currently deployed [here](https://unumkb.netlify.com)

###
This KB is specifically tailored for [Unum](https://en.wikipedia.org/wiki/Unum) an S&P 500 company that sells insurance.
# To develop the app 🚀
 ```
npm i
npm run develop
 ```
 Or you can use yarn instead.
 ```
yarn
yarn start
 ```

 To Build the production ready site:

 Make sure your also have **.env.production** file
  ```
npm run build
npm run serve
 ```
Or you can use yarn.
 ```
yarn build
yarn serve
 ```

## Tech stack

### Backend
 - Contentful CMS

### Front end
- Gatsby


---

### Todos

- [ ] Make the header responsive
- [x] Finish Documentation page layout
- [ ] Add styles to landing page
- [ ] Add Algolia Search
- [ ] Make the contact form responsive
- [ ] Style the searchBox component
- [x] Style the form
- [x] Add Gatsby offline plugin
- [x]  🚀 Deploy to  Netlify
- [x]  Add webhooks to build every time new content comes live