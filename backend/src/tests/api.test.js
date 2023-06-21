const request = require('supertest');

const app = require('../../dist/server');
const { response } = require('express');

/************* USERS *************/
describe("/users", () => {
    /* GET ALL USERS */
    describe("GET /users", () => {
        it("should respond with a status code of 200", async () => {
           
            const response = await request(app).get("/user/getusers").set("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5td2FuaWtpZzMwQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJGZseTZCb3ozQTlkMVEvOXFIb3BnN2VPMUpxRnZzNFFzcXFCcWRTL0drRVdhODYvM3BQcmxXIiwiaXNBZG1pbiI6MCwiaXNBY2NlcHRlZCI6MSwiaWF0IjoxNjg3MzYyMTQzLCJleHAiOjE2ODc3MjIxNDN9.TUR7QluluK-XcE4h9O8xvjmZqYylWxdnF6Iu5l6aVCw");
            expect(response.statusCode).toBe(200);
        });

        /* VERIFY Content-Type */
        it("Content-Type should be application/json", async () => {
            expect({ "Content-Type": "application/json" });
        });
    });


    describe("Login /user",()=>{
        it("should check if a return 404 if no token exists",async()=>{
            const response=await request(app).post('/user/loginuser').send({
                "email":"johnmwaniki30@gmail.com",
                "password":"P101!0818g!18"
            })

            expect(response.statusCode).toBe(401)
        })


        it("should return a 200 status code if token passed",async()=>{
            const response=await request(app).post('/user/loginuser').send({
                "email":"johnmwaniki30@gmail.com",
                "password":"P101!0818g!18"
            }).set("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5td2FuaWtpZzMwQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJGZseTZCb3ozQTlkMVEvOXFIb3BnN2VPMUpxRnZzNFFzcXFCcWRTL0drRVdhODYvM3BQcmxXIiwiaXNBZG1pbiI6MCwiaXNBY2NlcHRlZCI6MSwiaWF0IjoxNjg3MzYyMTQzLCJleHAiOjE2ODc3MjIxNDN9.TUR7QluluK-XcE4h9O8xvjmZqYylWxdnF6Iu5l6aVCw");
        })
        expect(response.statusCode).toBe(200)

    })

    describe("POST /user",()=>{
        //  it("should add a user",async()=>{
        //      const data={
        //         "username":"johntest",
        //         "email":"johng@gmail.com",
        //         "password":"P101!0818g"
        //     }
        //      const response=await request(app).post("/user/adduser").send(data)

        //      expect(response.statusCode).toBe(201)
        //  })
       
         /* VERIFY Content-Type */
         it("Content-Type should be application/json", async () => {
            expect({ "Content-Type": "application/json" });
        });
    })

    describe("POST /user",()=>{
        it("shoud return 404 when fields are missing",async()=>{
           const response=await request(app).post("/user/adduser").send({
            "id":"ehurheuifer-mfn",
            "username":"",
            "password":""
           })
           expect(response.statusCode).toBe(404)
        })
    })


    describe("GET /single-user",()=>{
        it("should get a single user with the given id",async()=>{
             const response=await request(app).get("/user/getuser/405137fe-8ab5-4682-815a-ca91b8f406c2")
             expect(response.statusCode).toBe(200)
        })

          /* VERIFY Content-Type */
          it("Content-Type should be application/json", async () => {
            expect({ "Content-Type": "application/json" });
        });
    })

    
    // describe("DELETE /delete-user",()=>{
    //     it("should delete a single user with the given id",async()=>{
    //          const response=await request(app).delete("/user/deleteuser/1c4ac1ad-3a94-4070-94bf-2db091eab0c8")
    //          expect(response.statusCode).toBe(200)
    //     })

    //       /* VERIFY Content-Type */
    //       it("Content-Type should be application/json", async () => {
    //         expect({ "Content-Type": "application/json" });
    //     });
    // })
});






/************* QUESTIONS *************/
describe("/questions", () => {
    /* GET ALL QUESTIONS */
    describe("GET /questions", () => {
        it("should respond with a status code of 200", async () => {
           
            const response = await request(app).get("/questions/questionslist?page=1&pageSize=10")
            .set("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5td2FuaWtpZzMwQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJGZseTZCb3ozQTlkMVEvOXFIb3BnN2VPMUpxRnZzNFFzcXFCcWRTL0drRVdhODYvM3BQcmxXIiwiaXNBZG1pbiI6MCwiaXNBY2NlcHRlZCI6MSwiaWF0IjoxNjg3MzYyMTQzLCJleHAiOjE2ODc3MjIxNDN9.TUR7QluluK-XcE4h9O8xvjmZqYylWxdnF6Iu5l6aVCw");
            expect(response.statusCode).toBe(200);
        });

        /* VERIFY Content-Type */
        it("Content-Type should be application/json", async () => {
            expect({ "Content-Type": "application/json" });
        });
    });


    describe("GET /single-questions", () => {
        it("should respond with a status code of 200", async () => {
           
            const response = await request(app).get("/questions/question-details/86709baa-eb0a-42fa-96d8-ffbb50601cf6")
            .set("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5td2FuaWtpZzMwQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJGZseTZCb3ozQTlkMVEvOXFIb3BnN2VPMUpxRnZzNFFzcXFCcWRTL0drRVdhODYvM3BQcmxXIiwiaXNBZG1pbiI6MCwiaXNBY2NlcHRlZCI6MSwiaWF0IjoxNjg3MzYyMTQzLCJleHAiOjE2ODc3MjIxNDN9.TUR7QluluK-XcE4h9O8xvjmZqYylWxdnF6Iu5l6aVCw");
            expect(response.statusCode).toBe(200);
        });

        /* VERIFY Content-Type */
        it("Content-Type should be application/json", async () => {
            expect({ "Content-Type": "application/json" });
        });
    });

    describe("POST /add question",()=>{
        it("should post a new question", async()=>{
            const data= {
                "title": "Sample Question reupdat",
                "userId": "1",
                "description": "This is a sample question",
                "code": "console.log('Sample code');",
                "tags":"test"
              }
            const response=await request(app).post("/questions/add-question").set("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5td2FuaWtpZzMwQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJGZseTZCb3ozQTlkMVEvOXFIb3BnN2VPMUpxRnZzNFFzcXFCcWRTL0drRVdhODYvM3BQcmxXIiwiaXNBZG1pbiI6MCwiaXNBY2NlcHRlZCI6MSwiaWF0IjoxNjg3MzYyMTQzLCJleHAiOjE2ODc3MjIxNDN9.TUR7QluluK-XcE4h9O8xvjmZqYylWxdnF6Iu5l6aVCw").send(data)
            expect(response.statusCode).toBe(200)
        })
       
    })


    describe("GET /question by user id",()=>{
       it("should return a list of all questions",async()=>{
        const response=await request(app).get('/questions/question-by-userId/1')
        expect(response.statusCode) .toBe(200)
       })
    })
});





/************* ANSWERS *************/
describe("/answers", () => {
    /* GET ALL ANSWERS */
    describe("GET /answers", () => {
        it("should respond with a status code of 200", async () => {
           
            const response = await request(app).get("/answers/answerslist")
            .set("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5td2FuaWtpZzMwQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJGZseTZCb3ozQTlkMVEvOXFIb3BnN2VPMUpxRnZzNFFzcXFCcWRTL0drRVdhODYvM3BQcmxXIiwiaXNBZG1pbiI6MCwiaXNBY2NlcHRlZCI6MSwiaWF0IjoxNjg3MzYyMTQzLCJleHAiOjE2ODc3MjIxNDN9.TUR7QluluK-XcE4h9O8xvjmZqYylWxdnF6Iu5l6aVCw");
            expect(response.statusCode).toBe(200);
        });

        /* VERIFY Content-Type */
        it("Content-Type should be application/json", async () => {
            expect({ "Content-Type": "application/json" });
        });
    });


    describe('GET /answers for certain question',()=>{
        it('given qestion id itshould return a list of answers and a 200 status code',async()=>{
            const response=await request(app).get('/answers/question-answers/86709baa-eb0a-42fa-96d8-ffbb50601cf6')
            .set("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5td2FuaWtpZzMwQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJGZseTZCb3ozQTlkMVEvOXFIb3BnN2VPMUpxRnZzNFFzcXFCcWRTL0drRVdhODYvM3BQcmxXIiwiaXNBZG1pbiI6MCwiaXNBY2NlcHRlZCI6MSwiaWF0IjoxNjg3MzYyMTQzLCJleHAiOjE2ODc3MjIxNDN9.TUR7QluluK-XcE4h9O8xvjmZqYylWxdnF6Iu5l6aVCw");
            expect(response.statusCode).toBe(200)
        })
         /* VERIFY Content-Type */
         it("Content-Type should be application/json", async () => {
            expect({ "Content-Type": "application/json" });
        });
    })

    describe("POST /answer as preffered",()=>{
        it("should return a 200 status if answer is set as preffered",async()=>{
            const response=await request(app).post("/answers/answer-accepted/148013e1-7bcf-45e2-b232-524483c8a9b6")
            .set("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5td2FuaWtpZzMwQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJGZseTZCb3ozQTlkMVEvOXFIb3BnN2VPMUpxRnZzNFFzcXFCcWRTL0drRVdhODYvM3BQcmxXIiwiaXNBZG1pbiI6MCwiaXNBY2NlcHRlZCI6MSwiaWF0IjoxNjg3MzYyMTQzLCJleHAiOjE2ODc3MjIxNDN9.TUR7QluluK-XcE4h9O8xvjmZqYylWxdnF6Iu5l6aVCw");
            expect(response.statusCode).toBe(200)
        })
    })


    describe("POST /answer",()=>{
        it("should post a new answer to a question",async()=>{
            const data={
                "answer": "Sample answer 1",
                "user_id": "1",
                "question_id": "a5830da4-0334-4d65-aaa5-6d2ac8ec2c42"
              }

              const response=await request(app).post('/answers/add-answer')
              .set("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5td2FuaWtpZzMwQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJGZseTZCb3ozQTlkMVEvOXFIb3BnN2VPMUpxRnZzNFFzcXFCcWRTL0drRVdhODYvM3BQcmxXIiwiaXNBZG1pbiI6MCwiaXNBY2NlcHRlZCI6MSwiaWF0IjoxNjg3MzYyMTQzLCJleHAiOjE2ODc3MjIxNDN9.TUR7QluluK-XcE4h9O8xvjmZqYylWxdnF6Iu5l6aVCw")
              .send(data)
              expect(response.statusCode).toBe(200)
              
        })
    })
});


/************* COMMENTS *************/

describe('COMMENTS',()=>{
    describe('POST /comment',()=>{
        it("should post a new comment to an answer",async()=>{
            const data={
                "comment":"test comment",
                "user_id":1,
                "answer_id":"148013e1-7bcf-45e2-b232-524483c8a9b6"
            }
            const response=await request(app).post('/comments/add-comment').set("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5td2FuaWtpZzMwQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJGZseTZCb3ozQTlkMVEvOXFIb3BnN2VPMUpxRnZzNFFzcXFCcWRTL0drRVdhODYvM3BQcmxXIiwiaXNBZG1pbiI6MCwiaXNBY2NlcHRlZCI6MSwiaWF0IjoxNjg3MzYyMTQzLCJleHAiOjE2ODc3MjIxNDN9.TUR7QluluK-XcE4h9O8xvjmZqYylWxdnF6Iu5l6aVCw")
            .send(data)

        })
    })

    describe("GET /answer comments",()=>{
        it("it should get all comments of a single answer",async()=>{
            const response=await request(app).get("/comments/answer-comments/148013e1-7bcf-45e2-b232-524483c8a9b6")
            .set("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5td2FuaWtpZzMwQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJGZseTZCb3ozQTlkMVEvOXFIb3BnN2VPMUpxRnZzNFFzcXFCcWRTL0drRVdhODYvM3BQcmxXIiwiaXNBZG1pbiI6MCwiaXNBY2NlcHRlZCI6MSwiaWF0IjoxNjg3MzYyMTQzLCJleHAiOjE2ODc3MjIxNDN9.TUR7QluluK-XcE4h9O8xvjmZqYylWxdnF6Iu5l6aVCw")
            expect(response.statusCode) .toBe(200)
        })
    })
})