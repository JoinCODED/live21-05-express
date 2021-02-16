const app = require("../app");
const request = require("supertest");

beforeAll(async (done) => {
  done();
});

describe("Sample Test", () => {
  it("should test that true === true", () => {
    expect(true).toBe(true);
  });
});

describe("Endpoinths", () => {
  it("should get a cute hajer", async () => {
    const res = await request(app).get("/cute/hajer");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("animal");
    expect(res.body.animal).toEqual("cute hajer");
  });

  it("should create a band", async () => {
    const res = await request(app).post("/band").send({
      name: "hajer-badger",
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("slug");
    expect(res.body.slug).toEqual("hajer-badger");

    expect(res.body).toHaveProperty("fans");
    expect(res.body.fans).toEqual(0);
  });

  it("should upload an image", async () => {
    const res = await request(app)
      .post("/upload")
      .field("newFileName", "something")
      .attach("image", "./test/Jungle.jpg");

    console.log(res.body);

    expect(res.body).toHaveProperty("url");
    expect(res.body.url.indexOf("/media/something.jpg") !== -1);
  });
});

afterAll(async (done) => {
  done();
});
