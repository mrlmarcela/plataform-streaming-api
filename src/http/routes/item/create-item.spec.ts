describe("Create item", () => {
  it("POST to /item should return 201", async () => {
    const body = {
      title: "Jornal Nacional",
      description: "Edição do dia 20/05/2025",
      category: "Notícias",
      url: "https://www.youtube.com/watch?v=HTtYGnpbfis",
    };

    const response = await fetch("http://localhost:3000/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    expect(response.status).toBe(201);
  });
});
