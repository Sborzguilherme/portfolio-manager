const collectionName = 'expenses';
module.exports = {
  async up(db, _client) {
    const collections = (await db.listCollections().toArray()).map(
      (r) => r.name,
    );

    if (!collections.includes(collectionName)) {
      await db.createCollection(collectionName);
    }
  },

  async down(db, _client) {
    await db.collection(collectionName).drop();
  },
};
