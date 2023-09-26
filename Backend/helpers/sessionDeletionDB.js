const cron = require('node-cron');
const db = require('../config/database');

function startAutomatedTask() {
  // Harmonogram codziennie 23:59
  cron.schedule('59 23 * * *', async () => {
    try {
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 1); // po orzetestowaniu zmienić 1 na 7
    
      await db.query('DELETE FROM user_sessions WHERE expiration_time < $1', [sevenDaysAgo]);
    
      console.log('Usunięto przestarzałe rekordy.');
    } catch (error) {
      console.error('Wystąpił błąd podczas usuwania rekordów:', error);
    }
  });
}

module.exports = {
  start: startAutomatedTask
};