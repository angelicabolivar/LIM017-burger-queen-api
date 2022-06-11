exports.port = process.argv[2] || process.env.PORT || 8080;
exports.secret = process.env.JWT_SECRET || 'esta-es-la-api-burger-queen';
exports.adminEmail = process.env.ADMIN_EMAIL || 'admin@localhost';
exports.adminPassword = process.env.ADMIN_PASSWORD || 'changeme';
exports.dbUrl = process.env.DB_URL || 'localhost';
exports.dbUser = process.env.DB_USER || 'postgres';
exports.dbPassword = process.env.DB_PASSWORD || '960831blackpink';
exports.dbName = process.env.DB_NAME || 'APIBQ';
