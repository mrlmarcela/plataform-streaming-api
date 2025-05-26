describe("Update playlist", () => {
  it("should rename a playlist and update its items", async () => {
    const createPlaylistRes = await fetch("http://localhost:3000/playlists", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "Playlist de Teste" }),
    });

    
    const playlist = await createPlaylistRes.json();
    expect(createPlaylistRes.status).toBe(201);

    const item1 = await fetch("http://localhost:3000/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "Vídeo A",
        description: "Descrição A",
        category: "Filmes",
        url: "https://example.com/video-a",
      }),
    });

    const item2 = await fetch("http://localhost:3000/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "Vídeo B",
        description: "Descrição B",
        category: "Filmes",
        url: "https://example.com/video-b",
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
          name: "Playlist Atualizada",
          addItemIds: [createdItem1.id, createdItem2.id],
        }),
      }
    );

    const updatedPlaylist = await updateRes.json();

    expect(updateRes.status).toBe(200);
    expect(updatedPlaylist.name).toBe("Playlist Atualizada");
    expect(updatedPlaylist.items.length).toBeGreaterThanOrEqual(2);
    expect(updatedPlaylist.items.map((i: any) => i.id)).toEqual(
      expect.arrayContaining([createdItem1.id, createdItem2.id])
    );
  });
});
