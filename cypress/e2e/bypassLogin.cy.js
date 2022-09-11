describe('login without UI', () => {
    it('should be able to login', () => {
    cy.request({
        url: 'https://dashboard.focaldata.dev',
        method: 'POST',
        body: {
            user: {emailAddress: "florincucos93@gmail.com", password: "Parolabuna0",
            accessToken : "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlEwSTBOell6UkRSRVJEQXhOa05HUWpnMlJFTXhNREF5UkRNd00wSTRSREkxUlRJeVJEaEZRdyJ9.eyJodHRwczovL2dyYXBocWwuZm9jYWxkYXRhLmNvbS9zY29wZXMiOiJyZWFkOmN1cnJlbnRfdXNlciIsImlzcyI6Imh0dHBzOi8vZm9jYWxkYXRhLmV1LmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw2MmJmOTc5ZjIxZGEwNTE2ODg4MThlMzgiLCJhdWQiOiJodHRwczovL2ZvY2FsZGF0YS5ldS5hdXRoMC5jb20vYXBpL3YyLyIsImlhdCI6MTY2MjQ2NjA0OSwiZXhwIjoxNjYyNTUyNDQ5LCJhenAiOiJackZkZ3pWRHFoc2w0QlN4SmRFU0RmcjZPaUF5WUdEQSIsInNjb3BlIjoicmVhZDpjdXJyZW50X3VzZXIgdXBkYXRlOmN1cnJlbnRfdXNlcl9tZXRhZGF0YSBkZWxldGU6Y3VycmVudF91c2VyX21ldGFkYXRhIGNyZWF0ZTpjdXJyZW50X3VzZXJfbWV0YWRhdGEgY3JlYXRlOmN1cnJlbnRfdXNlcl9kZXZpY2VfY3JlZGVudGlhbHMgZGVsZXRlOmN1cnJlbnRfdXNlcl9kZXZpY2VfY3JlZGVudGlhbHMgdXBkYXRlOmN1cnJlbnRfdXNlcl9pZGVudGl0aWVzIG9mZmxpbmVfYWNjZXNzIiwiZ3R5IjoicGFzc3dvcmQifQ.Jl9S00OwWv0SDWGi83ppBEab4vwI8C2rgkwvSW7MT6Vca_4P_5m7fbmuvOmMYN5wr1iiz1NBbHVH_34ixlnMNZKDVySKb13-ou2D_YXKEl-SEqsYLAhGni6Gn5x7C5CGhkTm54NR47Nx3r-mJmUE00mJbVQcQsV30e7bb2vLrlykJF5AU3RguwetSu4BajuZgZ0Az93I_Rkxt58ALrNZej_f8-8Zzuz49flXwTH6qgUMsOn-Pff8x_SkFdJSr2gV4Z8Bx0WvkPOKeIFemKccmsdk0D6K9vGf3vaX43tpc8aSIypn6G2nvHpMMmFibx42I-SLDookqhNcsTg6dWYw-g"}
            }
        }).its('body')
        .then(res => localStorage.setItem('access_token', res.accessToken));
        cy.visit('/')
        
    })
    
})
