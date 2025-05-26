describe("Update playlist", () => {
  it("should rename a playlist and update its items", async () => {
    const createPlaylistRes = await fetch("http://localhost:3000/playlists", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "Músicas" }),
    });

    
    const playlist = await createPlaylistRes.json();
    expect(createPlaylistRes.status).toBe(201);

    const item1 = await fetch("http://localhost:3000/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "Ed Sheeran - Shape of You",
        description: "Música do Ed Sheeran",
        category: "Música",
        url: "https://www.youtube.com/watch?v=JGwWNGJdvx8",
      }),
    });

    const item2 = await fetch("http://localhost:3000/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "Maroon 5 - Girls Like You ft. Cardi B (Official Music Video)",
        description: "Girls Like You is out now.",
        category: "Música",
        url: "https://www.youtube.com/watch?v=aJOTlE1K90k",
      }),
    });

    const createdItem1 = await item1.json();
    const createdItem2 = await item2.json();

    expect(item1.status).toBe(201);
    expect(item2.status).toBe(201);

    const updateRes = await fetch(
      `http://localhost:3000/playlists/${playlist.id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Músicas Atualizadas",
          addItemIds: [createdItem1.id, createdItem2.id],
        }),
      }
    );

    const updatedPlaylist = await updateRes.json();

    expect(updateRes.status).toBe(200);
    expect(updatedPlaylist.name).toBe("Músicas Atualizadas");
    expect(updatedPlaylist.items.length).toBeGreaterThanOrEqual(2);
    expect(updatedPlaylist.items.map((i: any) => i.id)).toEqual(
      expect.arrayContaining([createdItem1.id, createdItem2.id])
    );
  });
});
