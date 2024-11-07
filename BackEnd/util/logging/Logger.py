import logging
import util.logging.log_config as config
import os


class ExcludeLoggersFilter(logging.Filter):
    def filter(self, record):
        for name in config.IGNORE_LOGGERS:
            if name in record.name:
                return False
            return True


if not os.path.isdir("./logs"):
    os.mkdir("./logs")

logger = logging.getLogger()

logging_handler = logging.FileHandler(
    os.path.join(config.LOG_OUTPUT_DIR, config.LOG_FILE_NAME),
    mode="a",
    encoding="utf-8",
)
logging_handler.setFormatter(config.LOG_FORMATTER)
logging_handler.addFilter(ExcludeLoggersFilter())
logger.addHandler(logging_handler)

logging.captureWarnings(True)
logger.setLevel(config.LOGGING_LEVEL)
