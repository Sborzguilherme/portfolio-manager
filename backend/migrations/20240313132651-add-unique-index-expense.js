const collectionName = 'expenses';
const indexName = 'idx_expenses_unique';
module.exports = {
  async up(db, _client) {
    await db
      .collection(collectionName)
      .createIndex(
        { date: 1, description: 1, value: 1 },
        { unique: true, name: indexName },
      );
  },

  async down(db, _client) {
    await db.collection(collectionName).dropIndex(indexName);
  },
};
