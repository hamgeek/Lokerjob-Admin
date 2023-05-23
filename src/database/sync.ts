const DB = require('./db');
const User = require('../models/modelUsers');

// Sinkronisasi model dengan database
const syncdb = (res: any) => {
      DB.sync()
      .then(() => {
      res.send('Tabel berhasil disinkronisasi');
      // Lakukan operasi dengan model di sini
      })
      .catch((error: any) => {
      res.send('Gagal menyinkronkan tabel:', error);
      })
};

export default syncdb;