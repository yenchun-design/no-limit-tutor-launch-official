
/**
 * Secure logger utility that conditionally logs based on environment
 */
class Logger {
  private isProduction = import.meta.env.PROD;

  log(...args: any[]) {
    if (!this.isProduction) {
      console.log(...args);
    }
  }

  error(...args: any[]) {
    if (!this.isProduction) {
      console.error(...args);
    } else {
      // In production, log only essential error information
      console.error('An error occurred');
    }
  }

  warn(...args: any[]) {
    if (!this.isProduction) {
      console.warn(...args);
    }
  }

  info(...args: any[]) {
    if (!this.isProduction) {
      console.info(...args);
    }
  }
}

export const logger = new Logger();
