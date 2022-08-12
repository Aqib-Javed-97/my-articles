#npm install
#npm start


Create form for signup page:
    api: http://localhost:3000/api/auth/signup (post) (body:: {name: string, email: string, password:string})
    Response:   200: {userId: string}
                401: {message: string}


Create form for signin page:
api: http://localhost:3000/api/auth/signin (post) (body:: {email: string, password:string})
Response:   200: {userId: string}
            401: {message: string}


Dashboard Page:
    api: http://localhost:3000/api/articles/:page (get)
    Response:   200: {total: number, page: number, articles: [{ name: string, updatedDate: string, id: string}]}
    List of articles (5 articles)

    1. Name of article (last updated: Date) View[Button]
    ...


    <<Prev Next>>


Article View Page:
    api: http://localhost:3000/api/article/:id (get)
    Response:   200: { name: string, updatedDate: string, id: string, content: string}
    Name of article
        Date Update

    Article content



1. Create signup page. write your own css and not copy css of sign in page
2. Use token from redux to change routing
3. Handle signin form value and submit it
4. hit api and watch response
5. set token received in response and navigate to /dashboard