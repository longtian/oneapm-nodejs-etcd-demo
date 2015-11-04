/**
 * OneAPM agent configuration.
 *
 * See lib/config.defaults.js in the agent distribution for a more complete
 * description of configuration variables and their potential values.
 */
exports.config = {
  /**
   * Array of application names.
   */
  app_name: ['etcd-demo'],
  /**
   * Your OneAPM license key.
   */
  license_key: 'UVUCVRRfFec7f1xcTVwWDl81b0hKB1VSAks0a2cIAk8AAk0Ab4f5UlMBSwVXTgdQ',
  logging: {
    /**
     * Level at which to log. 'trace' is most useful to OneAPM when diagnosing
     * issues with the agent, 'info' and higher will impose the least overhead on
     * production applications.
     */
    level: 'info',
    filepath: 'stdout'
  },
  transaction_events: {
    enabled: true
  }
};
