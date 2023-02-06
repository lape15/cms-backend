import request from "supertest";
import routes from "../app";

let token = "";
const req = {
  firstName: "Lape",
  lastName: "Akin",
  email: "nuru@gmail.com",
  password: "snoopilngirl",
};

beforeAll(async () => {
  console.log("connect");
});

describe("Test user sign up", () => {
  it("Creates new user with unique email", async () => {
    const res = await request(routes)
      .post("/signup")
      .expect("Content-Type", /json/)
      .send(req);
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Ok");
  });

  it("Doesnt create user if email is empty", async () => {
    req.email = "";
    const res = await request(routes)
      .post("signup")
      .expect("Content-Type", /json/)
      .send(req);
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toBe("Oh no! its crazy");
  });
});
