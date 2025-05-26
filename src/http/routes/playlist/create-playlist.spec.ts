describe("Create playlist", () => {
  it("POST to /playlist should return 201", async () => {
    const body = {
      name: "My Playlist",
    };

    const response = await fetch("http://localhost:3000/playlists", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    expect(response.status).toBe(201);
  });
});
