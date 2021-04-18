const request = require('supertest');
const port = 3005;

describe("/api/scores", () => {
  it("Sends get request successfully", (data) => {
    request(`localhost:${port}`).get("/api/scores").expect(200, data);
  });
  it("returns correct data..", (done) => {
    request(`localhost:${port}`)
      .get("/api/scores")
      .send()
      .expect((res) => {
        res.body = !null;
      })
      .expect(200, done);
  });
});

